import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecommendModalCards = ({ data }) => {
  const sanitizeTitleForURL = (title) => {
    const sanitizedTitle = title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return sanitizedTitle;
  };
  return (
    <div className="relative w-[155px] lg:w-56">
      <Link
        href={`/mobile/${sanitizeTitleForURL(
          `${data.brandname} ${data.model_name}`
        )}/${data.model_id}`}
      >
        <div className="h-72 40 p-4 rounded-2xl border mb-2 border-slate-200 bg-gray shadow-sm hover:shadow-xl bg-white">
          <h4 className="text-center text-[14px] uppercase font-normal">
            {data.brandname} {data.model_name}
          </h4>
          {data.img1 && (
            <Image
              src={data.img1}
              className="h-[80%] w-full object-contain p-4"
              width={1000}
              height={1000}
              alt={data.model_name}
              {...(data.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
            />
          )}
        </div>
        <div className="absolute -bottom-2 left-10 lg:left-20">
          <h4 className="text-center capitalize">
            <Badge>₹ {data.price}</Badge>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default RecommendModalCards;
