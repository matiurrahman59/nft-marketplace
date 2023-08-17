"use client";

import { useState } from "react";
import { GlobeAltIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxVideo,
} from "react-icons/rx";

import TabButton from "@/components/TabButton";
import NftData from "@/components/NftData";
import NftCard from "@/components/NftCard";
import { moreNfts } from "../../../dummy-data";

enum tab {
  CREATED,
  OWNED,
  COLLECTION,
}

const Artist = () => {
  const [selectedTab, setSelectedTab] = useState<tab>(tab.CREATED);

  const commonStyle = "text-label lg:text-[22px] lg:font-bold lg:leading-9";
  const iconClass = "h-6 w-6 cursor-pointer lg:h-8 lg:w-8";

  return (
    <section>
      <div className="relative h-[250px] sm:h-[280px] lg:h-80">
        <Image
          src="/images/artist-banner.png"
          alt="Artist Banner"
          fill
          className="object-cover"
        />
      </div>

      <div className="main-container ">
        <div className="relative">
          <Image
            src="/images/artist.png"
            alt="Artist avatar"
            width={120}
            height={120}
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 sm:left-0 sm:translate-x-0"
          />
        </div>
        <div className="section-padding">
          <div className="lg:flexBetween pt-10">
            <h4>Animakid</h4>
            <div className="space-y-5 pt-[30px] sm:flex sm:gap-5 sm:space-y-0 lg:pt-0">
              <button className="flexCenter scale-animation w-full gap-3 rounded-5 bg-primary py-3 sm:w-fit sm:px-[30px]">
                <ClipboardDocumentCheckIcon className="h-5 w-5" />
                <span>0xc0E3...B79C</span>
              </button>
              <button className="flexCenter scale-animation w-full gap-3 rounded-5 border-0 py-3 ring-1 ring-primary sm:w-fit sm:px-[30px]">
                <PlusIcon className="h-5 w-5 text-primary" />
                <span>Follow</span>
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between sm:w-2/4 lg:mt-[30px]">
            <NftData title="Volume" quanTity={250} />
            <NftData title="NFTs Sold" quanTity={50} />
            <NftData title="Followers" quanTity={3000} />
          </div>

          {/* bio */}
          <div className="space-y-[30px] pt-[30px]">
            <div className="space-y-[10px]">
              <p className={commonStyle}>Bio</p>
              <p>The internet's friendliest designer kid.</p>
            </div>

            <div>
              <p className={commonStyle}>Bio</p>
              <div className="flex items-center gap-[10px] pt-[15px] text-[#858584]">
                <GlobeAltIcon className={iconClass} />
                <RxDiscordLogo className={iconClass} />
                <RxVideo className={iconClass} />
                <RxTwitterLogo className={iconClass} />
                <RxInstagramLogo className={iconClass} />
              </div>
            </div>
          </div>
          {/* links */}
        </div>
      </div>

      <div className="border-t border-label">
        <div className="main-container">
          <div className="grid grid-cols-3 font-semibold text-label">
            <TabButton
              tab={tab.CREATED}
              label="Created"
              count={302}
              selectedTab={selectedTab}
              onClick={setSelectedTab}
            />
            <TabButton
              tab={tab.OWNED}
              label="Owned"
              count={67}
              selectedTab={selectedTab}
              onClick={setSelectedTab}
            />
            <TabButton
              tab={tab.COLLECTION}
              label="Collection"
              count={4}
              selectedTab={selectedTab}
              onClick={setSelectedTab}
            />
          </div>

          <div>
            {selectedTab == 0 ? (
              <div className="space-y-5 py-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 sm:pb-20 sm:pt-14 lg:grid-cols-3">
                {moreNfts.slice(0, 6).map((item) => (
                  <div key={item.id}>
                    <NftCard item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h5 className="py-10 text-center text-gradient-1/60">
                  Currently there's no data 😞 Please visit later!
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
