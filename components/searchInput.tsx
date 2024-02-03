"use client";
import React, { useCallback, useEffect, useState, useTransition } from "react";
import Loader from "./loader";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronDown, Search } from "lucide-react";
import SortBy from "./sort-by";
import YearComboBox from "./year-combobox";
import CategoryCombobox from "./category-combobox";
import LangComboBox from "./lang-combobox";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
type Props = {
  showOptions: boolean;
};
const SearchInput = ({ showOptions }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch] = useDebounce(searchQuery, 1005);
  const [showSearchOptions, setShowSearchOptions] =
    useState<boolean>(showOptions);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(Array.from(searchParams.entries()));
      if (debouncedValue.length > 0) {
        params.set("search", debouncedValue);
      } else {
        params.delete("search");
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );
  const handleClear = useCallback(
    () => {
      setShowSearchOptions(false)
      let params = new URLSearchParams(Array.from(searchParams.entries()));
        params.delete("lang");
        params.delete("year");
        params.delete("categ");
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    const searchQuery = params.get("search") ?? "";
    setSearchQuery(searchQuery);
  }, [searchParams]);

  useEffect(() => {
    handleSearchParams(debouncedSearch);
  }, [debouncedSearch, handleSearchParams]);
  return (
    <div className="flex flex-col mt-32 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex gap-3 items-center select-none">
          <Loader
            className={cn(
              "animate-none h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20",
              isPending && "animate-spin"
            )}
          />
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
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <Button className="rounded-l-none block">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {!showSearchOptions && (
            <Button
              variant={"link"}
              size={"sm"}
              onClick={() => setShowSearchOptions(true)}
              className="text-slate-500"
            >
              Search options
            </Button>
          )}
          {showSearchOptions && (
            // search by category / search by year / by lang
            <div className="flex flex-wrap items-center gap-3 py-2">
              <YearComboBox startTransition={startTransition} />
              <CategoryCombobox startTransition={startTransition} />
              <LangComboBox startTransition={startTransition} />
              <Button
                variant={"link"}
                size={"sm"}
                onClick={() => handleClear()}
                className="text-slate-500"
              >
                clear
              </Button>
            </div>
          )}
          {/* sort by order / sort by title / sort by author / sort by / orderAsc  */}
          <SortBy startTransition={startTransition} />
        </div>
        {/* <div className="self-start "> */}
        {/* <p className="font-medium text-slate-700 text-lg">You searched for 🪄:</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
