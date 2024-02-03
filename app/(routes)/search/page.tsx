import { getTheses } from "@/actions/get-theses";
import QueryListing from "@/components/query-listing";
import SearchInput from "@/components/searchInput";
import { getSearchParams } from "@/lib/utils";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const page = async ({ searchParams }: Props) => {
  const { categ, lang, search, sort, year } = await getSearchParams(
    searchParams
  );
  const isShowOptions = !!categ || !!lang || !!year;
  // const {data} = await getThese({search, categ, lang, year},sort,page,nbPerPage);
  const data =
    (await getTheses({
      searchParams: { search: search, category: categ, langue: lang, year },
      nbPerPage: 200,
      page: 1,
      sort: sort,
    })) ?? [];
  return (
    <div className="h-full flex flex-col max-w-7xl m-auto">
      <SearchInput showOptions={isShowOptions} />
      {/* <Suspense fallback={<Loader />}> */}
      <QueryListing data={data} />
      {/* </Suspense> */}
    </div>
  );
};

export default page;
