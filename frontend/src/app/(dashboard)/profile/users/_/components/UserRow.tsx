import { User } from "@/types/User";
import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";

type Props = {
  user: User;
  index: number;
};

function UserRow({ user, index }: Props) {
  return (
    <Table.row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{user.name}</td>
      <td>{toPersianDigits(user._id)}</td>
      <td>{user.email}</td>
      <td>
        {user.likedPosts.length ? (
          <span className="badge badge--secondary">
            {toPersianDigits(user.likedPosts.length)}
          </span>
        ) : (
          "خالی"
        )}
      </td>
      <td>
        {user.bookmarkedPosts.length ? (
          <span className="badge badge--secondary">
            {toPersianDigits(user.bookmarkedPosts.length)}
          </span>
        ) : (
          "خالی"
        )}
      </td>
    </Table.row>
  );
}

export default UserRow;
