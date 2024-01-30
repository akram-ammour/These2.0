import { getLocalData } from "@/actions/load-data";
import QueryListing from "@/components/query-listing";
import QueryPagination from "@/components/query-pagination";
import SearchInput from "@/components/searchInput";
import { Pagination } from "@/components/ui/pagination";

type Props = {};

const page = async (props: Props) => {
  const data = await getLocalData();
  return (
    <div className="h-full flex flex-col    max-w-7xl m-auto">
      <SearchInput />

      <QueryListing data={data.slice(0, 10)} />
    </div>
  );
};

export default page;
