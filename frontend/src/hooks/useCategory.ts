import { getAllCategoriesApi } from "@/services/categoryService";
import { CategoryType } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
  const { data, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["all-categories"],
    queryFn: getAllCategoriesApi,
  });

  const { categories }: { categories: CategoryType[] } = data || {};

  const transformedCategories = categories?.map((category) => ({
    title: category.title,
    id: category._id,
  }));

  return { categories, isLoadingCategories, transformedCategories };
};
