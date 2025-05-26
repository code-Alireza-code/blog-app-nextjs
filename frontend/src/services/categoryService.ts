import http from "./httpService";

export async function getAllCategoriesApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
