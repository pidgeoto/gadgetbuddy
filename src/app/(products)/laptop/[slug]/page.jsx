import getIndividualModelDetail from "@/api/getIndividualModelDetail";
import MobileDisplay from "@/components/pages/products/MobileDisplay";
import { sanitizeTitleForURL } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const ids = params.slug;
  const data = await getIndividualModelDetail(ids);
  const capitalizedBrandName = data.brandname.toUpperCase();
  const capitalizedModelName = data.model_name.toUpperCase();

  const capitalizedTitle = `${capitalizedBrandName} ${capitalizedModelName}`;
  const sanitizedTitle = await sanitizeTitleForURL(
    `${data.brandname} ${data.model_name}`
  );

  return {
    title: capitalizedTitle,
    description: data.meta_desc,
    keywords: `${data.brandname} ${data.model_name} laptop, laptop, $${data.brandname} ${data.model_name} laptop specs, ${data.brandname} ${data.model_name} features, ${data.brandname} ${data.model_name} laptop specifications, ${data.brandname} ${data.model_name} review, ${data.brandname} ${data.model_name} laptop price, ${data.brandname} ${data.model_name} deals, best ${data.brandname} laptop, ${data.brandname} ${data.model_name} performance, ${data.brandname} ${data.model_name} display, ${data.brandname} ${data.model_name} laptop operating system, ${data.brandname} ${data.model_name} storage capacity, ${data.brandname} ${data.model_name} RAM, ${data.brandname} ${data.model_name} laptop processor, ${data.brandname} ${data.model_name} laptop graphics, ${data.brandname} ${data.model_name} laptop battery life, ${data.brandname} ${data.model_name} laptop ports, ${data.brandname} ${data.model_name} laptop connectivity, ${data.brandname} ${data.model_name} keyboard, ${data.brandname} ${data.model_name} touchpad, ${data.brandname} ${data.model_name} laptop build quality, ${data.brandname} ${data.model_name} laptop design, ${data.brandname} ${data.model_name} laptop audio quality, ${data.brandname} ${data.model_name} laptop user reviews, ${data.brandname} ${data.model_name} ratings, buy ${data.brandname} ${data.model_name} laptop, ${data.brandname} ${data.model_name} laptop online, latest ${data.brandname} laptop, ${data.brandname} ${data.model_name} release, ${data.brandname} ${data.model_name} laptop availability.`,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/laptop/${data.slug}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: capitalizedTitle,
      description: data.meta_desc,
      images: data.img1,
      url: `https://www.32mobiles.com/laptop/${data.slug}`,
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
