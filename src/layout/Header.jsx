"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const activePath = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menus = [
    { title: "Home", path: "/" },
    { title: "Category", path: "/products" },
    { title: "Articles", path: "/articles" },
    // { title: "Videos", path: "/videos" },
  ];

  return (
    <nav className="bg-white border-b h-15 z-10 sticky top-0">
      <div className="container py-3 lg:py-5 flex items-center justify-between flex-col lg:flex-row">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Logo />

          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => {
                setMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? (
                <X size={20} onClick={closeMenu} />
              ) : (
                <Menu size={20} onClick={closeMenu} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:flex lg:items-center lg:w-full ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 lg:mt-0`}
        >
          <ul className="lg:flex lg:space-x-4 lg:ml-auto lg:mt-0 lg:w-auto list-none pl-0 m-0">
            {menus.map((item, idx) => (
              <li key={idx} className="mb-2 lg:mb-0">
                <Link
                  href={item.path}
                  // className="block lg:inline-block"
                  className={`${
                    item.path === activePath ? "text-green-400 font-bold" : "text-black block lg:inline-block"
                  }`}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={"/compare"}
            className="text-white hover:text-black"
            onClick={closeMenu}
          >
            <button className="primary lg:ml-4">Compare</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
