import React from "react";
import VideosComponent from "@/components/pages/videos/VideosComponent";
import VideoContent from "@/components/pages/videos/VideoContent";

export async function generateMetadata() {
  return {
    title: "Video - 32mobiles.com",
    description:
      "Immerse yourself in the world of gadgets through our captivating video content. From in-depth reviews and breaking news to exclusive deals and exciting offers, our video page is your visual gateway to the latest in technology",
    metadataBase: new URL("https://www.32mobiles.com"),
    icons: {
      icon: "/images/favicon.ico",
    },
    alternates: {
      canonical: "https://www.32mobiles.com/videos",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}
const Videos = () => {
  return (
    <div>
      <VideosComponent />
      <VideoContent />
    </div>
  );
};

export default Videos;
