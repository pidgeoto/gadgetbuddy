import CategoryLaptop from "@/components/pages/products/CategoryLaptop";
import Laptopcontent from "@/components/pages/products/content/LaptopContent";
import React from "react";
export async function generateMetadata() {
  return {
    title: "Laptop - 32mobiles.com",
    keywords:
      "laptops, notebooks, ultrabooks, MacBook, MacBook Air, MacBook Pro, Dell laptops, HP laptops, Lenovo laptops, Asus laptops, Acer laptops, Microsoft Surface laptops, Chromebooks, gaming laptops, business laptops, student laptops, budget laptops, premium laptops, 2-in-1 laptops, convertible laptops, touch screen laptops, lightweight laptops, thin and light laptops, powerful laptops, Intel laptops, AMD laptops, laptop deals, laptop discounts, laptop reviews, best laptop brands, laptop specifications, laptop features, laptop comparison, laptop prices, laptop sizes, laptop storage capacity, laptop RAM, laptop processors, laptop graphics cards, laptop battery life, laptop screen resolution, laptop operating systems (Windows, macOS, Chrome OS), laptop keyboard types (mechanical, backlit), laptop ports, laptop connectivity (USB-C, Thunderbolt), laptop audio quality, laptop display types (IPS, OLED), laptop security features.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/laptop",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Laptop = () => {
  return (
    <div>
      <CategoryLaptop />
      <Laptopcontent />
    </div>
  );
};

export default Laptop;
