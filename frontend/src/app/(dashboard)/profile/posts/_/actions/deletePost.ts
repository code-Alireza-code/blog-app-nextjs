"use server";

import { deletePostApi } from "@/services/postService";
import { BackendError } from "@/types/error";
import setCookieOnRequestAxios from "@/utils/setCookiesOnReqAxios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deletePostAction(postId: string) {
  const cookieStore = await cookies();
  const options = setCookieOnRequestAxios(cookieStore, "DELETE");

  try {
    const { message } = await deletePostApi(postId, options);

    revalidatePath("/profile");

    return { message };
  } catch (error: unknown) {
    console.log({
      error:
        (error as BackendError).response.data.message ||
        "خطا در هنگام حذف پست !",
    });

    return {
      error,
    };
  }
}
