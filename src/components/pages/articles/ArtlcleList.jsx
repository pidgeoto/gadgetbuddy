"use client";
import getArticles from "@/api/getArticles";
import Skeleton2x1 from "@/components/skeleton/Skeleton2x1";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticlesResult = await getArticles();
        const fetchedArticles = fetchedArticlesResult;
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const renderArticles = (tag) => {
    const filteredArticles = articles.filter((item) => item.tags.includes(tag));
    const slicedArticles = filteredArticles.slice(0, 10);

    return loading
      ? Array.from({ length: 10 }).map((_, index) => (
          <Skeleton2x1 key={index} />
        ))
      : slicedArticles.map((article, index) => (
          <div
            key={index}
            className="py-2 px-5 flex items-center justify-between"
          >
            <Link
              href={`/articles/${article.slug}`}
              className="hover:text-green-400"
            >
              <h5 className="leading-5">{article.title}</h5>
            </Link>
            <div>
              {article.image_url && (
                <Image
                  src={article.image_url}
                  height={50}
                  width={50}
                  alt="img"
                />
              )}
            </div>
          </div>
        ));
  };

  return (
    <div>
      <div className="mb-10">
        <div className="flex justify-between items-center px-5 py-2 bg-black shadow-2xl rounded-xl">
          <h3 className="text-2xl font-semibold  text-white">Hot Deals</h3>
          <Link
            href="/articles/deals"
            className=" text-[13px] text-white hover:text-white hover:underline"
          >
            View more
          </Link>
        </div>
        <div className="shadow-2xl rounded-xl mt-4 py-2">
          {renderArticles(3)}
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center px-5 py-2 bg-black shadow-2xl rounded-xl">
          <h3 className="text-2xl font-semibold  text-white">Comparison</h3>
          <Link
            href="/articles/comparison"
            className=" text-[13px] text-white hover:text-white hover:underline"
          >
            View more
          </Link>
        </div>
        <div className="shadow-2xl rounded-xl mt-4 py-2">
          {renderArticles(4)}
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center px-5 py-2 bg-black shadow-2xl rounded-xl">
          <h3 className="text-2xl font-semibold  text-white">Latest</h3>
          <Link
            href="/articles/upcoming"
            className=" text-[13px] text-white hover:text-white hover:underline"
          >
            View more
          </Link>
        </div>
        <div className="shadow-2xl rounded-xl mt-4 py-2">
          {renderArticles(1)}
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center px-5 py-2 bg-black shadow-2xl rounded-xl">
          <h3 className="text-2xl font-semibold  text-white">Upcoming</h3>
          <Link
            href="/articles/upcoming"
            className=" text-[13px] text-white hover:text-white hover:underline"
          >
            View more
          </Link>
        </div>
        <div className="shadow-2xl rounded-xl mt-4 py-2">
          {renderArticles(2)}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
