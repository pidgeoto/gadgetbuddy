"use client";

import React, { useEffect, useState } from "react";
import getModelDetails from "@/api/getModelDetails";
import Select from "react-select";
import MobileComparisonPage from "./MobileComparisonPage";
import SmartWatchComparisonPage from "./SmartWatchComparisonPage";
import TvComparisonPage from "./TvComparisonPage";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import CompareFeaturedProducts from "./CompareFeaturedProducts";
import LaptopComparisonPage from "./LaptopComparisonPage";
import SpeakerComparisonPage from "./SpeakerComparisonPage";
import "./compStyle.css";
import HeadphoneComparisonPage from "./HeadphoneComparisonPage";
import { AutoCarousel } from "@/components/AutoCarousel";

const ComparisonFilter = ({children}) => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [modelsForDropdown, setModelsForDropdown] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [outputData, setOutputData] = useState([]);
  const [isCategoryDisabled, setIsCategoryDisabled] = useState(false);
  const [isAllDropdownDisabled, setisAllDropdownDisabled] = useState(false);

  const fetchData = async () => {
    try {
      const modelDataResult = await getModelDetails();
      const modelData = modelDataResult;
      setData(modelData);

      const uniqueCategories = Array.from(
        new Set(modelData.map((item) => item.categoryname))
      );
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching model data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateBrandsAndModels = () => {
    if (selectedCategory !== "") {
      const brandsForCategory = Array.from(
        new Set(
          data
            .filter((item) => item.categoryname === selectedCategory)
            .map((item) => item.brandname)
        )
      );
      setBrands(brandsForCategory);
    } else {
      setBrands([]);
    }
    setSelectedBrand("");
    setSelectedModel("");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    updateBrandsAndModels();
  }, [selectedCategory, data]);

  useEffect(() => {
    if (selectedCategory !== "" && selectedBrand !== "") {
      const models = data
        .filter(
          (item) =>
            item.categoryname === selectedCategory &&
            item.brandname === selectedBrand
        )
        .map((item) => item.model_name);
      setModelsForDropdown(models);
    } else {
      setModelsForDropdown([]);
    }
    setSelectedModel("");
  }, [selectedCategory, selectedBrand, data]);

  useEffect(() => {
    setShowButton(
      selectedCategory !== "" &&
        selectedBrand !== "" &&
        selectedModel !== "" &&
        outputData.length < 4
    );
  }, [selectedCategory, selectedBrand, selectedModel, outputData]);

  const handleButtonClick = () => {
    setIsCategoryDisabled(true);
    if (outputData.length >= 4) {
      setShowButton(false);
      setisAllDropdownDisabled(true);
    } else {
      const newOutputData = [...outputData];
      const selectModelData = data.find(
        (item) => item.model_name === selectedModel
      );
      newOutputData.push({
        model_id: selectModelData?.model_id,
        model_name: selectModelData?.model_name,
        category: selectModelData?.category,
        brandname: selectedBrand,
        slug: selectModelData?.slug,
      });

      setOutputData(newOutputData);

      setSelectedBrand("");
      setSelectedModel("");
    }
  };

  const handleResetClick = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedModel("");
    setShowButton(true);
    setOutputData([]);
    setIsCategoryDisabled(false);
  };
  const getFilteredModels = () => {
    if (selectedCategory !== "" && selectedBrand !== "") {
      const selectedModels = outputData.map((item) => item.model_name);
      return modelsForDropdown.filter(
        (model) => !selectedModels.includes(model)
      );
    } else {
      return modelsForDropdown;
    }
  };

  const OutputDataItem = ({ item, index, onRemove }) => {
    const handleRemove = () => {
      onRemove(index);
    };

    return (
      <div className="output-data-item relative">
        <Badge
          onClick={handleRemove}
          className="absolute top-1 right-1 bg-white text-black hover:text-white rounded-full p-2 cursor-pointer"
        >
          <Trash2 size={16} strokeWidth={2} />
        </Badge>
      </div>
    );
  };

  return (
    <div>
      <AutoCarousel />
      <div className="flex flex-col lg:flex-row items-center justify-between lg:w-[960px] mt-4 gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Select
            value={
              selectedCategory
                ? { value: selectedCategory, label: selectedCategory }
                : null
            }
            onChange={(selectedOption) =>
              setSelectedCategory(selectedOption.value)
            }
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            isSearchable
            isDisabled={isCategoryDisabled}
            placeholder="Category"
            className="capitalize"
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
                width: "120px",
              }),
            }}
          />
          <Select
            value={
              selectedBrand
                ? { value: selectedBrand, label: selectedBrand }
                : null
            }
            onChange={(selectedOption) =>
              setSelectedBrand(selectedOption.value)
            }
            options={brands.map((brand) => ({
              value: brand,
              label: brand,
            }))}
            isSearchable
            placeholder="Brand"
            isDisabled={isAllDropdownDisabled}
            className="capitalize"
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
                width: "120px",
              }),
            }}
          />
          <Select
            value={
              selectedModel
                ? { value: selectedModel, label: selectedModel }
                : null
            }
            onChange={(selectedOption) =>
              setSelectedModel(selectedOption.value)
            }
            options={getFilteredModels().map((model) => ({
              value: model,
              label: model,
            }))}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#d3d3d3",
                primary: "black",
              },
            })}
            isSearchable
            placeholder="Model"
            isDisabled={isAllDropdownDisabled}
            className="capitalize"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "" : "gray",
                borderRadius: "20px",
                fontSize: "12px",
                width: "120px",
              }),
            }}
          />
        </div>
        <div className="flex gap-2">
          {showButton && (
            <button className="primary" onClick={handleButtonClick}>
              Compare
            </button>
          )}

          <button className="secondary" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      </div>
      <div className=" mt-4 min-h-[20vh] bg-slate-50 overflow-auto  w-80 sm:w-full">
        {outputData.length > 0 && (
          <div className="flex flex-row gap-2">
            {outputData.map((item, index) => (
              <div key={index}>
                <OutputDataItem
                  item={item}
                  index={index}
                  onRemove={(indexToRemove) => {
                    const updatedData = outputData.filter(
                      (_, i) => i !== indexToRemove
                    );
                    setOutputData(updatedData);
                  }}
                />
                {item.category === "758355e3-b8f9-4171-a1d6-ad0608101c9a" ? (
                  <SmartWatchComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "b3dac06e-e1b3-461f-aa1d-b97f3021e695" ? (
                  <MobileComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "9e4c6903-5d10-47f6-81fe-a4e000350f21" ? (
                  // headphones
                  <HeadphoneComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "a347f89e-8d16-4eb9-a4b2-02e175ac81ba" ? (
                  // laptop
                  <LaptopComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "24805198-bc9e-4a09-b756-352d1366e875" ? (
                  // speaker
                  <SpeakerComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "eac38cfe-9023-4613-ac86-1179d27ece40" ? (
                  // tablet
                  <MobileComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : item.category === "a4453117-b711-4832-83be-1b0f5047840e" ? (
                  <TvComparisonPage
                    modelIdForCard={item}
                    index={index}
                    key={index}
                  />
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
      {children}
      <CompareFeaturedProducts categoryData={outputData} />
    </div>
  );
};

export default ComparisonFilter;
