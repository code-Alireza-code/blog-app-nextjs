import { deleteCategoryApi } from "@/services/categoryService";
import { BackendError } from "@/types/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteCategory, isPending: isDeletingCategory } =
    useMutation({
      mutationFn: deleteCategoryApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["all-categories"] });
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError).response.data.message ||
            "خطا در هنگام حذف دسته بندی !"
        );
      },
    });

  return { deleteCategory, isDeletingCategory };
};
