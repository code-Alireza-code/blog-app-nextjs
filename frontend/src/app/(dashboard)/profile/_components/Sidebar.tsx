"use client";

import { useLogoutUser } from "@/hooks/useAuth";
import Link from "next/link";
import { MdHome, MdOutlineLogout } from "react-icons/md";
import SideBarNavs from "./SidebarNavs";

function Sidebar() {
  const { logout } = useLogoutUser();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b border-b-secondary-200 pb-2 mb-6"
      >
        <MdHome className="size-6" />
        <span>نکست بلاگ</span>
      </Link>
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          onClick={handleLogout}
          className="flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-red-500 py-3 px-4"
        >
          <MdOutlineLogout className="size-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
