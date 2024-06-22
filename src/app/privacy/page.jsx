import Privacy from "@/components/pages/Privacy";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy - 32mobiles.com",
    description:
      "Explore our privacy page to understand how we safeguard your information while delivering the latest in gadget news, deals, reviews, and offers",
    metadataBase: new URL("https://www.32mobiles.com"),
    icons: {
      icon: "/images/favicon.ico",
    },
    alternates: {
      canonical: "https://www.32mobiles.com/privacy",
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
      <Privacy />
    </div>
  );
};

export default page;
