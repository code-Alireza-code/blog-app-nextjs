import { deleteCommentApi } from "@/services/commentService";
import { BackendError } from "@/types/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteComment, isPending: isDeletingComment } =
    useMutation({
      mutationFn: deleteCommentApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["all-comments"] });
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError).response.data.message ||
            "خطا در هنگام حذف کامنت !"
        );
      },
    });

  return { deleteComment, isDeletingComment };
};
