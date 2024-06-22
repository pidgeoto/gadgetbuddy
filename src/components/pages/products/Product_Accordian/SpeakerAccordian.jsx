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
import ArticleCards from "../../cards/ArticleCards";
import { fetchArticles, fetchYoutubeVideos } from "@/api/getRelatedArticles";

const SpeakerAccordian = ({ data }) => {
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
            <h2 className="text-sm font-light lg:text-2xl"> Specifications</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple"  defaultValue={["item-1"]} collapsible="true" className="w-full">
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
                      <h4>Battery Life</h4>
                      <h6 className="normal-case">{renderValue(data.speakers_battery_life)} hours</h6>
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
                      <h4>Wi-Fi</h4>
                      <h6>{renderValue(data.speakers_wifi)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6 className="normal-case">{renderValue(data.speakers_bluetooth)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Power Supply</h4>
                      <h6>{renderValue(data.speakers_power_supply)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Headphone Jack</h4>
                      <h6>{renderValue(data.speakers_headphone_jack)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>USB Ports</h4>
                      <h6>{renderValue(data.speakers_USB_ports)}</h6>
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
                      <h4>Audio Power</h4>
                      <h6>{renderValue(data.speakers_audio_power)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Audio Technology</h4>
                      <h6>{renderValue(data.speakers_audio_technology)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Frequency Response</h4>
                      <h6>{renderValue(data.speakers_frequency_response)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Audio Inputs</h4>
                      <h6>{renderValue(data.speakers_audio_inputs)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Dolby Atmos Support</h4>
                      <h6>{renderValue(data.speakers_dolby_atmos_support)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Subwoofer</h4>
                      <h6>{renderValue(data.speakers_subwoofers)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Additional Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                  <div className="accordianData">
                      <h4>Water Resistance</h4>
                      <h6>{renderValue(data.speakers_water_resistance)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Dust Resistance</h4>
                      <h6>{renderValue(data.speakers_dust_resistance)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Remote Controll</h4>
                      <h6>{renderValue(data.speakers_remote_control)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Compatible Devices</h4>
                      <h6>{renderValue(data.speakers_compatible_devices)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Power Consumption</h4>
                      <h6>{renderValue(data.speakers_power_consumption)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline">
            <h2 className="text-sm font-light lg:text-2xl">Related articles</h2>
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
            <h2 className="text-sm font-light lg:text-2xl">Related videos</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row gap-2">
              {relatedVideos.length > 0 ? (
                relatedVideos.map((video, index) => (
                  <div key={index}><ReelCard data={video} /></div>
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

export default SpeakerAccordian;
