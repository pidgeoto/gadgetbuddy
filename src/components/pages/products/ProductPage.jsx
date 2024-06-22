import getModelDetails from "@/api/getModelDetails";
import ProductCards from "@/components/pages/cards/ProductCards";
import Link from "next/link";
import TvCard from "@/components/pages/cards/TvCard";
import MobileCard from "@/components/pages/cards/MobileCard";
import BrandBanner from "./BrandBanner";
import ProductAd from "./ProductAd";
import ProductPageAllProduct from "./ProductPageAllProduct";
import ProductContent from "./content/ProductContent";

const ProductPage = async () => {
  const detailsResult = getModelDetails();
  const productData = await detailsResult;

  return (
    <div className="my-6">
      <ProductAd className="mb-4" />
      <div className="flex justify-between items-center">
        <h2 className="pageTitle">Featured Products</h2>
        <Link href="/featured">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4 mb-4">
        {productData
          .filter((item) => item.promoted === true)
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <ProductCards products={pdata} />
            </div>
          ))}
      </div>
      <BrandBanner />
      <ProductContent />
      <div className="flex items-center justify-between mt-4 lg:mt-4  mb-6">
        <h2 className="pageTitle">Televisions</h2>
        <Link href="/television">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        {productData
          .filter((i) => {
            return i.categoryname === "television";
          })
          .slice(0, 3)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/television/${pdata.slug}`}
              >
                <TvCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Mobiles</h2>
        <Link href="/mobile">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "mobile";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/${pdata.categoryname}s/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Smartwatches</h2>
        <Link href="/smartwatch">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "smartwatch";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/${pdata.categoryname}/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Headphones</h2>
        <Link href="/headphones">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "headphones";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/headphones/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Laptops</h2>
        <Link href="/laptop">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "laptop";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/${pdata.categoryname}/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Speakers</h2>
        <Link href="/speakers">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "speakers";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/${pdata.categoryname}/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <h2 className="pageTitle">Tablets</h2>
        <Link href="/tablets">View More</Link>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-2 lg:gap-4">
        {productData
          .filter((i) => {
            return i.categoryname === "tablets";
          })
          .slice(0, 4)
          .map((pdata, index) => (
            <div key={index}>
              <Link
                href={`/${pdata.categoryname}/${pdata.slug}`}
              >
                <MobileCard brandsProduct={pdata} />
              </Link>
            </div>
          ))}
      </div>
      <ProductPageAllProduct />
    </div>
  );
};

export default ProductPage;
