"use client";

import { PostType } from "@/types/Post";
import Button from "@/ui/Button";
import { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";

type PostCommentProps = {
  post: PostType;
};

function PostComment({ post: { comments, _id: postId } }: PostCommentProps) {
  const handleAddNewComment = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-10">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          onClick={handleAddNewComment}
          variant="outline"
          className="flex items-center py-2"
        >
          <HiQuestionMarkCircle className="size-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </Button>
        <Modal onClose={() => setOpen(false)} open={open}>
          <div className="text-secondary-700">modal</div>
        </Modal>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                <Comment comment={comment} onAddComment={() => {}} />
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
