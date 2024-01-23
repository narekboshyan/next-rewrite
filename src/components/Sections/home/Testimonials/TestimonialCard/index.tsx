import { FC } from 'react';
import Image from 'next/image';
import ClutchImage from '@/assets/images/home/clutch.png';
import CountryImage from '@/assets/images/home/country.png';
import { TestimonialCardType } from '@/assets/constants/pages/home';

import styles from './TestimonialCard.module.scss';

interface ITestimonialCard {
  testimonial: TestimonialCardType;
}

const TestimonialCard: FC<ITestimonialCard> = ({ testimonial }) => {
  return (
    <div className={styles.testimonial_card}>
      <Image
        className={styles.testimonial_card_reviewer_img}
        alt="image"
        src={testimonial.imageSrc}
      />
      <div className={styles.testimonial_card_texts}>
        <div className={styles.testimonial_card_texts_reviewer}>
          <div className={styles.testimonial_card_texts_reviewer_info}>
            <div>
              <h3>{testimonial.reviewer}</h3>
              <Image alt="image" src={CountryImage} />
            </div>
            <p>{testimonial.position}</p>
          </div>
          <Image alt="image" src={ClutchImage} />
        </div>
        <p className={styles.testimonial_card_texts_review}>{testimonial.review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
