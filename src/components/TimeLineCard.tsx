import useCommentsQuery from "@/hooks/useComments";
import { IPost } from "@/types/postTypes";
import { CircleUserRound, MailCheck, Newspaper, ThumbsDownIcon, ThumbsUpIcon, User } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import TimelineCommentsCard from "./TimelineCommentsCard";

const TimeLineCard = ({ post }: { post: IPost & { name: string } }) => {
  const [setPostCommentID, showPostCommentId] = useState<number | undefined>(undefined);
  const [showComments, setShowComments] = useState(false);

  const { data: commentsData, isError, isLoading, error, isSuccess } = useCommentsQuery({ postId: setPostCommentID && setPostCommentID });

  const handleShowComment = (id: number) => {
    setShowComments(!showComments);
    showPostCommentId(id);
  };

  return (
    <div key={post.id} className="border border-sky-400 p-3 md:max-w-2xl space-y-2 rounded-lg">
      <h1 className="text-xl font-semibold flex items-center gap-1">
        <Newspaper />
        {post.title}
      </h1>
      <p className="flex items-center gap-1 italic">
        <User />
        <span>By:</span>
        {post.name}
      </p>

      <p className="ps-6">{post.body}</p>

      <Button
        onClick={() => handleShowComment(post.id)}
        className="underline underline-offset-2 flex w-full justify-end items-center text-blue-600 p-1"
        variant="link"
      >
        Show Comments
      </Button>

      <div className="space-y-4">{showComments && commentsData?.map((data) => <TimelineCommentsCard key={data.id} data={data} />)}</div>
    </div>
  );
};

export default TimeLineCard;
