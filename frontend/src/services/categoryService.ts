import { CreateCategoryFormDataType } from "app/(dashboard)/profile/categories/create/_/CreateCategoryForm";
import http from "./httpService";

export async function getAllCategoriesApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export async function createCategoryApi(formData: CreateCategoryFormDataType) {
  return http.post("/category/add", formData).then(({ data }) => data.data);
}

export async function deleteCategoryApi(categoryId: string) {
  return http
    .delete(`/category/remove/${categoryId}`)
    .then(({ data }) => data.data);
}

type Props = {
  formData: CreateCategoryFormDataType;
  categoryId: string;
};
export async function editCategoryApi({ formData, categoryId }: Props) {
  return http
    .patch(`/category/update/${categoryId}`, formData)
    .then(({ data }) => data.data);
}
