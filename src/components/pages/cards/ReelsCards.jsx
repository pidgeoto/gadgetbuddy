import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ReelCard = ({ data }) => {
  function convertToThumbnail(url) {
    const videoIdRegex = /(?:embed\/|v=)([^&?]+)/;
    const matches = url.match(videoIdRegex);
    const videoId = matches ? matches[1] : null;

    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    } else {
      return null;
    }
  }

  const youtubeVideoURL = data.video_url;
  const thumbnailURL = convertToThumbnail(youtubeVideoURL);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-60 w-40 pb-3 sm:w-48 lg:w-[179px]   cursor-pointer ">
          {thumbnailURL && (
            <Image
              className="h-44  object-cover   mb-2 rounded-2xl  shadow-sm hover:shadow-xl"
              src={thumbnailURL}
              alt={data.title}
              width={750}
              height={750}
              {...(thumbnailURL.includes("32mobiles") ? {} : { rel: "nofollow noopener noreferrer" })}
            />
          )}

          <div className="p-3  my-2 py-4 rounded-2xl bg-gray-100 border border-slate-200  shadow-sm hover:shadow-xl">
            <div>
              <h5 className="capitalize truncate">{data.title}</h5>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{data.title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <iframe
            width="100%"
            height="315"
            src={`${youtubeVideoURL}?autoplay=1`}
            title={data.title}
            allowFullScreen
          ></iframe>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReelCard;
