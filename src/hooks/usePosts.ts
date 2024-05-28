import { IPost } from "@/types/postTypes";
import { useQuery } from "@tanstack/react-query";

const fetchAllPosts = async (): Promise<IPost[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_POSTS_DATA as string);
  const data = await response.json();

  return data;
};

const useUserQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
  });
};

export default useUserQuery;
