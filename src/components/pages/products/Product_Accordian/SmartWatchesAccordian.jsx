"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReelCard from "../../cards/ReelsCards";
import ArticleCards from "../../cards/ArticleCards";
import Image from "next/image";
import { fetchArticles, fetchYoutubeVideos } from "@/api/getRelatedArticles";

const SmartWatchesAccordian = ({ data }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const colors = data.color.split(" | ");

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
            <Accordion
              type="multiple"
              collapsible="true"
              className="w-full"
              defaultValue={["item-1"]}
            >
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
                      <h6>{data.model_name}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Processor</h4>
                      <h6>{renderValue(data.Smartwatch_processor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Battery Capacity</h4>
                      <h6 className="normal-case">
                        {renderValue(data.Smartwatch_battery_capacity)} mAh
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Display Size</h4>
                      <h6>{renderValue(data.Smartwatch_display_size)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Operating System</h4>
                      <h6 className="normal-case">
                        {renderValue(data.Smartwatch_operating_system)}
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
                  <h4>Display</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Display Type</h4>
                      <h6>{data.Smartwatch_display_type}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Screen Size</h4>
                      <h6 className="normal-case">{data.Smartwatch_display_size} inch</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Resolution</h4>
                      <h6>{renderValue(data.Smartwatch_display_resolution)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Screen Protection</h4>
                      <h6>{data.Smartwatch_screen_protection}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Dimension</h4>
                      <h6 className="normal-case">{data.dimension} mm</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Weight</h4>
                      <h6 className="normal-case">{data.weight} g</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Colour</h4>
                      <h6>
                        <div className="flex gap-2">
                          {colors.map((color, index) => (
                            <div key={index}>
                              <div
                                className="h-6 w-6 shadow-2xl border rounded-full"
                                style={{
                                  background: color,
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Battery</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Capacity</h4>
                      <h6 className="normal-case">
                        {renderValue(data.Smartwatch_battery_capacity)} mAh
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Battery Life</h4>
                      <h6>{renderValue(data.Smartwatch_battery_life)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Charging Type</h4>
                      <h6>{renderValue(data.Smartwatch_charging_type)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Connectivity Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Call Function</h4>
                      <h6>{renderValue(data.Smartwatch_incoming_call)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Wi-Fi</h4>
                      <h6>{renderValue(data.Smartwatch_wifi)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6 className="normal-case">
                        {renderValue(data.Smartwatch_bluetooth)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>GPS</h4>
                      <h6>{data.Smartwatch_gps}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Activity Tracker</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Calories</h4>
                      <h6>{renderValue(data.Smartwatch_calories)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Distance</h4>
                      <h6>{renderValue(data.Smartwatch_distance)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Steps</h4>
                      <h6>{renderValue(data.Smartwatch_steps)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Sensors</h4>
                      <h6>{renderValue(data.Smartwatch_sensors)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Heart Rate Monitor</h4>
                      <h6 className="normal-case">
                        {renderValue(data.Smartwatch_heart_rate_monitor)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Sleep Tracking</h4>
                      <h6>{renderValue(data.Smartwatch_sleep_tracking)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Other Features</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Fingerprint Sensor</h4>
                      <h6>{renderValue(data.mobile_Fingerprint_Sensor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Other Sensors</h4>
                      <h6>{renderValue(data.mobile_sensors)}</h6>
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

export default SmartWatchesAccordian;
