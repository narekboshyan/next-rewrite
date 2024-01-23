import styles from './Blogs.module.scss';
import Link from 'next/link';
import { Blog } from '@/firebase/models/blog.model';
import BlogTables from './BlogsTable';
import AddIcon from '@/assets/icons/add.svg';
import { getBlogs } from '@/firebase/services/blogs.service';

export default async function Blog() {
  const blogs: any = await getBlogs();

  return (
    <div className={styles.blogs}>
      <Link className={styles.floating_button} href={'/blog/0'}>
        <AddIcon />
      </Link>
      <BlogTables blogs={blogs} />
    </div>
  );
}
