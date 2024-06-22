import UpcomingGadgets from "@/components/pages/articles/UpcomingGadgets";
import Upcominggadgetscontent from "@/components/pages/articles/content/UpcominContent";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Upcoming Articles - 32mobiles.com",
    description:
      "Delve into expert insights and stay updated on the latest gadget trends with our in-depth articles. From breaking news to exclusive deals, unbiased reviews, and irresistible offers. Explore the tech world with confidence and make the most of our curated content for an enhanced gadget experience.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/articles/upcoming",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

const Upcoming = () => {
  return (
    <div>
      <UpcomingGadgets />
      <Upcominggadgetscontent />
    </div>
  );
};

export default Upcoming;
