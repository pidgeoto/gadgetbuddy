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
    keywords: `${data.brandname} ${data.model_name}, smartphone, mobile phone, ${data.brandname} phone, ${data.brandname} ${data.model_name} specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} ${data.model_name} price, ${data.brandname} ${data.model_name} deals, ${data.brandname} comparison, best ${data.brandname} phone, ${data.brandname} ${data.model_name} performance, ${data.brandname} ${data.model_name} camera, ${data.brandname} ${data.model_name} battery life, ${data.brandname} ${data.model_name} display, ${data.brandname} ${data.model_name} operating system, ${data.brandname} ${data.model_name} storage capacity, ${data.brandname} ${data.model_name} RAM, ${data.brandname} ${data.model_name} processor, ${data.brandname} ${data.model_name} accessories, ${data.brandname} ${data.model_name} user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name}, ${data.brandname} ${data.model_name} online, latest ${data.brandname} phone, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} availability`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/mobile${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/mobile${data.slug}`,
    },
    twitter: {
      title: capitalizedTitle,
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
