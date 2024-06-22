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
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const DEFAULT_BRAND_LABEL = "Select Brand";
const DEFAULT_SLIDER_VALUES = [0, 300000];
const INITIAL_SELECTED_BRAND = { value: "", label: DEFAULT_BRAND_LABEL };

const ProductByBrand = ({ brandId }) => {
  const [heading, setheading] = useState("All Products");
  const [productData, setProductData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedAllProducts, setDisplayedAllProducts] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sliderValue, setSliderValue] = useState(DEFAULT_SLIDER_VALUES);
  const [selectedBrand, setSelectedBrand] = useState(INITIAL_SELECTED_BRAND);
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AllProducts_details_results = await getModelDetails();
        setProductData(AllProducts_details_results);

        const uniqueBrands = Array.from(
          new Set(
            AllProducts_details_results.map((item) =>
              item.brandname.toLowerCase()
            )
          )
        );
        setBrands(uniqueBrands);
        setLoading(false);

        const foundBrand = AllProducts_details_results.find(
          (item) => item.brand === brandId
        );

        if (foundBrand) {
          const selectedBrandName = foundBrand.brandname.toLowerCase();
          const defaultBrand = uniqueBrands.find(
            (brand) => brand === selectedBrandName
          );
          setheading(defaultBrand);
          if (defaultBrand) {
            setSelectedBrand({ value: defaultBrand, label: defaultBrand });
          }
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [brandId]);

  useEffect(() => {
    if (selectedBrand.value !== "") {
      const filteredProducts = productData.filter(
        (item) => item.brandname.toLowerCase() === selectedBrand.value
      );
      const categoriesForBrand = Array.from(
        new Set(filteredProducts.map((item) => item.categoryname))
      );
      setCategories(categoriesForBrand);
    } else {
      setCategories([]);
    }
    setSelectedCategory(null);
  }, [selectedBrand, productData]);

  useEffect(() => {
    if (inView) {
      setDisplayedAllProducts((prevCount) => prevCount + 20);
    }
  }, [inView]);

  const filteredAllProducts = productData.filter((product) => {
    const query = searchQuery.toLowerCase();
    const modelName = product.model_name.toLowerCase();
    const brandName = product.brandname.toLowerCase();
    const combinedName = brandName + " " + modelName;

    return (
      (combinedName.includes(query) ||
        modelName.includes(query) ||
        brandName.includes(query)) &&
      (!selectedCategory || product.categoryname === selectedCategory.value) &&
      (!selectedBrand || product.brandname === selectedBrand.value) &&
      parseFloat(product.price) >= sliderValue[0] &&
      parseFloat(product.price) <= sliderValue[1]
    );
  });
  return (
    <div className="mb-10">
      <div>
        <div>
          <h1 className="pageTitle">{heading} Products</h1>
        </div>
      </div>
      <BrandBanner />
      <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
        <Select
          value={selectedBrand}
          onChange={(selectedOption) => {
            setSelectedBrand(selectedOption);
            setheading(selectedOption.label);
          }}
          options={brands.map((brand) => ({
            value: brand,
            label: brand,
          }))}
          isSearchable
          placeholder="Brand"
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
        <Select
          value={selectedCategory}
          onChange={(selectedOption) => setSelectedCategory(selectedOption)}
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
          isSearchable
          placeholder="Category"
          isDisabled={!selectedBrand}
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
        {!loading ? (
          filteredAllProducts.length === 0 ? (
            <NoSearch />
          ) : (
            filteredAllProducts
              .slice(0, displayedAllProducts)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <Link href={`/${product.categoryname}/${product.slug}`}>
                      <CategoryProduct data={product} />
                    </Link>
                  </div>
                );
              })
          )
        ) : (
          Array.from({ length: 20 }).map((_, index) => (
            <Skeleton5x5 key={index} />
          ))
        )}
      </div>
      {!loading && filteredAllProducts.length > displayedAllProducts && (
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

export default ProductByBrand;
