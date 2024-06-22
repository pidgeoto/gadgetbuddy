import { redirect } from "next/navigation";

export default async function getIndividualArticle(slug) {
  const response = await fetch(
    `http://13.200.221.80:8000/api/articlesbyslug/${slug}`,
    {
      method: "GET",
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
    const errorMessage = `Failed to fetch article with ID ${slug}. Status: ${response.status} - ${response.statusText}`;
    console.log(errorMessage, "no Indiviual article");
    throw new redirect("/404");
  }

  return response.json();
}
