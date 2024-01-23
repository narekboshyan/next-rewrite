import Header from './_components/Header';
import AboutUsInfoCard from './_components/InfoCard';
import Values from '@/components/Sections/Values/Values';
import { INFO_LIST } from './_utils/constants';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.main_content}>
        {INFO_LIST.map(card => (
          <AboutUsInfoCard key={card.id} card={card} />
        ))}

        <Values withText={false} />
      </div>
    </div>
  );
};

export default AboutUs;
