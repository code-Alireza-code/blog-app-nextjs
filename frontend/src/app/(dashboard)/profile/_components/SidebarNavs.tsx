import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUsers } from "react-icons/fi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdCategory, MdDashboard, MdEditDocument } from "react-icons/md";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <MdDashboard className="size-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <MdEditDocument className="size-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <IoMdChatbubbles className="size-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <MdCategory className="size-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <FiUsers className="size-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-3",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
