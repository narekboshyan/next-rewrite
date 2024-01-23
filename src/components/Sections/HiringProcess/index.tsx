'use client';

import Lottie from 'lottie-react';
import { memo } from 'react';
import HiringProcessDesktop from '@/assets/animations/hiring_process.json';
import HiringProcessMobile from '@/assets/animations/hiring_process_mobile.json';
import { useWindowSize } from '@/hooks/useWindowSize';
import styles from './styles.module.scss';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import Dots from '@/assets/icons/dots_outlined.svg';
import Image from 'next/image';

const HiringProcess = () => {
  const { width } = useWindowSize();

  return (
    <section className={styles.hiring_process}>
      <ContentFullContainer className={styles.content}>
        <Dots className={styles.dots} stroke="#ffb300" />
        <div className={styles.hiring}>
          <div className={styles.hiring_info}>
            <h2>HIRING PROCESS</h2>
            <h3>
              BeeWebians are our biggest and most important asset: that’s why we support and care
              for our colleagues
            </h3>
          </div>
          <Lottie
            className={styles.animation}
            animationData={width > 1024 ? HiringProcessDesktop : HiringProcessMobile}
            loop={true}
          />
        </div>
      </ContentFullContainer>
    </section>
  );
};

export default memo(HiringProcess);
