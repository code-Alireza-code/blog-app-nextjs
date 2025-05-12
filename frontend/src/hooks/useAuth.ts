import { getUserApi, signInApi, signUpApi } from "@/services/authService";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BackendError } from "@/types/error";
import { User } from "@/types/User";

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

export const useGetUser = () => {
  const { data, isLoading: isLoadingUser } = useQuery({
    queryFn: getUserApi,
    queryKey: ["get-user"],
    retry: false,
  });

  const { user }: { user: User } = data || {};

  return { user, isLoadingUser };
};
