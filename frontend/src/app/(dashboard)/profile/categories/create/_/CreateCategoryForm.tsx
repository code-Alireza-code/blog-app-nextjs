"use client";

import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateCategory } from "./useCreateCategory";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/types/Category";
import { useEffect } from "react";
import { useEditCategory } from "./useEditCategory";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان اجباری است !"),
  englishTitle: z
    .string()
    .regex(/^[A-Za-z]+$/, { message: "فقط حروف انگلیسی مجاز است !" })
    .nonempty("عنوان انگلیسی اجباری است !"),
  description: z.string().nonempty("توضیحات اجباری است !"),
});

export type CreateCategoryFormDataType = z.infer<typeof validationSchema>;

type Props = {
  category?: CategoryType | null;
  categoryId?: string;
};

function CreateCategoryForm({ category = null, categoryId }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateCategoryFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    if (category) {
      reset({
        title: category.title,
        englishTitle: category.englishTitle,
        description: category.description,
      });
    }
  }, [category, reset]);

  const router = useRouter();
  const { createCategory, isCreatingCategory } = useCreateCategory();
  const isEditSession = Boolean(categoryId);
  const { editCategory, isEditingCategory } = useEditCategory();

  const handleSubmitForm = async (formData: CreateCategoryFormDataType) => {
    if (isEditSession) {
      await editCategory(
        { formData, categoryId: categoryId as string },
        {
          onSuccess: () => {
            router.push("/profile/categories");
          },
        }
      );
    } else {
      await createCategory(formData, {
        onSuccess: () => {
          router.push("/profile/categories");
        },
      });
    }
  };

  return (
    <form className="form" noValidate onSubmit={handleSubmit(handleSubmitForm)}>
      <TextField {...register("title")} errors={errors} label="عنوان" />
      <TextField
        {...register("englishTitle")}
        errors={errors}
        label="عنوان انگلیسی"
        dir="ltr"
      />
      <TextField {...register("description")} errors={errors} label="توضیحات" />
      <Button
        disabled={isCreatingCategory}
        type="submit"
        className="text-white disabled:bg-gray-600"
      >
        {isEditSession
          ? isEditingCategory
            ? "در حال ویرایش دسته بندی"
            : "ویرایش دسته بندی"
          : isCreatingCategory
          ? "درحال ایجاد دسته بندی"
          : "ایجاد دسته بندی"}
      </Button>
    </form>
  );
}

export default CreateCategoryForm;
