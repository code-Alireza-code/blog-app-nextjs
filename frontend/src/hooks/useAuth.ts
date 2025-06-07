import {
  getUserApi,
  logoutUserApi,
  signInApi,
  signUpApi,
} from "@/services/authService";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BackendError } from "@/types/error";
import { User } from "@/types/User";
import { adminProfile } from "@/constants/adminData";

export const useSignup = () =>
  useMutation({
    mutationFn: signUpApi,

    onSuccess: (data) => {
      toast.success(data.message || "ثبت نام با موفقیت انجام شد");
      window.location.reload();
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
      window.location.reload();
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
  
  const isAdmin =
    user && user.email === adminProfile.email && user._id === adminProfile.id;

  return { user, isLoadingUser, isAdmin };
};

export const useLogoutUser = () => {
  const {
    data,
    isPending: isLogingOut,
    mutateAsync: logout,
  } = useMutation({
    mutationFn: logoutUserApi,
    onSuccess: () => {
      window.location.reload();
      toast.success("از حساب کاربری خارج شدید !");
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError).response?.data?.message ||
          (err as Error).message ||
          "خطا در هنگام خروج از حساب کاربری !"
      );
    },
  });

  const { auth }: { auth: boolean } = data || {};

  return { auth, isLogingOut, logout };
};
