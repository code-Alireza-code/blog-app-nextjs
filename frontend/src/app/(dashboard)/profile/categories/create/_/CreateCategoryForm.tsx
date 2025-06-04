"use client";

import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateCategory } from "./useCreateCategory";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان اجباری است !"),
  englishTitle: z
    .string()
    .regex(/^[A-Za-z]+$/, { message: "فقط حروف انگلیسی مجاز است !" })
    .nonempty("عنوان انگلیسی اجباری است !"),
  description: z.string().nonempty("توضیحات اجباری است !"),
});

export type CreateCategoryFormDataType = z.infer<typeof validationSchema>;

function CreateCategoryForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateCategoryFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  const router = useRouter();
  const { createCategory, isCreatingCategory } = useCreateCategory();

  const handleSubmitForm = async (formData: CreateCategoryFormDataType) => {
    await createCategory(formData, {
      onSuccess: () => {
        router.push("/profile/categories");
      },
    });
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
        {isCreatingCategory ? "درحال ایجاد دسته بندی" : "ایجاد دسته بندی"}
      </Button>
    </form>
  );
}

export default CreateCategoryForm;
