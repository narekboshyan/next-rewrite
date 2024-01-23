import { FC } from 'react';
import Image from 'next/image';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import { aboutInfoListType } from '../../_utils/constants';

import styles from './InfoCard.module.scss';

interface IAboutUsInfoCard {
  card: aboutInfoListType;
}

const AboutUsInfoCard: FC<IAboutUsInfoCard> = ({ card }) => {
  return (
    <ContentFullContainer>
      <div className={styles.card}>
        <div
          className={styles.card_image_wrapper}
          style={{ order: card.textAlign === 'left' ? 1 : 0 }}>
          <Image alt="image" src={card.image} />
          <div>
            <p
              className={
                card.textAlign === 'left'
                  ? styles.card_image_wrapper_left_text
                  : styles.card_image_wrapper_right_text
              }>
              {card.title}
            </p>
          </div>
        </div>
        <p className={styles.card_text}>{card.text}</p>
      </div>
    </ContentFullContainer>
  );
};

export default AboutUsInfoCard;
