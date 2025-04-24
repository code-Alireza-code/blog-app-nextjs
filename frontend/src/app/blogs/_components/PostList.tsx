import { PostType } from "@/types/Post";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

async function PostList() {
  await new Promise((res) => setTimeout(res, 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  }: { data: { posts: PostType[] } } = await res.json();

  if (!posts.length) return null;

  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 md:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg "
          key={post._id}
        >
          <CoverImage {...post} />
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>
            {/* post author - reading time */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <FaRegClock className="size-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن :</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
