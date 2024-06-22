"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getBannerData } from "@/api/getBannerData";
import Link from "next/link";

const BrandBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const bannerRef = useRef();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData();
        setBannerData(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, []);

  useEffect(() => {
    let interval;

    if (typeof window !== "undefined") {
      interval = setInterval(() => {
        if (!isHovered && bannerData.length > 0) {
          setStartIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        }
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [isHovered, bannerData]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const numberOfVisibleImages = isMobile ? 2 : 5;

  const visibleImages = Array.from(
    { length: numberOfVisibleImages },
    (_, index) => {
      const imgIndex = (startIndex + index) % bannerData.length;
      return bannerData[imgIndex]?.brand_cdn_link || "";
    }
  );

  const brandIds = bannerData.map((item) => item.brand_id);

  return (
    <div
      ref={bannerRef}
      className="flex items-center ad-banner-container border-y-[1px] cursor-pointer border-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {visibleImages.map((img, index) => {
        const brandIndex = (startIndex + index) % bannerData.length;
        const brandId = brandIds[brandIndex];

        return (
          <div
            key={`${img}-${index}`}
            style={{ margin: "10px" }}
            className={`w-full ${
              isMobile ? "h-24" : "lg:h-[150px]"
            } flex justify-center items-center ad-banner-item`}
          >
            {img ? (
              <Link href={`/brand/${brandId}`} key={index}>
                <Image
                  src={img}
                  height={1000}
                  width={1000}
                  alt={`image-${index + 1}`}
                  loading="eager"
                  {...(img.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
                  className={`h-full ${
                    isMobile ? "w-24" : "lg:w-[150px]"
                  } object-fill lg:object-contain ad-banner-image`}
                />
              </Link>
            ) : (
              <p></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BrandBanner;
