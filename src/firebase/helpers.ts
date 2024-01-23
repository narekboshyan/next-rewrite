import { QuerySnapshot } from '@firebase/firestore';

export const ResponseCollector = <T>(querySnapshot: QuerySnapshot): T[] => {
  return querySnapshot.docs.reduce((acc, doc) => {
    const row: T = {
      id: doc.id,
      ...(doc.data() as Omit<T, 'id'>),
    } as T;

    acc.push(row);

    return acc;
  }, [] as T[]);
};
