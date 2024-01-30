"use server";
import { imagePerCategory } from "@/lib/constants";
import { formatTitle, getImageByCategory } from "@/lib/utils";

export const getAllCategories = async () => {
  // base catalogue url
  const url =
    "http://lib.fmpm.uca.ma/lib/opac_css/index.php?search_type_asked=simple_search";
  // list of categories
  const listOfCategories: Category[] = [];

  try {
      // listOfCategories.push({
      //   category,
      //   id,
      //   image: getImageByCategory(category),
      // });

    //? pushing the not classed yet category because there is these that may not be available in the catalogue but available in the website and it's id is null for me as as an indicator to retrieve it from the website

    for (const [key, value] of Object.entries(imagePerCategory)) {
      
      listOfCategories.push({
        category: key,
        id: null,
        image: value,
      });
      
    }

    return {
      success: "successfully retrieved categories",
      categories: [...listOfCategories],
    };
  } catch (err) {
    console.error(`[ERROR_getAllCategories] : ${err}`);

    return {
      categories: [],
      error:{
        message:"something went wrong while retrieving categories",
        err
      }
    };
  }
};
