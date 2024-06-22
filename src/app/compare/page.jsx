import CompareContent from "@/components/pages/compare/CompareContent";
import ComparisonFilter from "@/components/pages/compare/ComparisonFilter";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Comparison -32mobiles.com",
    keywords:
      "Product comparison, tech products comparison, electronics comparison, gadget comparison, device comparison, feature comparison, specifications comparison, side-by-side comparison, Apple vs. Samsung vs. Google, iPhone vs. Galaxy vs. Pixel, MacBook vs. Surface vs. XPS, iPad vs. Galaxy Tab vs. Pixel Slate, Apple Watch vs. Galaxy Watch vs. Pixel Buds, Galaxy S vs. iPhone vs. Pixel, Galaxy Note vs. iPhone vs. Pixel, Galaxy Z Fold vs. iPhone vs. Pixel, Galaxy Tab vs. iPad vs. Pixel Slate, Samsung Galaxy Watch vs. Apple Watch vs. Google Watch, Pixel vs. iPhone vs. Galaxy, Pixelbook vs. MacBook vs. Surface, Pixel Buds vs. AirPods vs. Galaxy Buds, Pixel Slate vs. iPad vs. Galaxy Tab, Surface Pro vs. iPad Pro vs. Galaxy Tab S, Surface Laptop vs. MacBook vs. Chromebook, Surface Book vs. MacBook Pro vs. XPS, Xbox Series X vs. PlayStation 5, XPS vs. MacBook vs. Surface Laptop, Inspiron vs. Pavilion vs. IdeaPad, Alienware vs. Omen vs. Legion, Dell monitors vs. HP monitors vs. Lenovo monitors, HP Spectre vs. XPS vs. MacBook, Envy vs. Surface Laptop vs. IdeaPad, Omen vs. Legion vs. Alienware, HP laptops vs. Dell laptops vs. Lenovo laptops, ThinkPad vs. MacBook Pro vs. Surface Pro, Yoga vs. Surface Laptop vs. MacBook Air, Legion vs. Omen vs. Alienware, Lenovo laptops vs. HP laptops vs. Dell laptops, Xperia vs. iPhone vs. Galaxy, Sony Bravia vs. Samsung QLED vs. LG OLED, PlayStation vs. Xbox vs. Nintendo, Sony headphones vs. Bose vs. Sennheiser, Noise-canceling headphones comparison, wireless earbuds comparison, portable speakers comparison, JBL vs. Bose vs. Sennheiser vs. Beats, gaming laptops comparison, smartwatch comparison, camera comparison, TV comparison, audio devices comparison, home electronics comparison.",
    description:
      "Explore the best in tech at 32Mobiles.com – your go-to destination for gadget comparisons! From cutting-edge mobiles to sleek laptops, vibrant TVs, immersive speakers, and premium headphones, find the perfect device for your needs. Make informed decisions with our detailed comparisons and reviews. Discover the latest in technology and choose the right device that fits your lifestyle. Compare, decide, and upgrade with 32Mobiles.com today!",
    metadataBase: new URL("https://www.32mobiles.com"),
    icons: {
      icon: "/images/favicon.ico",
    },
    alternates: {
      canonical: "https://www.32mobiles.com/compare",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const page = () => {
  return (
    <div>
      <ComparisonFilter>
        <CompareContent />
      </ComparisonFilter>
    </div>
  );
};

export default page;
