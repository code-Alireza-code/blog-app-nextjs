import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export function EditButton({ categoryId }: { categoryId: string }) {
  return (
    <Link href={`/profile/categories/${categoryId}/edit`}>
      <ButtonIcon variant="outline">
        <MdEdit />
      </ButtonIcon>
    </Link>
  );
}

type DeleteButtonProps = {
  categoryId: string;
  categoryTitle: string;
};

export function DeleteButton({ categoryId, categoryTitle }: DeleteButtonProps) {
  return (
    <ButtonIcon variant="outline">
      <IoMdTrash className="text-error" />
    </ButtonIcon>
  );
}

export function CreateCategory() {
  return (
    <Link
      href="/profile/categories/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium transition-colors hover:bg-primary-700 duration-300 ease-out"
    >
      <span className="hidden md:block">ایجاد دسته بندی</span>
      <FaPlus className="size-5" />
    </Link>
  );
}
