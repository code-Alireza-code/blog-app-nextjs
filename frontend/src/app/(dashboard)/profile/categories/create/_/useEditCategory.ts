import { editCategoryApi } from "@/services/categoryService";
import { BackendError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditCategory = () => {
  const { mutateAsync: editCategory, isPending: isEditingCategory } =
    useMutation({
      mutationFn: editCategoryApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError).response.data.message ||
            "خطا در هنگام ویرایش دسته بندی !"
        );
      },
    });

  return { editCategory, isEditingCategory };
};
