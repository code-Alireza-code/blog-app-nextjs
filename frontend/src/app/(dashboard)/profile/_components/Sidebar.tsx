"use client";

import { useLogoutUser } from "@/hooks/useAuth";
import Link from "next/link";
import { MdClose, MdHome, MdOutlineLogout } from "react-icons/md";
import SideBarNavs from "./SidebarNavs";
import ButtonIcon from "@/ui/ButtonIcon";

type Props = { onClose: () => void };

function Sidebar({ onClose }: Props) {
  const { logout } = useLogoutUser();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="overflow-y-auto flex flex-col p-6 h-screen pt-10 lg:pt-8">
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 pb-2"
        >
          <MdHome className="size-6" />
          <span>نکست بلاگ</span>
          <ButtonIcon
            className="block lg:hidden border-none"
            onClick={onClose}
            variant="outline"
          >
            <MdClose />
          </ButtonIcon>
        </Link>
      </div>
      {/* sidebar content */}
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
