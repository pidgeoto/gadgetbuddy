import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

const TvCard = ({ brandsProduct }) => {
  return (
    <div className="h-44 lg:h-64 w-40 pb-3 sm:w-48 lg:w-[310px] rounded-2xl border  border-slate-200 bg-gray cursor-pointer shadow-sm hover:shadow-xl bg-gray-100">
      <div className=" h-7 p-2 mb-3 rounded-b-lg">
        <h4 className="capitalize ">
          <Badge>{brandsProduct.brandname}</Badge>
        </h4>
      </div>
      {brandsProduct.img1 && (
        <Image
          className="w-48 h-16 lg:h-40 object-contain mx-auto mb-2 "
          src={brandsProduct.img1}
          alt="Product Image"
          width={500}
          height={500}
          loading="eager"
          {...(brandsProduct.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
        />
      )}

      <div className="px-3 text-center rounded-b-lg flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h4 className=" capitalize">{brandsProduct.brandname}</h4>
        </div>
        <div>
          <h5 className=" capitalize">
            {brandsProduct.model_name.length > 18
              ? brandsProduct.model_name.slice(0, 18) + "..."
              : brandsProduct.model_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TvCard;
