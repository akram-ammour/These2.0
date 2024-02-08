"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";
import { formatTitle } from "@/lib/utils";
import Loader from "./loader";

type Props = {
  href: string;
  title: string;
};

const PdfFullScreen = ({ href, title }: Props) => {
  // console.log("href is: ", href);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState();

  const handleLoad = () => {
    console.log("Embed is loaded");
    console.log("handle loading: ", isPending);
    setIsPending(false); // Set isPending to false when loaded
  };
  const handleError = () => {
    console.error("Error loading embed");
    setIsPending(false); // Set isPending to false on error
  };
  useEffect(() => {
    console.log(isPending);
  }, [isPending]);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsPending(true);
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" size={"icon"} className="text-gray-600">
          <Expand className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="w-full p-4  max-w-6xl h-full space-y-1 relative">
          <p className="font-semibold text-neutral-800 text-lg">
            {formatTitle(title)}
          </p>
          {isPending && (
            <div className="h-full w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          <embed
            src={href}
            className="w-full h-full"
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfFullScreen;
