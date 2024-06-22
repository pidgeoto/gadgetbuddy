import AboutUs from "@/components/pages/AboutUs";
import React from "react";

export async function generateMetadata() {
  return {
    title: "About Us - 32mobiles.com",
    description:
      "We are your go-to source for cutting-edge gadget news, unbeatable deals, insightful reviews, and exclusive offers. Learn about the team dedicated to bringing you the latest in technology, and our commitment to providing a seamless and informed experience. Join us on the journey to stay at the forefront of the ever-evolving world of gadgets!",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}


const about = () => {
  return (
    <>
      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default about;
