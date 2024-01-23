import { ContentFullContainer } from '@/components/ContentFullContainer';
import { memo } from 'react';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';

const jobs = [
  {
    id: 1,
    desc: 'Python Developer',
  },
  {
    id: 2,
    desc: 'Full Stack Developer',
  },
  {
    id: 3,
    desc: 'Angular Developer',
  },
  {
    id: 4,
    desc: 'Angular 2+ Developer',
  },
  {
    id: 5,
    desc: 'React Native Developer',
  },
];

const JobOpportunities = () => {
  return (
    <section>
      <ContentFullContainer className={styles.jobs}>
        <h2>JOB OPPORTUNITIES</h2>

        <div className={styles.jobs_carousel}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobs_carousel_item}>
              <h3>{job.desc}</h3>
              <Button>Apply now</Button>
            </div>
          ))}
        </div>
      </ContentFullContainer>
    </section>
  );
};

export default memo(JobOpportunities);
