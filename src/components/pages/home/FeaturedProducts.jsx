import React from "react";
import Offers from "./Offers";
import TrendingProducts from "./TrendingProducts";

const FeaturedProducts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 my-8">
      <div className="flex flex-col lg:w-1/4">
        <Offers />
      </div>
      <div className="flex flex-col lg:w-3/4">
        <TrendingProducts />
      </div>
    </div>
  );
};

export default FeaturedProducts;
