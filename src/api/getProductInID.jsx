"use server";
import { redirect } from "next/navigation";
export default async function getProductInID(id) {
  const response = await fetch(
    `http://13.200.221.80:8000/api/modeldetails/${id}`,
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
    const errorMessage = `Failed to fetch model with ID ${id}. Status: ${response.status} - ${response.statusText}`;
    console.log(errorMessage, "no Indiviual product");
    throw new redirect("/404");
  }

  return response.json();
}
