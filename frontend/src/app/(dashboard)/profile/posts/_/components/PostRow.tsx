import { PostType } from "@/types/Post";
import Table from "@/ui/Table";
import toLocaleDateString from "@/utils/dateFormater";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";

type Props = {
  post: PostType;
  index: number;
};

const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ post, index }: Props) {
  return (
    <Table.row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(post.title, 30)}</td>
      <td>{post.category.title}</td>
      <td>{post.author.name}</td>
      <td>{toLocaleDateString(post.createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[post.type].className}`}>
          {typeStyle[post.type].label}
        </span>
      </td>
      <td>actions</td>
    </Table.row>
  );
}

export default PostRow;
