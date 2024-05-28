import { IPost } from "@/types/postTypes";
import { CodeXml, User } from "lucide-react";
import React from "react";

const TimeLineCard = ({ post }: { post: IPost & { name: string } }) => {
  return (
    <div key={post.id} className="border p-3 md:max-w-2xl space-y-2 rounded-lg">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <CodeXml />
        {post.title}
      </h1>

      <p>{post.body}</p>

      <p className="flex items-center gap-2 italic">
        <User />
        {post.name}
      </p>
    </div>
  );
};

export default TimeLineCard;
