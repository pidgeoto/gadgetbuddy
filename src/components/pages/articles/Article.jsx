"use client";
import React, { useState, useEffect } from "react";
import Skeleton5x5 from "../../skeleton/Skeleton5x5";
import { SearchField } from "@/components/ui/searchField";
import NoSearch from "@/components/NoSearch";
import getArticles from "@/api/getArticles";
import ArticlesBanner from "./ArticlesBanner";
import AllArticleCard from "../cards/AllArticlesCard";
import Image from "next/image";
import { useInView } from "react-intersection-observer";



const Article = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
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

  const filteredArticles = articles.filter((blog) => {
    const query = searchQuery.toLowerCase();
    const title = blog.title.toLowerCase();
    return title.includes(query);
  });

  const showViewMoreButton = displayedArticles < filteredArticles.length;

  return (
    <div>
      <ArticlesBanner />
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <div>
          <h3 className="text-2xl font-semibold">All Articles</h3>
        </div>
        <div>
          <SearchField
            placeholder={"Search articles here"}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-72"
          />
        </div>
      </div>
      <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-5 mb-10">
        {loading ? (
          Array.from({ length: displayedArticles }).map((_, index) => (
            <Skeleton5x5 key={index} />
          ))
        ) : filteredArticles.length === 0 ? (
          <NoSearch />
        ) : (
          filteredArticles.slice(0, displayedArticles).map((article, index) => (
            <div key={index}>
              <AllArticleCard data={article} />
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

export default Article;
