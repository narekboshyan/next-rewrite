'use client';

import Microphone from '@/assets/icons/microphone.svg';
import Stop from '@/assets/icons/stop.svg';
import Play from '@/assets/icons/play.svg';
import styles from './styles.module.scss';
import { memo, useCallback } from 'react';
import { useRecording } from '@/hooks/useRecording';
import Voice from '@/assets/icons/voice.svg';
import Button from '@/components/Button/Button';

const VoiceRecording = () => {
  const {
    startRecording,
    recorderState,
    saveRecording,
    playAudio,
    pauseAudio,
    playing,
    cancelRecording,
  } = useRecording();
  const Icon = recorderState.audio ? Play : !recorderState.mediaRecorder ? Microphone : Stop;

  const handlePress = useCallback(() => {
    if (playing) {
      return pauseAudio();
    }

    if (recorderState.audio) {
      return playAudio();
    }
    if (!recorderState.mediaRecorder) {
      return startRecording();
    } else {
      return saveRecording();
    }
  }, [
    pauseAudio,
    playAudio,
    playing,
    recorderState.audio,
    recorderState.mediaRecorder,
    saveRecording,
    startRecording,
  ]);

  return (
    <div className="zoom_container">
      <span className="zoom_animation" />

      {recorderState.audio && !playing ? (
        <div className={styles.items_container}>
          <Voice />
        </div>
      ) : playing || recorderState.mediaRecorder ? (
        <div className={styles.items_container}>
          <Voice className={styles.voice_1} />
          <Voice className={styles.voice_2} />
          <Voice className={styles.voice_3} />
        </div>
      ) : null}

      <Icon className={[styles.microphone, styles.voice_icon].join(' ')} onClick={handlePress} />
      {recorderState.audio && !playing && (
        <Button onClick={cancelRecording} className={styles.cancel_recording}>
          Cancel
        </Button>
      )}
    </div>
  );
};

export default memo(VoiceRecording);
