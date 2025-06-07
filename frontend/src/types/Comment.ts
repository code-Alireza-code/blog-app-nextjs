type User = {
  _id: string;
  name: string;
  avatarUrl: null | string;
};

export enum Status {
  Rejected = 0,
  Pending = 1,
  Approved = 2,
}

type Answer = {
  content: {
    text: string;
  };
  user: User;
  post: string;
  status: Status;
  openToComment: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export interface CommentType {
  _id: string;
  user: User;
  post: string;
  content: {
    text: string;
  };
  status: Status;
  openToComment: boolean;
  answers: Answer[] | [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
