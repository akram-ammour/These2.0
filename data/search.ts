import { slugify } from "@/lib/utils";

function normalizeString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "");
}
export const baseSearch = async (data: These[], query: string) => {
  const normalizedQuery = normalizeString(query.toLowerCase());

  return data.filter((item) => {
    const normalizedTitle = item.title
      ? normalizeString(item.title.toLowerCase())
      : "";
    const normalizedAuthor = item.author
      ? normalizeString(item.author.toLowerCase())
      : "";

    const normalizedTags = item.tags
      ? item.tags.map((tag) => normalizeString(tag.toLowerCase()))
      : [];

    const normalizedCategory = item.category
      ? item.category.map((categ) => normalizeString(categ.toLowerCase()))
      : [];

    //   const normalizedCote = item.cote ? normalizeString(item.cote.toLowerCase()) : "";
    const normalizedProfs = item.profs
      ? item.profs.map((prof) => normalizeString(prof.toLowerCase()))
      : [];

    const titleMatch = normalizedTitle.includes(normalizedQuery);
    const authorMatch = normalizedAuthor.includes(normalizedQuery);

    // const tagsMatch = normalizedTags.includes(normalizedQuery);
    const tagsMatch = normalizedTags.some((tag) =>
      tag.includes(normalizedQuery)
    );

    // const categoryMatch = normalizedCategory.includes(normalizedQuery);
    const categoryMatch = normalizedCategory.some((categ) =>
      categ.includes(normalizedQuery)
    );

    //   const coteMatch = normalizedCote.includes(normalizedQuery);

    const profMatch = normalizedProfs.some((prof) =>
      prof.includes(normalizedQuery)
    );

    // Check if the year matches
    const yearMatch = item.year.toString().includes(query);

    // Return items that match any of the criteria
    return (
      titleMatch ||
      authorMatch ||
      yearMatch ||
      tagsMatch ||
      categoryMatch ||
      profMatch
    );
  });
};

// Example usage:
// const strictSearchResults = strictSearch({
//   title: "search query for title",
//   author: "search query for author",
//   year: "search query for year",
//   tags: "search query for tags",
//   category: "search query for category"
// });
type Criteria = {
  category?: string;
  langue?: "eng" | "fr";
  year?: number;
};

export const combinedSearch = async (
  data: These[],
  query: string,
  criteria: Criteria
) => {
  const basicSearch = await baseSearch(data, query);

  return basicSearch.filter((item) => {
    // Check if all specified criteria are met
    return Object.entries(criteria).every(([key, value]) => {
      if (key === "category") {
        // For category, check if the lowercase value is included
        // console.log(value)
        // console.log(new Date().getMilliseconds())
        return (
          item[key] &&
          Array.isArray(item[key]) &&
          (item[key] as string[]).some((entry) =>
            slugify(entry).toLowerCase().includes(String(value).toLowerCase())
          )
        );
      } else if (key === "year") {
        // For year, convert to string and check if it includes the value
        return item[key].toString().includes(value.toString());
      } else if (key === "langue") {
        // For other keys, check if the lowercase value is included
        return item[key].toLowerCase().includes(String(value).toLowerCase());
      }
    });
  });
};
