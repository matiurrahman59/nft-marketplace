import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const secondaryFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spaceMono",
});

const mainFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-Work_Sans",
});

export const metadata: Metadata = {
  title: "NFT-market-place",
  description:
    "The world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using OpenSea today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${mainFont.variable} ${secondaryFont.variable} bg-dark font-sans text-base leading-[22.4px] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
