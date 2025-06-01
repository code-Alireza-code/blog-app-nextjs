import { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import SortPost from "../_components/comment/SortPost";

export const metadata: Metadata = {
  title: "بلاگ ها",
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary-700 mb-10 gap-8 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Search />
        <SortPost />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-600 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 text-secondary-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
