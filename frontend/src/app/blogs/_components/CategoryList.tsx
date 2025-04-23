import { CategoryType } from "@/types/Category";
import Link from "next/link";

async function CategoryList() {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data: { categories },
  }: { data: { categories: CategoryType[] } } = await res.json();

  return (
    <ul className="space-y-4">
      <li>
        <Link href="/blogs">همه</Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
