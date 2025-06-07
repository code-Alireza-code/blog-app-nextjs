import Fallback from "@/ui/Fallback";
import { Suspense } from "react";
import CommentsTable from "./_/components/CommentsTable";

function page() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-secondary-700 mb-12 items-center ">
        <h1 className="font-bold text-xl">لیست کامنت ها</h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
}

export default page;
