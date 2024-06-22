"use client";
import getModelDetails from "@/api/getModelDetails";
import FeaturedCard from "@/components/pages/cards/FeaturedCard";
import Skeleton2x2 from "@/components/skeleton/Skeleton2x2";
import { Smartphone } from "lucide-react";
import React, { useEffect, useState } from "react";

const TrendingProducts = () => {
  const [loading, setLoading] = useState(true);
  const [modelArray, setModelArray] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("mobile");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResult = await getModelDetails();
        const details = detailsResult;
        setModelArray(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching model details:", error);
      }
    };

    fetchData();
  }, []);

  const categoryNames = [
    ...new Set(modelArray.map((item) => item.categoryname)),
  ];

  const filteredProducts = modelArray.filter(
    (item) => item.categoryname === selectedCategory
  );
  const displayedProducts =
    selectedCategory && selectedCategory !== ""
      ? filteredProducts.slice(0, 8)
      : modelArray.filter((item) => item.promoted === true).slice(0, 8);

  return (
    <div className="mb-6">
      <div className="rounded-lg border mb-6 border-slate-200 bg-white text-slate-950 shadow-sm h-12 w-full p-2 cursor-pointer flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Smartphone className="h-5" />
          </div>
          <div>
            <h4 className="ml-1 whitespace-pre">Top Trending </h4>
          </div>
        </div>
        <div>
          <select
            className="border-none rounded-md p-1 text-sm capitalize"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            {categoryNames.map((category, index) => (
              <option key={index} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-3 lg:gap-5">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton2x2 key={index} />
            ))
          : displayedProducts.map((products) => (
              <FeaturedCard key={products.model_id} products={products} />
            ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
