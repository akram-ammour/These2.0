"use client";

import * as React from "react";
import { ChevronsUpDown, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./ui/scroll-area";


const Languages = [
    {
        label:"Francais",
        value:"Fr"
    },
    {
        label:"Anglais",
        value:"en"
    },
]

const LangComboBox = () => {
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
            ? Languages.find((lang) => lang.value === value)?.label
            : "Select a Lang..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <ScrollArea className="h-20  rounded-md border">
            <CommandGroup >
              {Languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {lang.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === lang.value ? "opacity-100" : "opacity-0"
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

export default LangComboBox;
