export interface Blog {
  title: string;
  cover: string;
  blocks: Array<any>;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  id: string;
}
