import { collection } from 'firebase/firestore';
import { db } from '@/firebase/index';
import { CollectionReference } from '@firebase/firestore';

export enum CollectionsEnum {
  BLOGS = 'blogs',
}

export const COLLECTIONS: { [key in CollectionsEnum]: CollectionReference } = {
  [CollectionsEnum.BLOGS]: collection(db, CollectionsEnum.BLOGS),
};
