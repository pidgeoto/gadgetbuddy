import CategorySpeaker from "@/components/pages/products/CategorySpeaker";
import SpeakerContent from "@/components/pages/products/content/SpeakerContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Speaker - 32mobiles.com",
    keywords:
      "speakers, audio speakers, wireless speakers, Bluetooth speakers, smart speakers, home speakers, portable speakers, bookshelf speakers, floor-standing speakers, surround sound speakers, computer speakers, outdoor speakers, high-fidelity speakers, studio monitors, soundbar, speaker system, bookshelf speakers, bookshelf speaker reviews, budget speakers, premium speakers, speaker deals, speaker discounts, best speaker brands, Bose speakers, JBL speakers, Sonos speakers, Yamaha speakers, Sony speakers, Logitech speakers, Harman Kardon speakers, KEF speakers, Polk Audio speakers, speaker specifications, speaker features, speaker sizes, speaker types, speaker connectivity, speaker wattage, waterproof speakers, weather-resistant speakers, multi-room speakers, voice-controlled speakers, Dolby Atmos speakers, subwoofer, speaker frequency response, speaker impedance.",
    description:
      "Discover the perfect gadget that suits your needs on our product page. Dive into a curated selection of the latest devices, accompanied by in-depth reviews, exclusive deals, and unbeatable offers. 32mobiles is go-to destination for informed decisions and unmatched savings in the world of technology.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/speaker",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Speaker = () => {
  return (
    <div>
      <CategorySpeaker />
      <SpeakerContent />
    </div>
  );
};

export default Speaker;
