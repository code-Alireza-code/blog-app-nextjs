type PostAuthorType = {
  avatar?: string;
  avatarUrl?: string;
  name: string;
  _id: string;
};

type CategoryType = {
  _id: string;
  title: string;
  slug: string;
};

type User = PostAuthorType;

type Status = 0 | 1 | 2;

type AnswerType = {
  content: string;
  createdAt: string;
  openToComment: false;
  status: Status;
  user: User;
  _id: string;
};

type CommentType = {
  answers?: AnswerType[];
  content: string;
  createdAt: string;
  openToComment: true;
  status: Status;
  user: User;
  _id: string;
};

type RelatedPostType = Pick<
  PostType,
  | "author"
  | "category"
  | "coverImage"
  | "coverImageUrl"
  | "id"
  | "slug"
  | "title"
  | "_id"
>;

export type PostType = {
  author: PostAuthorType;
  briefText: string;
  category: CategoryType;
  comments: [] | CommentType[];
  commentsCount: number;
  coverImage?: string;
  coverImageUrl?: string;
  createdAt: string;
  id: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likesCount: number;
  readingTime: number;
  related: [] | RelatedPostType[];
  slug: string;
  tags: [] | string[];
  text: string;
  title: string;
  type: "free";
  updatedAt: string;
  __v: number;
  _id: string;
};
