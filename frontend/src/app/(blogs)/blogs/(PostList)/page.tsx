import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import { getAllPosts } from "@/services/postService";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

type Props = {
  searchParams: Promise<{ search: string }>;
};

async function BlogPage({ searchParams }: Props) {
  const search = await searchParams;
  const searchQuery = queryString.stringify(search);

  const cookieStore = await cookies();
  const options = setCookieOnRequest(cookieStore);
  const { posts, totalPages } = await getAllPosts(searchQuery, options);

  return (
    <>
      {search.search && (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد !"
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{search.search}&qout;</span>
        </p>
      )}
      {posts.length && <PostList posts={posts} />}
      <div className="flex items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

export default BlogPage;
