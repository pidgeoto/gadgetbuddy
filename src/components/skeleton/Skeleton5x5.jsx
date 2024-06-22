import React from "react";
import { Skeleton } from "../ui/skeleton";

const Skeleton5x5 = () => {
  return (
    <div>
      <div className="h-48 w-40 sm:w-48 lg:w-56 flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <div className="p-2">
          <Skeleton className="h-32 w-full mb-3" />
          <Skeleton className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton5x5;
