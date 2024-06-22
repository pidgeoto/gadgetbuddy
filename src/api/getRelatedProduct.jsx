"use server";

import getIndividualModelDetail from "./getIndividualModelDetail";

export default async function getRelatedProduct({ artID }) {
  try {
    const response = await fetch(
      `http://13.200.221.80:8000/api/articles/${artID}/`,
      {
        headers: {
          Authorization: `Basic ${btoa(
            `${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`
          )}`,
        },
      }
    );

    if (!response.ok) {
      const errorMessage = `Failed to fetch model data. Status: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data || !data.products || !Array.isArray(data.products)) {
      throw new Error("Invalid response format: products array not found.");
    }

    const productsWithDetails = await Promise.all(
      data.products.map(async (productId) => {
        try {
          const modelDetails = await getIndividualModelDetail(productId);
          return {
            slug: productId,
            details: modelDetails,
          };
        } catch (detailError) {
          console.error(`Error fetching details for product ${productId}:`, detailError);
          return {
            id: productId,
            details: null,
          };
        }
      })
    );

    return { products: productsWithDetails };
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw error;
  }
}
