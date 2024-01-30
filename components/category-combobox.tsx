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


const categories = [
    {
        label:"Anatomie",
        value:"anatomie"
    },
    {
        label:"Anatomie clinique",
        value:"anatomie-clinique"
    },
]

const CategoryCombobox = () => {
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
            ? categories.find((categ) => categ.value === value)?.label
            : "Select a category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <ScrollArea className="h-60  rounded-md border">
            <CommandGroup >
              {categories.map((categ) => (
                <CommandItem
                  key={categ.value}
                  value={categ.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {categ.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === categ.value ? "opacity-100" : "opacity-0"
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

export default CategoryCombobox;
