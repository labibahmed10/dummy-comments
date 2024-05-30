// "use client";
import usePostQuery from "@/hooks/usePosts";
import TimeLineCard from "./TimeLineCard";
import useUserQuery from "@/hooks/useUsers";
import { IUser } from "@/types/userTypes";
import TimelineSkeleton from "../loading/TimelineSkeleton";
import { fetchAllPosts } from "@/hooks/basicFetch";
import { IPost } from "@/types/postTypes";

const TimelinePosts = async () => {
  const postData = await fetchAllPosts<IPost>(process.env.NEXT_PUBLIC_POSTS_DATA as string);
  const userData = await fetchAllPosts<IUser>(process.env.NEXT_PUBLIC_USERS_DATA as string);
  // const { data: postData, isLoading } = usePostQuery();
  // const { data: userData, isLoading: isUserLoading } = useUserQuery();
  // console.log(postData);
  // console.log(userData);
  let renderedData;
  let mainTimelineData: (IPost & { name: string })[];

  // if (isLoading || isUserLoading) {
  //   renderedData = <TimelineSkeleton />;
  // }

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
    renderedData = mainTimelineData?.map((post) => <TimeLineCard post={post} key={post.id} />);
  }

  // if (!isLoading || !isUserLoading) {
  // }

  return <div className="space-y-3">{renderedData}</div>;
};

export default TimelinePosts;
