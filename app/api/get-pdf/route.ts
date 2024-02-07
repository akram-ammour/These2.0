import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const url = req.url;
  const pdf =
    new URLSearchParams(url).get("http://localhost:3000/api/get-pdf?url") || "";
  try {
    // Make a GET request to the server serving the PDF
    const response = await axios.get(pdf, {
      responseType: "arraybuffer", // Set responseType to 'arraybuffer' to receive binary data
    });
    const pdfData = response.data;
    // Send the PDF data as response
    return new Response(pdfData, {
      headers: { "content-type": "application/pdf" },
    });
  } catch (error) {
    console.error("Error fetching PDF:", error);
    return NextResponse.json({ message: error,pdf });
  }
};
