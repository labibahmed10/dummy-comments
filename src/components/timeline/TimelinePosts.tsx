"use client";
import usePostQuery from "@/hooks/usePosts";
import TimeLineCard from "./TimeLineCard";
import useUserQuery from "@/hooks/useUsers";
import { IUser } from "@/types/userTypes";
import CommentsSkeleton from "../loading/CommentsSkeleton";
import TimelineSkeleton from "../loading/TimelineSkeleton";

const TimelinePosts = () => {
  const { data: postData, isLoading } = usePostQuery();
  const { data: userData, isLoading: isUserLoading } = useUserQuery();

  let renderedData;
  let mainTimelineData;

  if (isLoading || isUserLoading) {
    renderedData = <TimelineSkeleton />;
  }
  
  const users = userData?.reduce((acc: { [key: number]: string }, user: IUser) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  if (users) {
    mainTimelineData = postData?.map((user) => {
      return {
        ...user,
        name: (users as { [key: string]: string })[user?.userId],
      };
    });
  }

  if (!isLoading || !isUserLoading) {
    renderedData = mainTimelineData?.map((post) => <TimeLineCard post={post} key={post.id} />);
  }

  return <div className="space-y-3">{renderedData}</div>;
};

export default TimelinePosts;
