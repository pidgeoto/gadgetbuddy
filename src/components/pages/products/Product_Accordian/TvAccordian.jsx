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

const TvAccordian = ({ data }) => {
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
      <Accordion
        type="multiple"
        collapsible="true"
        className="w-full"
        defaultValue={["item-1", "item-2", "item-3"]}
      >
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
                      <h4>Operating System</h4>
                      <h6 className="normal-case">
                        {renderValue(data.tv_operating_system)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>RAM</h4>
                      <h6 className="normal-case">
                        {renderValue(data.tv_RAM)} mb
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Storage Capacity</h4>
                      <h6 className="normal-case">
                        {renderValue(data.tv_storage_capacity)}
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
                      <h4>Wi-Fi</h4>
                      <h4>{renderValue(data.tv_wifi)}</h4>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6>{renderValue(data.tv_bluetooth)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>HDMI Ports</h4>
                      <h6>{renderValue(data.tv_HDMI_ports)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>USB Ports</h4>
                      <h6>{renderValue(data.tv_USB_ports)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Video/Audio</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Speaker</h4>
                      <h6>{renderValue(data.speakers_audio_power)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Sound Technology</h4>
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
                      <h4>3D Technology</h4>
                      <h6>{renderValue(data.Smartwatch_sensors)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Color Technology</h4>
                      <h6>{renderValue(data.Smartwatch_sensors)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Refresh Rate</h4>
                      <h6>{renderValue(data.tv_refresh_rate_technology)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Display</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Screen Size</h4>
                      <h6>{renderValue(data.tv_screen_size)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Resolution</h4>
                      <h6>{renderValue(data.tv_resolution)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Panel Type</h4>
                      <h6>{renderValue(data.tv_panel_type)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Aspect Ratio</h4>
                      <h6>{renderValue(data.tv_aspect_ratio)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Smart TV Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Remote Controll</h4>
                      <h6>{renderValue(data.tv_remote_control)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Voice Assistant</h4>
                      <h6>{renderValue(data.tv_voice_assistant)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Screen Mirroring</h4>
                      <h6>{renderValue(data.tv_screen_mirroring)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>App Store</h4>
                      <h6>{renderValue(data.tv_app_store)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Web Browser</h4>
                      <h6>{renderValue(data.tv_web_browser)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Additional Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Features</h4>
                      <h6>{renderValue(data.tv_additional_features)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>VGA Input</h4>
                      <h6>{renderValue(data.tv_VGA_input)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Headphone Jack</h4>
                      <h6>{renderValue(data.tv_headphone_jack)}</h6>
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

export default TvAccordian;
