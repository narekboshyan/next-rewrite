import styles from './About.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_left}>
        <h2>Who we are</h2>
        <p>
          BeeWeb is a software development company with a decade of experience. We offer a range of
          outsourcing software development services, spiced up with AI, top-tier technologies and
          agile approaches. Our primary goal is to help businesses succeed through technology with a
          human touch. collaborating with us, you will benefit
        </p>
      </div>
      <div className={styles.about_right}>
        <h2>Our Goal</h2>
        <p>
          That’s why we focus on cutting-edge methodologies and superb quality. Transparency,
          commitment and satisfactory results are what we are led by, and this is proven by our
          long-lasting client relationships. By
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
