"use server";
export default async function getArticles() {
  let allResults = [];

  try {
    for (let page = 1; ; page++) {
      const response = await fetch(
        `http://13.200.221.80:8000/api/articles/?page=${page}`,
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
        const errorMessage = `Failed to fetch articles data. Status: ${response.status} - ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const { next, results } = await response.json();
      allResults = allResults.concat(
        results
          .filter((res) => res?.publication_date)
          .map((res) => {
            return {
              article_id: res.article_id,
              slug: res.slug,
              title: res.title,
              meta_desc: res.meta_desc,
              image_url: res.image_url,
              author_name: "Admin",
              tags: res.tags,
              promoted: res.promoted,
              priority: res.priority,
              publish_date: res.publication_date
            };
          })
      );
      if (!next) break;
    }
    allResults.sort(
      (a, b) => new Date(b.publish_date) - new Date(a.publish_date)
    );
    return allResults;
  } catch (error) {
    console.error("Error in getArticles:", error);
    throw error;
  }
}
