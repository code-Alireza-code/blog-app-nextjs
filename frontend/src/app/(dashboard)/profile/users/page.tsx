import Fallback from "@/ui/Fallback";
import { Suspense } from "react";
import UsersTable from "./_/components/UsersTable";

function UsersPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست کاربران</h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <UsersTable />
      </Suspense>
      {/* pagination ? */}
    </div>
  );
}

export default UsersPage;
