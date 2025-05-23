import { CommentType } from "@/types/Post";
import http from "./httpService";

type createCommentFormData = {
  text: string;
  parent: CommentType | null;
  postId: string;
};

export async function createCommentApi(
  formData: createCommentFormData,
  options = {}
) {
  return http
    .post("/comment/add", formData, options)
    .then(({ data }) => data.data);
}
