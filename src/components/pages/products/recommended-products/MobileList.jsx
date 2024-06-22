"use client";
import React, { useEffect, useState } from "react";
import RecommendModalCards from "@/components/pages/cards/RecommendModalCards";
import Skeleton4x4 from "@/components/skeleton/Skeleton4x4";
import { useMobileList } from "./MobileListProvider";
import { useSearchParams } from "next/navigation";
import getRecommendation from "@/api/getRecommendation";


const MobileList = () => {
  const [loading, setLoading] = useState(true);
  const { productData, setProducts } = useMobileList();
  const searchParams = useSearchParams();
  const [visibleProducts, setVisibleProducts] = useState(16);


  const battery = searchParams.get("battery");
  const gaming = searchParams.get("gaming");
  const display = searchParams.get("display");
  const camera = searchParams.get("camera");
  const pricemin = searchParams.get("pricemin");
  const pricemax = searchParams.get("pricemax");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResult = await getRecommendation(display, camera, battery, gaming, pricemin, pricemax);
        const filteredProducts = detailsResult.filter(
          (product) => product.categoryname === "mobile"
        );
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };


    fetchData();
  }, []);


 
  const handleViewMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };


  return (
    <div className="mobile-list my-6">
      {loading ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {Array.from({ length: 16 }).map((_, index) => (
            <Skeleton4x4 key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap gap-3">
            {productData.slice(0, visibleProducts).map((mobile, index) => (
              <div key={index}>
                <RecommendModalCards data={mobile} />
              </div>
            ))}
          </div>


          {productData.length > visibleProducts && (
            <div className="text-center">
              <button className="primary my-8" onClick={handleViewMore}>
                View More
              </button>
            </div>
          )}


          {productData.length === 0 && (
            <p>No products match the selected criteria.</p>
          )}
        </>
      )}
    </div>
  );
};




export default MobileList;



