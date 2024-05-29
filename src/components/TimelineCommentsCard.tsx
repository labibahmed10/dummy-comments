import { CircleUserRound, MailCheck, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { IComment } from "@/types/commentTypes";

const TimelineCommentsCard = ({ data }: { data: IComment }) => {
  return (
    <div key={data.id} className="border border-sky-400 flex-1 mx-auto p-3 rounded-md space-y-1">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1 text-lg font-medium">
          <CircleUserRound size={19} />
          {data.name}
        </h2>
        <div className="flex items-center gap-2">
          <Button className="hover:bg-transparent p-0" size="sm" variant="ghost">
            <ThumbsUpIcon className="size-4 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">Like</span>
          </Button>
          <Button className="hover:bg-transparent p-0" size="sm" variant="ghost">
            <ThumbsDownIcon className="size-4 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">Dislike</span>
          </Button>
        </div>
      </div>
      <p className="flex items-center gap-1 italic">
        <MailCheck size={19} />
        {data.email}
      </p>

      <p className="ps-6 text-sm">{data.body}</p>
    </div>
  );
};

export default TimelineCommentsCard;
