import { IPost } from "@/types/postTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "./basicFetch";

const useCommentsQuery = ({ postId }: { postId: number }) => {
  return useQuery({ queryKey: ["comments"], queryFn: () => fetchAllPosts<IPost>(process.env.NEXT_PUBLIC_COMMENTS_DATA as string, postId) });
};

export default useCommentsQuery;
