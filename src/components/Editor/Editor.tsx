'use client';

import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import EditorJS, { API, BlockMutationEvent, OutputData } from '@editorjs/editorjs';
import { getEditorTools } from '@/assets/constants/Editor/editorTools';
import styles from './Editor.module.scss';

interface Props {
  data?: OutputData;
  onChange?: Function;
  holder?: string;
  id: string;
}

const Editor: FC<Props> = ({ data, holder, id }) => {
  const ref = useRef<EditorJS>();

  const onChange = useCallback(
    async (api: API, event: BlockMutationEvent | BlockMutationEvent[]) => {
      const data = await api.saver.save();
      console.log(data);
    },
    [],
  );

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: getEditorTools(id),
        // onReady: onReady,
        data,
        onChange: onChange,
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, holder, id, onChange]);

  return <div id={holder} className={styles.editor} />;
};

export default memo(Editor);
