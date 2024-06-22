"use server"
async function getRecommendation(display, camera, battery, gaming, pricemin, pricemax) {
  try {
    let queryParams = "";


    if (parseInt(display) > 799) {
      queryParams += "&display=True";
    }


    if (parseInt(camera) > 799) {
      queryParams += "&camera=True";
    }


    if (parseInt(battery) > 799) {
      queryParams += "&battery=True";
    }


    if (parseInt(gaming) > 799) {
      queryParams += "&gaming=True";
    }




    const apiUrl = `http://13.200.221.80:8000/api/mobile/filter/?${queryParams}&pricemin=${pricemin}&pricemax=${pricemax}`;




    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`
        )}`,
      },
    });


    if (!response.ok) {
      const errorMessage = `Failed to fetch model. Status: ${response.status} - ${response.statusText}`;
      console.log(errorMessage, "no Indiviual product");
    }


    const transformedResults = await response.json();


    return transformedResults;
  } catch (error) {
    console.error("Error in getRecommendation:", error);
    throw error;
  }
}


export default getRecommendation;



