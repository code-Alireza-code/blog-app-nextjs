import { getPostsBySlug } from "@/services/postService";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

type Props = {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ search: string }>;
};

async function CategoryPage({ params, searchParams }: Props) {
  const { categorySlug } = await params;
  const search = await searchParams;
  const searchQuery = queryString.stringify(search);

  const cookieStore = await cookies();
  const options = setCookieOnRequest(cookieStore);

  const { posts } = await getPostsBySlug(categorySlug, searchQuery, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد !
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default CategoryPage;
