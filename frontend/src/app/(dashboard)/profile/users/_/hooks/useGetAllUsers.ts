import { getAllUsersApi } from "@/services/authService";
import { User } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = () => {
  const { data, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsersApi,
  });

  const { users }: { users: User[] } = data || {};

  return { users, isLoadingUsers };
};
