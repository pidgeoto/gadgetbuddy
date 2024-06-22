"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import ReelCard from "../../cards/ReelsCards";
import ArticleCards from "../../cards/ArticleCards";

const HeadPhonesAccordian = ({ data }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        const relatedArticlesResponse = await fetch(
          `http://13.200.221.80:8000/api/articlescustom/?modelDetails_id=${data.model_id}`,{
            cache: "force-cache",
            headers: {
              Authorization:
                "Basic " +
                btoa(
                  `${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`
                ),
            },
          }
        );
        if (relatedArticlesResponse.ok) {
          const articles = await relatedArticlesResponse.json();
          setRelatedArticles(articles);
        }
        const youtubeVideosResponse = await fetch(
          `http://13.200.221.80:8000/api/youtubevideos/${data.model_id}`,
          {
            cache: "force-cache",
            headers: {
              Authorization:
                "Basic " +
                btoa(
                  `${process.env.YOUTUBE_USERNAME}:${process.env.YOUTUBE_PASSWORD}`
                ),
            },
          }
        );

        if (youtubeVideosResponse.ok) {
          const videos = await youtubeVideosResponse.json();
          setRelatedVideos(videos);
        }
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };

    fetchRelatedData();
  }, [data.model_id]);
  const sanitizeTitleForURL = (title) => {
    const sanitizedTitle = title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return sanitizedTitle;
  };
  const renderValue = (value) => {
    if (value === null || value === "") {
      return "-";
    } else if (typeof value === "boolean") {
      return value ? (
        <Image
          src="/images/check.webp"
          height={100}
          width={100}
          className="h-4 w-4"
          alt="image modal"
        />
      ) : (
        <Image
          src="/images/cross.webp"
          height={100}
          width={100}
          className="h-4 w-4"
          alt="image modal"
        />
      );
    }
    return value;
  };
  return (
    <div>
      <Accordion type="multiple" collapsible="true" className="w-full" defaultValue={["item-1", "item-2", "item-3"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <h1 className="text-sm font-light lg:text-2xl"> Specifications</h1>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple" collapsible="true" className="w-full"  defaultValue={["item-1"]}>
              <AccordionItem
                value="item-1"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Key Specs</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Model name</h4>
                      <h6>{renderValue(data.model_name)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Series</h4>
                      <h6 className="normal-case">{renderValue(data.headphone_series)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Carry Type</h4>
                      <h6 className="normal-case">
                        {renderValue(data.headphone_carry_type)}
                      </h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Connectivity</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Wireless</h4>
                      <h6>{renderValue(data.headphone_wireless)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6 className="normal-case">
                        {renderValue(data.headphone_bluetooth_version)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Wireless Range</h4>
                      <h6>{renderValue(data.headphone_wireless_range)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Audio</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Noise Cancelling</h4>
                      <h6>{renderValue(data.headphone_noise_cancelling)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Microphone</h4>
                      <h6>{renderValue(data.headphone_microphone)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Sound Quality</h4>
                      <h6>{renderValue(data.headphone_sound_quality)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Frequency Response</h4>
                      <h6>{renderValue(data.headphone_frequency_response)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Other Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Voice Assistant</h4>
                      <h6>{renderValue(data.headphone_voice_assistant_support)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Controll Buttons</h4>
                      <h6>{renderValue(data.headphone_control_buttons)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline">
            <h1 className="text-sm font-light lg:text-2xl">Related articles</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-5 mb-10">
            {relatedArticles.length > 0 ? (
                relatedArticles.slice(0, 12).map((article, index) => (
                  <div key={index}>
                    <ArticleCards data={article} />
                  </div>
                ))
              ) : (
                <div>There are no articles.</div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:no-underline">
            <h1 className="text-sm font-light lg:text-2xl">Related videos</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row gap-2">
              {relatedVideos.length > 0 ? (
                relatedVideos.map((video, index) => (
                  <div key={index}>
                    <ReelCard data={video} />
                  </div>
                ))
              ) : (
                <div>There are no related videos.</div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HeadPhonesAccordian;
