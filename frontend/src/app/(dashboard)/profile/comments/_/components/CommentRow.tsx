"use client";

import { CommentType } from "@/types/Comment";
import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import { useGetPostById } from "../hooks/useGetPostById";
import { CommentStatus, DeleteComment } from "./ActionButtons";

const statusStyles = [
  {
    title: "رد شده",
    className: "badge--danger",
  },
  {
    title: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    title: "تایید شده",
    className: "badge--success",
  },
];

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
      <td className="pr-20">{toPersianDigits(comment.answers.length)}</td>
      <td>
        <span className={`badge ${statusStyles[comment.status].className}`}>
          {statusStyles[comment.status].title}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <CommentStatus
            commentId={comment._id}
            commentTitle={comment.content.text}
            commentStatus={comment.status}
          />
          <DeleteComment
            commentId={comment._id}
            commentTitle={comment.content.text}
          />
        </div>
      </td>
    </Table.row>
  );
}

export default CommentRow;
