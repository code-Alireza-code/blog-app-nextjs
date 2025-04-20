import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkPropsType = {
  path: string;
  children: ReactNode;
};

function NavLink({ path, children }: NavLinkPropsType) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`block py hover:text-secondary-900 transition-all ease-in-out ${
        path === pathname && "text-primary-900"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
