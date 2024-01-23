import { app, db } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDoc, getDocs, doc, query, orderBy } from 'firebase/firestore';
import { COLLECTIONS } from '../collections';
import { ResponseCollector } from '../helpers';
import { Blog } from '../models/blog.model';

const storage = getStorage(app, 'gs://beeweb-214120.appspot.com');

export const uploadToFirebase = async (file: any, id: string) => {
  const date = (Date.now() + 14400000).toString();
  const storageRef = ref(storage, `blog/${id}/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(snapshot => {
      return getDownloadURL(snapshot.ref).then(downloadURL => ({
        success: 1,
        file: {
          url: downloadURL,
          name: snapshot.ref.name,
          fullPath: snapshot.metadata.fullPath,
          contentType: snapshot.metadata.contentType,
          size: file.size,
        },
      }));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getBlogs = async () => {
  try {
    const blogsQuery = query(COLLECTIONS.blogs, orderBy('createdAt', 'desc'));

    return await getDocs(blogsQuery).then(res => ResponseCollector<Blog>(res));
  } catch (err) {
    console.warn(err);
  }
};

export const getBlogById = async (id: string): Promise<Blog | undefined> => {
  try {
    const blogRef = doc(db, 'blogs', id);

    return await getDoc(blogRef).then(res => {
      const data = res.data() as any;
      console.log({ res });
      return {
        ...data,
        updatedAt: new Date(Number(data.updatedAt)),
        createdAt: new Date(Number(data.createdAt)),
      };
    });
  } catch (err) {
    console.warn('Err', err);
  }
};
