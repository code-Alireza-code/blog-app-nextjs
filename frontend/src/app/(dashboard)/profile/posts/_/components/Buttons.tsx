"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";
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
    <Link href={`/profile/post/${postId}/edit`}>
      <ButtonIcon onClick={handleEdit} variant="outline">
        <MdEdit />
      </ButtonIcon>
    </Link>
  );
}
