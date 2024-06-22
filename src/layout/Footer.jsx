import Logo from "@/components/Logo";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import {
  Copyright,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerMenu = [
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
    { title: "Privacy", path: "/privacy" },
  ];
  const ProductMenu = [
    { title: "Mobile", path: "/mobile" },
    { title: "Smartwatch", path: "/smartwatch" },
    { title: "Laptop", path: "/laptop" },
    { title: "Television", path: "/television" },
    { title: "Headphone", path: "/headphones" },
    { title: "Speaker", path: "/speakers" },
    { title: "Tablet", path: "/tablets" },
  ];

  const TrendingMenu = [
    { title: "Compare", path: "/compare" },
    { title: "Featured Product", path: "/featured" },
  ];
  const ArticleMenu = [
    { title: "Articles on Deals", path: "/deals" },
    { title: "Latest Articles", path: "/latest" },
    { title: "Upcoming Gadgets", path: "/upcoming" },
    { title: "Comparision Article", path: "/comparsion" },
  ];
  const VideoMenu = [
    { title: "Recommended Videos", path: "/videos/recommended" },
    { title: "Recent Video", path: "/videos" },
    { title: "Reels", path: "/videos" },
  ];

  return (
    <footer className="bg-gray-200">
      <div className="container-footer">
        <div className="mb-4 lg:mb-0">
          <Logo />
          <div className="mt-4 mb-8 w-44">
           
          </div>
          <div className="flex lg:mt-0 items-center gap-8 text-gray-600">
            <Link
              href="#"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link
              href="#"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Youtube size={30} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-2 mt-2">
            <ul className="flex flex-row items-center gap-2 lg:space-y-0 list-none pl-0 m-0">
              {footerMenu.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="font-light">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row ">
          <ul className="flex flex-col items-start  lg:space-y-0 list-none pl-0 m-0">
            <Link href="/products" className="mb-2">
              Category
            </Link>
            {ProductMenu.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="font-light">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:flex-row ">
          <ul className="flex flex-col items-start  lg:space-y-0 list-none pl-0 m-0">
            <Link href="/articles" className="mb-2">
              Articles
            </Link>
            {ArticleMenu.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="font-light">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:flex-row ">
          <ul className="flex flex-col items-start  lg:space-y-0 list-none pl-0 m-0">
            <Link href="/videos" className="mb-2">
              Videos
            </Link>
            {VideoMenu.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="font-light">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:flex-row ">
          <ul className="flex flex-col items-start  lg:space-y-0 list-none pl-0 m-0">
            <Link href="/" className="mb-2">
              Trending
            </Link>
            {TrendingMenu.map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="font-light">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-footer flex justify-between border-t-[1px] py-2 border-black">
        <div className="flex items-center justify-center gap-1">
          <h6 className="text-base text-gray-500">Built in India</h6>
          <Image src="/images/india.webp" height={20} width={20} alt="india" />
        </div>

        <div className="flex items-center justify-center gap-1">
          <Copyright size={16} strokeWidth={1} />
          <h6 className="text-base my-4 text-gray-500">
            2024 GadgetBuddy. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
