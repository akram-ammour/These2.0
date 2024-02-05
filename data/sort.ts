function compareValues(valueA: any, valueB: any) {
  if (typeof valueA === "string" && typeof valueB === "string") {
    // Case-insensitive string comparison
    return valueA.localeCompare(valueB, undefined, { sensitivity: "base" });
  } else if (typeof valueA === "number" && typeof valueB === "number") {
    // Numeric comparison
    return valueA - valueB;
  } else {
    // Fallback to default comparison for other types
    return String(valueA).localeCompare(String(valueB), undefined, {
      sensitivity: "base",
    });
  }
}
export const sortData = async (
  dataToBeSorted: These[],
  sortBy: sort
) => {
    let sortParams:any;
    if(sortBy === ""){
        sortParams = {
            year:"asc",
            order:"asc",
        }
    }
    else if(sortBy === "orderDesc"){
        sortParams = {
            year:"desc",
            order:"desc",
        }
    }
    else if(sortBy === "authorAsc"){
        sortParams = {
            author:"asc"
        }
    }
    else if(sortBy === "authorDesc"){
        sortParams = {
            author:"desc"
        }
    }
    else if(sortBy === "titleAsc"){
        sortParams = {
            title:"asc"
        }
    }
    else if(sortBy === "titleDesc"){
        sortParams = {
            title:"desc"
        }
    }
    

  // sortparams: year ord title author
  const sortedData = [...dataToBeSorted];

  sortedData.sort((a, b) => {
    for (const [property, order] of Object.entries(sortParams)) {
      const valueA = a[property as keyof These];
      const valueB = b[property as keyof These];
      const compareResult =
        order === "asc"
          ? compareValues(valueA, valueB)
          : compareValues(valueB, valueA);

      if (compareResult !== 0) {
        return compareResult;
      }
    }

    return 0;
  });

  return sortedData;
};
