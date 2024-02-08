"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PdfRenderer from "./pdf-renderer";
import { Card, CardContent } from "./ui/card";

type Props = {
  these: These;
};
const Heading = ({
  title,
  value,
  isLink,
  href,
}: {
  title: string;
  value: string;
  isLink?: boolean;
  href?: string;
}) => {
  if (isLink) {
    return (
      <>
        <p className="text-gray-400 font-semibold">{title}</p>
        <Link
          href={href!}
          target={"_blank"}
          className="text-primary underline-offset-4 hover:underline font-medium truncate"
        >
          {value}
        </Link>
      </>
    );
  }
  return (
    <>
      <p className="text-gray-400 font-semibold">{title}</p>
      <p className="font-medium">{value}</p>
    </>
  );
};
const TheseCard = ({ these }: Props) => {
  const pathname = usePathname().split("/");
  const title = pathname[pathname.length - 1];
  return (
    <Card className="  border-[1px] rounded-lg ">
      <CardContent className="flex gap-7 p-5  ">
        <PdfRenderer href={"/api/get-pdf?url=" + these.href} title={title} />
        <div className="w-full  flex-1 flex flex-col space-y-3 text-sm">
          <Heading title={"Title"} value={these.title} />

          <Heading title={"Author"} value={these.author} />

          <Heading
            title={"Category"}
            value={these.category?.join(" > ") || "not Known"}
          />

          <Heading title={"President"} value={these.president} />

          <Heading title={"Rapporteur"} value={these.rapporteur} />

          <Heading title={"Jury"} value={these.jury.join(" - ")} />

          {these.membreAssocie && (
            <>
              <Heading
                title={"Associated Members"}
                value={these.membreAssocie.join(" - ")}
              />
            </>
          )}

          <Heading title={"Tags"} value={these.tags.join(" - ")} />

          <Heading title={"href"} value={these.href} href={these.href} isLink />
        </div>
      </CardContent>
    </Card>
  );
};

export default TheseCard;
