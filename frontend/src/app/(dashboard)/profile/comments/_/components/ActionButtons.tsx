import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useDeleteComment } from "../hooks/useDeleteComment";
import Select from "@/ui/Select";
import { useForm } from "react-hook-form";
import { Status } from "@/types/Comment";
import { useUpdateCommentStatus } from "../hooks/useUpdateCommentStatus";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const statusOptions = [
  {
    id: "0",
    title: "رد شده",
  },
  {
    id: "1",
    title: "در انتظار تایید",
  },
  {
    id: "2",
    title: "تایید شده",
  },
];

const validationSchema = z.object({
  status: z.nativeEnum(Status, {
    required_error: "یک وضعیت را انتخاب کنید !",
  }),
});

export type updateCommentStatusFormDataType = z.infer<typeof validationSchema>;

type CommentStatusProps = DeleteCommentProps & {
  commentStatus: Status;
};
export function CommentStatus({
  commentId,
  commentTitle,
  commentStatus,
}: CommentStatusProps) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateCommentStatusFormDataType>({
    defaultValues: { status: commentStatus },
    resolver: zodResolver(validationSchema),
  });

  const { updateCommentStatus, isUpdatingStatus } = useUpdateCommentStatus();

  const handleUpdateStatus = async (formData: { status: Status }) => {
    if (formData.status === commentStatus)
      return toast.error("کامنت در حال حاضر در این وضعیت است!");

    await updateCommentStatus(
      { commentId, formData },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <MdEdit />
      </ButtonIcon>
      <Modal open={open} onClose={() => setOpen(false)} title={commentTitle}>
        <form onSubmit={handleSubmit(handleUpdateStatus)}>
          <div className="my-4">
            <Select
              errors={errors}
              label=" تغییر وضعیت کامنت"
              {...register("status", { setValueAs: (val) => Number(val) })}
              options={statusOptions}
            />
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <Button
              disabled={isUpdatingStatus}
              variant="danger"
              className="grow"
              type="submit"
            >
              تغییر
            </Button>
            <Button
              type="button"
              className="grow"
              onClick={() => setOpen(false)}
            >
              لغو
            </Button>
          </div>
        </form>
      </Modal>
    </>
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
