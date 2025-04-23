import { PostType } from "@/types/Post";

async function PostList() {
  await new Promise((res) => setTimeout(res, 3000));
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  }: { data: { posts: PostType[] } } = await res.json();

  console.log(posts);

  if (!posts.length) return null;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

export default PostList;
