import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ products }) {

  const lable = `${products.brandname} ${products.model_name}`;
  return (
    <Link
      href={`/${products.categoryname}/${products.slug}`}
    >
      <div className="w-[158px] md:w-40 h-48 rounded-lg border border-slate-200 bg-white cursor-pointer shadow-sm hover:shadow-xl">
        {products.img1 && (
          <Image
            className="h-32 object-contain p-2"
            src={products.img1}
            alt="Product Image"
            width={1000}
            height={1000}
            {...(products.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
          />
        )}
        <div className="bg-gray-100 h-16 p-4 rounded-b-lg">
          <h4 className="capitalize text-[12px]">
            {lable.length > 32 ? lable.slice(0, 32) + "..." : lable}
          </h4>
        </div>
      </div>
    </Link>
  );
}
