"use client";
import React, { useState, useEffect } from "react";
import RecommendModalButton from "./RecommendModalButton";
import { getBannerData } from "@/api/getBanner";
import HeroBanner from "./HeroBanner";

const HeroSection = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await getBannerData();
        const data = response;
        setBannerData(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    getBanner();
  }, []);

  const products = [
    "smartphones",
    "laptops",
    "camera",
    "Smart TV",
    "Smart watches",
    "Headphones",
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [currentProductIndex, products.length]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-4">
      <div className="flex-1 flex flex-col" style={{ flex: 4.5 }}>
        <h2 className="text-4xl font-bold text-center lg:text-start mb-4">
          {bannerData?.homepage_banner_text ? (
            bannerData.homepage_banner_text.map((text, index) => (
              <>
                <span key={index}>{text}</span>
              </>
            ))
          ) : (
            <>Discover a world of</>
          )}
          <br />
          <span className="text-orange-400 capitalize">
            {products[currentProductIndex]}
          </span>
          !
        </h2>

        <h3 className="text-center lg:text-start mb-4 lg:mb-8">
          {bannerData?.homepage_button_text ? (
            bannerData.homepage_button_text.map((text, index) => (
              <span key={index}>{text}</span>
            ))
          ) : (
            <span>
              Find the perfect tech companion that suits your style and needs.
            </span>
          )}
        </h3>
        <div className="flex flex-col md:flex-row items-center">
          <RecommendModalButton />
        </div>
      </div>
      <div className="flex-1 flex items-center h-64 p-4" style={{ flex: 3 }}>
        <HeroBanner cdnLinks={bannerData?.homepagevert_cdn_links || []} />
      </div>
    </div>
  );
};

export default HeroSection;