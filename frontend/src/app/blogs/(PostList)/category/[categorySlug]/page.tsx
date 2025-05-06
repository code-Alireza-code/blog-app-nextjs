import { getPostsBySlug } from "@/services/postService";
import PostList from "app/blogs/_components/PostList";

type Props = {
  params: Promise<{ categorySlug: string }>;
};

async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;

  const { posts } = await getPostsBySlug(categorySlug);

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
