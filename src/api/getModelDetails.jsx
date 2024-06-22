"use server";

export default async function getModelDetails() {
  let page = 1;
  let allResults = [];

  do {
    const response = await fetch(
      `http://13.200.221.80:8000/api/model-details/?page=${page}`,
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
      const errorMessage = `Failed to fetch model data. Status: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const { next, results } = await response.json();
    allResults = allResults.concat(
      results.map((res) => {
        return {
          model_id: res.model_id,
          slug: res.slug,
          model_name: res.model_name,
          thirtytwo_Score: res.thirtytwo_Score,
          brandname: res.brandname,
          meta_desc: res.meta_desc,
          price: res.price,
          categoryname: res.categoryname,
          priority: res.priority,
          promoted: res.promoted,
          priority_rank: res.priority_rank,
          img1: res.img1,
          brand: res.brand,
          category: res.category,
          tags: res.tags,
          mobile_Display_Score: res.mobile_Display_Score,
          mobile_Camera_Score: res.mobile_Camera_Score,
          mobile_Battery_Score: res.mobile_Battery_Score,
          mobile_Gaming_Score: res.mobile_Gaming_Score,
        };
      })
    );

    if (next) {
      page++;
    } else {
      break;
    }
  } while (true);

  return allResults;
}
