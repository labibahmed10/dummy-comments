import { Button } from "../ui/button";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { Skeleton } from "../ui/skeleton";

const TimelineSkeleton = () => {
  return (
    <div className="border border-sky-400 p-3 max-w-3xl space-y-2 rounded-lg">
      <div className="flex items-center gap-1">
        <Skeleton className="size-10" />
        <Skeleton className="w-[620px] h-10" />
      </div>
      <div className="flex items-center gap-1 italic">
        <Skeleton className="size-8" />
        <Skeleton className="w-40 h-8" />
      </div>
      <Skeleton className="ps-6 w-full h-10" />
      <Collapsible>
        <CollapsibleTrigger className="flex w-full justify-end items-center">
          <Button className="">
            <Skeleton className="size-7" />
            <Skeleton className="w-32 h-7 underline underline-offset-2" />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
};

export default TimelineSkeleton;
