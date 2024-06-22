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

const CategoryHeadphone = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedHeadphone, setDisplayedHeadphone] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sliderValue, setSliderValue] = useState([0, 300000]);
  const { ref, inView } = useInView();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const Headphone_details_results = await getModelDetails();
        setProductData(Headphone_details_results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inView) {
      setDisplayedHeadphone((prevCount) => prevCount + 20);
    }
  }, [inView]);

  const filteredHeadphone = productData
    .filter((item) =>
      item.category.includes("9e4c6903-5d10-47f6-81fe-a4e000350f21")
    )
    .filter((product_Headphone) => {
      const query = searchQuery.toLowerCase();
      const modelName = product_Headphone.model_name.toLowerCase();
      const brandName = product_Headphone.brandname.toLowerCase();
      const combinedName = brandName + " " + modelName;

      return (
        (combinedName.includes(query) ||
          modelName.includes(query) ||
          brandName.includes(query)) &&
        (!selectedBrand ||
          product_Headphone.brandname === selectedBrand.value) &&
        parseFloat(product_Headphone.price) >= sliderValue[0] &&
        parseFloat(product_Headphone.price) <= sliderValue[1]
      );
    });

  const sanitizeTitleForURL = (title) =>
    title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  const brands = Array.from(
    new Set(
      productData
        .filter((item) =>
          item.category.includes("9e4c6903-5d10-47f6-81fe-a4e000350f21")
        )
        .map((item) => item.brandname)
    )
  );
  const isAllDropdownDisabled = loading || brands.length === 0;

  return (
    <div className="mb-10">
      <div>
        <div>
          <h1 className="pageTitle">
            Headphones
          </h1>
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
        ) : filteredHeadphone.length === 0 ? (
          <NoSearch />
        ) : (
          filteredHeadphone
            .slice(0, displayedHeadphone)
            .map((Headphone, index) => (
              <div key={index}>
                <Link
                  href={`/headphones/${Headphone.slug}`}
                >
                  <CategoryProduct data={Headphone} />
                </Link>
              </div>
            ))
        )}
      </div>
 
      {!loading && filteredHeadphone.length > displayedHeadphone && (
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

export default CategoryHeadphone;