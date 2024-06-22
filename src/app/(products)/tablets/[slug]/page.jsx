import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import MobileDisplay from "@/components/pages/products/MobileDisplay";
import { sanitizeTitleForURL } from "@/lib/utils";
import React from "react";

export async function generateMetadata({ params }) {
  const ids = params.slug;
  const data = await getIndividualModelDetail(ids);

  return {
    title: `${data.brandname} ${data.model_name}`,
    description: data.meta_desc,
    keywords: `${data.brandname} ${data.model_name} tablet, tablet, ${data.brandname} ${data.model_name} tablet specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} tablet specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} ${data.model_name} tablet price, ${data.brandname} ${data.model_name} deals, best ${data.brandname} tablet, ${data.brandname} ${data.model_name} performance, ${data.brandname} ${data.model_name} camera, ${data.brandname} ${data.model_name} tablet battery life, ${data.brandname} ${data.model_name} display, ${data.brandname} ${data.model_name} tablet operating system, ${data.brandname} ${data.model_name} storage capacity, ${data.brandname} ${data.model_name} RAM, ${data.brandname} ${data.model_name} tablet processor, ${data.brandname} ${data.model_name} accessories, ${data.brandname} ${data.model_name} user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name}, ${data.brandname} ${data.model_name} online, latest ${data.brandname} tablet, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} tablet availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/tablets/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: `${data.brandname} ${data.model_name}`,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/tablets/${data.slug}`,
    },
    twitter: {
      title: data.model_name,
      description: data.meta_desc,
      images: data.img1,
    },
  };
}

const IndividualMobile = async ({ params: { slug } }) => {
  const individualMobile = getIndividualModelDetail(slug);
  const mobileArr = await individualMobile;

  return (
    <div>
      <MobileDisplay data={mobileArr} />
    </div>
  );
};

export default IndividualMobile;
