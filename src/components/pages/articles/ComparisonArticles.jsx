"use client";
import getArticles from "@/api/getArticles";
import NoSearch from "@/components/NoSearch";
import ArticleCards from "@/components/pages/cards/ArticleCards";
import Skeleton5x5 from "@/components/skeleton/Skeleton5x5";
import { SearchField } from "@/components/ui/searchField";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ComparisonArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedArticlesResult = await getArticles();
        setArticles(fetchedArticlesResult);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (inView) {
      setDisplayedArticles((prevCount) => prevCount + 20);
    }
  }, [inView]);

  const comparisonArticles = articles.filter((item) => item.tags.includes(4));

  const filteredArticles = comparisonArticles.filter((comparisonArticle) => {
    const query = searchQuery.toLowerCase();
    const title = comparisonArticle.title.toLowerCase();
    return title.includes(query);
  });

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold lg:mt-4 mb-6">
            Popular Comparison
          </h3>
        </div>
        <div>
          <SearchField
            placeholder={"Search articles here"}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <Skeleton5x5 key={index} />
          ))
        ) : filteredArticles.length === 0 ? (
          <NoSearch />
        ) : (
          filteredArticles.slice(0, displayedArticles).map((article, index) => (
            <div key={index}>
              <ArticleCards data={article} />
            </div>
          ))
        )}
      </div>
 
      {!loading && filteredArticles.length > displayedArticles && (
        <div className="w-full flex justify-center py-4">
          <div ref={ref}>
            <Image
              src="/spinner.svg"
              height={100}
              width={100}
              alt="spinner"
              className="h-20 w-20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonArticles;
