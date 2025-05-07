"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value;

    // =>add to url
    const newParams = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <FaMagnifyingGlass className="size-4 text-secondary-400" />
      </button>
    </form>
  );
}

export default Search;
