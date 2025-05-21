import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

type Props = {
  searchParams: Promise<{ search: string }>;
};

async function Page({ searchParams }: Props) {
  const query = queryString.stringify(await searchParams);
  console.log(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />} key={query}>
        <PostsTable postQuery={query} />
      </Suspense>
    </div>
  );
}

export default Page;
