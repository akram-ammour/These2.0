"use server"

import * as z from "zod";
import {theseByCategorySchema} from "@/schema"
import puppeteer, { Browser } from "puppeteer";
import * as cheerio from "cheerio";


export const getTheseByCategory = async ({category,searchParams}:z.infer<typeof theseByCategorySchema>) => {
    const url = category ? "http://lib.fmpm.uca.ma/lib/opac_css/index.php?search_type_asked=extended_search" : "http://wd.fmpm.uca.ma/biblio/theses/annee-htm/"
    const listOfThese:These[] = []
    try{
    // launcher the puppeteer browser and getting to the new page and waiting for the page to be loaded
    const browser: Browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });


    //  loading cheerio with the page's html
    const $ = cheerio.load(await page.content());


    return {
        success:"successfully retrieved category's thesis",
        data:[]
    }
    }
    catch (error) {
        console.log(`[ERROR_GetTheseByCategory] : ${error}`);
        return {
            error: "something went wrong try again",
            data: [],
          };
    }
}