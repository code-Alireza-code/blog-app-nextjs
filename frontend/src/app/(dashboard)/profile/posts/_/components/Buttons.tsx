"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";

type Props = {
  postId: string;
};

export function DeletePost({ postId }: Props) {
  const handleDelete = () => {
    console.log(postId);
  };
  return (
    <ButtonIcon onClick={handleDelete} variant="outline">
      <IoMdTrash className="text-error" />
    </ButtonIcon>
  );
}

export function EditPost({ postId }: Props) {
  const handleEdit = () => {
    console.log(postId);
  };
  return (
    <Link href={`/profile/posts/${postId}/edit`}>
      <ButtonIcon onClick={handleEdit} variant="outline">
        <MdEdit />
      </ButtonIcon>
    </Link>
  );
}

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium transition-colors hover:bg-primary-700 duration-300 ease-out"
    >
      <span className="hidden md:block">ایجاد پست</span>
      <FaPlus className="size-5" />
    </Link>
  );
}
