import CategoryHeadphone from "@/components/pages/products/CategoryHeadphone";
import Headphonecontent from "@/components/pages/products/content/HeadphoneContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Headphone - 32mobiles.com",
    keywords:
      "headphones, earphones, wireless headphones, Bluetooth earphones, noise-canceling headphones, over-ear headphones, on-ear headphones, in-ear headphones, true wireless earbuds, gaming headphones, sport headphones, workout earphones, running earbuds, studio headphones, DJ headphones, audiophile headphones, bass headphones, open-back headphones, closed-back headphones, ANC headphones, water-resistant earphones, sweatproof earbuds, Apple AirPods, Sony headphones, Bose headphones, JBL earphones, Sennheiser headphones, Audio-Technica headphones, Beats by Dre, Skullcandy earbuds, Anker headphones, Jabra earphones, wireless earbud deals, headphone reviews, earphone discounts, best headphone brands, headphone specifications, headphone features, headphone comparison, headphone prices, headphone sizes, headphone types (over-ear, on-ear, in-ear), headphone battery life, headphone connectivity (wired, wireless), headphone impedance, headphone frequency response, headphone sensitivity, headphone comfort, headphone design.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/headphones",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Headphones = () => {
  return (
    <div>
      <CategoryHeadphone />
      <Headphonecontent />
    </div>
  );
};

export default Headphones;
