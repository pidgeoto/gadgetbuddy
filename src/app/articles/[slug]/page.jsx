import React from "react";
import getIndividualArticle from "@/api/getIndividualArticles";
import Image from "next/image";
import "./table.css";
import ArtlcleList from "@/components/pages/articles/ArtlcleList";
import ArticleRelatedProduct from "@/components/pages/articles/ArticleRelatedProduct";

export async function generateMetadata({ params }) {
  const ids = params.slug;
  const article = await getIndividualArticle(ids);
  const titleKeywordsMatch = article.title.match(/^(.*?):/);
  const titleKeywords = titleKeywordsMatch ? titleKeywordsMatch[1].trim() : article.title;
  const sanitizedTitle = await article.title;

  return {
    title: article.title,
    keywords: `${titleKeywords} reviews, ${titleKeywords} technology, ${titleKeywords} features, ${titleKeywords} analysis, ${titleKeywords} videos, ${titleKeywords} images, ${titleKeywords} photos, ${titleKeywords} related products, ${titleKeywords} related videos, ${titleKeywords} offers, ${titleKeywords} deals, Gadget Reviews, Tech Analysis, Product Insights, Comparative Analysis, In-depth Tech Review, Latest Gadgets Coverage, Product Features Breakdown, Hot Deals and Discounts, Expert Opinions on Gadgets, Gadget Comparisons, Technology Trends, Exclusive Offers, Detailed Product Descriptions, Tech Highlights, Must-Read Tech Articles, Insider Insights on Gadgets, Hands-On Reviews, Unbiased Tech Evaluation, Pros and Cons Analysis, Future Tech Previews, Cutting-edge Technology, Gadget Recommendations, User Experience Reviews, Top Picks in Tech`,
    description: article.meta_desc,
    metadataBase: new URL("https://www.32mobiles.com"),
    alternates: {
      canonical: `https://www.32mobiles.com/articles/${sanitizedTitle}`,
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      description: article.meta_desc,
      images: article.image_url,
      type: "article",
      url: `https://www.32mobiles.com/articles/${sanitizedTitle}`,
    },
    twitter: {
      description: article.meta_desc,
      images: article.image_url,
      type: "article",
      url: `https://www.32mobiles.com/articles/${sanitizedTitle}`,
    },
  };
}


export default async function BlogLayout({ params: { slug } }) {
  const individualArticle = getIndividualArticle(slug);
  const articleArr = await individualArticle;
  const {
    article_id,
    title,
    intro_title,
    intro_content,
    conclusion_title,
    conclusion_content,
    sub_title1,
    sub_title2,
    sub_title3,
    content2,
    content3,
    sub_title4,
    author_name,
    publication_date,
    content,
    content4,
    image_url,
    image_url1,
    image_url2,
    image_url3,
  } = articleArr;

  const contentParts = articleArr.content ? articleArr.content.split("{{") : [];

  const page_desc = contentParts[1] ? contentParts[1].split("}}")[0] : "";

  const content_1 = contentParts[1]
    ? contentParts[1].split("}}")[1]
    : articleArr.content;

  const contentParts4 = articleArr.content4
    ? articleArr.content4.split("{{")
    : [];
  const content_4 = contentParts4[1] ? contentParts4[1].split("}}")[0] : "";
  const conclusion = contentParts4[1] ? contentParts4[1].split("}}")[1] : "";

  const sanitizeHTML = (htmlString) => {
    if (typeof htmlString === "string") {
      return htmlString.replace(/{{|}}/g, "");
    }
    return "";
  };

  return (
    <div>
      <div className="md:flex md:space-x-4 mt-4 mb-8">
        <div className="md:w-4/6">
          <h1 className="lg:text-4xl capitalize">{title}</h1>
          <div className="flex items-center justify-between mb-4">
            <h6 className=" text-slate-500 text-sm">Admin</h6>
            <h6 className="text-black text-sm mr-8">
              Published on :{" "}
              <span className=" text-slate-500">{publication_date}</span>
            </h6>
          </div>
          <h2>{intro_title}</h2>

          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(intro_content) }}
          />
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(page_desc) }} />
          {image_url && (
            <div>
              <Image
                className="imgClass"
                src={image_url}
                alt="image 1"
                height={750}
                width={650}
                loading="eager"
              />
            </div>
          )}
          <h2 id="sub1">{sub_title1}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content_1) }} />
          <h2 id="sub2">{sub_title2}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content2) }} />
          {image_url1 && (
            <div>
              <Image
                className="imgClass"
                src={image_url1}
                alt="image 2"
                height={750}
                width={650}
                loading="eager"
              />
            </div>
          )}
          <h2 id="sub3">{sub_title3}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content3) }} />
          {image_url2 && (
            <div>
              <Image
                className="imgClass"
                src={image_url2}
                alt="image 3"
                height={750}
                width={650}
                loading="eager"
              />
            </div>
          )}
          <h2 id="sub4">{sub_title4}</h2>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content4) }} />
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content_4) }} />
          {image_url3 && (
            <div>
              <Image
                className="imgClass"
                src={image_url3}
                alt="image 4"
                height={750}
                width={650}
                loading="eager"
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(conclusion) }} />
          {conclusion_title && <h2>{conclusion_title}</h2>}
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(conclusion_content),
            }}
          />
        </div>

        <div className="md:w-2/6 mt-10 md:mt-0">
          <div className="hidden lg:block">
            <div className="mb-10">
              <div className="px-5 py-2 bg-black shadow-2xl rounded-xl">
                <h3 className="text-2xl font-semibold  text-white">
                  Table of content
                </h3>
              </div>
              <div className="shadow-2xl rounded-xl mt-4 p-3">
                <div>
                  <a
                    href="#sub1"
                    className="text-[13px] mb-4 text-black hover:text-green-400"
                  >
                    {sub_title1}
                  </a>
                </div>
                <div>
                  <a
                    href="#sub2"
                    className="text-[13px] mb-4 text-black hover:text-green-400"
                  >
                    {sub_title2}
                  </a>
                </div>
                <div>
                  <a
                    href="#sub3"
                    className="text-[13px] mb-4 text-black hover:text-green-400"
                  >
                    {sub_title3}
                  </a>
                </div>
                <div>
                  <a
                    href="#sub4"
                    className="text-[13px] mb-4 text-black hover:text-green-400"
                  >
                    {sub_title4}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ArtlcleList />
          </div>
        </div>
      </div>
      <ArticleRelatedProduct artID={article_id} />
    </div>
  );
}
