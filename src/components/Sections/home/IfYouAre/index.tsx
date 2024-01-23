import Image from 'next/image';
import { IF_YOU_ARE_LIST } from '@/assets/constants/pages/home';

import styles from './IfYouAre.module.scss';

const HomeIfYouAre = () => {
  return (
    <div className={styles.if_you_are}>
      <h2 className={styles.if_you_are_title}>If you are ...</h2>
      <div className={styles.if_you_are_list}>
        {IF_YOU_ARE_LIST.map(el => (
          <div key={el.id} className={styles.if_you_are_list_item}>
            {el.text}
            <Image src={el.imageSrc} alt="UI" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeIfYouAre;
