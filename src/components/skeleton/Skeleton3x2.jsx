import React from "react";
import { Skeleton } from "../ui/skeleton";

const Skeleton3x2 = () => {
  return (
    <div>
      <div className="h-60 w-40 sm:w-48 lg:w-[300px] flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <div className="p-2">
          <Skeleton className="h-44 w-full mb-3" />
          <Skeleton className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton3x2;
