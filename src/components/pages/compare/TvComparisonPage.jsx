"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import getIndividualModelDetail from "@/api/getIndividualModelDetail";

const TvComparisonPage = ({ modelIdForCard, index }) => {
  const [individualFeaturedProduct, setIndividualFeaturedProduct] =
    useState(null);
  useEffect(() => {
    const fetchIndividualModelDetail = async () => {
      try {
        // Fetch individual model detail based on modelIdForCard
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
    return null; // Or render a loading state if needed
  }

  const item = individualFeaturedProduct;

  const renderValue = (value) => {
    if (value === null || value === "") {
      return "-";
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

  return (
    <table>
      <tr>
        {index === 0 ? (
          <th>
            <div className="h-60 40 p-4 rounded-2xl"></div>
          </th>
        ) : null}
        <td className="tblDesc">
          <Link
            href={`/television/${item.slug}`}
            target="_blank"
          >
            <div className="h-60 40 p-4 rounded-2xl border mb-2 border-slate-200 bg-gray shadow-sm hover:shadow-xl bg-white">
              {item.img1 && (
                <Image
                  src={item.img1}
                  className="h-full w-full object-contain p-4 autofill:"
                  width={1000}
                  height={1000}
                  alt={item.model}
                  {...(item.img1.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
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
            <h5 className="comparisionDataList">Price</h5>
          </th>
        ) : null}
        <td className="tblDesc">
          <h5 className="comparisionData">{item.price}</h5>
        </td>
      </tr>
      {Object.keys(item).map((key) => {
        if (key.includes("tv_")) {
          const sanitizedKey = key.replace("tv_", "");
          return (
            <tr key={key}>
              {index === 0 ? (
                <th>
                  <h5 className="comparisionDataList">{sanitizedKey}</h5>
                </th>
              ) : null}
              <td className="tblDesc">
                <h5 className="comparisionData">{renderValue(item[key])}</h5>
              </td>
            </tr>
          );
        }
        return null;
      })}
    </table>
  );
};

export default TvComparisonPage;
