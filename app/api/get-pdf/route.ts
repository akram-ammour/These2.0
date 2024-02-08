import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
// todo fix not found error example these66-20
export const GET = async (req: NextRequest, res: NextResponse) => {
  const url = req.url;
  const parsedUrl = new URL(url);
  const pdf = parsedUrl.searchParams.get("url") || "";
  const filename = pdf?.slice(pdf?.lastIndexOf('/') + 1) || "these.pdf"
  try {
    // Make a GET request to the server serving the PDF
    const response = await axios.get(pdf, {
      responseType: "arraybuffer", // Set responseType to 'arraybuffer' to receive binary data
    });
    const pdfData = response.data;
    // Send the PDF data as response
    return new Response(pdfData, {
      headers: {
        "content-type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Error fetching PDF:", error);
    return NextResponse.json({ message: error });
  }
};
