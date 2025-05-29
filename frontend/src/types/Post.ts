// Use interfaces for extensible object types
export interface PostAuthor {
  avatar?: string;
  avatarUrl?: string;
  name: string;
  _id: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
}

// Use enum for status
export enum Status {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

// Use boolean for openToComment
export interface Answer {
  content: string;
  createdAt: string;
  openToComment: boolean;
  status: Status;
  user: PostAuthor;
  _id: string;
}

export interface Comment {
  answers?: Answer[];
  content: { text: string };
  createdAt: string;
  openToComment: boolean;
  status: Status;
  user: PostAuthor;
  _id: string;
}

export type RelatedPost = Pick<
  Post,
  | "author"
  | "category"
  | "coverImage"
  | "coverImageUrl"
  | "id"
  | "slug"
  | "title"
  | "_id"
>;

export interface Post {
  author: PostAuthor;
  briefText: string;
  category: Category;
  comments: Comment[];
  commentsCount: number;
  coverImage: string;
  coverImageUrl: string;
  createdAt: string;
  id: string;
  isBookmarked: boolean;
  isLiked: boolean;
  likesCount: number;
  readingTime: number;
  related: RelatedPost[];
  slug: string;
  tags: string[];
  text: string;
  title: string;
  type: "free";
  updatedAt: string;
  __v: number;
  _id: string;
}
