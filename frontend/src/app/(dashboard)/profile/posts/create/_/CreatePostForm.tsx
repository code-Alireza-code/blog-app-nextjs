"use client";

import { useGetAllCategories } from "@/hooks/useCategory";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import Select from "@/ui/Select";
import TextField from "@/ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان پست اجباری است !"),
  briefText: z.string().nonempty("خلاصه پست اجباری است !"),
  slug: z.string().nonempty("اسلاگ پست اجباری است !"),
  tags: z.array(z.string()).optional(),
  text: z.string().nonempty("متن پست اجباری است !"),
  readingTime: z.string().nonempty("زمان مطالعه پست اجباری است !"),
  category: z.string().nonempty("یک دسته بندی انتخاب کنید !"),
  coverImage: z
    .instanceof(File)
    .optional()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "کاور پست اجباری است !",
    }),
});

export type CreatePostFormDataType = z.infer<typeof validationSchema>;

function CreatePostForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<CreatePostFormDataType>({
    resolver: zodResolver(validationSchema),
  });
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const { transformedCategories } = useGetAllCategories();

  const handleCreatePost = (formData: CreatePostFormDataType) => {
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleCreatePost)} noValidate>
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
              setValue("coverImage", undefined);
            }}
            variant="red"
            className="size-6 absolute left-0"
          >
            <MdClose />
          </ButtonIcon>
        </div>
      )}
      <Button type="submit">ایجاد پست</Button>
    </form>
  );
}

export default CreatePostForm;
