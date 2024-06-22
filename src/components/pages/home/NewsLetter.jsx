"use client"

import { Subscribe } from "@/components/ui/Subscribe";
import Image from "next/image";
import React, { useRef } from "react";

const NewsLetter = () => {
  const subscribeFormRef = useRef();
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-10">
      <div className="lg:w-2/4 py-6">
        <Image
          src="/images/newsletter.svg"
          alt="newsletter image"
          height={1000}
          width={1000}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center lg:w-2/4">
        <div>
          <h1 className="text-4xl font-bold text-center lg:text-start mb-4">
            Stay Connected: Subscribe to Our Newsletter!
          </h1>
          <h3 className="text-center lg:text-start mb-8">
            Unlock Exclusive Updates, Promotions, and Insights Straight to Your
            Inbox
          </h3>
        </div>
        <Subscribe
        ref={subscribeFormRef} type="email"
          placeholder="Enter your email here"
          className="w-full  mb-2 md:mb-0 md:mr-2 rounded-full bg-gray-100"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
