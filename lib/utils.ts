import { getAllCategories } from "@/actions/get-all-categories";
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
  const formattedCategory = category
    .normalize("NFD")
    .replace(/[\u0300-\u036f\s-]/g, "")
    .toLowerCase();
  let image = imagePerCategory[formattedCategory as categoryImage];
  if (!image) {
    image = imagePerCategory["idk"];
  }
  return image;
};

export const slugify = (category: string) => {
  // Normalize to handle diacritic marks
  const normalizedCategory = category.normalize("NFD");

  // Replace diacritic marks with base characters, and replace spaces with hyphens
  const slug = normalizedCategory
    // .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
    // .replace(/é/g, 'e') // Replace specific diacritic marks
    // .replace(/è/g, 'e') // Replace specific diacritic marks
    .replace(/ /g, "-") // Replace spaces with hyphens
    .toLowerCase(); // Convert to lowercase

  return slug;
};

export const unSlugify = (category: string) => {
  // Replace hyphens with spaces and decode URI components
  const decodedCategory = decodeURIComponent(category.replace(/-/g, " "));

  // Use formatTitle to capitalize the first letter of each word
  return formatTitle(decodedCategory);
};

export const isPartOfSort = (value: string) => {
  return [
    "",
    "orderDesc",
    "titleAsc",
    "titleDesc",
    "authorAsc",
    "authorDesc",
  ].includes(value);
};

export const isPartOfCategories = async (value: string) => {
  const categories = (await getAllCategories()).categories.map((item) =>
    slugify(item.category)
  );
  return categories.includes(slugify(value));
};
export const isPartOfNumberRange = (year: number) => {
  const currentYear: number = new Date().getFullYear();
  const baseYear: number = 2006;
  if (year >= 2006 && year <= currentYear) {
    return true;
  } else {
    return false;
  }
};

export const getSearchParams = async (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  // const categories = (await getAllCategories()).categories
  const search =
  typeof searchParams.search === "string" ? searchParams.search : "";
  const sort =
    typeof searchParams.sortBy === "string"
      ? isPartOfSort(searchParams.sortBy)
        ? (searchParams.sortBy as sort)
        : ""
      : "";
  const categ =
    typeof searchParams.categ === "string"
      ? (await isPartOfCategories(searchParams.categ))
        ? searchParams.categ
        : undefined
      : undefined;
  const lang =
    typeof searchParams.lang === "string"
      ? ["fr", "eng"].includes(searchParams.lang)
        ? searchParams.lang as "fr" | "eng"
        : undefined
      : undefined;
  const year =
    typeof searchParams.year === "string"
      ? !isNaN(Number(searchParams.year))
        ? isPartOfNumberRange(Number(searchParams.year))
          ? Number(searchParams.year)
          : undefined
        : undefined
      : undefined;
  return { search, categ, lang, year, sort };
};
