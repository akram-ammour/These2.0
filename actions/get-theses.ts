"use server";

import { getLocalData } from "./load-data";
import { combinedSearch, baseSearch } from "@/data/search";
import { sortData } from "@/data/sort";
import { wait } from "@/lib/utils";
// const {data} = await getTheses({search, categ, lang, year},sort,page,nbPerPage);
type getThese = {
  searchParams: {
    search?: string;
    category?: string;
    langue?: "fr" | "eng";
    year?: number;
  };
  sort: sort;
  page: number;
  nbPerPage: number;
  // {search,category,langue,year},sort,page,nbPerPage
};

export const getTheses = async ({
  searchParams: { category, langue, search, year },
  sort,
  page,
  nbPerPage,
}: getThese) => {
  let result: These[];
  try {
    // await wait(1000);
    // Calculate start and end indices for the specified page
    const startIndex = (page - 1) * nbPerPage;
    const endIndex = startIndex + nbPerPage;

    const { data } = await getLocalData();
    const isCombinedSearch = category || langue || year;

    if (!isCombinedSearch) {
      result = await baseSearch(data, search ?? "");
    } else {
      result = await combinedSearch(data, search ?? "", {
        category,
        langue,
        year,
      });
    }
    // 
    const sortedData = await sortData(result, sort);
    const totalTheses = sortedData.length;
    const totalPages = Math.ceil(totalTheses / nbPerPage) || 1;
    // Extract the subset of data for the specified page
    const pageData = sortedData.slice(startIndex, endIndex);
    return { pageData, totalPages, totalTheses };
  } catch (error) {
    console.log("error [get_theses]", error);
  }
};
