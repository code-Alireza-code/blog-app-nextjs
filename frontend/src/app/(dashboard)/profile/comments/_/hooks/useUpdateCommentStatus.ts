import { updateCommentStatusApi } from "@/services/commentService";
import { BackendError } from "@/types/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateCommentStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateCommentStatus, isPending: isUpdatingStatus } =
    useMutation({
      mutationFn: updateCommentStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["all-comments"] });
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError).response.data.message ||
            "خطا در هنگام تغییر وضعیت کامنت !"
        );
      },
    });

  return { updateCommentStatus, isUpdatingStatus };
};
