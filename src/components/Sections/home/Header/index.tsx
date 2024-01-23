'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Button from '@/components/Button/Button';
import { HEADER_SLIDE_DATA } from '@/assets/constants/pages/home';

import styles from './Header.module.scss';

const HomeHeader = () => {
  return (
    <div className={styles.header}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        {HEADER_SLIDE_DATA.map(el => (
          <SwiperSlide key={el.id}>
            <div className={styles.header_content}>
              <div className={styles.header_content_texts}>
                <h1>Slay with </h1>
                <p>{el.text}</p>
                <Button>Learn more</Button>
              </div>

              {el.image}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeader;
