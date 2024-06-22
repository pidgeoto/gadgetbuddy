"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const isID = (segment) => {
  return segment.match(
    /^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
  );
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    setComponentMounted(true);

    if (componentMounted) {
      const breadcrumb = document.querySelector(`.${containerClasses}`);
      if (breadcrumb) {
        const items = breadcrumb.querySelectorAll(`.${listClasses}`);
        const lastItem = items[items.length - 1];

        if (lastItem && lastItem.textContent.trim() === "|") {
          lastItem.remove();
        }
      }
    }
  }, [componentMounted, containerClasses, listClasses]);

  if (
    pathNames.length === 0 ||
    (pathNames.length === 1 && pathNames[0] === "Home")
  ) {
    return null;
  }

  return (
    <div className="max-w-screen-xl px-4 sm:px-8 md:px-16 lg:px-40 lg:mx-20 text-gray-300 hidden sm:block">
      <ul className={`${containerClasses} list-none pl-0 m-0`}>
        <li className={listClasses}>
          <Link href={"/"} className="text-gray-400">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          if (!isID(link)) {
            return (
              <React.Fragment key={index}>
                <li className={itemClasses}>
                  <Link href={href} className="text-gray-400">
                    {itemLink}
                  </Link>
                </li>
                {index !== pathNames.length - 1 && separator}
              </React.Fragment>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
