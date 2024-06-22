"use client";
import getModelDetails from "@/api/getModelDetails";
import NoSearch from "@/components/NoSearch";
import Skeleton4x4 from "@/components/skeleton/Skeleton4x4";
import { SearchField } from "@/components/ui/searchField";
import React, { useState, useEffect } from "react";
import CompareFeaturedCard from "../cards/compareFeaturedCard";
import { useInView } from "react-intersection-observer";

const CompareFeaturedProducts = ({ categoryData }) => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResult = await getModelDetails();

        let filteredData = [];
        if (categoryData && categoryData.length > 0) {
          filteredData = detailsResult.filter((item) =>
            categoryData.some(
              (category) =>
                item.category.includes(category.category) &&
                item.brandname === category.brandname
            )
          );
        } else {
          filteredData = detailsResult;
        }

        setProductData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [categoryData]);

  useEffect(() => {
    if (inView) {
      setDisplayedProducts((prevCount) => prevCount + 20);
    }
  }, [inView]);

  const filteredFeaturedProduct = productData.filter((productDatas) => {
    const query = searchQuery.toLowerCase();

    const modelName = productDatas.model_name.toLowerCase();
    const brandName = productDatas.brandname.toLowerCase();
    const combinedName = brandName + " " + modelName;
    const isCombinedMatch = combinedName.includes(query);

    const isModelMatch = modelName.includes(query);
    const isBrandMatch = brandName.includes(query);

    return isCombinedMatch || isModelMatch || isBrandMatch;
  });

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mt-4 mb-6">
        <div>
          <h3 className="text-2xl font-semibold whitespace-pre">
            Related Products
          </h3>
        </div>
        <div>
          <SearchField
            placeholder={"Search products here"}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {loading ? (
          Array.from({ length: displayedProducts }).map((_, index) => (
            <Skeleton4x4 key={index} />
          ))
        ) : filteredFeaturedProduct.length === 0 ? (
          <NoSearch />
        ) : (
          filteredFeaturedProduct
            .slice(0, displayedProducts)
            .map((pdata, index) => (
              <div key={index}>
                <CompareFeaturedCard products={pdata} />
              </div>
            ))
        )}
        <div ref={ref}></div>
      </div>
    </div>
  );
};

export default CompareFeaturedProducts;
