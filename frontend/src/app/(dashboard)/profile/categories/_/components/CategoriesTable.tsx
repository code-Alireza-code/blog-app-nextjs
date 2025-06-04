"use client";

import { useGetAllCategories } from "@/hooks/useCategory";
import Table from "@/ui/Table";
import CategoryRow from "./CategoryRow";

function CategoriesTable() {
  const { categories } = useGetAllCategories();

  if (!categories?.length)
    return (
      <div className="flex items-center justify-center text-secondary-800">
        هیچ دسته بندی ای وجود ندارد !
      </div>
    );
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>آیدی</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>اسلاگ</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {categories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default CategoriesTable;
