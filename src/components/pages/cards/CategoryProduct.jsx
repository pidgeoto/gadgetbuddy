import Image from "next/image";
import React from "react";

const CategoryProduct = ({ data }) => {
  return (
    <div className="cursor-pointer w-40 sm:w-48 lg:w-56">
      <div className="h-52 pb-3 flex justify-center items-center rounded-2xl border border-slate-200 bg-gray shadow-sm hover:shadow-xl bg-white">
        {data.img1 && (
          <Image
            className="w-28 h-32 object-contain p-2"
            src={data.img1}
            alt={data.model_name}
            width={750}
            height={750}
            {...(data.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
          />
        )}
      </div>

      <div className="p-3 hover:text-red-400 my-2 py-4 rounded-2xl bg-slate-200 border border-slate-200 shadow-sm hover:shadow-xl">
        <div className="flex items-center justify-between">
          <h5 className="capitalize">{data.brandname}</h5>

          <h5 className="capitalize">
            {data.model_name.length > 16
              ? data.model_name.slice(0, 16) + "..."
              : data.model_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
