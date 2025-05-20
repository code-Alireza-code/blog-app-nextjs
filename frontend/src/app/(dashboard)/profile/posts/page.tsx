import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/Fallback";

function Page() {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <PostsTable />
      </Suspense>
    </div>
  );
}

export default Page;
