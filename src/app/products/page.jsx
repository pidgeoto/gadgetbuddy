import ProductPage from "@/components/pages/products/ProductPage";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Product - 32mobiles.com",
    keywords:"Apple, iPhone, MacBook, iPad, Apple Watch, AirPods, iMac, Mac mini, Mac Pro, iOS, macOS, watchOS, iPadOS, Apple Pencil, Magic Keyboard, Retina display, Face ID, Touch ID, Apple Silicon, AppleCare, Samsung, Galaxy S, Galaxy Note, Galaxy Z Fold, Galaxy Z Flip, Galaxy A, Galaxy Tab, Samsung Galaxy Watch, Galaxy Buds, QLED TV, Galaxy Book, Exynos, One UI, Samsung DeX, Knox security, Samsung SmartThings, Google, Pixel, Pixelbook, Pixel Slate, Pixel Buds, Nest Hub, Nest Mini, Chromecast, Android, Wear OS, Google Assistant, Google Search, Google Maps, Google Home, Google Workspace, Chrome OS Microsoft, Surface Pro, Surface Laptop, Surface Book, Surface Go, Surface Studio, Xbox Series X, Xbox Series S, Windows, Microsoft 365, Office, Surface Pen, Surface Dial, Cortana, Dell, XPS, Inspiron, Alienware, Latitude, Precision, Vostro, Dell G Series, Dell monitors, Dell laptops, Dell desktops, Dell servers, Dell Alienware peripherals, HP,  HP Spectre, HP Envy, HP Elite Dragonfly, HP Pavilion, HP Omen, HP ProBook, HP Chromebook, HP monitors, HP printers, HP laptops, HP desktops, HP workstations, Lenovo, ThinkPad, IdeaPad, Yoga, Legion, Lenovo Chromebook, ThinkCentre, ThinkStation, Lenovo monitors, Lenovo laptops, Lenovo desktops, Lenovo tablets, Sony, Xperia, PlayStation, Sony Bravia, Sony headphones, Sony Walkman, Sony cameras, Sony Alpha, Sony WH-1000XM, Sony XB series, 4K HDR, BRAVIA XR, Bose, Bose QuietComfort, Bose SoundSport, Bose Frames, Bose Home Speaker, Bose SoundLink, Bose Noise Cancelling Headphones, Bose Smart Soundbar, JBL, JBL Charge, JBL Flip, JBL Link, JBL Free, JBL Live, JBL Club, JBL PartyBox, JBL Quantum, JBL Reflect, JBL Endurance, Sennheiser, Sennheiser HD, Sennheiser Momentum, Sennheiser PXC, Sennheiser CX, Sennheiser GSP, Sennheiser AMBEO, Sennheiser RS, Sennheiser IE, Beats by Dre, Beats Studio, Beats Solo, Powerbeats, Powerbeats Pro, Beats Pill, Beats Fit Pro, Beats Flex, Beats EP.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/products",
      languages: {
        "en-US": "/en-US",
        "hi-HI": "/hi-HI",
      },
    },
  };
}

const Products = () => {
  return (
    <div>
      <ProductPage />
    </div>
  );
};

export default Products;
