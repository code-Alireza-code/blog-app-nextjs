import { RelatedPost as RelatedPostType } from "@/types/Post";
import CoverImage from "./CoverImage";
import Author from "./Author";

type RelatedPostProps = {
  posts: RelatedPostType[];
};

function RelatedPost({ posts }: RelatedPostProps) {
  return (
    <div className="mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <CoverImage {...post} />
            <div className="flex items-center justify-between">
              <p>{post.title}</p>
              <Author {...post.author} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPost;
