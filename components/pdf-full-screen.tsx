"use client";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Expand, Loader2 } from "lucide-react";
import { formatTitle } from "@/lib/utils";
import Loader from "./loader";
import SimpleBar from "simplebar-react";
import { Document, Page } from "react-pdf";

import { useResizeDetector } from "react-resize-detector";
import { toast } from "sonner";
import { useToast } from "./ui/use-toast";

type Props = {
  href: string;
  title: string;
};

const PdfFullScreen = ({ href, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const { toast } = useToast();
  const { width, ref } = useResizeDetector();

  return (
    <Dialog open={isOpen} onOpenChange={(v) => setIsOpen(v)}>
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Expand className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh]">
        <SimpleBar
          className="max-h-[calc(100vh-10rem)] mt-6"
          style={{ overflowY: "scroll" }}
        >
          <div ref={ref} className="overflow-hidden">
            <Document
              loading={
                <div className="flex justify-center">
                  <Loader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
              onLoadError={() => {
                toast({
                  title: "Error loading PDF",
                  description: "Please try again later",
                  variant: "destructive",
                });
              }}
              onLoadSuccess={({ numPages }) => {
                console.log(numPages);
                setNumPages(numPages);
              }}
              file={href}
              className="max-h-full overflow-hidden"
            >
              {/* test */}
              {numPages &&
                Array.from({ length: numPages }, (_, i) => (
                  <Page key={i} width={width ? width : 1} pageNumber={i + 1} />
                ))}
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  );
};
export default PdfFullScreen;
