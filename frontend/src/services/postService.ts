import { PostType } from "@/types/Post";
import http from "./httpService";

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );

  const { data } = await res.json();
  const { post }: { post: PostType } = data || {};

  return post;
}

export async function getAllPosts(options = {}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list`,
    options
  );
  const { data } = await res.json();

  const { posts }: { posts: PostType[] } = data || {};

  return posts;
}

export async function likePostApi(postId: string) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
