import { TESTIMONIALS_DATA } from '@/assets/constants/pages/home';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.scss';

const HomeTestimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2 className={styles.testimonials_title}>Testimonials</h2>
      <div className={styles.testimonials_list}>
        {TESTIMONIALS_DATA.map(el => (
          <TestimonialCard key={el.id} testimonial={el} />
        ))}
      </div>
      <p className={styles.testimonials_view_more}>view more</p>
    </div>
  );
};

export default HomeTestimonials;
