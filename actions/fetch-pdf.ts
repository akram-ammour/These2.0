"use server";
import axios from "axios";

export const fetchPdf = async (href: string) => {
  try {
    const pdfResponse = await axios.get(href, { responseType: "arraybuffer" });
    // Cast response.data to a Readable stream
    const pdfStream = pdfResponse;
  } catch (error) {
    console.log("[fetchPdf error]: " + error);
  }
};
