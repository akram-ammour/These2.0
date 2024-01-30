"use client";

import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandGroup,
    CommandItem
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

const currentYear = new Date().getFullYear();
const startYear = 2006;
const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => {
    const year = startYear + index;
    return { value: year.toString(), label: year.toString() };
  }
).reverse();

const YearComboBox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? years.find((year) => year.value === value)?.label
            : "Select a year..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <ScrollArea className="h-60  rounded-md border">
            <CommandGroup >
              {years.map((year) => (
                <CommandItem
                  key={year.value}
                  value={year.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {year.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === year.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default YearComboBox;
