import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useDeleteComment } from "../hooks/useDeleteComment";

export function CommentStatus() {
  return (
    <ButtonIcon variant="outline">
      <MdEdit />
    </ButtonIcon>
  );
}

type DeleteCommentProps = {
  commentId: string;
  commentTitle: string;
};

export function DeleteComment({ commentId, commentTitle }: DeleteCommentProps) {
  const [open, setOpen] = useState(false);
  const { deleteComment, isDeletingComment } = useDeleteComment();

  const handleDelete = async () => {
    await deleteComment(commentId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <IoMdTrash className="text-error" />
      </ButtonIcon>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title={`آیا از حذف این کامنت مطمئن هستید؟"${commentTitle}"`}
      >
        <div className="flex items-center justify-between gap-x-4">
          <Button
            disabled={isDeletingComment}
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
