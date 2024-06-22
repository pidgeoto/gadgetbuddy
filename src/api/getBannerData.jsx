"use server";

export async function getBannerData() {
  const response = await fetch("http://13.200.221.80:8000/api/brands/", {
    method: "GET",
    headers: {
      Authorization:
        "Basic " +
        btoa(`${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`),
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    const errorMessage = `Failed to fetch banner data. Status: ${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
}
