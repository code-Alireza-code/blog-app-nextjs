import { createPostApi } from "@/services/postService";
import { BackendError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const { mutateAsync: createPost, isPending: isCreating } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response.data.message ||
          "خطا در هنگام ایجاد پست !"
      );
    },
  });

  return { createPost, isCreating };
};
