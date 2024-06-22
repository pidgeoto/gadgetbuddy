"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import getIndividualModelDetail from "@/api/getIndividualModelDetail";

const MobileComparisonPage = ({ modelIdForCard, index }) => {
  const [individualFeaturedProduct, setIndividualFeaturedProduct] =
    useState(null);
  useEffect(() => {
    const fetchIndividualModelDetail = async () => {
      try {
        const response = await getIndividualModelDetail(
          modelIdForCard.slug
        );
        setIndividualFeaturedProduct(response);
      } catch (error) {
        console.error("Error fetching individual model detail:", error);
      }
    };

    if (modelIdForCard) {
      fetchIndividualModelDetail();
    }
  }, [modelIdForCard]);

  if (!individualFeaturedProduct) {
    return null;
  }

  const item = individualFeaturedProduct;

  const sanitizeTitleForURL = (title) => {
    const sanitizedTitle = title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return sanitizedTitle;
  };

  const renderValue = (key, value) => {
    if (value === null || value === "") {
      return "-";
    } else if (key.includes("_Score")) {
      const score = parseInt(value);
      const fullStars = Math.floor(score / 200);
      const remainder = score % 200;

      const stars = [];

      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <span key={i}>
            <Image
              src="/images/star.webp"
              height={100}
              width={100}
              alt="star"
              className="h-5 w-5"
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
              className="h-5 w-5"
            />
          </span>
        );
      }
      return <div className="flex flex-row ">{stars}</div>;
    } else if (typeof value === "boolean") {
      return value ? (
        <Image
          src="/images/check.webp"
          height={100}
          width={100}
          className="h-4 w-4"
          alt="image modal"
        />
      ) : (
        <Image
          src="/images/cross.webp"
          height={100}
          width={100}
          className="h-4 w-4"
          alt="image modal"
        />
      );
    }

    return value;
  };

  const keys = Object.keys(item);

  return (
    <table>
      <tbody>
        <tr>
          {index === 0 ? (
            <th>
              <div className="h-60 p-4 rounded-2xl"></div>
            </th>
          ) : null}
          <td className="tblDesc">
            <Link
              href={`/mobile/${item.slug}`}
              target="_blank"
            >
              <div className="h-60 p-4 rounded-2xl border mb-2 border-slate-200 bg-gray shadow-sm hover:shadow-xl bg-white">
                {item.img1 && (
                  <Image
                    src={item.img1}
                    className="h-full w-full object-contain p-4 autofill:"
                    width={1000}
                    height={1000}
                    alt={item.model_name}
                    {...(item.img1.includes("32mobiles")
                      ? {}
                      : { rel: "nofollow noopener noreferrer" })}
                  />
                )}
                <h3 className="text-center whitespace-pre capitalize">
                  <Badge>
                    {item.brandname} {item.model_name}
                  </Badge>
                </h3>
              </div>
            </Link>
          </td>
        </tr>
        <tr>
          {index === 0 ? (
            <th>
              <h5 className="comparisionDataList ">Price</h5>
            </th>
          ) : null}
          <td className="tblDesc">
            <div className="my-4">
              <h5 className="comparisionData ">₹ {item.price} </h5>
            </div>
          </td>
        </tr>
        {keys.map((key, i) => {
          if (
            key === "Promoted" ||
            key === "mobile_Promoted" ||
            key === "mobile_Sensors"
          ) {
            return null;
          }

          let displayKey = key.includes("mobile_ThirtyTwo_Mobiles_Score")
            ? "32 Mobiles Score"
            : key;

          displayKey = displayKey.replace("mobile_", "").replace(/_/g, " ");

          const shouldApplyMarginCamera = key
            .toLowerCase()
            .includes("camera resolution");
          const shouldApplyMarginSensor = key.toLowerCase().includes("sensors");

          if (key.includes("mobile_")) {
            const shouldInsertSeparator =
              (i + 1) % 13 === 0 && i !== keys.length - 1;
            let marginClass = "h-16";
            if (shouldApplyMarginCamera) {
              marginClass = "h-20 mb-20";
            } else if (shouldApplyMarginSensor) {
              marginClass = "h-16 mb-4";
            }

            return (
              <>
                <tr key={key}>
                  {index === 0 ? (
                    <th>
                      <h5 className="comparisionDataList capitalize">
                        {displayKey}
                      </h5>
                    </th>
                  ) : null}
                  <div className={`${marginClass} w-4 `}>
                    <td className="tblDesc pt-2 ">
                      <h5 className="comparisionData ">
                        {renderValue(key, item[key])}
                      </h5>
                    </td>
                  </div>
                </tr>
                {shouldInsertSeparator && (
                  <tr key={`${key}-separator`}>
                    <div className="h-4">
                      <td colSpan={2}></td>
                    </div>
                  </tr>
                )}
              </>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
};

export default MobileComparisonPage;
