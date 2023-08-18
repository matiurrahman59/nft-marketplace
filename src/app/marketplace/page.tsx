"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import PageHeading from "@/components/PageHeading";
import NftCard from "@/components/NftCard";
import { moreNfts } from "../../../dummy-data";

enum tab {
  NFTS,
  COLLECTIONS,
}

const MarketPlace = () => {
  const [selectedTab, setSelectedTab] = useState<tab>(tab.NFTS);
  const [query, setQuery] = useState(moreNfts);
  const [nfts] = useDebounce(query, 300);

  console.log(nfts);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = moreNfts.filter((item) =>
      item.title.toLowerCase().includes(e.target.value),
    );
    setQuery(newQuery);
  };

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
            onChange={onChange}
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

      {nfts.length ? (
        <div className="bg-secondary">
          <div className="main-container ">
            <div className="space-y-5 py-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 sm:pb-20 sm:pt-14 lg:grid-cols-3">
              {nfts.map((item) => (
                <div key={item.id}>
                  <NftCard item={item} style="bg-dark" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="main-container section-padding text-center">
          <h3 className="text-gradient-1/50">no data found!</h3>
        </div>
      )}
    </section>
  );
};

export default MarketPlace;
