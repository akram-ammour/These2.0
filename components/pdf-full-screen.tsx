"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";
import { formatTitle } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
};

const PdfFullScreen = ({ href, title }: Props) => {
  console.log("href is: ", href)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" size={"icon"} className="text-blue-600">
          <Expand className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh] flex items-center justify-center">
        <div className="w-full p-4  max-w-6xl h-full space-y-1">
          <p className="font-semibold text-neutral-800 text-lg">
            {formatTitle(title)}
          </p>
          <embed src={href} className="w-full h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfFullScreen;
