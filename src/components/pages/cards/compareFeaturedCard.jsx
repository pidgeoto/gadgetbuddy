import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompareFeaturedCard = ({ products }) => {
 
  return (
    <Link
      href={`/${products.categoryname}/${products.slug}`}
      target="_blank"
    >
      <div className="h-48 lg:h-52 w-40 pb-3 sm:w-48 lg:w-56 rounded-2xl border  border-slate-200 bg-gray cursor-pointer shadow-sm hover:shadow-xl bg-gray-100">
        <div className=" h-7 p-2 mb-3 rounded-b-lg">
          <h4 className="capitalize ">
            <Badge>{products.brandname}</Badge>
          </h4>
        </div>
        {products.img1 && (
          <Image
            className="h-32 object-contain p-2"
            src={products.img1}
            alt="Product Image"
            loading="eager"
            width={1000}
            height={1000}
            {...(products.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
          />
        )}

        <div className="h-4 px-3 text-center rounded-b-lg flex items-center justify-between">
          <div>
            <h4 className="capitalize">{products.brandname}</h4>
          </div>
          <div>
            <h5 className="capitalize">
              {products.model_name.length > 13
                ? products.model_name.slice(0, 12) + "..."
                : products.model_name}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompareFeaturedCard;
