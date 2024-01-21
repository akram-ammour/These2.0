import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "These2.0",
  description: "Find fmpm Thesis easily with no struggle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="h-[calc(100vh-56px)]  bg-neutral-900">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
