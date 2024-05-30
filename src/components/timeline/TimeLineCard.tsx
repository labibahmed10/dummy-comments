"use client";
import useCommentsQuery from "@/hooks/useComments";
import { IPost } from "@/types/postTypes";
import { MessageSquare, Newspaper, User } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import TimelineCommentsCard from "./TimelineCommentsCard";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import CommentsSkeleton from "../loading/CommentsSkeleton";

const TimeLineCard = ({ post }: { post: IPost & { name: string } }) => {
  const [setPostCommentID, showPostCommentId] = useState<number | undefined>(undefined);
  const [showComments, setShowComments] = useState(false);

  const { data: commentsData, isLoading } = useCommentsQuery({ postId: setPostCommentID && setPostCommentID });

  const handleShowComment = (id: number) => {
    setShowComments(!showComments);
    showPostCommentId(id);
  };

  return (
    <div key={post.id} className="border border-sky-400 p-3 md:max-w-3xl space-y-2 rounded-lg">
      <h1 className="text-xl font-semibold flex items-center gap-1">
        <Newspaper />
        {post.title}
      </h1>
      <p className="flex items-center gap-1 italic">
        <User />
        <span>By:</span>
        {post.name}
      </p>

      <p className="ps-6">{post.body}</p  >

      <Collapsible>
        <CollapsibleTrigger className="flex w-full justify-end items-center">
          <Button onClick={() => handleShowComment(post.id)} className=" text-blue-600 p-1 gap-1 hover:no-underline" variant="link">
            <MessageSquare size={19} className="text-gray-500" />
            <span className="underline underline-offset-2">Show Comments</span> (5)
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-4">
          {showComments &&
            commentsData?.map((data) => (isLoading ? <CommentsSkeleton key={data.id} /> : <TimelineCommentsCard key={data.id} data={data} />))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TimeLineCard;
