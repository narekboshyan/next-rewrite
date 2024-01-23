'use client';

import { ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

type CarouselItem = { id: string | number };

interface Props<T> {
  data: Array<T>;
  visibleItemsCount?: number;
  renderItem: (item: T) => ReactNode;
}

export const Carousel = <T extends CarouselItem>({
  data,
  visibleItemsCount = 8,
  renderItem,
}: Props<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (carouselRef.current) {
      const clientWidth = carouselRef.current.clientWidth;
      const itemWidth = (clientWidth - 7 * 18) / visibleItemsCount;
      setItemWidth(itemWidth);
    }
  }, [visibleItemsCount]);

  useLayoutEffect(() => {
    window?.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, [handleResize]);

  return (
    <div ref={carouselRef} className={styles.carousel}>
      {data.map(item => (
        <div key={item.id} style={{ width: itemWidth }}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
