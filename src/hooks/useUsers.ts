import { IUser } from "@/types/userTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "./basicFetch";

const useUserQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchAllPosts<IUser>(process.env.NEXT_PUBLIC_USERS_DATA as string),
    refetchOnWindowFocus: false,
  });
};

export default useUserQuery;
