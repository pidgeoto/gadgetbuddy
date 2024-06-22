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
    keywords: `${data.brandname} ${data.model_name} speakers, speakers, ${data.brandname} ${data.model_name} speakers specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} speakers specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} ${data.model_name} speakers price, ${data.brandname} ${data.model_name} deals, best ${data.brandname} speakers, ${data.brandname} ${data.model_name} audio quality, ${data.brandname} ${data.model_name} speaker system, ${data.brandname} ${data.model_name} speaker connectivity, ${data.brandname} ${data.model_name} speaker design, ${data.brandname} ${data.model_name} speaker build quality, ${data.brandname} ${data.model_name} portable speakers, ${data.brandname} ${data.model_name} wireless speakers, ${data.brandname} ${data.model_name} Bluetooth speakers, ${data.brandname} ${data.model_name} soundbar, ${data.brandname} ${data.model_name} subwoofer, ${data.brandname} ${data.model_name} bookshelf speakers, ${data.brandname} ${data.model_name} floor-standing speakers, ${data.brandname} ${data.model_name} outdoor speakers, ${data.brandname} ${data.model_name} home speakers, ${data.brandname} ${data.model_name} studio monitors, ${data.brandname} ${data.model_name} gaming speakers, ${data.brandname} ${data.model_name} business speakers, ${data.brandname} ${data.model_name} party speakers, ${data.brandname} ${data.model_name} speaker accessories, ${data.brandname} ${data.model_name} speaker user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name} speakers, ${data.brandname} ${data.model_name} speakers online, latest ${data.brandname} speakers, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} speakers availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/speaker/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/speaker/${data.slug}`,
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
