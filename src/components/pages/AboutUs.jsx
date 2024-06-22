import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section class="flex items-center my-0 lg:mt-1 lg:mb-2  xl:h-3/4 font-poppins ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full mb-10 lg:w-1/2 lg:mb-0">
              <div class="relative ">
                <Image
                  src="/images/about.svg"
                  alt=""
                  className="relative x-40 object-fill w-full h-96 "
                  height={1000}
                  width={1000}
                />
                <div className="absolute z-10 hidden w-full h-full bg-transparent rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
              </div>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="relative">
                <h1 class="-top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-30 md:block ">
                  About Us
                </h1>
                <h1 class="pl-2 text-3xl font-bold border-l-8 border-[#BCFF63] md:text-5xl">
                  India’s trending Gadget Discovery Platform
                </h1>
              </div>
              <h6 class="mt-6 mb-4 text-base leading-7 text-gray-500 ">
                Launched in 2023, GadgetBuddy is the largest gadget discovery
                site in India, focused on smartphones. It provides information
                and interactive tools to help people decide which phone to buy
                and where to buy it from
              </h6>
              <h6 class="mt-6 mb-10 text-base leading-7 text-gray-500 ">
                GadgetBuddy is visited by millions gadget enthusiasts every
                month, and ranks among the top websites in India. GadgetBuddy has
                a team of 45+ people based out of Gurgaon (HO).
              </h6>
            </div>
            <div className=" pb-5 mb-5 xl:pb-0 xl:mb-0  ">
              <h6 class=" mb-10 text-base leading-7  text-gray-500 ">
                GadgetBuddy works on the leading electronics and telecom
                brands (Samsung, Apple, Oppo, OnePlus, Vivo, etc.), as well as
                leading e-tailers (Amazon, Flipkart etc.), to provide them with
                innovative ways to reach GadgetBuddy’s gadget enthusiast
                community for promoting their products and offers.
              </h6>
              <div className="flex justify-center ">
                <Link href={"/articles"} className="text-white">
                  <button className="primary">All Articles</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
