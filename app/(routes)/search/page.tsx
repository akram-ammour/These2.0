import { getTheses } from "@/actions/get-theses";
import QueryListing from "@/components/query-listing";
import QueryPagination from "@/components/query-pagination";
import SearchInput from "@/components/searchInput";
import { getSearchParams } from "@/lib/utils";

type Props = {
  searchParams: searchParams;
};

const page = async ({ searchParams }: Props) => {
  const { categ, lang, search, sort, year, page } = await getSearchParams(
    searchParams
  );

  const isShowOptions = !!categ || !!lang || !!year;

  const fallBackData = { pageData: [], totalPages: 1, totalTheses: 0 };
  const { pageData, totalPages, totalTheses } =
    (await getTheses({
      searchParams: { search: search, category: categ, langue: lang, year },
      nbPerPage: 50,
      page: page,
      sort: sort,
    })) ?? fallBackData;
  return (
    // todo fix this bug to replicate it i need to reset the page to 0
    <div className="h-full flex flex-col max-w-7xl m-auto">
      <SearchInput showOptions={isShowOptions} />

      <QueryListing
        data={pageData}
        totalPages={totalPages}
        currentPage={page}
        totalTheses={totalTheses}
      />

      <div className="mb-4 mt-6 px-8">
        {totalPages !== 1 && (
          <QueryPagination currentPage={page} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
};

export default page;
