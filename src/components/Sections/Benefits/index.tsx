import React, { memo } from 'react';
import styles from './styles.module.scss';
import Benefit1 from '@/assets/images/benefits/Benefit1.svg';
import Benefit2 from '@/assets/images/benefits/Benefit2.svg';
import Benefit3 from '@/assets/images/benefits/Benefit3.svg';
import Benefit4 from '@/assets/images/benefits/Benefit4.svg';
import Benefit5 from '@/assets/images/benefits/Benefit5.svg';
import Benefit6 from '@/assets/images/benefits/Benefit6.svg';
import Benefit7 from '@/assets/images/benefits/Benefit7.svg';
import Benefit8 from '@/assets/images/benefits/Benefit8.svg';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import Dots from '@/assets/icons/dots_outlined.svg';

const benefits = [
  { icon: <Benefit1 />, text: 'Hybrid working \n process' },
  { icon: <Benefit2 />, text: 'paid day offs' },
  { icon: <Benefit3 />, text: 'medical \n insurance' },
  { icon: <Benefit4 />, text: 'gym package' },
  { icon: <Benefit5 />, text: 'English course' },
  { icon: <Benefit6 />, text: 'Salary review' },
  { icon: <Benefit7 />, text: 'Referral \n bonus' },
  { icon: <Benefit8 />, text: 'Bonuses' },
];

const Benefits = () => {
  return (
    <section className={styles.our_benefits}>
      <ContentFullContainer>
        <h2>OUR BENEFITS</h2>
        <h3>
          BeeWebians are our biggest and most important asset: that’s why we support and care for
          our colleagues
        </h3>
        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <div key={benefit.text} className={styles.benefits_item}>
              <Dots className={styles.dots} />
              <p className={styles.text}>{benefit.text.toUpperCase()}</p>
              {benefit.icon}
            </div>
          ))}
        </div>
      </ContentFullContainer>
    </section>
  );
};

export default memo(Benefits);
