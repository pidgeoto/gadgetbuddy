import CategoryTablets from "@/components/pages/products/CategoryTablets";
import TabletContent from "@/components/pages/products/content/TabletContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Tablets - 32mobiles.com",
    keywords:
      "tablet, iPad, Samsung tablet, Microsoft Surface, Lenovo Tab, Android tablet, iOS tablet, Windows tablet, tablet deals, tablet discounts, tablet reviews, best budget tablet, high-performance tablet, premium tablet, 2-in-1 tablet, business tablet, gaming tablet, student tablet, kids tablet, tablet accessories, tablet comparison, tablet specifications, tablet features, tablet pricing, tablet brands, Apple, Samsung, Microsoft, Lenovo, tablet operating system, tablet screen size, thin and light tablet, water-resistant tablet, tablet storage capacity, tablet processor, tablet RAM.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https:/www.32mobiles.com/tablets",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Tablets = () => {
  return (
    <div>
      <CategoryTablets />
      <TabletContent />
    </div>
  );
};

export default Tablets;
