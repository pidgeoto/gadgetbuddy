"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileAccordian from "./Product_Accordian/MobileAccordian";
import LaptopAccordian from "./Product_Accordian/LaptopAccordian";
import SpeakerAccordian from "./Product_Accordian/SpeakerAccordian";
import TabletsAccordian from "./Product_Accordian/TabletsAccordian";
import SmartWatchesAccordian from "./Product_Accordian/SmartWatchesAccordian";
import TvAccordian from "./Product_Accordian/TvAccordian";
import OtherAccordian from "./Product_Accordian/OtherAccordian";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeadPhonesAccordian from "./Product_Accordian/HeadPhonesAccordian";
import { BatteryCharging, Camera, Cpu, Smartphone } from "lucide-react";
import RelatedProductsByBrand from "./RelatedProductsByBrand";

const MobileDisplay = ({ data }) => {
  const dataArray = Array.isArray(data) ? data : [data];
  const [selectedImage, setSelectedImage] = useState(data.img1);
  const [showFullMeta, setShowFullMeta] = useState(false);
  const [hoveredScore, setHoveredScore] = useState(null);
  const colors = data.color.split(" | ");

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };
  const handleThumbnailHover = (image) => {
    setSelectedImage(image);
  };
  const toggleMetaDesc = () => {
    setShowFullMeta(!showFullMeta);
  };

  const buyLinks = [
    {
      label: "/images/buylinks/amazon.webp",
      link: data.buylink1,
      price: data.buylink1_price,
    },
    {
      label: "/images/buylinks/flipkart.webp",
      link: data.buylink2,
      price: data.buylink2_price,
    },
    {
      label: "/images/buylinks/cart.webp",
      link: data.buylink3,
      price: data.buylink3_price,
    },
  ];
  const fullStars = Math.floor(data.thirtytwo_Score / 200);
  const remainder = data.thirtytwo_Score % 200;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i}>
        <Image
          src="/images/star.webp"
          height={100}
          width={100}
          alt="star"
          className="h-4 w-4"
        />
      </span>
    );
  }

  if (remainder > 16) {
    stars.push(
      <span key="half">
        <Image
          src="/images/halfstar.webp"
          height={100}
          width={100}
          alt="half star"
          className="h-4 w-4"
        />
      </span>
    );
  }

  const displayScore =
    data.mobile_Display_Score >= 800 ? data.mobile_Display_Score : null;
  const cameraScore =
    data.mobile_Camera_Score >= 800 ? data.mobile_Camera_Score : null;
  const batteryScore =
    data.mobile_Battery_Score >= 800 ? data.mobile_Battery_Score : null;
  const gamingScore =
    data.mobile_Gaming_Score >= 800 ? data.mobile_Gaming_Score : null;

  const hasHighScore =
    displayScore || cameraScore || batteryScore || gamingScore;

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-5 mt-4 mb-10 px-4 lg:px-6 py-8 bg-gray-100 border border-slate-200 shadow-sm rounded-xl">
        <div className="flex  flex-row lg:flex-col gap-2">
          {[data.img1, data.img2, data.img3, data.img4].map((img, index) => (
            <div
              key={index}
              className={`product_image_mini ${
                img === selectedImage ? "selected_thumbnail" : ""
              }`}
              onClick={() => handleThumbnailClick(img)}
              onMouseEnter={() => handleThumbnailHover(img)}
            >
              <Image
                src={img}
                alt={`${data.brandname} thumbnail ${index + 1}`}
                height={100}
                width={100}
                className="h-[52px] w-[52px] lg:h-[72px] lg:w-[72px] object-contain"
                {...(img.includes("32mobiles")
                  ? {}
                  : { rel: "nofollow noopener noreferrer" })}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col my-4 lg:my-0">
          <div className="flex items-center justify-center mx-auto h-[300px] lg:h-96 w-[300px] lg:w-[406px] bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
            <div className="transition-transform transform hover:scale-110 duration-1000">
              <Image
                src={selectedImage}
                height={1000}
                width={1000}
                alt={data.model_name}
                className="object-contain h-64 lg:h-72 w-72"
                {...(selectedImage.includes("32mobiles")
                  ? {}
                  : { rel: "nofollow noopener noreferrer" })}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:relative">
          <div className="h-fit lg:h-96 w-[300px] lg:w-[360px] mx-auto pl-px lg:pl-2">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {`${data.brandname} ${data.model_name}`}
            </h1>
            <h6 className="text-sm flex gap-2 text-gray-400 capitalize mb-2">
              {`32Mobiles score : `}
              <span className="flex gap-1 items-center">
                {stars.map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </span>
            </h6>
            <div className="h-fit lg:h-80 overflow-x-hidden overflow-y-scroll">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                ₹ {data.price}
              </h1>
              <div>
                <div>
                  {hasHighScore && (
                    <>
                      <h4 className="mt-2">Best In Category</h4>
                      <div className="flex flex-row gap-2 my-2">
                        {displayScore !== null && (
                          <div
                            className="scoreTag bg-yellow-400"
                            onMouseEnter={() => setHoveredScore("display")}
                            onMouseLeave={() => setHoveredScore(null)}
                          >
                            {hoveredScore !== "display" && (
                              <Smartphone size={20} />
                            )}
                            {hoveredScore === "display" && (
                              <h6 className="transform scale-140">
                                Best Display
                              </h6>
                            )}
                          </div>
                        )}
                        {cameraScore !== null && (
                          <div
                            className="scoreTag bg-blue-600"
                            onMouseEnter={() => setHoveredScore("camera")}
                            onMouseLeave={() => setHoveredScore(null)}
                          >
                            {hoveredScore !== "camera" && <Camera size={20} />}
                            {hoveredScore === "camera" && (
                              <h6 className="transform scale-140">
                                Best Camera
                              </h6>
                            )}
                          </div>
                        )}
                        {batteryScore !== null && (
                          <div
                            className="scoreTag bg-green-500"
                            onMouseEnter={() => setHoveredScore("battery")}
                            onMouseLeave={() => setHoveredScore(null)}
                          >
                            {hoveredScore !== "battery" && (
                              <BatteryCharging size={20} />
                            )}
                            {hoveredScore === "battery" && (
                              <h6 className="transform scale-140">
                                Best Battery
                              </h6>
                            )}
                          </div>
                        )}
                        {gamingScore !== null && (
                          <div
                            className="scoreTag bg-red-500"
                            onMouseEnter={() => setHoveredScore("gaming")}
                            onMouseLeave={() => setHoveredScore(null)}
                          >
                            {hoveredScore !== "gaming" && <Cpu size={20} />}
                            {hoveredScore === "gaming" && (
                              <h6 className="transform scale-140">
                                Best Gaming
                              </h6>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div
                className={`meta-desc-container ${
                  showFullMeta ? "h-auto" : "h-8"
                }`}
              >
                <div
                  className="text-xs text-gray-400 capitalize mt-4"
                  id="metaDesc"
                >
                  {showFullMeta ? data.meta_desc : data.meta_desc.slice(0, 96)}
                  {data.meta_desc.length > 96 && !showFullMeta && (
                    <span id="dots">...</span>
                  )}
                </div>
                {data.meta_desc.length > 96 && (
                  <div className="text-right mt-[-18px]">
                    <button
                      onClick={toggleMetaDesc}
                      className="text-slate-900 text-xs capitalize"
                    >
                      {showFullMeta ? "View Less" : "View More"}
                    </button>
                  </div>
                )}
              </div>
              <div className="border-b-[1px] border-green-100 pb-2">
                <h6 className="text-sm font-semibold text-black capitalize mb-2">
                  Available Color
                </h6>
                <div className="flex gap-2">
                  {colors.map((color, index) => (
                    <div key={index}>
                      <div
                        className="h-6 w-6 shadow-2xl border rounded-full"
                        style={{
                          background: color,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              {data.category === "b3dac06e-e1b3-461f-aa1d-b97f3021e695" ? (
                <>
                  <div className="mt-2 border-b-[1px] border-green-100 pb-2">
                    <h6 className="text-sm font-semibold text-black capitalize">
                      Camera Resolution
                    </h6>
                    <h6 className="text-md text-gray-800 capitalize">
                      {data.mobile_back_camera_resolution}
                    </h6>
                  </div>
                  <div className="mt-2 border-b-[1px] border-green-100 pb-2">
                    <h6 className="text-sm font-semibold text-black capitalize">
                      Ram
                    </h6>
                    <h6 className="text-md text-gray-800 capitalize">
                      {data.mobile_ram} GB
                    </h6>
                  </div>
                  <div className="mt-2 border-b-[1px] border-green-100 pb-2">
                    <h6 className="text-sm font-semibold text-black capitalize">
                      Internal Storage
                    </h6>
                    <h6 className="text-md text-gray-800 capitalize">
                      {data.mobile_storage_capacity} GB
                    </h6>
                  </div>
                </>
              ) : (
                ""
              )}
              {buyLinks.length > 0 && (
                <div>
                  <div className="flex flex-wrap w-60 gap-2 mt-4 mb-2 lg:absolute lg:right-[-127px] lg:bottom-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="secondary mb-2 lg:mb-0">
                          BUY NOW
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-28">
                        <DropdownMenuLabel>
                          {buyLinks
                            .filter(
                              (buttonData) =>
                                buttonData.link && buttonData.price !== 0
                            )
                            .map((buttonData, index) => (
                              <Link
                                href={buttonData.link}
                                key={index}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="text-black hover:text-gray-600 flex items-center py-2"
                              >
                                <div className="mr-2">
                                  <Image
                                    src={buttonData.label}
                                    alt={buttonData.label}
                                    height={1000}
                                    width={1000}
                                    className="w-6 h-6 object-contain"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm">{`₹ ${buttonData.price} *`}</span>
                                </div>
                              </Link>
                            ))}
                          {buyLinks.every(
                            (buttonData) => buttonData.price === 0
                          ) && (
                            <span className="text-black hover:text-gray-600 flex items-center py-2">
                              No store Available
                            </span>
                          )}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <RelatedProductsByBrand
        category={data.category}
        selectedProductPrice={data.price}
        selectedProductId={data.model_id}
      />

      {dataArray.map((item, index) => (
        <div key={index} className="mt-4">
          {item.category === "9e4c6903-5d10-47f6-81fe-a4e000350f21" ? (
            <HeadPhonesAccordian data={data} />
          ) : item.category === "b3dac06e-e1b3-461f-aa1d-b97f3021e695" ? (
            <MobileAccordian data={data} />
          ) : item.category === "a347f89e-8d16-4eb9-a4b2-02e175ac81ba" ? (
            <LaptopAccordian data={data} />
          ) : item.category === "24805198-bc9e-4a09-b756-352d1366e875" ? (
            <SpeakerAccordian data={data} />
          ) : item.category === "eac38cfe-9023-4613-ac86-1179d27ece40" ? (
            <TabletsAccordian data={data} />
          ) : item.category === "758355e3-b8f9-4171-a1d6-ad0608101c9a" ? (
            <SmartWatchesAccordian data={data} />
          ) : item.category === "eac38cfe-9023-4613-ac86-1179d27ece40" ? (
            <TabletsAccordian data={data} />
          ) : item.category === "64cb04cd-9c68-4137-9c1a-f746740c2cd8" ? (
            <OtherAccordian data={data} />
          ) : item.category === "a4453117-b711-4832-83be-1b0f5047840e" ? (
            <TvAccordian data={data} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MobileDisplay;
