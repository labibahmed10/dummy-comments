import { IComment } from "@/types/commentTypes";
import { useQuery } from "@tanstack/react-query";

export const fetchAllPosts = async <T>(url: string, postId?: number): Promise<T[]> => {
  try {
    const response = await fetch(url + `?postId=${postId}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const useCommentsQuery = ({ postId }: { postId: number | undefined }) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchAllPosts<IComment>(process.env.NEXT_PUBLIC_COMMENTS_DATA as string, postId),
    enabled: postId ? true : false,
    refetchOnWindowFocus: false,
  });
};

export default useCommentsQuery;
