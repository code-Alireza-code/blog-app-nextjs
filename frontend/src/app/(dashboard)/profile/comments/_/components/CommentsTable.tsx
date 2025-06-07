"use client";

import Table from "@/ui/Table";
import { useGetAllComments } from "../hooks/useGetAllCommnets";
import CommentRow from "./CommentRow";
import Fallback from "@/ui/Fallback";

function CommentsTable() {
  const { comments, isLoadingComments } = useGetAllComments();

  if (isLoadingComments) return <Fallback />;
  if (!comments?.length)
    return (
      <div className="flex items-center justify-center text-secondary-800">
        هیچ دسته بندی ای وجود ندارد !
      </div>
    );
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>پست</th>
        <th>کامنت گذار</th>
        <th>تعداد پاسخ ها به کامنت</th>
        <th>وضعیت کامنت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {comments.map((comment, index) => (
          <CommentRow key={comment._id} index={index} comment={comment} />
        ))}
      </Table.body>
    </Table>
  );
}

export default CommentsTable;
