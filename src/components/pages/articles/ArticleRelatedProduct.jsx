"use client";
import React, { useEffect, useState } from "react";
import CompareFeaturedCard from "../cards/compareFeaturedCard";
import getRelatedProduct from "@/api/getRelatedProduct";
import getProductInID from "@/api/getProductInID";

const ArticleRelatedProduct = ({ artID }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { products: productsWithDetails } = await getRelatedProduct({
          artID,
        });

        const filteredProducts = productsWithDetails.filter(
          (product) => product !== null
        );
        const detailedProducts = await Promise.all(
          filteredProducts.map(async (pdata) => {
            try {
              const details = await getProductInID(pdata.id);
              return { ...pdata, details };
            } catch (detailError) {
              console.error(
                `Error fetching details for product ${pdata.id}:`,
                detailError
              );
              return null;
            }
          })
        );

        setProducts(detailedProducts.filter((product) => product !== null));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [artID]);

  return (
    <>
      {products.length > 0 && (
        <div className="bg-gray-100 rounded-lg pb-2 mb-4">
          <h2 className="text-center pt-4">Related Product</h2>
          <div className="flex flex-row gap-3 m-3 flex-wrap">
            {products.map((pdata, index) => (
              <CompareFeaturedCard key={index} products={pdata.details} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleRelatedProduct;
