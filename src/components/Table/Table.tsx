import { ReactNode } from 'react';
import styles from './Table.module.scss';

type TableItem = { Id: string | number };

interface Props<T> {
  data: Array<T>;
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
}

export const Table = <T extends TableItem>({ data, renderItem, keyExtractor }: Props<T>) => {
  return (
    <ul className={styles.table}>
      {data.map(item => (
        <li className={styles.table_item} key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
