import CategoryMobile from "@/components/pages/products/CategoryMobile";
import MobileContent from "@/components/pages/products/content/MobileContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Mobile - 32mobiles.com",
    keywords:"mobile phones, smartphones, iPhone, Samsung Galaxy, Google Pixel, Huawei, OnePlus, Xiaomi, Oppo, Vivo, Sony Xperia, LG, Motorola, Nokia, budget phones, mid-range phones, flagship phones, Android phones, iOS phones, 5G phones, camera phones, gaming phones, foldable phones, water-resistant phones, rugged phones, dual SIM phones, unlocked phones, refurbished phones, mobile deals, mobile discounts, best mobile brands, mobile specifications, mobile features, mobile reviews, mobile comparison, mobile prices, mobile sizes, mobile storage capacity, mobile RAM, mobile processors, mobile battery life, wireless charging phones, fast-charging phones, notch display phones, bezel-less phones, AMOLED display phones, LCD display phones, mobile operating systems (iOS, Android), mobile security, mobile accessories.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/mobile",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Mobiles = () => {
  return (
    <div>
      <CategoryMobile />
      <MobileContent />
    </div>
  );
};

export default Mobiles;
