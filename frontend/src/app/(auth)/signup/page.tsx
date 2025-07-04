"use client";

import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSignup } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  name: z
    .string()
    .nonempty("نام اجباری است !")
    .min(5, "نام کاربری باید حداقل ۵ حرف باشد‌!"),
  email: z.string().nonempty("ایمیل اجباری است !").email("ایمیل نامعتبر است !"),
  password: z
    .string()
    .nonempty("رمز عبور اجباری است !")
    .min(8, "رمز عبور حداقل باید ۸ حرف باشد !"),
});

export type signUpformDataType = z.infer<typeof validationSchema>;

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signUpformDataType>({ resolver: zodResolver(validationSchema) });

  const { mutateAsync: signUp, isPending: isSigningUp } = useSignup();

  const router = useRouter();

  const signUpHandler = async (formData: signUpformDataType) => {
    await signUp(formData, {
      onSuccess: () => {
        router.replace("/");
      },
    });
  };

  return (
    <div className="border-2 p-8 border-secondary-200 text-secondary-700 rounded-lg">
      <h1 className="mb-4 text-center font-bold text-2xl">ثبت نام</h1>
      <form
        onSubmit={handleSubmit(signUpHandler)}
        className="space-y-5"
        noValidate
      >
        <TextField
          errors={errors}
          label="نام و نام خانوادگی"
          {...register("name")}
        />
        <TextField
          errors={errors}
          {...register("email")}
          label="ایمیل"
          dir="ltr"
        />
        <TextField
          errors={errors}
          {...register("password")}
          label="رمز عبور "
          dir="ltr"
          type="password"
        />
        <button
          disabled={isSigningUp}
          type="submit"
          className="btn btn--primary w-full disabled:bg-gray-400 disabled:text-white "
        >
          {isSigningUp ? "در حال ارسال اطلاعات" : "ثبت نام"}
        </button>
        <div className="flex justify-center gap-x-1">
          <span>قبلا ثبت نام کرده اید؟ </span>
          <Link
            href="/signin"
            className="text-primary-700 underline-offset-0 hover:underline hover:underline-offset-4"
          >
            ورود
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
