import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

async function BlogPage() {
  return (
    <div>
      <div className="mb-4 text-secondary-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        explicabo fuga nam debitis nemo architecto magni. Quaerat accusantium
        modi dolor. Vero suscipit soluta cumque impedit reiciendis hic ab
        dolorem ut.
      </div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
