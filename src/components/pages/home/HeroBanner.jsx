"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getBannerData } from "@/api/getBanner";

const HeroBanner = () => {
  const [cdnLinks, setCdnLinks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData();
        setCdnLinks(data.homepagevert_cdn_links || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % cdnLinks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cdnLinks]);

  const placeholderImg = "/images/questionMobile.svg";
  const img = cdnLinks[startIndex];

  return (
    <div className="flex items-center h-52 lg:h-auto justify-center lg:justify-end">
      {loading ? (
        <Image
          src={placeholderImg}
          alt="placeholder"
          className="w-[60%] h-full object-contain"
          width={1000}
          height={1000}
          {...(placeholderImg.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
        />
      ) : (
        img && (
          <Image
            src={img}
            alt="banner"
            className="w-[60%] h-full object-contain"
            height={1000}
            width={1000}
          />
        )
      )}
    </div>
  );
};

export default HeroBanner;
