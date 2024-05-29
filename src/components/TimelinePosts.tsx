"use client";
import usePostQuery from "@/hooks/usePosts";
import TimeLineCard from "./TimeLineCard";
import useUserQuery from "@/hooks/useUsers";
import { IUser } from "@/types/userTypes";

const TimelinePosts = () => {
  const { data: postData, isError, isLoading, error, isSuccess } = usePostQuery();
  const { data: userData, isError: isUserError, isLoading: isUserLoading, error: isUserErrMsg, isSuccess: isUserSuccess } = useUserQuery();

  if (isLoading || isUserLoading) {
    return <div className="flex min-h-screen flex-col items-center justify-between">Loading...</div>;
  }

  const users = userData?.reduce((acc: { [key: number]: string }, user: IUser) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const mainTimelineData = postData?.map((user) => {
    return {
      ...user,
      name: (users as { [key: string]: string })[user?.userId],
    };
  });

  return (
    <div className="space-y-3">
      {mainTimelineData
        ?.sort((a, b) => b.id - a.id)
        // ?.slice(0, 10)
        .map((post) => (
          <TimeLineCard key={post.id} post={post} />
        ))}
    </div>
  );
};

export default TimelinePosts;
