import { signInApi, signUpApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BackendError } from "@/types/error";

export const useSignup = () =>
  useMutation({
    mutationFn: signUpApi,

    onSuccess: (data) => {
      toast.success(data.message || "ثبت نام با موفقیت انجام شد");
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response?.data?.message ||
          (err as Error).message ||
          "خطا در هنگام ثبت نام !"
      );
    },
  });

export const useSignin = () =>
  useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      toast.success(data.message || "ثبت نام با موفقیت انجام شد");
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response?.data?.message ||
          (err as Error).message ||
          "خطا در هنگام ورود !"
      );
    },
  });
