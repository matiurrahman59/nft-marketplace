"use client";
import PageHeading from "@/components/PageHeading";
import { FC, useState } from "react";
import { moreNfts, trendingCollection } from "../../../dummy-data";
import Image from "next/image";
import NftCard from "@/components/NftCard";

interface MarketPlaceProps {}

enum tab {
  NFTS,
  COLLECTIONS,
}

const MarketPlace: FC<MarketPlaceProps> = ({}) => {
  const [selectedTab, setSelectedTab] = useState<tab>(tab.NFTS);

  return (
    <section>
      <div className="section-padding main-container">
        <PageHeading
          text="Browse Marketplace"
          subText="Browse through more than 50k NFTs on the NFT Marketplace."
        />

        <div className="relative">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="w-full rounded-5 border-0 bg-dark px-5 py-3 ring-2 ring-secondary placeholder:text-label focus:outline-none"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-t border-label">
        <div className="main-container">
          <div className="grid grid-cols-2 font-semibold text-label">
            <button
              onClick={() => setSelectedTab(tab.NFTS)}
              className={`py-5  ${
                selectedTab == 0 && "border-b-2 border-label text-white"
              }`}
            >
              FNTs
            </button>
            <button
              onClick={() => setSelectedTab(tab.COLLECTIONS)}
              className={`py-5 ${
                selectedTab == 1 && "border-b-2 border-label text-white"
              }`}
            >
              Collections
            </button>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="main-container ">
          <div className="space-y-5 py-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 sm:pb-20 sm:pt-14 lg:grid-cols-3">
            {moreNfts.map((item) => (
              <div key={item.id}>
                <NftCard item={item} style="bg-dark" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
