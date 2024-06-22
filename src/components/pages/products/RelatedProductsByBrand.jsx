"use client";

import { useEffect, useRef, useState } from "react";
import MobileCard from "../cards/MobileCard";
import getModelDetails from "@/api/getModelDetails";
import Link from "next/link";
import { motion } from "framer-motion";
import { sanitizeTitleForURL } from "@/lib/utils";

const RelatedProductsByBrand = ({
  category,
  selectedProductPrice,
  selectedProductId,
}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategoryComponent = (categoryId) => {
    const categoryComponents = {
      "9e4c6903-5d10-47f6-81fe-a4e000350f21": "headphones",
      "b3dac06e-e1b3-461f-aa1d-b97f3021e695": "mobile",
      "a347f89e-8d16-4eb9-a4b2-02e175ac81ba": "laptop",
      "24805198-bc9e-4a09-b756-352d1366e875": "speakers",
      "eac38cfe-9023-4613-ac86-1179d27ece40": "tablets",
      "758355e3-b8f9-4171-a1d6-ad0608101c9a": "smartwatch",
      "a4453117-b711-4832-83be-1b0f5047840e": "television",
    };

    return categoryComponents[categoryId] || null;
  };

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        Array.from(carousel.current.children).reduce(
          (acc, child) => acc + child.offsetWidth,
          0
        )
      );
    }
  }, [carousel]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const allProducts = await getModelDetails();

        const filteredProducts = allProducts.filter(
          (product) =>
            product.category === category &&
            product.price !== null &&
            product.price >= selectedProductPrice * 0.8 &&
            product.price <= selectedProductPrice * 1.2 &&
            product.model_id !== selectedProductId
        );

        setRelatedProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setError(`Error fetching related products: ${error.message}`);
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [category, selectedProductPrice, selectedProductId]);

  const handleWheel = (event) => {
    if (carousel.current) {
      const delta = event.deltaY || event.detail || event.wheelDelta;
      const currentScrollLeft = carousel.current.scrollLeft;
      const maxScrollLeft =
        carousel.current.scrollWidth - carousel.current.clientWidth;
      let newScrollLeft = currentScrollLeft + delta;
      newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
      carousel.current.scrollLeft = newScrollLeft;
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.addEventListener("wheel", handleWheel);
      return () => {
        if (carousel.current) {
          carousel.current.removeEventListener("wheel", handleWheel);
        }
      };
    }
  }, [carousel]);

  return (
    <div>
      <h3>Related Products</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="mt-4">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="overflow-hidden w-80 sm:w-[480px] md:w-[680px] lg:w-[960px]"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width || 0 }}
            className="flex"
          >
            {!loading &&
              relatedProducts.map((product, index) => (
                <motion.div key={index} className="p-1">
                  <Link
                    href={`/${
                      getCategoryComponent(product.category) || ""
                    }//${product.slug}`}
                  >
                    <MobileCard brandsProduct={product} />
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RelatedProductsByBrand;
