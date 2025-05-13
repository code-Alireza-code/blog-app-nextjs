"use client";

import { PostType } from "@/types/Post";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { IoIosChatbubbles } from "react-icons/io";
import {
  MdBookmark,
  MdBookmarkBorder,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";
import { useBookmarkPost, useLikePost } from "../_hooks/usePost";
import { useRouter } from "next/navigation";

type PostInteractionProps = {
  post: PostType;
};

function PostInteraction({ post }: PostInteractionProps) {
  const { mutateAsync: likePost } = useLikePost();
  const { mutateAsync: BookmarkPost } = useBookmarkPost();
  const router = useRouter();

  const handleLike = async () => {
    await likePost(post._id, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

  const handleBookmark = async () => {
    await BookmarkPost(post._id, {
      onSuccess: () => {
        router.refresh();
      },
    });
  };

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
        {post.isBookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
