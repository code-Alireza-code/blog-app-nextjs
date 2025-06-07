import { Comment } from "@/types/Post";
import http from "./httpService";
import { updateCommentStatusFormDataType } from "app/(dashboard)/profile/comments/_/components/ActionButtons";

type createCommentFormData = {
  text: string;
  parent: Comment | null;
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

export async function getAllCommentsApi(options = {}) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}

export async function deleteCommentApi(commentId: string) {
  return http
    .delete(`/comment/remove/${commentId}`)
    .then(({ data }) => data.data);
}

type updateCommentStatusApiProps = {
  formData: updateCommentStatusFormDataType;
  commentId: string;
};
export async function updateCommentStatusApi({
  formData,
  commentId,
}: updateCommentStatusApiProps) {
  return http
    .patch(`comment/update/${commentId}`, formData)
    .then(({ data }) => data.data);
}
