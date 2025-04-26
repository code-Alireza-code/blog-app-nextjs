import { PostType } from "@/types/Post";
import Image from "next/image";
import { notFound } from "next/navigation";

type SinglePostProps = {
  params: Promise<{ postSlug: string }>;
};

async function SinglePost({ params }: SinglePostProps) {
  const { postSlug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${postSlug}`
  );

  const { data } = await res.json();
  const { post }: { post: PostType } = data || {};

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
        {/* {post.related.length > 0 && <RelatedPost />}
        <PostComments /> */}
      </div>
    </div>
  );
}

export default SinglePost;
