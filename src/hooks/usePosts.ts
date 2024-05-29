import { IPost } from "@/types/postTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "./basicFetch";

const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts<IPost>(process.env.NEXT_PUBLIC_POSTS_DATA as string),
    select: (data) => data.reverse(),
    refetchOnWindowFocus: false,
  });
};

export default usePostQuery;
