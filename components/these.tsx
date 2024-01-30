import { formatTitle, getImageByCategory } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  these: These;
};

const These = ({ these }: Props) => {
  return (
    // <div className='flex gap-3 bg-white border-gray-400  rounded-sm p-5 mb-4 border-[1px]'>
    //     <Image
    //         src={getImageByCategory(these.category[2])}
    //         width={200}
    //         height={200}
    //         alt='image'
    //     />
    //     <div className=''>

    //     <p>title: {these.title}</p>
    //     <p>Author: {these.author}</p>
    //     <p>Year: {these.category[2]}</p>
    //     <p>Ord: {these.ord}</p>
    //     </div>
    // </div>
    <Card>
      {/* <CardHeader>
          <CardTitle className="truncate" title={these.title}>
            {these.title}
          </CardTitle>
          <CardDescription>Dr. {these.author}</CardDescription>
        </CardHeader> */}
      <CardContent className="flex items-center  gap-4 p-2">
        <div className="bg-muted rounded-md">
          <Image
            src={getImageByCategory(these.category[2])}
            alt="image"
            width={200}
            height={100}
            className="rounded-md object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-between overflow-hidden p-2">
          <div className="space-y-2">
            <h1 className="truncate font-bold text-lg">{these.title}</h1>
            <p className="truncate font-bold text-base text-blue-600">
              {these.category[2]}
            </p>
            <p className="truncate font-medium text-sm text-gray-400">
              Dr. {formatTitle(these.author)}
            </p>
          </div>
          <div className="min-[564px]:flex-row min-[564px]:self-end flex-col self-start flex gap-2">
            <p className="truncate text-base text-gray-400">
              Year:{" "}
              <span className=" text-slate-900">{these.year}</span>
            </p>
            <p className="truncate text-base text-gray-400">
              Ord:{" "}
              <span className=" text-slate-900">{these.ord}</span>
            </p>
            <p className="truncate text-base text-gray-400">
              Language:{" "}
              <span className=" text-slate-900">{these.langue}</span>
            </p>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
        </CardFooter> */}
    </Card>
  );
};

export default These;
