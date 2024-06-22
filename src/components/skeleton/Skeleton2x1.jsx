import React from "react";
import { Skeleton } from "../ui/skeleton";

const Skeleton2x1 = () => {
  return (
    <div className="flex justify-evenly mt-1">
      <Skeleton className="h-16 w-60" />
      <Skeleton className="h-16 w-16 rounded-lg" />
    </div>
  );
};

export default Skeleton2x1;
