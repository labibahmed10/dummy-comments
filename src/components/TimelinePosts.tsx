"use client";
import useUserQuery from "@/hooks/usePosts";
import TimeLineCard from "./TimeLineCard";

const TimelinePosts = () => {
  const { data: postData, isError, isLoading, error, isSuccess } = useUserQuery();

  if (isLoading) {
    return <div className="flex min-h-screen flex-col items-center justify-between">Loading...</div>;
  }
  return (
    <div className="space-y-3">
      {postData
        ?.sort((a, b) => b.id - a.id)
        .map((post) => (
          <TimeLineCard key={post.id} post={post} />
        ))}
    </div>
  );
};

export default TimelinePosts;
