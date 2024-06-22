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
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ProductPageAllProduct = () => {
  const [productData, setProductData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedAllProducts, setDisplayedAllProducts] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [sliderValue, setSliderValue] = useState([0, 300000]);
  const { ref, inView } = useInView();

  const getCategoryComponent = (categoryId) => {
    const categoryComponents = {
      "9e4c6903-5d10-47f6-81fe-a4e000350f21": "headphones",
      "b3dac06e-e1b3-461f-aa1d-b97f3021e695": "mobile",
      "a347f89e-8d16-4eb9-a4b2-02e175ac81ba": "laptop",
      "24805198-bc9e-4a09-b756-352d1366e875": "speakers",
      "eac38cfe-9023-4613-ac86-1179d27ece40": "tablets",
      "758355e3-b8f9-4171-a1d6-ad0608101c9a": "smartwatch",
      "a4453117-b711-4832-83be-1b0f5047840e": "television",
    };

    return categoryComponents[categoryId] || null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AllProducts_details_results = await getModelDetails();
        setProductData(AllProducts_details_results);
        setLoading(false);

        const uniqueCategories = Array.from(
          new Set(AllProducts_details_results.map((item) => item.categoryname))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      const brandsForCategory = Array.from(
        new Set(
          productData
            .filter((item) => item.categoryname === selectedCategory.value)
            .map((item) => item.brandname)
        )
      );
      setBrands(brandsForCategory);
    } else {
      setBrands([]);
    }
    setSelectedBrand(null);
  }, [selectedCategory, productData]);

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
          <h1 className="pageTitle">
            All Products
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <Select
          value={selectedCategory}
          onChange={(selectedOption) => setSelectedCategory(selectedOption)}
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
          isSearchable
          placeholder="Category"
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
          value={selectedBrand}
          onChange={(selectedOption) => setSelectedBrand(selectedOption)}
          options={brands.map((brand) => ({ value: brand, label: brand }))}
          isSearchable
          placeholder="Brand"
          isDisabled={!selectedCategory}
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
                const CategoryComponent = getCategoryComponent(
                  product.category
                );
                return (
                  <div key={index}>
                    <Link
                      href={`/${
                        CategoryComponent ? CategoryComponent : ""
                      }/${
                        product.slug
                      }`}
                    >
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

export default ProductPageAllProduct;
