"use client";
import getModelDetails from "@/api/getModelDetails";
import Skeleton5x5 from "@/components/skeleton/Skeleton5x5";
import { SearchField } from "@/components/ui/searchField";
import React, { useEffect, useState } from "react";
import CategoryProduct from "../cards/CategoryProduct";
import Link from "next/link";
import NoSearch from "@/components/NoSearch";
import Select from "react-select";
import SliderWithInputs from "@/components/pages/products/slider/SliderWithInputs";
import BrandBanner from "./BrandBanner";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const CategorySpeaker = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedSpeaker, setDisplayedSpeaker] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sliderValue, setSliderValue] = useState([0, 300000]);
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Speaker_details_results = await getModelDetails();
        setProductData(Speaker_details_results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      setDisplayedSpeaker((prevCount) => prevCount + 20);
    }
  }, [inView]);

  const filteredSpeaker = productData
    .filter((item) =>
      item.category.includes("24805198-bc9e-4a09-b756-352d1366e875")
    )
    .filter((product_Speaker) => {
      const query = searchQuery.toLowerCase();
      const modelName = product_Speaker.model_name.toLowerCase();
      const brandName = product_Speaker.brandname.toLowerCase();
      const combinedName = brandName + " " + modelName;

      return (
        (combinedName.includes(query) ||
          modelName.includes(query) ||
          brandName.includes(query)) &&
        (!selectedBrand || product_Speaker.brandname === selectedBrand.value) &&
        parseFloat(product_Speaker.price) >= sliderValue[0] &&
        parseFloat(product_Speaker.price) <= sliderValue[1]
      );
    });

  const brands = Array.from(
    new Set(
      productData
        .filter((item) =>
          item.category.includes("24805198-bc9e-4a09-b756-352d1366e875")
        )
        .map((item) => item.brandname)
    )
  );
  const isAllDropdownDisabled = loading || brands.length === 0;

  return (
    <div className="mb-10">
      <div>
        <div>
          <h1 className="pageTitle">Speakers</h1>
        </div>
      </div>
      <BrandBanner />
      <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
        <Select
          value={selectedBrand}
          onChange={(selectedOption) => setSelectedBrand(selectedOption)}
          options={brands.map((brand) => ({ value: brand, label: brand }))}
          isSearchable
          placeholder="Brand"
          isDisabled={isAllDropdownDisabled}
          className="capitalize w-80 lg:w-28 mb-2 lg:mb-0"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#d3d3d3",
              primary: "black",
            },
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "" : "gray",
              borderRadius: "20px",
              fontSize: "12px",
            }),
          }}
        />
        <div className="mb-2 lg:mb-0">
          <SliderWithInputs
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </div>
        <div>
          <SearchField
            placeholder="Search products here"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 lg:w-56 mb-2 lg:mb-0"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 lg:gap-5">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <Skeleton5x5 key={index} />
          ))
        ) : filteredSpeaker.length === 0 ? (
          <NoSearch />
        ) : (
          filteredSpeaker.slice(0, displayedSpeaker).map((Speaker, index) => (
            <div key={index}>
              <Link href={`/speaker${Speaker.slug}`}>
                <CategoryProduct data={Speaker} />
              </Link>
            </div>
          ))
        )}
      </div>
      {!loading && filteredSpeaker.length > displayedSpeaker && (
        <div className="w-full flex justify-center py-4">
          <div ref={ref}>
            <Image
              src="/spinner.svg"
              height={100}
              width={100}
              alt="spinner"
              className="h-20 w-20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySpeaker;
