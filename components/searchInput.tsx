"use client";
import React, { useState } from "react";
import Loader from "./loader";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronDown, Search } from "lucide-react";
import SortBy from "./sort-by";
import YearComboBox from "./year-combobox";
import CategoryCombobox from "./category-combobox";
import LangComboBox from "./lang-combobox";

type Props = {};

const SearchInput = (props: Props) => {
  const [searchOptions, setSearchOptions] = useState<boolean>(false);
  return (
    <div className="flex flex-col mt-32 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex gap-3 items-center select-none">
          <Loader className="animate-none h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" />
          <h1 className="font-medium text-4xl sm:text-6xl md:text-7xl">
            These2.0
          </h1>
        </div>
        <p className="text-slate-700 italic font-medium text-sm sm:text-base md:text-lg select-none">
          The best website to research for fmpm thesis for free.
        </p>
        <div className="w-full">
          <div className="flex w-full flex-row items-center">
            <Input
              placeholder="Search for title, author, category, tag, prof..."
              className="flex-[3] outline-none focus-visible:ring-transparent text-base  border-gray-400 rounded-r-none"
            />
            <Button className="rounded-l-none block">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {!searchOptions && (
            <Button
              variant={"link"}
              size={"sm"}
              onClick={() => setSearchOptions(true)}
              className="text-slate-500"
            >
              Search options
            </Button>
          )}
          {searchOptions && (
            // search by category / search by year / by lang
            <div className="flex flex-wrap items-center gap-3 py-2">
              <YearComboBox/>
              <CategoryCombobox/>
              <LangComboBox/>
              <Button
              variant={"link"}
              size={"sm"}
              onClick={() => setSearchOptions(false)}
              className="text-slate-500"
            >
              clear
            </Button>
            </div>
          )}
          {/* sort by order / sort by title / sort by author / sort by / no-sort  */}
            <SortBy/>
        </div>
        {/* <div className="self-start "> */}
        {/* <p className="font-medium text-slate-700 text-lg">You searched for 🪄:</p> */}
        <p className="self-start font-medium text-slate-700 text-lg">Page <span className="font-bold text-blue-600">1 - 14</span>.</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
