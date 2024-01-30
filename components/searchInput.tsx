"use client";
import React, { useState } from "react";
import Loader from "./loader";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

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
            <Button className="rounded-l-none"><Search className="h-4 w-4"/></Button>
          </div>
          {!searchOptions && (
            <Button variant={"link"} size={"sm"} onClick={() => setSearchOptions(true)} className="text-slate-500">Search options</Button>
            )}
          {searchOptions && (
            <>todo make search options</>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
