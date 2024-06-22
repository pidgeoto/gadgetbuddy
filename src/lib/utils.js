import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const sanitizeTitleForURL = (title) => {
  const sanitizedTitle = title
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\s]/gi, "-")
    .toLowerCase();
  const cleanTitle = sanitizedTitle.replace(/-+/g, "-");
  return cleanTitle;
};
