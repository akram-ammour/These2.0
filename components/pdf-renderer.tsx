"use client";

import { formatTitle } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loader from "./loader";
import PdfFullScreen from "./pdf-full-screen";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
type Props = {
  href: string;
  title: string;
};

const PdfRenderer = ({ title, href }: Props) => {
  const [isPending, setIsPending] = useState<boolean>(
    localStorage.getItem("pdfLoading") === "false" ? false : true
  );
  //! check if this useEffect fixes the return in history issue
  useEffect(() => {
    // Save the loading state to localStorage
    localStorage.setItem("pdfLoading", isPending.toString());
  }, [isPending]);

  const handleLoad = () => {
    console.log("Embed is loaded pdf-renderer", isPending);
    setIsPending(false); // Set isPending to false when loaded
  };
  return (
    <div>
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="p-2 shadow-sm border-[1px] rounded-md flex items-center justify-between">
          <p className="font-semibold text-neutral-800">{formatTitle(title)}</p>
          <PdfFullScreen href={href} title={title} />
        </div>
        <div className="w-full h-full overflow-hidden p-1 rounded-lg border-[1px]">
          {isPending && (
            <div className="h-full w-full flex items-center justify-center">
              <Loader className="h-12 w-12" />
            </div>
          )}
          <embed
            src={href + "#toolbar=0&navpanel=0&scrollbar=0&fullscreen=true"}
            className="w-full h-full"
            onLoad={handleLoad}
          />
          {/* <div className="max-h-[calc(100vh-10rem)]">
            <Document file={href}>
              <Page pageNumber={1} scale={1} width={1} />
            </Document>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PdfRenderer;
