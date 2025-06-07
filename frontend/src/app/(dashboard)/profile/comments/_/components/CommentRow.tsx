"use client";

import { CommentType } from "@/types/Comment";
import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import { useGetPostById } from "../hooks/useGetPostById";
import { CommentStatus, DeleteComment } from "./ActionButtons";

type Props = {
  comment: CommentType;
  index: number;
};

function CommentRow({ comment, index }: Props) {
  const { post, isLoadingPost } = useGetPostById(comment.post);

  if (isLoadingPost) return null;
  return (
    <Table.row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{comment.content.text}</td>
      <td>{post ? post.title : "درحال بارگذاری..."}</td>
      <td>{comment.user.name}</td>
      <td className="mr-8">{toPersianDigits(comment.answers.length)}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <CommentStatus />
          <DeleteComment />
        </div>
      </td>
    </Table.row>
  );
}

export default CommentRow;
