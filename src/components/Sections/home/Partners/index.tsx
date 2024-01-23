'use client';

import Image from 'next/image';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MapAnimation from '@/assets/animations/map_animation.json';
import { PARTNERS_DATA_EXAMPLE } from '@/assets/constants/pages/home';

import styles from './Partners.module.scss';

const HomePartners = () => {
  return (
    <div className={styles.partners}>
      <h2 className={styles.partners_title}>100+ businesses like yours around the globe</h2>
      <div className={styles.partners_map_img_wrapper}>
        <Lottie className={styles.animation} animationData={MapAnimation} loop={true} />
      </div>
      <div className={styles.partners_images}>
        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            620: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}>
          {PARTNERS_DATA_EXAMPLE.map(el => (
            <SwiperSlide key={el.id}>
              <div className={styles.partners_images_item}>
                <Image src={el.image} alt={el.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePartners;
