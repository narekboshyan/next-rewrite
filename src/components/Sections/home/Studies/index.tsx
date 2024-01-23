'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { STUDIES_SECTION_DESCRIPTION, STUDIES_SLIDER_DATA } from '@/assets/constants/pages/home';

import styles from './Studies.module.scss';

const HomeStudies = () => {
  return (
    <div className={styles.studies}>
      <h2 className={styles.studies_title}>Case studies</h2>
      <p className={styles.studies_description}>{STUDIES_SECTION_DESCRIPTION}</p>
      <div className={styles.studies_list}>
        <Swiper
          spaceBetween={17}
          slidesPerView={1}
          loop={true}
          speed={1000}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            620: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}>
          {STUDIES_SLIDER_DATA.map(el => (
            <SwiperSlide key={el.id} className={styles.studies_list_item}>
              <p>{el.title}</p>
              <Image src={el.imageSrc} alt={el.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeStudies;
