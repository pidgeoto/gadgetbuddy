"use client";
import getModelDetails from "@/api/getModelDetails";
import NoSearch from "@/components/NoSearch";
import ProductCards from "@/components/pages/cards/ProductCards";
import Skeleton4x4 from "@/components/skeleton/Skeleton4x4";
import { SearchField } from "@/components/ui/searchField";
import React, { useState, useEffect } from "react";
import BrandBanner from "./BrandBanner";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// import FeaturedContent from "./FeaturedContent";

const FeaturedProduct = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState(20);
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResult = await getModelDetails();
        const details = detailsResult;
        setProductData(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inView && displayedProducts < productData.length) {
      setDisplayedProducts((prevCount) => prevCount + 20);
    }
  }, [inView, displayedProducts, productData]);

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
          <h1 className="pageTitle">Featured Products</h1>
        </div>
        <div>
          <SearchField
            placeholder={"Search products here"}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48"
          />
        </div>
      </div>
      <BrandBanner />
   

      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {loading ? (
          Array.from({ length: displayedProducts }).map((_, index) => (
            <Skeleton4x4 key={index} />
          ))
        ) : filteredFeaturedProduct.length === 0 ? (
          <NoSearch />
        ) : (
          filteredFeaturedProduct
            .filter((item) => item.promoted === true)
            .slice(0, displayedProducts)
            .map((pdata, index) => (
              <div key={index}>
                <ProductCards products={pdata} />
              </div>
            ))
        )}
      </div>
      {children}
      {!loading && filteredFeaturedProduct.length > displayedProducts && (
        <div className="w-full flex justify-center py-4">
          <div ref={ref}>
            <Image
              src="/spinner.svg"
              height={100}
              width={100}
              alt="spinner"
              className="h-20 w-20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProduct;
