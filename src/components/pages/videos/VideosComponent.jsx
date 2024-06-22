"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import getYoutubeDetail from "@/api/getYoutubeDetail";
import { SearchField } from "@/components/ui/searchField";
import ReelCard from "../cards/ReelsCards";
import NoSearch from "@/components/NoSearch";
import VideoCard from "../cards/VideoCards";
import Skeleton3x2 from "@/components/skeleton/Skeleton3x2";

const VideosComponent = () => {
  const [YoutubeData, setYoutubeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedVideos, setDisplayedVideos] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allapidata = await getYoutubeDetail();
        const apidata = allapidata
          .filter((item) => item.upload_datetime)
          .sort(
            (a, b) => new Date(b.upload_datetime) - new Date(a.upload_datetime)
          );
        setYoutubeData(apidata);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching youtube details:", error);
      }
    };

    fetchData();
  }, []);

  const filteredVideos = YoutubeData.filter((video) => {
    const query = searchQuery.toLowerCase();
    const title = video.title.toLowerCase();
    return title.includes(query);
  });

  const loadMore = () => {
    setDisplayedVideos((prevCount) => prevCount + 20);
  };
  return (
    <div className="my-6">
      <div className="flex flex-row items-center justify-between mt-4 mb-6">
        <h3 className="text-2xl font-bold">Recommended</h3>
        <Link href="/videos/recommended">View More</Link>
      </div>
      <div className=" flex flex-row flex-wrap gap-2 lg:gap-4 mt-5 mb-16 lg:mb-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton3x2 key={index} />
            ))
          : YoutubeData.filter((recommendeYN) => {
              return recommendeYN.recom === "Yes";
            })
              .slice(0, 3)
              .map((ydata, index) => (
                <div key={index}>
                  <VideoCard data={ydata} />
                </div>
              ))}
      </div>
      <div className="flex flex-row items-center justify-between mt-4 lg:mt-12 mb-6">
        <h3 className="text-2xl font-bold">Recent Videos</h3>
        <Link href="/Trending">View More</Link>
      </div>
      <div className="flex flex-row flex-wrap gap-2 lg:gap-4 mt-5 mb-16 lg:mb-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton3x2 key={index} />
            ))
          : YoutubeData.slice(0, 5).map((ydata, index) => (
              <div key={index}>
                <ReelCard data={ydata} />
              </div>
            ))}
      </div>
      <div className="flex flex-row items-center justify-between mt-4 lg:mt-12 mb-6">
        <h3 className="text-2xl font-bold">Reels</h3>
        <Link href="/Trending">View More</Link>
      </div>
      <div className=" flex flex-row flex-wrap gap-2 lg:gap-4 mt-5 mb-16 lg:mb-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton3x2 key={index} />
            ))
          : YoutubeData.filter((shorts) => {
              const durationInMinutes = parseFloat(shorts.duration);
              return durationInMinutes < 1;
            })
              .slice(0, 3)
              .map((ydata, index) => (
                <div key={index}>
                  <ReelCard data={ydata} />
                </div>
              ))}
      </div>
      <div className="flex items-center justify-between mt-4 lg:mt-12 mb-6">
        <div>
          <h3 className="text-2xl font-semibold">All Videos</h3>
        </div>
        <div>
          <SearchField
            placeholder={"Search videos here"}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap gap-2 lg:gap-4 mt-5 mb-16 lg:mb-10">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton3x2 key={index} />
          ))
        ) : filteredVideos.length === 0 ? (
          <NoSearch />
        ) : (
          filteredVideos.slice(0, displayedVideos).map((ydata, index) => (
            <div key={index}>
              <VideoCard data={ydata} />
            </div>
          ))
        )}
      </div>
      {filteredVideos.length >= 20 && (
        <div className="text-center">
          <button className="primary my-8" onClick={loadMore}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideosComponent;
