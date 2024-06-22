import ComparisonArticles from "@/components/pages/articles/ComparisonArticles";
import CompareContent from "@/components/pages/compare/CompareContent";
import React from "react";
export async function generateMetadata() {
  return {
    title: "Comparision Articles - 32mobiles.com",
    keywords:
      "Mobile Comparisons, TV Comparisons, Smartwatch Comparisons, Earbuds Comparisons, Headphone Comparisons, Laptop Comparisons, Tablet Comparisons, In-depth Gadget Face-offs, Side-by-Side Tech Comparisons, Feature-based Gadget Analysis, Specs Showdowns, Comprehensive Reviews for Mobiles, TVs, Smartwatches, Earbuds, Headphones, Laptops, and Tablets, Gadget Rivalries, Pros and Cons Breakdowns, Choosing Between Similar Gadgets",
    description:
      "Delve into expert insights and stay updated on the latest gadget trends with our in-depth articles. From breaking news to exclusive deals, unbiased reviews, and irresistible offers. Explore the tech world with confidence and make the most of our curated content for an enhanced gadget experience.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/articles/comparison",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Comparison = () => {
  return (
    <div>
      <ComparisonArticles />
      <CompareContent />
    </div>
  );
};

export default Comparison;
