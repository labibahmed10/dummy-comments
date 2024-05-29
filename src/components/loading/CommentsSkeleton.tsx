import React from "react";
import { Skeleton } from "../ui/skeleton";

const CommentsSkeleton = () => {
  return (
    <div className="border border-sky-400 flex-1 mx-auto p-3 rounded-md space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-lg font-medium">
          <Skeleton className="size-7" />
          <Skeleton className="w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="p-0 size-sm" />
          <Skeleton className="p-0 size-sm" />
        </div>
      </div>
      <Skeleton className="ps-8 text-sm w-full h-10" />
    </div>
  );
};

export default CommentsSkeleton;
