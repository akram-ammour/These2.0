"use server";
import { formatTitle, getImageByCategory } from "@/lib/utils";
import * as cheerio from "cheerio";
import puppeteer, { Browser } from "puppeteer";

export const getAllCategories = async (counter = 0) => {
  // base catalogue url
  const url =
    "http://lib.fmpm.uca.ma/lib/opac_css/index.php?search_type_asked=simple_search";
  // list of categories
  const listOfCategories: Category[] = [];
  let browser: Browser;

  try {
    // launcher the puppeteer browser and getting to the new page and waiting for the page to be loaded
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    //  loading cheerio with the page's html
    const $ = cheerio.load(await page.content());

    // navigating through all the td[align='center'] > a > b
    $("td[align='center'] > a > b").each((index, element) => {
      // getting the category the href and id
      const category = formatTitle($(element).text());
      const href = $(element).parent().attr("href") as string;
      const id = Number(href?.match(/id=(\d+)/)![1]);
      listOfCategories.push({
        category,
        id,
        image: getImageByCategory(category),
      });
    });

    //? pushing the not classed yet category because there is these that may not be available in the catalogue but available in the website and it's id is null for me as as an indicator to retrieve it from the website

    listOfCategories.push({
      category: "Not Classed Yet",
      id: null,
      image: getImageByCategory("notclassedyet"),
    });

    await browser.close();

    return {
      success: "successfully retrieved categories",
      data: [...listOfCategories],
    };
  } catch (error) {
    console.log(`[ERROR_getAllCategories] : ${error}`);
    // closing the previous browser if it still exists
    if (browser!) {
      browser.close();
    }

    // run function 5 times if it doesn't work or throws an error
    if (counter < 5) {
      await getAllCategories(counter + 1);
    }

    return {
      error:
        "Something went wrong while retrieving categories please contact developer !",
      data: [],
    };
  }
};
