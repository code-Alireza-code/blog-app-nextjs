"use client";

import { useGetUser } from "@/hooks/useAuth";
import NavLink from "./NavLink";
import HeaderButtons from "./HeaderButtons";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { isLoadingUser } = useGetUser();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoadingUser ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li className="flex gap-x-4 items-center">
            <HeaderButtons />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
