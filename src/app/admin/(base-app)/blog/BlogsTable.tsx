'use client';

import { Table } from '@/components/Table/Table';
import { FC, memo, useCallback } from 'react';
import styles from './Blogs.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import PreviewIcon from '@/assets/icons/preview.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import EditIcon from '@/assets/icons/edit.svg';
import PublishedIcon from '@/assets/icons/done.svg';
import UnpublishedIcon from '@/assets/icons/not-done.svg';

interface Props {
  blogs?: Array<any>;
}

const BlogTables: FC<Props> = ({ blogs }) => {
  console.log({ blogs });
  const keyExtractor = useCallback((item: any) => item.createdAt.toString(), []);

  const onDelete = useCallback(() => {}, []);

  const renderItem = useCallback(
    (item: any) => {
      return (
        <div className={styles.table_row}>
          <Image
            src={item.cover}
            width={89}
            height={72}
            alt="image"
            className={styles.table_row_image}
          />
          <p className={styles.table_row_title}>{item.title}</p>
          <span className={styles.divider} />
          <span
            className={[
              styles.table_row_status,
              item.published ? styles.published : styles.unpublished,
            ].join(' ')}>
            {item.published ? <PublishedIcon /> : <UnpublishedIcon />}
            published
          </span>
          <span className={styles.divider} />
          <Link href={`/blog/${item.id}`} className={styles.table_row_icon}>
            <PreviewIcon />
          </Link>
          <span className={styles.divider} />
          <div className={styles.table_row_icon} onClick={onDelete}>
            <TrashIcon />
          </div>
          <span className={styles.divider} />
          <Link href={`/blog/${item.id}`} className={styles.table_row_icon}>
            <EditIcon />
          </Link>
        </div>
      );
    },
    [onDelete],
  );

  return <Table data={blogs || []} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default memo(BlogTables);
