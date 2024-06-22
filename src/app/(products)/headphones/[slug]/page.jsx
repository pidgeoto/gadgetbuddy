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
    keywords: `${data.brandname} ${data.model_name} headphones, over-ear headphones, on-ear headphones, in-ear headphones, wireless headphones, Bluetooth headphones, noise-canceling headphones, high-fidelity headphones, studio headphones, closed-back headphones, open-back headphones, bass headphones, audiophile headphones, comfortable headphones, lightweight headphones, durable headphones, premium headphones, budget headphones, foldable headphones, collapsible headphones, portable headphones, ${data.brandname} ${data.model_name} earbuds, true wireless earbuds, in-ear monitors, earphones, premium audio, crystal-clear sound, deep bass, customizable sound, touch controls, physical controls, voice assistant compatible, long battery life, fast charging, quick charge, comfortable ear cushions, adjustable headband, sleek design, premium materials, brand-name headphones, ${data.brandname} headphones review, ${data.brandname} ${data.model_name} specs, ${data.brandname} ${data.model_name} price, buy ${data.brandname} ${data.model_name} headphones, ${data.brandname} ${data.model_name} headphones online, latest ${data.brandname} headphones, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} headphones availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/headphones/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/headphones/${data.slug}`,
    },
    twitter: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
    },
  };
}

const IndividualHeadphone = async ({ params: { slug } }) => {
  const individualMobile = getIndividualModelDetail(slug);
  const mobileArr = await individualMobile;

  return (
    <div>
      <MobileDisplay data={mobileArr} />
    </div>
  );
};

export default IndividualHeadphone;
