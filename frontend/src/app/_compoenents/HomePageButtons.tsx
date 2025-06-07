"use client";

import { useGetUser } from "@/hooks/useAuth";
import Button from "@/ui/Button";
import Fallback from "@/ui/Fallback";
import Link from "next/link";

function HomePageButtons() {
  const { isAdmin, isLoadingUser, user } = useGetUser();

  if (isLoadingUser) return <Fallback />;
  return (
    <div className="flex justify-center gap-x-8 w-full mt-10">
      <Button variant="outline">
        <Link href="/blogs">مطالعه بلاگ ها</Link>
      </Button>
      {user && isAdmin && (
        <Button variant="primary">
          <Link href="/profile">مدیریت بلاگ ها</Link>
        </Button>
      )}
    </div>
  );
}

export default HomePageButtons;
