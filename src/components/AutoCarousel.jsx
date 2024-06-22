"use client"
import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { getBannerData } from "@/api/getBanner";

export function AutoCarousel() {
  const [cdnLinks, setCdnLinks] = useState([]);
  const [redirectLinks, setRedirectLinks] = useState([]);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData();
        setCdnLinks(data.homepage_cdn_links);
        setRedirectLinks(data.homepage_redirect_links);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {cdnLinks.map((img, index) => (
          <CarouselItem
            key={index}
            style={{ margin: "10px" }}
            className="w-full lg:h-48 flex justify-center items-center ad-banner-item"
          >
            {redirectLinks[index] && (
              <Link href={redirectLinks[index]} target="_blank" rel="nofollow noopener noreferrer">
                <Image
                  src={img}
                  height={200}
                  width={1050}
                  alt="image"
                  className="h-24 lg:h-full w-full lg:w-[1050px] object-fill lg:object-contain ad-banner-image"
                  {...(img.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
                />
              </Link>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
