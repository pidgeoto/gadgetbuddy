import CategorySmartWatch from "@/components/pages/products/CategorySmartWatch";
import SmartwatchContent from "@/components/pages/products/content/SmartwatchContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Smartwatch - 32mobiles.com",
    keywords:"smartwatch, fitness tracker, wearable device, Apple Watch, Samsung Galaxy Watch, Garmin smartwatch, Fitbit smartwatch, Huawei smartwatch, Amazfit smartwatch, Fossil smartwatch, Xiaomi smartwatch, Android smartwatch, iOS smartwatch, health tracking watch, GPS smartwatch, waterproof smartwatch, sports smartwatch, luxury smartwatch, budget smartwatch, touchscreen smartwatch, heart rate monitor smartwatch, sleep tracking smartwatch, ECG smartwatch, blood oxygen monitor smartwatch, music control smartwatch, notification smartwatch, cellular smartwatch, LTE smartwatch, Android Wear, watchOS, Tizen OS, smartwatch apps, smartwatch deals, smartwatch reviews, best smartwatches, smartwatch comparison, smartwatch features, smartwatch specifications, smartwatch sizes, customizable smartwatch bands, smartwatch battery life.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/smartwatch",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Smartwatch = () => {
  return (
    <div>
      <CategorySmartWatch />
      <SmartwatchContent />
    </div>
  );
};

export default Smartwatch;
