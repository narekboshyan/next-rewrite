import Top from './_components/top';
import styles from './page.module.scss';
import ServiceCards from './_components/service-cards';
import Technologies from '@/app/site/services/_components/technologies';

const Services = () => {
  return <div className={styles.page}>
    <Top />
    <div className={styles.container}>
      <ServiceCards />
      <Technologies />
    </div>
  </div>;
};

export default Services;
