"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import PdfRenderer from "./pdf-renderer";
import { usePathname } from "next/navigation";
type Props = {
  these: These;
};

const TheseCard = ({ these }: Props) => {
  const pathname = usePathname().split("/");
  const title = pathname[pathname.length - 1];
  return (
    <Card className="  border-2 rounded-lg">
      <CardContent className="flex gap-7 p-5">
        <PdfRenderer href={"/api/get-pdf?url=" + these.href} title={title} />
        <div className="w-full  flex-1 flex flex-col space-y-3">
          <p className="text-blue-500">Title</p>
          <p className="text-neutral-800">{these.title}</p>
          <p className="text-blue-500">Author</p>
          <p className="text-neutral-800">{these.author}</p>
          <p className="text-blue-500">Category</p>
          <p className="text-neutral-800">{these.category?.join(" > ")}</p>
          <p className="text-blue-500">President</p>
          <p className="text-neutral-800">{these.president}</p>
          <p className="text-blue-500">Rapporteur</p>
          <p className="text-neutral-800">{these.rapporteur}</p>
          <p className="text-blue-500">Jury</p>
          <p className="text-neutral-800">{these.jury.join(" - ")}</p>
          {these.membreAssocie && (
            <>
              <p className="text-blue-500">Associated Members</p>
              <p className="text-neutral-800">
                {these.membreAssocie.join(" - ")}
              </p>
            </>
          )}
          <p className="text-blue-500">Tags</p>
          <p className="text-neutral-800">{these.tags.join(" - ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TheseCard;
