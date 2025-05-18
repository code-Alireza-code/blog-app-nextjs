import { getAllUsersApi } from "@/services/authService";
import { getAllCommentsApi } from "@/services/commentService";
import { getAllPosts } from "@/services/postService";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import { useQueries } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { use } from "react";

export const useDashboardData = () => {
  const cookieStore = use(cookies());
  const options = setCookieOnRequest(cookieStore);

  const data = useQueries({
    queries: [
      { queryKey: ["get-all-users"], queryFn: () => getAllUsersApi(options) },
      {
        queryKey: ["get-all-comments"],
        queryFn: () => getAllCommentsApi(options),
      },
      { queryKey: ["get-all-posts"], queryFn: () => getAllPosts() },
    ],
  });

  // const users = data[0]?.data;
  // const comments = data[1]?.data;
  // const posts = data[2]?.data;

  return data;
};
