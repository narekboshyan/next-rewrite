import Header from '@/components/Sections/home/Header';
import Partners from '@/components/Sections/home/Partners';
import Testimonials from '@/components/Sections/home/Testimonials';
import About from '@/components/Sections/home/About';
import Studies from '@/components/Sections/home/Studies';
import IfYouAre from '@/components/Sections/home/IfYouAre';
import GetInTouchForm from '@/components/forms/GetinTouchForm';

import styles from './page.module.scss';

export default async function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Header />
        <Testimonials />
        <Partners />
        <About />
        <Studies />
        <IfYouAre />
        <GetInTouchForm />
      </div>
    </div>
  );
}
