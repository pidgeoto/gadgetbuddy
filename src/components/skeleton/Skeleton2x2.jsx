import React from "react";
import { Skeleton } from "../ui/skeleton";

const Skeleton2x2 = () => {
  return (
    <div>
      <div className="h-48 w-40 flex flex-col gap-2 p-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Skeleton className="h-40 w-full mb-1" />
        <Skeleton className="h-8" />
      </div>
    </div>
  );
};

export default Skeleton2x2;
