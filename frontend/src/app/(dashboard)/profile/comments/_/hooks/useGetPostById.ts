import { getPostByIdApi } from "@/services/postService";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";

export const useGetPostById = (postId: string) => {
  const { data, isLoading: isLoadingPost } = useQuery({
    queryKey: ["single-post-for-comment", postId],
    queryFn: () => getPostByIdApi(postId),
    retry: false,
  });

  const { post }: { post: Post } = data || {};

  return { post, isLoadingPost };
};
