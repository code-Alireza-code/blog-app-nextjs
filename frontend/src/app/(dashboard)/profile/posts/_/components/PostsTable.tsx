import { getAllPosts } from "@/services/postService";
import Table from "@/ui/Table";
import PostRow from "./PostRow";

type Props = {
  postQuery?: string;
};

async function PostsTable({ postQuery = "" }: Props) {
  const { posts } = await getAllPosts(postQuery);

  if (!posts.length) return <p>پستی یافت نشد</p>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default PostsTable;
