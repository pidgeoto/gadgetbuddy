
import { Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Countdown from "./Countdown";

const Offers = () => {
  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm h-12 w-48  p-2 cursor-pointer flex  items-center">
        <div>
          <Smartphone className="h-5" />
        </div>
        <div>
          <h4 className="ml-1">Special Offers</h4>
        </div>
      </div>
      <div className="my-4 h-72">
        <Image
          src={"/images/ad.webp"}
          alt="ad poster"
          height={1000}
          width={700}
          className="h-full"
        />
      </div>
      <div className="lg:mt-4  rounded-xl h-32 ">
        <h3 className="text-center pb-4">Offer Valid Till</h3>
        <Countdown/>
      </div>
    </div>
  );
};

export default Offers;
