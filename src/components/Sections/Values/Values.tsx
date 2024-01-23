'use client';

import { FC, memo, useCallback, useRef, useState } from 'react';
import { ContentFullContainer } from '@/components/ContentFullContainer';
import { CAREERS_OUR_VALUES_TEXT } from '@/app/site/careers/_utils/constants';
import Value1 from '@/assets/images/values/Value1.svg';
import Value2 from '@/assets/images/values/Value2.svg';
import Value3 from '@/assets/images/values/Value3.svg';
import Value4 from '@/assets/images/values/Value4.svg';
import Value5 from '@/assets/images/values/Value5.svg';
import Value6 from '@/assets/images/values/Value6.svg';
import styles from './styles.module.scss';

const values = [
  {
    icon: <Value1 className={styles.icon} />,
    text: 'Collaborate and share your knowledge',
    moreInfo: {
      title: 'Collaborate and share your knowledge',
      desc: 'One of our team’s values is the willingness to share knowledge and experience. We organize a lot of brainstorming meetings, knowledge sharing and team-building activities to add to both the team’s and personal growth.',
    },
  },
  {
    icon: <Value2 className={styles.icon} />,
    text: 'Communicate effectively for better results',
    moreInfo: {
      title: 'Communicate effectively for better results',
      desc: 'We create a confident culture, where employees help and give clear feedback to each other.',
    },
  },
  {
    icon: <Value3 className={styles.icon} />,
    text: 'Be curious and learn by doing',
    moreInfo: {
      title: 'Be curious and learn by doing',
      desc: 'It’s no secret that curiosity makes learning more effective and enjoyable. The important thing is not to stop questioning. Not only do our employees  ask questions, but also actively seek out the answers.',
    },
  },
  {
    icon: <Value4 className={styles.icon} />,
    text: 'Concentrate on delivery and drive results',
    moreInfo: {
      title: 'Concentrate on delivery and drive results',
      desc: 'We prioritize the deadlines of the projects and generate the desired results on time.',
    },
  },
  {
    icon: <Value5 className={styles.icon} />,
    text: 'Win through simplicity',
    moreInfo: {
      title: 'Win through simplicity',
      desc: 'It’s of great importance to confront challenges with a positive attitude. You can take new projects as the interesting challenges in return of make them difficult.',
    },
  },
  {
    icon: <Value6 className={styles.icon} />,
    text: 'Spread optimism and be a team player',
    moreInfo: {
      title: 'Spread optimism and be a team player',
      desc: 'Have you ever been a part of a highly motivated team with high morale?\nJoin us. We love to work with optimistic team players, who are able to make a positive team by helping each other feel happy and engaged.',
    },
  },
];

interface IValues {
  withText?: boolean;
}

export const Values: FC<IValues> = ({ withText = true }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [position, setPosition] = useState<Record<number, 'relative' | 'absolute'>>({
    0: 'relative',
  });
  const timeout = useRef<NodeJS.Timeout | null>(null);
  // const handlePress = useCallback((e: MouseEvent<HTMLDivElement>, index: number) => {
  //   setItemWidth(`${e.currentTarget.offsetWidth}px`);
  //   setOpenedIndex(prev => (prev !== -1 ? -1 : index));
  // }, []);

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex === index) {
        setSelectedIndex(-1);
        timeout.current = setTimeout(() => {
          setPosition({ [selectedIndex]: 'relative' });
        }, 1000);
      } else {
        setPosition({ [index]: 'absolute' });
        setSelectedIndex(index);
      }

      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    },
    [selectedIndex],
  );
  console.log({ position });
  return (
    <section className={styles.our_values}>
      <ContentFullContainer>
        {withText && (
          <>
            <h2>OUR VALUES</h2>
            <h3>{CAREERS_OUR_VALUES_TEXT}</h3>
          </>
        )}

        <div className={styles.values}>
          {values.map((value, index) => (
            <div
              key={`value_${index}`}
              className={[styles.values_item, index === selectedIndex ? styles.selected : ''].join(
                ' ',
              )}
              style={{ position: position && position[index] }}
              onClick={() => handleSelect(index)}>
              <div className={styles.short_info}>
                {value.icon}
                <span className={styles.text}>{value.text}</span>
                <div className={styles.dots}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <span
                      key={`dot_${i}`}
                      className={[styles.dots_item, i === index ? styles.dots_active : ' '].join(
                        ' ',
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.more_info}>
                <h3>{value.moreInfo.title}</h3>
                <p>{value.moreInfo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentFullContainer>
    </section>
  );
};

export default memo(Values);
