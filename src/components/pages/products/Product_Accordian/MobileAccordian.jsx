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

const MobileAccordion = ({ data }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

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
                      <h4>Display Size</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_screen_size)} inch
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Operating System</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_operating_system)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Processor</h4>
                      <h6>{renderValue(data.mobile_processor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Ram</h4>
                      <h6>{renderValue(data.mobile_ram)} GB</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Front Camera</h4>
                      <h6>
                        {renderValue(data.mobile_front_camera_resolution)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Back Camera</h4>
                      <h6>{renderValue(data.mobile_back_camera_resolution)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Battery Capacity</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_battery_capacity)} mAh
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
                      <h4>Display Size</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_screen_size)} inch
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4> Resolution</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_resolution)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4> Refresh Rate</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_Refresh_Rate)} hz
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4> Dimension</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_dimensions)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Aspect Ratio</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_Aspect_Ratio)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Peak Brightness</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_Brightness)}
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
                  <h4>Camera</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Front Camera</h4>
                      <h6>
                        {renderValue(data.mobile_front_camera_resolution)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Back Camera</h4>
                      <h6>{renderValue(data.mobile_back_camera_resolution)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Resolution</h4>
                      <h6>{renderValue(data.mobile_camera_resolution)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
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
                        {renderValue(data.mobile_battery_capacity)} mAh
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>Battery Life</h4>
                      <h6>{renderValue(data.mobile_battery_life)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Battery type</h4>
                      <h6>{renderValue(data.mobile_Battery_Type)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Fast charging</h4>
                      <h6>{renderValue(data.mobile_Quick_Charging)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Wireless Charging</h4>
                      <h6>{renderValue(data.mobile_wireless_charging)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Storage</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Internal memory</h4>
                      <h6>{renderValue(data.mobile_Internal_Memory)} GB</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Expandable Memory</h4>
                      <h6>{renderValue(data.mobile_expandable_storage)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Stand by time</h4>
                      <h6>{renderValue(data.mobile_Standby_time)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>USB OTG</h4>
                      <h6>{renderValue(data.mobile_USB_Type_C)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Storage Type</h4>
                      <h6>{renderValue(data.mobile_Storage_Type)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Storage Capacity</h4>
                      <h6>{renderValue(data.mobile_storage_capacity)} GB</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Network and Connectivity</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Network Support</h4>
                      <h6>{renderValue(data.mobile_network_connectivity)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Wi-Fi</h4>
                      <h6>{renderValue(data.mobile_wifi)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Bluetooth</h4>
                      <h6 className="normal-case">
                        {renderValue(data.mobile_bluetooth_version)}
                      </h6>
                    </div>
                    <div className="accordianData">
                      <h4>GPS</h4>
                      <h6>{renderValue(data.mobile_gps)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Network Support</h4>
                      <h6>{renderValue(data.mobile_connectivity)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>SIM Slot</h4>
                      <h6>{renderValue(data.mobile_sim_card_slots)}</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Performance</h4>
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
                    <div className="accordianData">
                      <h4>Fabrication</h4>
                      <h6>{renderValue(data.mobile_Fabrication)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Architecture</h4>
                      <h6>{renderValue(data.mobile_Architecture)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Processor</h4>
                      <h6>{renderValue(data.mobile_processor)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Ram</h4>
                      <h6>{renderValue(data.mobile_ram)} GB</h6>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="px-8 rounded-lg mb-2 border bg-slate-50"
              >
                <AccordionTrigger className="hover:no-underline">
                  <h4>Multimedia</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className="accordianData">
                      <h4>Audio Jack</h4>
                      <h6>{renderValue(data.mobile_Audio_Jack)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>FM Radio</h4>
                      <h6>{renderValue(data.mobile_FM_Radio)}</h6>
                    </div>
                    <div className="accordianData">
                      <h4>Speaker Quality</h4>
                      <h6>{renderValue(data.mobile_speaker_quality)}</h6>
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

export default MobileAccordion;
