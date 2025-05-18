import { FiUsers } from "react-icons/fi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";

const iconMap = {
  comments: IoIosChatbubbles,
  users: FiUsers,
  posts: MdEditDocument,
};

type Props = {
  title: string;
  value: string | number;
  type: keyof typeof iconMap;
};

function Card({ title, value, type }: Props) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-secondary-50 p-2 shadow-sm">
      <div className="flex p-4 text-secondary-600">
        {Icon && <Icon className="size-5" />}
        <h3 className="mr-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500">
        {value}
      </p>
    </div>
  );
}

export default Card;
