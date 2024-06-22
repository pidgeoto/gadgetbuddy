import HotDeals from "@/components/pages/articles/HotDeals";
import DealsContent from "@/components/pages/articles/content/DealsContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Deals Articles - 32mobiles.com",
    keywords:"Exclusive Mobile Deals, Limited-Time TV Discounts, Hot Smartwatch Offers, Bargain Earbuds Specials, Discounted Headphone Promotions, Laptop Hot Deals, Tablet Flash Sales, Steals on Latest Gadgets 2024, Special Offers on Smart Devices, Hot Prices for Trending Mobile Technologies, TV Bargains, Earbuds Savings, Headphone Deals of the Day, Laptop Price Drops, Tablet Seasonal Discounts, Unbeatable Offers on Next-Gen Mobile Devices, Tech Bargains on the Latest Releases",
    description:
      "Delve into expert insights and stay updated on the latest gadget trends with our in-depth articles. From breaking news to exclusive deals, unbiased reviews, and irresistible offers. Explore the tech world with confidence and make the most of our curated content for an enhanced gadget experience.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/articles/deals",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Deals = () => {
  return (
    <div>
      <HotDeals />
      <DealsContent />
    </div>
  );
};

export default Deals;
