"use server";
import { imagePerCategory } from "@/lib/constants";
import { formatTitle, getImageByCategory } from "@/lib/utils";
import { getLocalData } from "./load-data";

export const getAllCategories = async () => {
  // list of categories
  const listOfCategories: Category[] = [];
  try {
    const { data } = await getLocalData();

    for (const these of data) {
      if (Array.isArray(these.category) && these.category.length === 3) {
        const categ = these.category[2];
        if (
          categ &&
          !listOfCategories.some((item) => item.category === categ)
        ) {
          // If the category is not already in the list, add it
          listOfCategories.push({
            category: categ,
            image: getImageByCategory(categ),
          });
        }
      }
    }


    listOfCategories.sort((a, b) => a.category.localeCompare(b.category));

    listOfCategories.push({
      category: "Not Classed yet",
      image: getImageByCategory("notclassedyet"),
    });
    return {
      success: "successfully retrieved categories",
      categories: [...listOfCategories],
    };
  } catch (err) {
    console.error(`[ERROR_getAllCategories] : ${err}`);

    return {
      categories: [],
      error: {
        message: "something went wrong while retrieving categories",
        err,
      },
    };
  }
};
