import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import MobileDisplay from "@/components/pages/products/MobileDisplay";

import React from "react";
export async function generateMetadata({ params }) {
  const ids = params.slug;
  const data = await getIndividualModelDetail(ids);

  const capitalizedBrandName = data.brandname.toUpperCase();
  const capitalizedModelName = data.model_name.toUpperCase();

  const capitalizedTitle = `${capitalizedBrandName} ${capitalizedModelName}`;
  
  return {
    title: capitalizedTitle,
    description: data.meta_desc,
    keywords: `${data.brandname} ${data.model_name} , ${data.brandname} ${data.model_name} smartwatch, smartwatch, ${data.brandname} ${data.model_name}  smartwatch specs, ${data.brandname} ${data.model_name}  features, ${data.brandname} ${data.model_name} smartwatch specifications, ${data.brandname} ${data.model_name}  review, ${data.brandname} ${data.model_name}   smartwatch price, ${data.brandname} ${data.model_name}  deals, best ${data.brandname} smartwatch, ${data.brandname} ${data.model_name}  performance, ${data.brandname} ${data.model_name}  fitness tracking, ${data.brandname} ${data.model_name} smartwatch battery life, ${data.brandname} ${data.model_name} display, ${data.brandname} smartwatch operating system, ${data.brandname} ${data.model_name} storage capacity, ${data.brandname} ${data.model_name} RAM, ${data.brandname} ${data.model_name} smartwatch processor, ${data.brandname} ${data.model_name} smartwatch accessories, ${data.brandname} ${data.model_name} smartwatch user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name} smartwatch, ${data.brandname} ${data.model_name} smartwatch online, latest ${data.brandname} smartwatch, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} smartwatch availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/smartwatch/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/smartwatch/${data.slug}`,
    },
    twitter: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
    },
  };
}

const IndividualSmartwatch = async ({ params: { slug } }) => {
  const individualMobile = getIndividualModelDetail(slug);
  const mobileArr = await individualMobile;

  return (
    <div>
      <MobileDisplay data={mobileArr} />
    </div>
  );
};

export default IndividualSmartwatch;
