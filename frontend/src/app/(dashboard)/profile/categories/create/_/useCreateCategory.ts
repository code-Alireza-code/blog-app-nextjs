import { createCategoryApi } from "@/services/categoryService";
import { BackendError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateCategory = () => {
  const { mutateAsync: createCategory, isPending: isCreatingCategory } =
    useMutation({
      mutationFn: createCategoryApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError).response.data.message ||
            "خطا در هنگام ایجاد دسته بندی  !"
        );
      },
    });

  return { createCategory, isCreatingCategory };
};
