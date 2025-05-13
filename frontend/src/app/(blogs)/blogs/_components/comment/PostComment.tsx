"use client";

import { CommentType, PostType } from "@/types/Post";
import Button from "@/ui/Button";
import { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";
import CommentForm from "./CommentForm";
import { useGetUser } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type PostCommentProps = {
  post: PostType;
};

function PostComment({ post: { comments, _id: postId } }: PostCommentProps) {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState<CommentType | null>(null);
  const { user } = useGetUser();
  const router = useRouter();

  const handleAddNewComment = (parent: CommentType | null) => {
    if (!user) {
      return router.push("/signin");
    }
    setParent(parent);
    setOpen(true);
  };

  return (
    <div className="mb-10">
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title={parent ? "پاسخ به نظر" : " نظر جدید"}
        description={parent ? parent.user.name : "نظر خود را وارد کنید"}
      >
        <CommentForm
          parent={parent}
          postId={postId}
          onClose={() => setOpen(false)}
        />
      </Modal>
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          onClick={() => handleAddNewComment(null)}
          variant="outline"
          className="flex items-center py-2"
        >
          <HiQuestionMarkCircle className="size-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </Button>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                <Comment
                  comment={comment}
                  onAddComment={() => handleAddNewComment(comment)}
                />
              </div>
              <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                {comment.answers!.map((item, index) => (
                  <div key={item._id} className="relative">
                    <div
                      className={classNames(
                        "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                        { "last-item": index + 1 === comment.answers?.length }
                      )}
                    >
                      <Comment
                        comment={item}
                        key={item._id}
                        onAddComment={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </div>
  );
}

export default PostComment;
