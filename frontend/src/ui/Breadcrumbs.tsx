import Link from "next/link";

type Props = {
  breadcrumbs: {
    label: string;
    href: string;
    active?: boolean;
  }[];
};

function BreadCrumbs({ breadcrumbs }: Props) {
  return (
    <nav className="mb-8 block" aria-label="BreadCrumb">
      <ol className="flex text-lg gap-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={`flex gap-x-2 ${
              breadcrumb.active ? "text-secondary-800" : "text-secondary-400"
            }`}
          >
            {breadcrumb.active ? (
              <div>{breadcrumb.label}</div>
            ) : (
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="inline-block">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
