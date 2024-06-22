"use server"
const baseUrl = "http://13.200.221.80:8000/api/";

export const fetchArticles = async (modelId) => {
  const response = await fetch(`${baseUrl}articlescustom/?modelDetails_id=${modelId}`, {
    cache: "force-cache",
    headers: {
      Authorization: "Basic " + btoa(`${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`),
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Failed to fetch articles data. Status: ${response.status} - ${response.statusText}`);
  }
};

export const fetchYoutubeVideos = async (modelId) => {
  const response = await fetch(`${baseUrl}youtubevideos/${modelId}`, {
    cache: "force-cache",
    headers: {
      Authorization: "Basic " + btoa(`${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`),
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Failed to fetch YouTube videos. Status: ${response.status} - ${response.statusText}`);
  }
};
