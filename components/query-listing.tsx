import React from "react";
import { Separator } from "./ui/separator";
import These from "./these";
import QueryPagination from "./query-pagination";

type Props = {
  data: These[];
};

const QueryListing = ({ data }: Props) => {
  return (
    <>
      <div className="mt-6 px-4 sm:px-6 md:px-8 flex flex-col gap-4">
        {data.map((these, index) => (
          <These key={index} these={these} />
        ))}
      </div>
      <div className="mb-4 mt-6">
        <QueryPagination />
      </div>
    </>
  );
};

export default QueryListing;
