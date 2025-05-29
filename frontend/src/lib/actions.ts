"use server";

import { createCommentApi } from "@/services/commentService";
import { BackendError } from "@/types/error";
import { Comment } from "@/types/Post";
import setCookieOnRequest from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const validationSchema = z.object({
  text: z.string().nonempty("نظر نباید خالی باشد !"),
  postId: z.string().nonempty(),
  parent: z.unknown().nullable(),
});

export async function createComment(
  formData: { text: string },
  postId: string,
  parent: Comment | null
) {
  const cookieStore = await cookies();
  const options = setCookieOnRequest(cookieStore);

  const rawFormData = { text: formData.text, parent, postId };

  //  validate datas:
  const parseResult = validationSchema.safeParse(rawFormData);
  if (!parseResult.success) {
    console.log(parseResult.error.errors.map((e) => e.message).join(" | "));
    return {
      errMsg: parseResult.error.errors.map((e) => e.message).join(" | "),
    };
  }

  try {
    const data = await createCommentApi(rawFormData, options);
    console.log(data.message);
    revalidatePath("/blogs", "page");
    return data;
  } catch (err: unknown) {
    const errMsg = (err as BackendError).response.data.message;
    console.log(errMsg || "خطا در هنگام ایجاد کامنت");
    return { errMsg: errMsg };
  }
}
