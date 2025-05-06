"use client";

import { PostType } from "@/types/Post";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { IoIosChatbubbles } from "react-icons/io";
import { MdBookmarkBorder, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useLikePost } from "../_hooks/usePost";
import { useRouter } from "next/navigation";

type PostInteractionProps = {
  post: PostType;
};

function PostInteraction({ post }: PostInteractionProps) {
  const { mutateAsync: likePost } = useLikePost();
  const router = useRouter();

  const handleLike = async () => {
    await likePost(post._id, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

  const handleBookmark = async () => {};

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <IoIosChatbubbles />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={handleLike}>
        {post.isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={handleBookmark}>
        <MdBookmarkBorder />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
