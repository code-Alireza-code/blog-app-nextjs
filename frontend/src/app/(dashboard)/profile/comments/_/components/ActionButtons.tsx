import ButtonIcon from "@/ui/ButtonIcon";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export function CommentStatus() {
  return (
    <ButtonIcon variant="outline">
      <MdEdit />
    </ButtonIcon>
  );
}

export function DeleteComment() {
  return (
    <ButtonIcon variant="outline">
      <IoMdTrash className="text-error" />
    </ButtonIcon>
  );
}
