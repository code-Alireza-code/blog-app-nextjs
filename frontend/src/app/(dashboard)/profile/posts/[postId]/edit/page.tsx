import BreadCrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";
import { getPostByIdApi } from "@/services/postService";
import { Post } from "@/types/Post";
import { BackendError } from "@/types/error";

type Props = {
  params: Promise<{ postId: string }>;
};
async function EditPage({ params }: Props) {
  const { postId } = await params;
  const data = await getPostByIdApi(postId).catch((err) =>
    console.log(
      (err as BackendError).response.data.message || "error fetch post by id"
    )
  );
  const { post }: { post: Post } = data || {};

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm post={post} editPostId={postId} />
    </div>
  );
}

export default EditPage;
