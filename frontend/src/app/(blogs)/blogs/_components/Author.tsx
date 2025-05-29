import { Post } from "@/types/Post";
import Avatar from "@/ui/Avatar";

type AuthorType = Pick<Post["author"], "name" | "avatarUrl">;

function Author({ name, avatarUrl }: AuthorType) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar
        src={avatarUrl || "/images/avatar.png"}
        alt={name}
        width={24}
        height={24}
      />
      <span className="text-sm text-secondary-600">{name}</span>
    </div>
  );
}

export default Author;
