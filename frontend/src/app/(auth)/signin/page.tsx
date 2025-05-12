"use client";

import TextField from "@/ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useSignin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const validationSchema = z.object({
  email: z.string().nonempty("ایمیل اجباری است !").email("ایمیل نامعتبر است !"),
  password: z.string().nonempty("رمز عبور اجباری است !"),
});

export type signinFormDataType = z.infer<typeof validationSchema>;

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinFormDataType>({ resolver: zodResolver(validationSchema) });

  const { mutateAsync: signIn, isPending: isSigningIn } = useSignin();

  const router = useRouter();

  const handleSignin = async (formData: signinFormDataType) => {
    await signIn(formData, {
      onSuccess: () => {
        router.replace("/");
      },
    });
  };

  return (
    <div className="border-2 p-8 border-secondary-200 text-secondary-700 rounded-lg">
      <h1 className="mb-4 text-center font-bold text-xl">
        ورود به حساب کاربری
      </h1>
      <form
        onSubmit={handleSubmit(handleSignin)}
        className="space-y-5"
        noValidate
      >
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
          disabled={isSigningIn}
          type="submit"
          className="btn btn--primary w-full disabled:bg-gray-400 disabled:text-white "
        >
          {isSigningIn ? "در حال ارسال اطلاعات" : "ورود"}
        </button>
        <div className="flex justify-center gap-x-1">
          <span>ثبت نام نکرده اید؟ </span>
          <Link
            href="/signup"
            className="text-primary-700 underline-offset-0 hover:underline hover:underline-offset-4"
          >
            ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
