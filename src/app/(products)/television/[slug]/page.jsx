import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import MobileDisplay from "@/components/pages/products/MobileDisplay";
import React from "react";

export async function generateMetadata({ params }) {
  const ids = params.slug;
  const data = await getIndividualModelDetail(ids);

  return {
    title: `${data.brandname} ${data.model_name}`,
    description: data.meta_desc,
    keywords: `${data.brandname} ${data.model_name}, ${data.brandname} ${data.model_name} price, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} os, ${data.brandname} ${data.model_name} photos, ${data.brandname} ${data.model_name} videos, ${data.brandname} ${data.model_name} price in india, ${data.brandname} ${data.model_name}, smart TV, 4K TV, Ultra HD TV, ${data.brandname} TV, ${data.brandname} ${data.model_name} specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} tv price, ${data.brandname} ${data.model_name} deals, ${data.brandname} ${data.model_name} comparison, best ${data.brandname} TV, ${data.brandname} ${data.model_name} display, ${data.brandname} ${data.model_name} screen size, ${data.brandname} ${data.model_name} resolution, ${data.brandname} ${data.model_name} operating system, ${data.brandname} ${data.model_name} smart features, ${data.brandname} ${data.model_name} connectivity, ${data.brandname} ${data.model_name} sound, ${data.brandname} ${data.model_name} picture quality, ${data.brandname} ${data.model_name} HDR, ${data.brandname} TV series, ${data.brandname} ${data.model_name} user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name} TV, ${data.brandname} ${data.model_name} TV online, latest ${data.brandname} TV, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} TV availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/television/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: `${data.brandname} ${data.model_name}`,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/television/${data.slug}`,
    },
    twitter: {
      title: data.model_name,
      description: data.meta_desc,
      images: data.img1,
    },
  };
}

const IndividualTelevision = async ({ params: { slug } }) => {
  const individualTelevision = getIndividualModelDetail(slug);
  const televisionArr = await individualTelevision;

  return (
    <div>
      <MobileDisplay data={televisionArr} />
    </div>
  );
};

export default IndividualTelevision;
