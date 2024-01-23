import styles from './SinglePost.module.scss';
import dynamic from 'next/dynamic';
import { OutputData } from '@editorjs/editorjs';
import { getBlogById, getBlogs } from '@/firebase/services/blogs.service';
import { Suspense } from 'react';
import Input from '@/components/Input/Input';

const Editor = dynamic(() => import('@/components/Editor/Editor'), {
  ssr: false,
});

export default async function SingleBlog({ params }: { params: { id: string } }) {
  const blog: any = await getBlogById(params.id);

  return (
    <main className={styles.single_post}>
      <h1 className={styles.title}>{blog?.title}</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.input_container}>
            <p className={styles.helper_text}>Blog title</p>
            <Input />
          </div>
          <div className={styles.input_container}>
            <p className={styles.helper_text}>Cover Image</p>
            <input className={styles.attach_input} id="coverImage"></input>
            <label className={styles.cover_image} htmlFor="coverImage"></label>
          </div>
        </div>
        <div className={styles.editor}>
          <Suspense fallback={null}>
            <Editor holder="editorjs" id={params.id} data={blog as OutputData | undefined} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
