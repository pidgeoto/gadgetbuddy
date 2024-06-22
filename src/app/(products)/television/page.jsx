import CategoryTelevision from "@/components/pages/products/CategoryTelevision";
import TvContent from "@/components/pages/products/content/TvContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Television - 32mobiles.com",
    keywords:"tv, television, tv size, 4k tv, uhd tv, oled tv, qled tv, led tv, smart tv, tcl, tcl tv, sony, sony bravia, sony bravia 4k tv, sony bravia smart tv, realme tv, iffalcon tv, mi tv, redmi tv, kodak tv, lg, lg tv, lg smart tv, oneplus tv, motorola tv, aser tv, samsung tv, samsung curve tv, samsung smart tv, hisence tv, infinix tv, thomson tv, vu tv, toshiba tv, blaupunkt tv",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https:/www.32mobiles.com",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Television = () => {
  return (
    <div>
      <CategoryTelevision />
      <TvContent />
    </div>
  );
};

export default Television;
