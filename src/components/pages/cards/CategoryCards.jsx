"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCategory = [
  {
    name: "Smart Watch",
    img: "/images/category-img/smartwatch.gif",
    route: "/smartwatch",
  },
  {
    name: "Laptop",
    img: "/images/category-img/laptop.gif",
    route: "/laptop",
  },
  {
    name: "Mobile",
    img: "/images/category-img/mobile.gif",
    route: "/mobile",
  },
  {
    name: "TV",
    img: "/images/category-img/tv.gif",
    route: "/television",
  },
  {
    name: "Headphone",
    img: "/images/category-img/earphones.gif",
    route: "/headphones",
  },
  {
    name: "Tablet",
    img: "/images/category-img/tablet.gif",
    route: "/tablets",
  },
  {
    name: "Speaker",
    img: "/images/category-img/speaker.gif",
    route: "/speakers",
  },
  {
    name: "Others",
    img: "/images/category-img/mobile.svg",
    route: "/products/",
  },
];
const CategoryCards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(5);

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setVisibleCardCount(2);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setVisibleCardCount(3);
    } else {
      setVisibleCardCount(5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showNextCards = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex + 1) % (ProductCategory.length - visibleCardCount)
    );
  };

  const showPrevCards = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + ProductCategory.length) %
        (ProductCategory.length - visibleCardCount)
    );
  };

  const visibleCategories = ProductCategory.slice(
    startIndex,
    startIndex + visibleCardCount
  );

  return (
    <div className="flex items-center justify-center">
      <button onClick={showPrevCards} className="directionBtn">
        <ChevronLeft />
      </button>

      {visibleCategories.map((category, index) => (
        <div
          key={index}
          style={{ margin: "10px" }}
          className={`w-full md:w-[50%] lg:w-[17%] flex justify-center items-center`}
        >
          <Link href={category.route}>
            <Card className="h-28 w-28 lg:h-36 lg:w-36 cursor-pointer">
              <CardHeader className="pt-3 pb-2 lg:pb-0 p-2 lg:p-6">
                <h4
                  className="text-center whitespace-pre"
                  style={{ fontSize: "14px" }}
                >
                  {category.name}
                </h4>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-0">
                {category.img && (
                  <Image
                    src={category.img}
                    alt={category.name}
                    height={60}
                    width={60}
                    {...(category.img.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
                  />
                )}
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}

      <button onClick={showNextCards} className="directionBtn">
        <ChevronRight />
      </button>
    </div>
  );
};

export default CategoryCards;
