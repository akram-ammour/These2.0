import { imagePerCategory } from "@/lib/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatTitle = (word: string) => {
  return word
    .trim()
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

// get the image already dummy typed in a constants file in 
type categoryImage = keyof typeof imagePerCategory;

export const getImageByCategory = (category: string) => {
  const formattedCategory = category.normalize("NFD").replace(/[\u0300-\u036f\s-]/g, "").toLowerCase();
  return imagePerCategory[formattedCategory as categoryImage] 
};


export const slugify = (category: string) => {
  return category.replace(/ /g,"-").toLowerCase()
}
export const unSlugify = (category:string) => {
  return formatTitle(category.replace(/-/g," "))
}


