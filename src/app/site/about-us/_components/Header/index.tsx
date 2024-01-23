'use client';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { ABOUT_HEADER_TEXT } from '../../_utils/constants';
import HeaderImage from '@/assets/images/about/about-header-img.png';
import HeaderLineSvg from '@/assets/images/about/header_line.svg';
import LinesAnimation from '@/assets/animations/lines_anmation.json';

import styles from './Header.module.scss';

const AboutHeader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_content}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <h3>Discover our community</h3>
            {ABOUT_HEADER_TEXT}
          </div>
          <div className={styles.header_right}>
            <Image src={HeaderImage} alt="image" />
            <HeaderLineSvg />
          </div>
        </div>
        <div className={styles.main_content_animation_wrapper}>
          <div></div>
          <Lottie
            className={styles.main_content_animation_wrapper_animation}
            animationData={LinesAnimation}
            loop={true}
          />
        </div>
      </div>
      <div className={styles.main_bg}></div>
    </div>
  );
};

export default AboutHeader;
