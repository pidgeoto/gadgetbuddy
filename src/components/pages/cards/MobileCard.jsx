import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

const MobileCard = ({ brandsProduct }) => {
  return (
    <div className="h-48 lg:h-52 w-40 sm:w-48 lg:w-56 pb-3  rounded-2xl border  border-slate-200 bg-gray cursor-pointer shadow-sm hover:shadow-xl bg-gray-100">
      <div className=" h-7 p-2 mb-3 rounded-b-lg">
        <h4 className="capitalize">
          <Badge>{brandsProduct.brandname}</Badge>
        </h4>
      </div>
      {brandsProduct.img1 && (
        <Image
          className="h-32 object-contain p-2"
          src={brandsProduct.img1}
          alt="Product Image"
          loading="eager"
          width={1000}
          height={1000}
          {...(brandsProduct.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
        />
      )}

      <div className="h-4 px-3 text-center rounded-b-lg flex items-center justify-between">
        <div>
          <h4 className=" capitalize">{brandsProduct.brandname}</h4>
        </div>
        <div>
          <h5 className=" capitalize">
            {brandsProduct.model_name.length > 13
              ? brandsProduct.model_name.slice(0, 13) + "..."
              : brandsProduct.model_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
