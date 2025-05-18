"use client";

import Avatar from "@/ui/Avatar";

import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import { MdClose, MdMenu } from "react-icons/md";
import Drawer from "@/ui/Drawer";
import Sidebar from "./Sidebar";

function Header() {
  const { user, isLoadingUser } = useGetUser();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header
      className={`bg-secondary-0 ${isLoadingUser && "bg-opacity-30 blur-md"}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsDrawerOpen((prev) => !prev)}
        >
          {isDrawerOpen ? <MdClose className="bg-red-400" /> : <MdMenu />}
        </ButtonIcon>
        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام؛{user?.name}
        </span>
        <Link href="/profile">
          <Avatar
            src={user?.avatarUrl || "/images/avatar.png"}
            alt={user?.name || "user"}
          />
        </Link>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Sidebar onClose={() => setIsDrawerOpen(false)} />
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
