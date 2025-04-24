import { PostType } from "@/types/Post";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import { IoIosChatbubbles } from "react-icons/io";
import { MdBookmarkBorder, MdFavoriteBorder } from "react-icons/md";

type PostInteractionProps = {
  post: PostType;
};

function PostInteraction({ post }: PostInteractionProps) {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <IoIosChatbubbles />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <MdFavoriteBorder />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <MdBookmarkBorder />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
