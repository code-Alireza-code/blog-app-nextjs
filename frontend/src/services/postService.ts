import { PostType } from "@/types/Post";

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );

  const { data } = await res.json();
  const { post }: { post: PostType } = data || {};

  return post;
}
