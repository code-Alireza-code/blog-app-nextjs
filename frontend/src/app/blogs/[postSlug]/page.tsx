import { getAllPosts, getPostBySlug } from "@/services/postService";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const post = await getPostBySlug((await params).postSlug);

  return {
    title: `${post.title}`,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

type SinglePostProps = {
  params: Promise<{ postSlug: string }>;
};

async function SinglePost({ params }: SinglePostProps) {
  const { postSlug } = await params;

  const post = await getPostBySlug(postSlug);

  if (!post) notFound();

  return (
    <div>
      <div className="text-secondary-600 max-w-screen-md mx-auto">
        <h1 className="text-secondary-700 text-2xl font-bold mb-8">
          {post.title}
        </h1>
        <p className="mb-4">{post.briefText}</p>
        <p className="mb-8">{post.text}</p>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
          <Image
            src={post.coverImageUrl}
            fill
            alt={post.title}
            className="object-cover object-center hover:scale-105 transition-all ease-out duration-300"
          />
        </div>
        {post.related.length > 0 && <RelatedPost posts={post.related} />}
        <PostComment post={post} />
      </div>
    </div>
  );
}

export default SinglePost;
