"use client"
import getYoutubeDetail from '@/api/getYoutubeDetail';
import NoSearch from '@/components/NoSearch';
import VideoCard from '@/components/pages/cards/VideoCards';
import Skeleton3x2 from '@/components/skeleton/Skeleton3x2';
import { SearchField } from '@/components/ui/searchField';
import React, { useEffect, useState } from 'react'

const Recommend = () => {
  const [YoutubeData, setYoutubeData] = useState([]);

    const [loading, setLoading] = useState(true);
  const [displayedVideos, setDisplayedVideos] = useState(6);
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
        console.log(apidata);
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
    setDisplayedVideos((prevCount) => prevCount + 3);
  };


  return (
    <div>
         <div className="flex items-center justify-between mt-4 mb-6 ">
        <div>
          <h3 className="text-2xl font-semibold">Recommended Videos</h3>
        </div>
        <div className='' >
          <SearchField
            placeholder={"Search videos here"}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap gap-2 lg:gap-4 mt-5 mb-16 lg:mb-10">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton3x2 key={index} />
              ))
              : filteredVideos.length === 0 ? (
                  <NoSearch />
                  ) : (
                      filteredVideos.slice(0, displayedVideos).map((ydata, index) => (
                          <div key={index}>
                <VideoCard data={ydata} />
              </div>
            ))
            )}
        </div>
        {filteredVideos.length >= 6 && (
          <div className="text-center">
            <button className="primary my-8" onClick={loadMore}>
              View More
            </button>
          </div>
        )}
      </div>
  )
}

export default Recommend