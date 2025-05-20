import Cards from "./_components/Cards";
import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";

async function ProfilePage() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <Cards />
      </Suspense>
      <h2 className="text-xl mb-4 text-secondary-600">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default ProfilePage;
