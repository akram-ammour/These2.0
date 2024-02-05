"use client";

import { formatTitle } from "@/lib/utils";
import { Expand } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger } from "./ui/popover";
import { Dialog } from "@radix-ui/react-dialog";
import PdfFullScreen from "./pdf-full-screen";

type Props = {
  href: string;
  title: string;
};

const PdfRenderer = ({ title, href }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="p-2 shadow-sm border-2 rounded-md flex items-center justify-between">
          <p className="font-semibold text-neutral-800">{formatTitle(title)}</p>
          <PdfFullScreen href={href} title={title} />
        </div>
        <embed
          src={href + "#toolbar=0&navpanel=0&scrollbar=0&fullscreen=true"}
          className="w-full h-full overflow-hidden p-1 rounded-lg border-2 hover:opacity-80 cursor-pointer transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default PdfRenderer;
