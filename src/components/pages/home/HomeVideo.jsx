"use client";
import React, { useEffect, useState } from "react";
import getYoutubeDetail from "@/api/getYoutubeDetail";
import Image from "next/image";
import Skeleton2x1 from "@/components/skeleton/Skeleton2x1";

const HomeVideo = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideosResult = await getYoutubeDetail();
        const fetchedVideos = fetchedVideosResult;
        setVideos(fetchedVideos);
        setCurrentVideo(
          fetchedVideos.length > 0 ? fetchedVideos[0].video_url : ""
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  function convertToThumbnail(videoUrl) {
    const videoIdRegex = /(?:embed\/|v=)([^&?]+)/;
    const matches = videoUrl.match(videoIdRegex);
    const videoId = matches ? matches[1] : null;

    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2 className="text-center pt-4">Featured Videos</h2>
      <div className="flex flex-col lg:flex-row gap-3 my-5">
        <div>
          <iframe
            src={currentVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="h-[198px] lg:h-[350px] w-[328px] lg:w-[650px] rounded-xl shadow-xl border"
          />
        </div>
        <div>
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton2x1 key={index} />
            ))
          ) : (
            <div className="h-[350px] overflow-x-hidden overflow-y-scroll">
              {videos.map((video, index) => (
                <div
                  onClick={() => handleVideoClick(video.video_url)}
                  key={index}
                  className="cursor-pointer rounded-xl shadow-md my-1 border p-4 flex justify-center items-center"
                >
                  <h5>
                    {video.title.length > 45
                      ? video.title.slice(0, 45) + "..."
                      : video.title}
                  </h5>
                  {convertToThumbnail(video.video_url) && (
                    <Image
                      src={convertToThumbnail(video.video_url)}
                      height={40}
                      width={70}
                      alt="thumbnail"
                      className="ml-2"
                      {...(video.video_url.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
