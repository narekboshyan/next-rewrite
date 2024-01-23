import BeeWhoAreYou from '@/assets/images/bee_who_are_you.png';
import OurCulture from '@/assets/images/our_culture.png';
import styles from './Careers.module.scss';
import Image from 'next/image';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import Values from '@/components/Sections/Values/Values';
import Benefits from '@/components/Sections/Benefits';
import JobOpportunities from '@/components/Sections/JobOpportunities';
import HiringProcess from '@/components/Sections/HiringProcess';

const Careers = () => {
  return (
    <div className={styles.page}>
      <section className={styles.top}>
        <ContentFullContainer>
          <h1 className={styles.title}>{'Bring Everything \nYou Are'}</h1>
          <Image className={styles.image} src={BeeWhoAreYou} alt="bee_who_are_you" />
          <h3 className={styles.subtitle}>
            Working at BeeWeb goes far beyond an ordinary job. With us you have exciting new
            possibilities to follow your curiosity wherever it takes you.
          </h3>
        </ContentFullContainer>
      </section>
      <ContentFullContainer>
        <section className={styles.our_culture}>
          <div className={styles.image_container}>
            <Image className={styles.image} src={OurCulture} alt="our_culture" />
          </div>
          <h2>OUR CULTURE</h2>
          <div className={styles.content}>
            <h3>For each employee an individual approach -This is what we are led by </h3>
            <p>
              Our culture fosters individual talent, mutual trust and lifelong learning. We support
              our people so they can master their career journeys, go further, reach higher, and
              realize their true potential.
              <br />
              We go to great lengths to create an environment for new ideas and collaboration beyond
              borders. Do you share the same culture and values? Are you excited about the
              challenges we will offer you while we reach the best result together? If your answer
              is yes, then join us !
            </p>
          </div>
        </section>
      </ContentFullContainer>
      <Values />
      <Benefits />
      <HiringProcess />
      <JobOpportunities />
    </div>
  );
};

export default Careers;
