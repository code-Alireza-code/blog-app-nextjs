import Fallback from "@/ui/Fallback";
import { Suspense } from "react";
import CategoriesTable from "./_/components/CategoriesTable";
import { CreateCategory } from "./_/components/ActionButtons";

function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-secondary-700 mb-12 items-center ">
        <h1 className="font-bold text-xl">لیست دسته بندی ها</h1>
        <CreateCategory />
      </div>
      <Suspense fallback={<Fallback />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}

export default Page;
