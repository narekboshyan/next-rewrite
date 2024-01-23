import { ContentFullContainer } from '@/components/ContentFullContainer';
import styles from './LetsTalk.module.scss';
import CTO from '/public/CTO.png';
import TalkProcess from '@/assets/images/lets.svg';
import Image from 'next/image';
import Link from 'next/link';
import VoiceRecording from '@/components/Sections/VoiceRecording';

const LetsTalk = () => {
  return (
    <div className={styles.lets_talk}>
      <ContentFullContainer className={styles.content}>
        <div className="zoom_container">
          <span className="zoom_animation" />
          <Image src={CTO} alt="cto" width={176} className={styles.cto_image} />
          <Link href={'https://calendly.com/karenhov/30min'} className={styles.cto_book_button}>
            Book a meeting with CTO
          </Link>
        </div>

        <p className={styles.text}>{'For a successful\ncollaboration'}</p>
        <TalkProcess className={styles.icon} />
        <div>
          <p className={styles.text}>{'Get an estimate'}</p>
          <p className={styles.helper_text}>
            {
              'Describe your project by providing a written description, recording a voice message, or attaching a relevant file, your choice.'
            }
          </p>
        </div>
        <VoiceRecording />
      </ContentFullContainer>
    </div>
  );
};

export default LetsTalk;
