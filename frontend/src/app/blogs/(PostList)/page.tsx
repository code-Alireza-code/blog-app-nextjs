import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import { getAllPosts } from "@/services/postService";

async function BlogPage() {
  const cookieStore = await cookies();
  const options = setCookieOnRequest(cookieStore);
  const posts = await getAllPosts(options);

  return (
    <div>
      <div className="flex items-center justify-center">
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default BlogPage;
