import ArticleListing from '@/components/pages/articles/ArticleListing';
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Articles - 32mobiles.com",
    keywords:"Gadget Articles, Latest Tech Insights, In-depth Product Reviews, Trending Tech Features, Hot Deals and Discounts, Upcoming Gadgets Preview, Comparative Reviews, Product Face-offs, Technology Trends Analysis, Exclusive Discounts and Offers, Comprehensive Gadget Analysis, Top Picks and Recommendations, Latest in Consumer Electronics, Must-Read Tech Articles, Expert Gadget Opinions, Future Tech Previews, Unbiased Gadget Reviews, Stay Updated with Tech, Exclusive Tech Coverage, Featured Gadget Comparisons, Best Tech Deals Today",
    description:
      "Delve into expert insights and stay updated on the latest gadget trends with our in-depth articles. From breaking news to exclusive deals, unbiased reviews, and irresistible offers. Explore the tech world with confidence and make the most of our curated content for an enhanced gadget experience.",
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: "https://www.32mobiles.com/articles",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}


const Articles = () => {
  return (
    <div>
      <ArticleListing />
    </div>
  )
}

export default Articles