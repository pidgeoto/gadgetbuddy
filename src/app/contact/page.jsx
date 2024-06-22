
import Contact from "@/components/pages/Contact";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Contact us - 32mobiles.com",
    description:
      "Connect with us effortlessly through our contact page! Whether you have questions, feedback, or partnership inquiries related to our gadget news, deals, reviews, and offers, we're here to assist you. Stay plugged into the tech world with seamless communication. Reach out and let's explore the future of gadgets together!",
    metadataBase: new URL("https://www.32mobiles.com"),
    icons: {
      icon: "/images/favicon.ico",
    },
    alternates: {
      canonical: "https://www.32mobiles.com/contact",
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
      <Contact />
    </div>
  );
};

export default page;
