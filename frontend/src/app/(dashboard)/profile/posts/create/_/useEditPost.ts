import { editPostApi } from "@/services/postService";
import { BackendError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditPost = () => {
  const { isPending: isEditing, mutateAsync: editPost } = useMutation({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response.data.message ||
          "خطا در هنگام ویرایش پست !"
      );
    },
  });

  return { editPost, isEditing };
};
