import { useGetUser, useLogoutUser } from "@/hooks/useAuth";
import Avatar from "./Avatar";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import NavLink from "./NavLink";
import DarkModeToggler from "./DarkModeToggler";

function HeaderButtons() {
  const { isAdmin, user } = useGetUser();
  const { logout } = useLogoutUser();

  return (
    <>
      {user ? (
        isAdmin ? (
          <Link href="/profile" className="flex gap-x-3 items-center">
            <Avatar
              src={user.avatarUrl || "/images/avatar.png"}
              alt={user.name}
            />
            <span>{user.name}</span>
          </Link>
        ) : (
          <div className="flex gap-x-2 items-center">
            <Avatar
              src={user.avatarUrl || "/images/avatar.png"}
              alt={user.name}
            />
            <span>{user.name}</span>
          </div>
        )
      ) : (
        <NavLink path="/signin">ورود</NavLink>
      )}
      {user && (
        <button
          onClick={() => logout()}
          className="text-red-600 hover:text-red-500"
        >
          <MdLogout className="size-5" />
        </button>
      )}
      <DarkModeToggler />
    </>
  );
}

export default HeaderButtons;
