"use client";

import Select from "@/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortOptions = [
  {
    title: "تاریخ ایجاد (جدید ترین)",
    id: "latest",
  },
  {
    title: "تاریخ ایجاد (قدیمی ترین)",
    id: "earliest",
  },
  {
    title: "محبوبیت",
    id: "popular",
  },
  {
    title: "زمان مطالعه (نزولی)",
    id: "time_desc",
  },
  {
    title: "زمان مطالعه (صعودی)",
    id: "time_asc",
  },
];

function SortPost() {
  const [sort, setSort] = useState("latest");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const mergeSearchparams = (key: string, value: string) => {
    const allSearchParams = new URLSearchParams(searchParams);
    allSearchParams.set(key, value);

    return allSearchParams.toString();
  };

  return (
    <>
      <Select
        name="sort"
        options={sortOptions}
        className="text-sm py-2.5"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
          router.push(
            `${pathname}?${mergeSearchparams("sort", e.target.value)}`
          );
        }}
      />
    </>
  );
}

export default SortPost;
