import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProducts = ({ products }) => {
  const sanitizeTitleForURL = (title) => {
    const sanitizedTitle = title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return sanitizedTitle;
  };
  return (
    <Link
      href={`/${sanitizeTitleForURL(
        `${products.brandname} ${products.model_name}`
      )}/${products.model_id}`}
    >
      <div className="cursor-pointer w-40 lg:w-44">
        <div className="h-52  pb-3 flex justify-center items-center rounded-2xl border  border-slate-200 bg-gray shadow-sm hover:shadow-xl bg-white">
          {products.img1 && (
            <Image
              className="w-18 h-32 object-contain p-2"
              src={products.img1}
              alt={products.model_name}
              width={750}
              height={750}
            />
          )}
        </div>
        <div className="p-3 hover:text-red-400 my-2 py-4 rounded-2xl bg-slate-200 border border-slate-200  shadow-sm hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h5 className="capitalize  text-[12px]">{products.brandname}</h5>
            <h5 className="capitalize  text-[12px]">
              {products.model_name.length > 18
                ? products.model_name.slice(0, 18) + "..."
                : products.model_name}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllProducts;
