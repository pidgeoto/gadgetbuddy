// pages/api/rss.js

import RSS from "rss";
import getModelDetails from "@/api/getModelDetails";
import getArticles from "@/api/getArticles";
import { sanitizeTitleForURL } from "@/lib/utils";

export default async function handler(req, res) {
  try {
    const [allProducts] = await Promise.all([getModelDetails()]);
    const [allArticles] = await Promise.all([getArticles()]);

    const { title, meta_desc, products } = allProducts;

    const feed = new RSS({
      title,
      description: meta_desc,
      feed_url: "https://www.32mobiles.com/rss",
      site_url: "https://www.32mobiles.com/",
      language: "en",
      pubDate: new Date(),
    });

    const articlePromises = allArticles.map(async (article) => {
      const articleTitle = article.title;
      const articleUrl = `https://www.32mobiles.com/articles/${sanitizeTitleForURL(articleTitle)}/${article.article_id}`;
      return { title: articleTitle, url: articleUrl };
    });

    const productPromises = products.map(async (product) => {
      const productTitle = `${product.brandname} ${product.model_name}`;
      const productUrl = `https://www.32mobiles.com/${product.categoryname}/${sanitizeTitleForURL(productTitle)}/${product.model_id}`;
      return { title: productTitle, url: productUrl };
    });

    const [articleResults, productResults] = await Promise.all([
      Promise.all(articlePromises),
      Promise.all(productPromises),
    ]);

    articleResults.forEach((article) => {
      feed.item(article);
    });

    productResults.forEach((product) => {
      feed.item(product);
    });

    const xml = feed.xml();
    
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml);
  } catch (error) {
    console.error("Error in generating RSS feed:", error);
    res.status(500).send("Internal Server Error");
  }
}
