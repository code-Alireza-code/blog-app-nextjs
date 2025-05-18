import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getAllPosts } from "./postService";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import toast from "react-hot-toast";
import { BackendError } from "@/types/error";

export async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookieOnRequest(cookieStore);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getAllPosts(),
    ]);

    const numberOfUsers = Number(data[0]?.users?.length ?? 0);
    const numberOfComments = Number(data[1]?.commentsCount?.length ?? 0);
    const numberOfPosts = Number(data[2]?.length ?? 0);

    return { numberOfComments, numberOfUsers, numberOfPosts };
  } catch (err: unknown) {
    toast.error(
      (err as BackendError).response?.data?.message ||
        (err as Error).message ||
        "خطا در سرور هنگام بارگذاری اطلاعات"
    );
    return { numberOfComments: 0, numberOfUsers: 0, numberOfPosts: 0 };
  }
}
