"use client";
import Image from "next/image";
import { useState } from "react";
import { topCreators } from "../../../dummy-data";
import PageHeading from "@/components/PageHeading";

enum Creator {
  TODAY,
  WEEK,
  MONTH,
  ALL,
}

const TopCreator = () => {
  const [filter, setFilter] = useState<Creator>(Creator.TODAY);

  const tabbedButton = (titleOne: string, titleTwo: string, id: Creator) => {
    return (
      <button
        onClick={() => setFilter(id)}
        className={`flexCenter grow border-b-label py-5 ${
          filter == id && "border-b-2 text-white"
        }`}
      >
        <span className="sm:hidden">{titleOne}</span>
        <span className="hidden sm:flex">{titleTwo}</span>
      </button>
    );
  };

  return (
    <section className="section-padding main-container">
      {/* heading text */}
      <PageHeading
        text="Top Creators"
        subText="Check out top ranking NFT artists on the NFT Marketplace."
      />

      <div className="flexBetween gap-2 text-center font-semibold text-label sm:gap-4 lg:gap-5 lg:text-[22px] lg:leading-[31px]">
        {tabbedButton("1d", "Today", Creator.TODAY)}
        {tabbedButton("7d", "This Week", Creator.WEEK)}
        {tabbedButton("30d", "This Month", Creator.MONTH)}
        {tabbedButton("All Time", "All Time", Creator.ALL)}
      </div>

      <div className="mt-10 space-y-5">
        {/* table header */}
        <div className="flexBetween rounded-5 border-0 px-4 py-3 text-xs text-label ring-1 ring-secondary sm:px-5 sm:text-base lg:py-4">
          <div className="flex items-center gap-5">
            <span className="text-xs text-label">#</span>
            <span className="">Artist</span>
          </div>
          <div className="w-1/5 items-center sm:grid sm:w-[30%] sm:grid-cols-2 sm:gap-10 lg:w-2/4 lg:grid-cols-3">
            <div className="hidden font-spaceMono text-xs text-green sm:flex">
              Change
            </div>
            <div className="hidden font-spaceMono text-xs lg:flex">
              NFTs Sold
            </div>
            <div className="font-spaceMono text-xs">Volume</div>
          </div>
        </div>

        {/* table data */}
        {filter === Creator.TODAY ? (
          topCreators?.map((item) => (
            <div
              key={item.id}
              className="scale-animation flexBetween rounded-5 bg-secondary px-4 py-3 sm:px-5 lg:py-4"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-label">{item.id}</span>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    width={24}
                    height={24}
                    alt={`top creator ${item.creatorName}`}
                    className="rounded-full"
                  />
                  <span className="">{item.creatorName}</span>
                </div>
              </div>
              <div className="w-1/5 items-center sm:grid sm:w-[30%] sm:grid-cols-2 sm:gap-10 lg:w-2/4 lg:grid-cols-3">
                <div className="hidden font-spaceMono text-xs text-green sm:flex">
                  {item.change} %
                </div>
                <div className="hidden font-spaceMono text-xs lg:flex">
                  {item.nftSold}
                </div>
                <div className="font-spaceMono text-xs">
                  {item.totalSales} ETH
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h5 className="pt-10 text-center text-gradient-1/60">
              Currently there's no data 😞 Please visit later!
            </h5>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopCreator;
