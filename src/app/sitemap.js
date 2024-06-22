import getArticles from "@/api/getArticles";
import getModelDetails from "@/api/getModelDetails";

async function sanitizeTitleForURL(title) {
  const sanitizedTitle = title
    .trim()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return sanitizedTitle;
}

async function fetchAllArticles() {
  try {
    return await getArticles();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}

async function fetchAllProducts() {
  try {
    return await getModelDetails();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

async function generateArticleUrls() {
  const allArticles = await fetchAllArticles();
  return Promise.all(allArticles.map(async (article) => {
    const sanitizedTitle = await sanitizeTitleForURL(article.title);
    const url = `https://www.32mobiles.com/articles/${sanitizedTitle}/${article.article_id}`;
    const lastModified = isValidDate(article.publication_date) ? new Date(article.publication_date) : new Date();
    return { url, lastModified };
  }));
}

async function generateProductUrls() {
  const allProducts = await fetchAllProducts();
  return Promise.all(allProducts.map(async (product) => {
    const sanitizedTitle = await sanitizeTitleForURL(`${product.brandname} ${product.model_name}`);
    const url = `https://www.32mobiles.com/${sanitizedTitle}/${product.model_id}`;
    const lastModified = new Date();
    return { url, lastModified };
  }));
}

export default async function generateSitemap() {
  try {
    const [articles, products] = await Promise.all([generateArticleUrls(), generateProductUrls()]);

    const staticPages = [
      { url: "https://www.32mobiles.com", changeFrequency: "weekly", priority: 1 },
      { url: "https://www.32mobiles.com/about", changeFrequency: "monthly", priority: 0.8 },
      { url: "https://www.32mobiles.com/articles", changeFrequency: "weekly", priority: 0.9 },
      { url: "https://www.32mobiles.com/products", changeFrequency: "weekly", priority: 0.9 },
      { url: "https://www.32mobiles.com/compare", changeFrequency: "monthly", priority: 0.8 },
      { url: "https://www.32mobiles.com/videos", changeFrequency: "weekly", priority: 0.6 },
      { url: "https://www.32mobiles.com/privacy", changeFrequency: "weekly", priority: 0.6 },
      { url: "https://www.32mobiles.com/contact", changeFrequency: "weekly", priority: 0.5 },
    ].map((page) => ({ ...page, lastModified: new Date() }));

    return [...staticPages, ...articles, ...products];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw error;
  }
}

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}
