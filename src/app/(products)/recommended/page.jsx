import MobileList from "@/components/pages/products/recommended-products/MobileList";
import { MobileListProvider } from "@/components/pages/products/recommended-products/MobileListProvider";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Recommended Product - 32mobiles.com",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/recommeded",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const RecpmmendedProducts = () => {
  return (
    <MobileListProvider>
      <MobileList />
    </MobileListProvider>
  );
};

export default RecpmmendedProducts;
