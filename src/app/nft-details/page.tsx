import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import NftCard from "@/components/NftCard";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { moreNfts } from "../../../dummy-data";

const NftDetails = () => {
  const commonStyle = "text-label lg:text-[22px] lg:font-bold lg:leading-9";

  return (
    <section>
      <div className="relative h-64 sm:h-80 lg:h-[450px]">
        <Image
          src="/images/nft-details.png"
          alt="nft details"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="main-container section-padding">
        <div className="sm:grid sm:grid-cols-2">
          <div className="mb-5 sm:hidden">
            <h4>The Orbitians</h4>
            <p className="text-label">Minted on Sep 30, 2022</p>
          </div>

          {/* countdown timer */}
          <div className="sm:col-start-2 sm:flex sm:h-fit sm:justify-end">
            <div className="rounded-5 bg-blur-1/50 p-[30px] backdrop-blur-sm">
              <span className="font-spaceMono text-xs">Auction ends in:</span>
              <div className="mt-[10px] flex justify-between gap-4">
                <div>
                  <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                    24
                  </div>
                  <div className="font-spaceMono text-xs">Hours</div>
                </div>
                <div className="text-[28px] font-semibold leading-10">:</div>
                <div>
                  <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                    24
                  </div>
                  <div className="font-spaceMono text-xs">Minutes</div>
                </div>
                <div className="text-[28px] font-semibold leading-10">:</div>
                <div>
                  <div className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                    24
                  </div>
                  <div className="font-spaceMono text-xs">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-start-1 mt-5 space-y-5 sm:mt-0 sm:space-y-[30px]">
            <div className="hidden sm:block">
              <h4>The Orbitians</h4>
              <p className="text-label">Minted on Sep 30, 2022</p>
            </div>

            {/* creator profile */}
            <div>
              <p className={commonStyle}>Created By</p>
              <div className="mt-[10px] flex items-center gap-3">
                <Image
                  src="/images/top-creators/1.png"
                  alt="nft creator avatar"
                  width={24}
                  height={24}
                />
                <p className="lg:text-[22px]">Dish Studio</p>
              </div>
            </div>

            {/* nft description */}
            <div>
              <p className={commonStyle}>Description</p>
              <p className="pt-[10px] opacity-80 lg:text-[22px]">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain, <br /> <br /> There are all sorts of beings
                in the NFT Universe. The most advanced and friendly of the bunch
                are Orbitians. <br /> <br /> They live in a metal space
                machines, high up in the sky and only have one foot on Earth.{" "}
                <br /> <br /> These Orbitians are a peaceful race, but they have
                been at war with a group of invaders for many generations. The
                invaders are called Upside-Downs, because of their inverted
                bodies that live on the ground, yet do not know any other way to
                be. Upside-Downs believe that they will be able to win this war
                if they could only get an eye into Orbitian territory, so
                they've taken to make human beings their target.
              </p>
            </div>

            {/* details link */}
            <div>
              <p className={commonStyle}>Details</p>
              <div className="space-y-3 pt-[10px]">
                <Link href="#" className="flex items-center gap-3">
                  <GlobeAltIcon className="h-6 w-6 text-label" />
                  <p className="lg:text-[22px] lg:leading-9">
                    View on Etherscan
                  </p>
                </Link>
                <Link href="#" className="flex items-center gap-3">
                  <GlobeAltIcon className="h-6 w-6 text-label" />
                  <p className="lg:text-[22px] lg:leading-9">View Original</p>
                </Link>
              </div>
            </div>

            {/* tags */}
            <div>
              <p className={commonStyle}>Tags</p>
              <div className="mt-5 flex flex-col gap-5 font-semibold lg:flex-row lg:gap-5">
                <div className="scale-animation w-fit rounded-5 bg-secondary px-[30px] py-3">
                  ANIMATION
                </div>

                <div className="scale-animation w-fit rounded-5 bg-secondary px-[30px] py-3">
                  illustration
                </div>
                <div className="scale-animation w-fit rounded-5 bg-secondary px-[30px] py-3">
                  moon
                </div>
                <div className="scale-animation w-fit rounded-5 bg-secondary px-[30px] py-3">
                  moon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 lg:pt-20">
          <SectionHeader headerTitle="More from this artist">
            <Button
              label="Go To Artist Page"
              href="/artist"
              style="ring-2 px-5 lg:px-[50px] ring-primary hidden sm:flex"
            >
              <ArrowRightIcon className="h-5 w-5 text-primary" />
            </Button>
          </SectionHeader>

          <div className="space-y-5 pt-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 lg:grid-cols-3">
            {moreNfts.slice(0, 3).map((item) => (
              <div key={item.id}>
                <NftCard item={item} />
              </div>
            ))}
          </div>

          <Button
            label="Go To Artist Page"
            href="/artist"
            style="ring-2 mt-10 ring-primary sm:hidden"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NftDetails;
