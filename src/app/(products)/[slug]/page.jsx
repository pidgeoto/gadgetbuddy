import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import NoSearch from "@/components/NoSearch";
import MobileDisplay from "@/components/pages/products/MobileDisplay";
import React from "react";

const categoryMapping = {
  "a4453117-b711-4832-83be-1b0f5047840e": "tv",
  "b3dac06e-e1b3-461f-aa1d-b97f3021e695": "mobiles",
  "9e4c6903-5d10-47f6-81fe-a4e000350f21": "Headphones",
  "a347f89e-8d16-4eb9-a4b2-02e175ac81ba": "Laptop",
  "24805198-bc9e-4a09-b756-352d1366e875": "speaker",
  "eac38cfe-9023-4613-ac86-1179d27ece40": "tablets",
  "758355e3-b8f9-4171-a1d6-ad0608101c9a": "default",
};

const IndividualFeaturedProduct = async ({ params: { slug } }) => {
  const individualFeaturedProduct = await getIndividualModelDetail(slug);
  const mobileArr = individualFeaturedProduct;

  const category = mobileArr.category;

  const renderContent = (category) => {
    switch (categoryMapping[category]) {
      case "tv":
      case "mobiles":
      case "Headphones":
      case "Laptop":
      case "speaker":
      case "tablets":
        return (
          <>
            <MobileDisplay data={mobileArr} />
          </>
        );
      default:
        return <NoSearch />;
    }
  };

  return renderContent(category);
};

export default IndividualFeaturedProduct;
