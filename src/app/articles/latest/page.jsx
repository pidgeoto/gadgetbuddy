import LatestArticles from "@/components/pages/articles/LatestArticles";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Latest Articles - 32mobiles.com",
    keywords:"Latest Mobiles, New TV Models, Modern Smartwatches, Advanced Earbuds, Cutting-edge Headphones, Recent Laptop Releases, Up-to-date Tablets, Latest Gadgets 2024, Fresh Smart Devices, Trending Mobile Technologies, Current TV Innovations, Newest Smartwatches in 2024, Latest Earbuds Technology, Contemporary Headphone Models, Modern Laptops, Up-to-the-Minute Tablets, Next-Gen Mobile Devices, Recently Unveiled Tech, State-of-the-Art Electronics",
    description:
      "Delve into expert insights and stay updated on the latest gadget trends with our in-depth articles. From breaking news to exclusive deals, unbiased reviews, and irresistible offers. Explore the tech world with confidence and make the most of our curated content for an enhanced gadget experience.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/articles/lqtest",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Latest = () => {
  return (
    <div>
      <LatestArticles />
    </div>
  );
};

export default Latest;
