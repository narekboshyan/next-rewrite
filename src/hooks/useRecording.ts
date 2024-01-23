'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Recorder {
  recordingMinutes: number;
  recordingSeconds: number;
  initRecording: boolean;
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  audio: string | null;
}

type MediaRecorderEvent = { data: Blob };
type AudioTrack = MediaStreamTrack;
export type Interval = null | number | ReturnType<typeof setInterval>;

const initialState: Recorder = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false,
  mediaStream: null,
  mediaRecorder: null,
  audio: null,
};

export const useRecording = () => {
  const [recorderState, setRecorderState] = useState<Recorder>(initialState);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval: Interval = null;

    if (recorderState.initRecording) {
      recordingInterval = setInterval(() => {
        setRecorderState((prevState: Recorder) => {
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            typeof recordingInterval === 'number' && clearInterval(recordingInterval);
            return prevState;
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59)
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            };
          else if (prevState.recordingSeconds === 59)
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            };
          else return prevState;
        });
      }, 1000);
    } else {
      typeof recordingInterval === 'number' && clearInterval(recordingInterval);
    }

    return () => {
      typeof recordingInterval === 'number' && clearInterval(recordingInterval);
    };
  }, [recorderState.initRecording]);

  useEffect(() => {
    setRecorderState(prevState => {
      if (prevState.mediaStream)
        return {
          ...prevState,
          mediaRecorder: new MediaRecorder(prevState.mediaStream),
        };
      else return prevState;
    });
  }, [recorderState.mediaStream]);

  useEffect(() => {
    const recorder = recorderState.mediaRecorder;
    let chunks: Blob[] = [];

    if (recorder && recorder.state === 'inactive') {
      recorder.start();

      recorder.ondataavailable = (e: MediaRecorderEvent) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        chunks = [];

        setRecorderState((prevState: Recorder) => {
          if (prevState.mediaRecorder)
            return {
              ...initialState,
              audio: window.URL.createObjectURL(blob),
            };
          else return initialState;
        });
      };
    }

    return () => {
      if (recorder) recorder.stream.getAudioTracks().forEach((track: AudioTrack) => track.stop());
    };
  }, [recorderState.mediaRecorder]);

  const onEnd = useCallback(() => {
    setPlaying(false);
  }, []);

  useEffect(() => {
    ref.current.addEventListener('ended', onEnd);

    return () => {
      ref.current.removeEventListener('ended', onEnd);
    };
  }, [onEnd]);

  const startRecording = async () => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      setRecorderState(prevState => {
        return {
          ...prevState,
          initRecording: true,
          mediaStream: stream,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveRecording = () => {
    if ((recorderState.mediaRecorder as any).state !== 'inactive')
      (recorderState.mediaRecorder as any).stop();
  };

  const cancelRecording = () => {
    setRecorderState(initialState);
    ref.current.src = '';
  };

  const playAudio = () => {
    try {
      if (recorderState.audio) ref.current.src = recorderState.audio;

      ref.current.play();
      setPlaying(true);
    } catch (err) {
      console.warn(err);
    }
  };

  const pauseAudio = () => {
    try {
      ref.current.pause();
      setPlaying(false);
    } catch (err) {
      console.warn(err);
    }
  };

  return {
    recorderState,
    startRecording: () => startRecording(),
    cancelRecording,
    saveRecording: () => saveRecording(),
    playAudio,
    pauseAudio,
    playing,
  };
};
