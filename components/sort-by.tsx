"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDown01,
  ArrowUp01,
  ArrowUpAZ,
  ChevronDown
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList
} from "./ui/command";

const SortBy = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="ml-auto flex text items-center gap-1"
        >
          Sort By <ChevronDown className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" side="bottom" className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <ArrowUp01 className="mr-2 h-5 w-5" />
                <span>order Asc</span>
              </CommandItem>
              <CommandItem>
                <ArrowDown01 className="mr-2 h-5 w-5" />
                <span>order Desc</span>
              </CommandItem>
              <CommandItem>
                <ArrowUpAZ className="mr-2 h-5 w-5" />
                <span>Title Asc</span>
              </CommandItem>
              <CommandItem>
                <ArrowDown01 className="mr-2 h-5 w-5" />
                <span>Title Desc</span>
              </CommandItem>
              <CommandItem>
                <ArrowUpAZ className="mr-2 h-5 w-5" />
                <span>Author Asc</span>
              </CommandItem>
              <CommandItem>
                <ArrowDown01 className="mr-2 h-5 w-5" />
                <span>Author Desc</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SortBy;
