"use client";

import { generatePagination } from "@/utils/generatePagination";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

type PositionType = "first" | "last" | "middle" | "single";

export default function Pagination({ totalPages }: { totalPages: number }) {
  // const totalPages = Math.ceil(Number(length) / itemsPerPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: PositionType = "middle";
          if (allPages.length === 1) {
            position = "single";
          } else if (index === 0) {
            position = "first";
          } else if (index === allPages.length - 1) {
            position = "last";
          }
          if (page === "...") {
            position = "middle";
          }

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page as number)}
              page={page as number}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number;
  href: string;
  isActive: boolean;
  position: PositionType;
}) {
  const className = classNames(
    "flex h-10 w-10 items-center justify-center text-sm border border-secondary-400 text-secondary-400",
    {
      "rounded-r-md": position === "first" || position === "single",
      "rounded-l-md": position === "last" || position === "single",
      "z-10 bg-primary-900 !border-primary-900 text-white": isActive,
      "hover:bg-secondary-200": !isActive && position !== "middle",
      "text-secondary-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled: boolean;
}) {
  const className = classNames(
    "flex h-10 w-10 items-center justify-center rounded-md border border-secondary-400 text-secondary-400",
    {
      "pointer-events-none text-secondary-200 !border-secondary-200":
        isDisabled,
      "hover:bg-secondary-200": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <MdArrowLeft className="w-4" />
    ) : (
      <MdArrowRight className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
