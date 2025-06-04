import BreadCrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../../create/_/CreateCategoryForm";
import { notFound } from "next/navigation";
import { getAllCategoriesApi } from "@/services/categoryService";
import { CategoryType } from "@/types/Category";

type Props = { params: Promise<{ categoryId: string }> };

async function Page({ params }: Props) {
  const { categoryId } = await params;
  const data = await getAllCategoriesApi();
  const { categories }: { categories: CategoryType[] } = data || {};
  const selectedCategory = categories?.find((c) => c._id === categoryId);

  if (!selectedCategory) notFound();

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "دسته بندی ها",
            href: "/profile/categories",
          },
          {
            label: "ویرایش دسته بندی",
            href: `/profile/categories/${categoryId}/edit`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm category={selectedCategory} categoryId={categoryId} />
    </div>
  );
}

export default Page;
