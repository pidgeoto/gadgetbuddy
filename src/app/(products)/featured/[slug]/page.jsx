import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import NoSearch from "@/components/NoSearch";
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
    keywords: `${data.brandname} ${data.model_name}, ${data.brandname} products, ${data.brandname} ${data.model_name} specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} ${data.model_name} price, ${data.brandname} ${data.model_name} deals, ${data.brandname} comparison, best ${data.brandname} products, ${data.brandname} ${data.model_name} performance, ${data.brandname} ${data.model_name} camera, ${data.brandname} ${data.model_name} battery life, ${data.brandname} ${data.model_name} display, ${data.brandname} ${data.model_name} operating system, ${data.brandname} ${data.model_name} storage capacity, ${data.brandname} ${data.model_name} RAM, ${data.brandname} ${data.model_name} processor, ${data.brandname} ${data.model_name} accessories, ${data.brandname} ${data.model_name} user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name}, ${data.brandname} ${data.model_name} online, latest ${data.brandname} products, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} availability`,
    description: data.meta_desc,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/featured/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/featured/${data.slug}`,
    },
    twitter: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
    },
  };
}

const IndividualFeaturedProduct = async ({ params: { slug } }) => {
  const individualFeaturedProduct = await getIndividualModelDetail(slug);
  const mobileArr = individualFeaturedProduct;

  if (mobileArr.category.includes("a4453117-b711-4832-83be-1b0f5047840e")) {
    //tv
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("b3dac06e-e1b3-461f-aa1d-b97f3021e695")
  ) {
    //mobile
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("9e4c6903-5d10-47f6-81fe-a4e000350f21")
  ) {
    //Headphones
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("a347f89e-8d16-4eb9-a4b2-02e175ac81ba")
  ) {
    //Laptop
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("24805198-bc9e-4a09-b756-352d1366e875")
  ) {
    //speaker
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("eac38cfe-9023-4613-ac86-1179d27ece40")
  ) {
    //tablets
    return <MobileDisplay data={mobileArr} />;
  } else if (
    mobileArr.category.includes("758355e3-b8f9-4171-a1d6-ad0608101c9a")
  ) {
    return <MobileDisplay data={mobileArr} />;
  } else {
    return <NoSearch />;
  }
};

export default IndividualFeaturedProduct;
