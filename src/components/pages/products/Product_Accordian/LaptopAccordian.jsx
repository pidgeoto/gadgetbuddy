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

const LaptopAccordian = ({ data }) => {
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
                      <h4>Model</h4>
                      <h6>{renderValue(data.laptop_model)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Series</h4>
                      <h6>{renderValue(data.laptop_series)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Processor</h4>
                      <h6>{renderValue(data.laptop_processor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Ram</h4>
                      <h6>{renderValue(data.laptop_RAM)} GB</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Web Cam</h4>
                      <h6>{renderValue(data.laptop_webcam)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Display</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Display Type</h4>
                      <h6>{renderValue(data.laptop_display_type)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Display Size</h4>
                      <h6 className="normal-case">{renderValue(data.laptop_display_size)} inch</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Resolution</h4>
                      <h6>{renderValue(data.laptop_display_resolution)} </h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Connectivity</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Wi-Fi</h4>
                      <h6>{renderValue(data.laptop_wifi)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6 className="normal-case">{renderValue(data.laptop_bluetooth)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Ethernet</h4>
                      <h6>{renderValue(data.laptop_ethernet)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>USB Ports</h4>
                      <h6>{renderValue(data.laptop_usb_ports)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Microphone</h4>
                      <h6>{renderValue(data.laptop_microphone)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>HDMI Ports</h4>
                      <h6>{renderValue(data.laptop_hdmi_port)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Performance</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Processor</h4>
                      <h6>{renderValue(data.laptop_processor)} mAh</h6>
                    </div>
                    <div className="accordianData">
                      <h4>RAM</h4>
                      <h6>{renderValue(data.laptop_RAM)} GB</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Graphics</h4>
                      <h6>{renderValue(data.laptop_graphics)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Audio Technology</h4>
                      <h6>{renderValue(data.laptop_audio_technology)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Operating System</h4>
                      <h6 className="normal-case">{renderValue(data.laptop_Operating_System)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Storage</h4>
                      <h6>{renderValue(data.laptop_Storage)} GB</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Clock Speed</h4>
                      <h6>{renderValue(data.laptop_Clock_Speed)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Gaming Features</h4>
                      <h6>{renderValue(data.laptop_gaming_features)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Keyboard</h4>
                      <h6>{renderValue(data.laptop_keyboard_type)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Additional Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Backlit Keyboard</h4>
                      <h6>{renderValue(data.laptop_backlit_keyboard)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Touchscreen</h4>
                      <h6>{renderValue(data.laptop_touchscreen)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Cooling System</h4>
                      <h6>{renderValue(data.laptop_cooling_system)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Fingerprint Sensor</h4>
                      <h6>{renderValue(data.laptop_fingerprint_sensor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Warranty</h4>
                      <h6>{renderValue(data.warranty)}</h6>
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

export default LaptopAccordian;
