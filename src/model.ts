export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface IExampleProps {
  id: number;
}

// Zapisać utility type, który ma wszystkie properties danego typu, ale z wartościami typu 'string'

// * Zapisać utility type, który ma wyłącznie properties typu 'string'
