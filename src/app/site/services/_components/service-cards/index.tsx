'use client'
import styles from './index.module.scss'
import Link from 'next/link';
import { SERVICE_CARDS } from '@/app/site/services/_utils/constants';
import ScrollAnimation from '@/components/ScrollAnimation';

const ServiceCards = () => {
  return <div className={styles.cards}>
    {SERVICE_CARDS.map(({ title, text, Icon }) => (
      <ScrollAnimation key={title} threshold={0.5}>
        <Link href={'/'} className={styles.card}>
          <Icon />
          <h5>{title}</h5>
          <span>{text}</span>
        </Link>
      </ScrollAnimation>
    )
    )}
  </div>
}

export default ServiceCards