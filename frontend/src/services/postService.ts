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

export async function getAllPosts(q = "", options = {}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?${q}`,
    options
  );
  const { data } = await res.json();

  const { posts, totalPages }: { posts: PostType[]; totalPages: number } =
    data || {};

  return { posts, totalPages };
}

export async function likePostApi(postId: string) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId: string) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function getPostsBySlug(
  categorySlug: string,
  q = "",
  options = {}
) {
  return http
    .get(`/post/list?categorySlug=${categorySlug}&${q}`, options)
    .then(({ data }) => data.data);
}

export async function createPostApi(formData: FormData) {
  return http.post("/post/create", formData).then(({ data }) => data.data);
}

export async function editPostApi({
  formData,
  postId,
}: {
  postId: string;
  formData: FormData;
}) {
  return http
    .patch(`/post/update/${postId}`, formData)
    .then(({ data }) => data.data);
}

export async function getPostByIdApi(postId: string) {
  return http.get(`post/${postId}`).then(({ data }) => data.data);
}

export async function deletePostApi(postId: string, options = {}) {
  return http
    .delete(`/post/remove/${postId}`, options)
    .then(({ data }) => data.data);
}
