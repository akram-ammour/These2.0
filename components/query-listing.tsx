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
      <p className="px-8 font-medium text-slate-700 text-lg">
        {data.length} results found .
      </p>
      <div className="mt-6 px-4 sm:px-6 md:px-8 flex flex-col gap-4">
        {data.map((these, index) => (
          <These key={index} these={these} />
        ))}
      </div>
      {data.length !== 0 && (
        <div className="mb-4 mt-6">
          <QueryPagination />
        </div>
      )}
    </>
  );
};

export default QueryListing;
