import { getAllCommentsApi } from "@/services/commentService";
import { CommentType } from "@/types/Comment";
import { useQuery } from "@tanstack/react-query";

export const useGetAllComments = () => {
  const { data, isLoading: isLoadingComments } = useQuery({
    queryKey: ["all-comments"],
    queryFn: getAllCommentsApi,
  });

  const { comments }: { comments: CommentType[] } = data || {};

  return { comments, isLoadingComments };
};
