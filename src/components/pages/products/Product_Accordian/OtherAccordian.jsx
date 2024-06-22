"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import ReelCard from "../../cards/ReelsCards";
import { fetchArticles, fetchYoutubeVideos } from "@/api/getRelatedArticles";

const OtherAccordian = ({ data }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        const articles = await fetchArticles(data.model_id);
        setRelatedArticles(articles);

        const videos = await fetchYoutubeVideos(data.model_id);
        setRelatedVideos(videos);
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };

    fetchRelatedData();
  }, [data.model_id]);
  return (
    <div>
      OtherAccordian
    </div>
  );
};

export default OtherAccordian;
