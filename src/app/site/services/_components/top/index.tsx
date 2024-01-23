'use client'
import styles from './index.module.scss';
import IllustratorImage from '@/assets/images/services/illustrator.png';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';

const Top = () => {
  return <ScrollAnimation threshold={0.5}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.content}>
      <span className={styles.content_text}>
        With over 7 years of technological experience and a full engagement in delivering software services,
        BeeWeb has grown into a team of professionals capable of handling clients’ business challenges by providing
        software development services such as Web and Mobile application development, MVP and SaaS development,
        UX/UI design, QA & Testing. Our team has proven experience in developing custom software solutions for
        individuals, startuppers, and established companies all around the world.
      </span>
        </div>
        <Image src={IllustratorImage} alt={'Services'} aria-hidden={true}></Image>
      </div>
    </div>
  </ScrollAnimation>;
};

export default Top;