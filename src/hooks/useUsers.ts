import { IUser } from "@/types/userTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "./basicFetch";

const useUserQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchAllPosts<IUser>("https://jsonplaceholder.typicode.com/users"),
    refetchOnWindowFocus: false,
  });
};

export default useUserQuery;
