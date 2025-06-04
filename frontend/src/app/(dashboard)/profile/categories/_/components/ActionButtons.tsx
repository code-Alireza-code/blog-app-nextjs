"use client";

import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useDeleteCategory } from "../../create/_/useDeleteCategory";

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
  const [open, setOpen] = useState(false);
  const { deleteCategory, isDeletingCategory } = useDeleteCategory();

  const handleDelete = async () => {
    await deleteCategory(categoryId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <IoMdTrash
          className="tex
        t-error"
        />
      </ButtonIcon>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title={`حذف دسته بندی "${categoryTitle}" مطمئن هستید ؟`}
      >
        <div className="flex items-center justify-between gap-x-4">
          <Button
            disabled={isDeletingCategory}
            variant="danger"
            className="grow"
            onClick={handleDelete}
          >
            بله,حذف شود
          </Button>
          <Button className="grow" onClick={() => setOpen(false)}>
            لغو
          </Button>
        </div>
      </Modal>
    </>
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
