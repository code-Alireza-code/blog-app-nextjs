import { CategoryType } from "@/types/Category";
import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import { DeleteButton, EditButton } from "./ActionButtons";

type Props = {
  category: CategoryType;
  index: number;
};

function CategoryRow({ category, index }: Props) {
  return (
    <Table.row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{category._id}</td>
      <td>{category.title}</td>
      <td>{category.englishTitle}</td>
      <td>{category.description}</td>
      <td>{category.slug}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <EditButton categoryId={category._id} />
          <DeleteButton
            categoryId={category._id}
            categoryTitle={category.title}
          />
        </div>
      </td>
    </Table.row>
  );
}

export default CategoryRow;
