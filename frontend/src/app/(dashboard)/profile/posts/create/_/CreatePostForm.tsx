"use client";

import { useGetAllCategories } from "@/hooks/useCategory";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import Select from "@/ui/Select";
import TextField from "@/ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { z } from "zod";
import { useCreatePost } from "./useCreatePost";
import { useRouter } from "next/navigation";
import { Post } from "@/types/Post";
import { useEditPost } from "./useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان پست اجباری است !"),
  briefText: z.string().nonempty("خلاصه پست اجباری است !"),
  slug: z.string().nonempty("اسلاگ پست اجباری است !"),
  text: z.string().nonempty("متن پست اجباری است !"),
  readingTime: z.string().nonempty("زمان مطالعه پست اجباری است !"),
  category: z.string().nonempty("یک دسته بندی انتخاب کنید !"),
  coverImage: z
    .instanceof(File, { message: "کاور پست اجباری است !!" })
    .refine((file) => file instanceof File && file.size > 0, {
      message: "کاور پست اجباری است !",
    }),
});

export type CreatePostFormDataType = z.infer<typeof validationSchema>;

type Props = {
  post?: null | Post;
  editPostId?: string;
};
function CreatePostForm({ post = null, editPostId }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
  } = useForm<CreatePostFormDataType>({
    resolver: zodResolver(validationSchema),
  });
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
    post?.coverImageUrl || null
  );
  const isEditSession = Boolean(editPostId);
  const { transformedCategories } = useGetAllCategories();
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const router = useRouter();

  useEffect(() => {
    if (post) {
      const setFormData = async () => {
        const coverImageFile = await imageUrlToFile(post.coverImage);
        reset({
          title: post.title,
          text: post.text,
          briefText: post.briefText,
          category: post.category._id,
          readingTime: post.readingTime.toString(),
          slug: post.slug,
          coverImage: coverImageFile,
        });
        setCoverImageUrl(post.coverImageUrl || null);
      };
      setFormData();
    }
  }, [post, reset]);

  const handeSubmitForm = async (data: CreatePostFormDataType) => {
    const formData = new FormData();
    (Object.keys(data) as (keyof CreatePostFormDataType)[]).forEach((key) => {
      const value = data[key];
      if (value === undefined) return;
      else if (key === "coverImage" && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value as string);
      }
    });

    if (isEditSession) {
      await editPost(
        { formData, postId: editPostId as string },
        {
          onSuccess: () => {
            router.push("/profile/posts");
          },
        }
      );
    } else {
      await createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handeSubmitForm)} noValidate>
      <TextField
        {...register("title")}
        errors={errors}
        label="عنوان پست"
        placeholder="عنوان را وارد کنید..."
      />
      <TextField
        {...register("briefText")}
        errors={errors}
        label="خلاصه پست"
        placeholder="خلاصه پست را وارد کنید..."
      />
      <TextField
        {...register("text")}
        errors={errors}
        label="متن پست"
        placeholder="متن پست را وارد کنید..."
      />
      <TextField
        {...register("slug")}
        errors={errors}
        label="اسلاگ"
        placeholder="اسلاگ پست را وارد کنید..."
      />
      <TextField
        {...register("readingTime")}
        errors={errors}
        label="زمان مطالعه(به دقیقه)"
        placeholder="زمان مطالعه پست را وارد کنید..."
        type="number"
      />
      <Select
        {...register("category")}
        options={transformedCategories}
        defaultOption
        errors={errors}
      />
      <Controller
        name="coverImage"
        control={control}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { onChange, value, ...rest } }) => (
          <FileInput
            label="کاور پست"
            errors={errors}
            {...rest}
            onChange={(event) => {
              const file =
                event.target.files && event.target.files.length > 0
                  ? event.target.files[0]
                  : undefined;
              onChange(file);
              setCoverImageUrl(file ? URL.createObjectURL(file) : null);
              event.target.value = "";
            }}
          />
        )}
      />
      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded">
          <Image
            fill
            alt="cover-image"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", undefined as unknown as File);
            }}
            variant="red"
            className="size-6 absolute left-0"
          >
            <MdClose />
          </ButtonIcon>
        </div>
      )}
      <Button
        type="submit"
        disabled={isCreating}
        className="disabled:bg-gray-400/50"
      >
        {isEditSession
          ? isEditing
            ? "درحال ارسال اطلاعات"
            : "ویرایش پست"
          : isCreating
          ? "درحال ارسال اطلاعات"
          : "ایجاد پست"}
      </Button>
    </form>
  );
}

export default CreatePostForm;
