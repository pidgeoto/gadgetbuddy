"use server"

export default async function getYoutubeDetail() {
  const response = await fetch(
    `http://13.200.221.80:8000/api/youtube-videos/`,
    {
      headers: {
        Authorization:
          "Basic " +
          btoa(
            `${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`
          ),
      },
    }
  );
  if (!response.ok) {
    const errorMessage = `Failed to fetch youtube data. Status: ${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
}
