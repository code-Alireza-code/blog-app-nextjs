import { deletePostApi } from "@/services/postService";
import { BackendError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const { mutateAsync: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response.data.message || "خطا در هنگام حذف پست !"
      );
    },
  });

  return { deletePost, isDeleting };
};
