'use client';
import React, { useState } from 'react';
import { FC, HTMLProps, ReactNode, memo } from 'react';
import styles from './Input.module.scss';
import HideIcon from '@/assets/icons/hide.svg';
import ShowIcon from '@/assets/icons/show.svg';

interface Props extends HTMLProps<HTMLInputElement> {
  RightElement?: ReactNode;
  wrapperClassName?: string;
  error?: string;
}

const Input: FC<Props> = ({ RightElement, wrapperClassName, error, type, ...inputProps }) => {
  const [inputType, setInputType] = useState(type);
  return (
    <div>
      <div
        className={[styles.input, wrapperClassName, RightElement && styles.withElement].join(' ')}>
        <input {...inputProps} type={inputType} />
        {RightElement ? (
          RightElement
        ) : type === 'password' ? (
          <div className={styles.passwordIcon}>
            {inputType === 'password' ? (
              <HideIcon onClick={() => setInputType('text')} />
            ) : (
              <ShowIcon onClick={() => setInputType('password')} />
            )}
          </div>
        ) : null}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default memo(Input);
