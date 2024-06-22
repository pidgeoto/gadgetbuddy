"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBannerData } from "@/api/getBanner";

const AdBanner = () => {
  const [cdnLinks, setCdnLinks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [redirectLinks, setRedirectLinks] = useState([]);
  const bannerRef = useRef();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData();
        setCdnLinks(data.products_cdn_links || []);
        setRedirectLinks(data.products_redirect_links || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBanner();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setStartIndex((prevIndex) => (prevIndex + 1) % cdnLinks.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, cdnLinks]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const img = cdnLinks[startIndex];
  const redirectLink = redirectLinks[startIndex];

  return (
    <div
      ref={bannerRef}
      className="flex items-center ad-banner-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {img && redirectLink && (
        <div
          style={{ margin: "10px" }}
          className="w-full lg:h-48 flex justify-center items-center ad-banner-item"
        >
          <Link href={redirectLink} target="_blank" rel="nofollow noopener noreferrer">
            <Image
              src={img}
              height={200}
              width={1050}
              alt="image"
              className="h-24 lg:h-full w-full lg:w-[1050px] object-fill lg:object-contain ad-banner-image"
              {...(img.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
