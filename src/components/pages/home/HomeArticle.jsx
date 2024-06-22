import ArticleCards from "../cards/ArticleCards";
import Link from "next/link";
import getArticles from "@/api/getArticles";
import { Suspense } from "react";
import Skeleton3x2 from "@/components/skeleton/Skeleton3x2";

const HomeArticle = async () => {
  const fetchedArticlesResult = getArticles();
  const articleData = await fetchedArticlesResult;

  return (
    <div className="bg-gray-100 rounded-lg">
      <h2 className="text-center pt-4">Featured Articles</h2>
      <Suspense
        fallback={Array.from({ length: 6 }).map((_, index) => (
          <Skeleton3x2 key={index} />
        ))}
      >
        <div className="px-5 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          {articleData
            .filter((item) => item.promoted === true || item.priority === true)
            .slice(0, 6)
            .map((article, index) => (
              <div key={index}>
                <ArticleCards data={article} />
              </div>
            ))}
        </div>
      </Suspense>

      <div className="text-center pb-5 mb-5">
        <Link href={"/articles"} className="">
          <button className="primary">All Articles</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeArticle;
