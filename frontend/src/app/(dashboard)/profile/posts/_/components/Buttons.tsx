"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import Button from "@/ui/Button";
import { useDeletePost } from "../../create/_/useDeletePost";
import { useRouter } from "next/navigation";

export function DeletePost({
  postId,
  postTitle,
}: {
  postId: string;
  postTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const { deletePost, isDeleting } = useDeletePost();
  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(postId, {
      onSuccess: () => {
        setOpen(false);
        router.refresh();
      },
      onError: () => {},
    });
  };

  return (
    <>
      <ButtonIcon onClick={() => setOpen(true)} variant="outline">
        <IoMdTrash className="text-error" />
      </ButtonIcon>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`آیا از حذف پست ${postTitle} مطمئن هستید ؟`}
      >
        <div className="flex items-center justify-between gap-x-4">
          <Button
            disabled={isDeleting}
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

export function EditPost({ postId }: { postId: string }) {
  return (
    <Link href={`/profile/posts/${postId}/edit`}>
      <ButtonIcon variant="outline">
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
