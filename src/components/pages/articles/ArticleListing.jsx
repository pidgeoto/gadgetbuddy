import Link from "next/link";
import ArticleCards from "../cards/ArticleCards";
import getArticles from "@/api/getArticles";
import Article from "./Article";
import ArticleContent from "./content/ArticleContent";

const ArticleListing = async () => {
  const detailsResult = getArticles();
  const articleData = await detailsResult;
  return (
    <div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h2 className="pageTitle">Hot Deals</h2>
          <Link href="/articles/deals">View More</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10">
          {articleData
            .filter((item) => item.tags.includes(3))
            .slice(0, 4)
            .map((article, index) => (
              <div key={index}>
                <ArticleCards data={article} />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h2 className="pageTitle">Popular Comparison</h2>
          <Link href="/articles/comparison">View More</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10">
          {articleData
            .filter((item) => item.tags.includes(4))
            .slice(0, 4)
            .map((article, index) => (
              <div key={index}>
                <ArticleCards data={article} />
              </div>
            ))}
        </div>
      </div>
      <ArticleContent />
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h2 className="pageTitle">Upcoming Gadgets</h2>
          <Link href="/articles/upcoming">View More</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10">
          {articleData
            .filter((item) => item.tags.includes(1))
            .slice(0, 4)
            .map((article, index) => (
              <div key={index}>
                <ArticleCards data={article} />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h2 className="pageTitle">Latest Gadgets</h2>
          <Link href="/articles/latest">View More</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10">
          {articleData
            .filter((item) => item.tags.includes(2))
            .slice(0, 4)
            .map((article, index) => (
              <div key={index}>
                <ArticleCards data={article} />
              </div>
            ))}
        </div>
      </div>
      <Article />
    </div>
  );
};

export default ArticleListing;
