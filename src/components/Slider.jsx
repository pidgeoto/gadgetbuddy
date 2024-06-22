"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ flex: `0 0 ${100 / images.length}%` }}
          >
            {images.image && (
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[125px] object-cover"
                height={200}
                width={1000}
                {...(image.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
