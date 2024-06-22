import { AutoCarousel } from "@/components/AutoCarousel";
import Category from "@/components/pages/home/Category";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import HeroSection from "@/components/pages/home/HeroSection";
import HomeArticle from "@/components/pages/home/HomeArticle";
import HomeContent from "@/components/pages/home/HomeContent";
import HomeVideo from "@/components/pages/home/HomeVideo";
import NewsLetter from "@/components/pages/home/NewsLetter";
import BrandBanner from "@/components/pages/products/BrandBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Category />
      <AutoCarousel />
      <FeaturedProducts />
      <BrandBanner />
      <HomeContent />
      <HomeArticle />
      {/* <HomeVideo /> */}
      <NewsLetter />
    </main>
  );
}