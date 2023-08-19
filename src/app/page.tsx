"use client";

import Image from "next/image";
import Link from "next/link";
import { PiRocketLaunchDuotone, PiRocketLaunchThin } from "react-icons/pi";
import { FiMail, FiEye } from "react-icons/fi";

import SectionHeader from "@/components/SectionHeader";
import CountDownTimer from "@/components/CountDownTimer";
import { NAV_Links } from "@/utils/constants";
import NftCard from "@/components/NftCard";
import NftData from "@/components/NftData";
import Button from "@/components/Button";
import {
  Categories,
  moreNfts,
  trendingCollection,
  workFlow,
  topCreators,
} from "../../dummy-data";

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      {/* BANNER SECTION */}
      <section className="main-container grid-cols-2 items-start gap-[30px] py-10 sm:grid sm:py-20 lg:gap-16 ">
        <div>
          <h1 className="text-[28px] font-semibold capitalize leading-10 sm:text-[38px] lg:text-[67px] lg:leading-[73px]">
            Discover digital art & Collect NFTs
          </h1>
          <p className="pt-[10px] sm:pt-5 lg:text-[22px] lg:leading-[35.2px]">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          {/* show in large screen */}
          <div className="hidden sm:block">
            <div className="inline-block">
              <Button
                label="Get Started"
                href={NAV_Links.signUp}
                style="mt-5 lg:mt-[30px] bg-primary px-[50px]"
              >
                <PiRocketLaunchThin
                  size={20}
                  className=" text-xl"
                  strokeWidth={3}
                />
              </Button>
            </div>

            <div className="flexBetween mt-5 sm:w-[90%] lg:mt-[30px]">
              <NftData title="Total Sale" quanTity={140} />
              <NftData title="Auctions" quanTity={240} />
              <NftData title="Artists" quanTity={340} />
            </div>
          </div>
        </div>

        {/* banner image */}
        <div className="pt-10 sm:pt-0">
          <Image
            src="/images/Banner.png"
            alt="Banner image"
            width={510}
            height={400}
            className="overflow-hidden rounded-t-[20px] object-cover"
          />

          <div className="space-y-[10px] rounded-b-[20px] bg-secondary p-5">
            <span className="text-[22px] font-bold">Space walking</span>
            <div className="flex items-center gap-3">
              <Image
                src="/images/top-creators/2.png"
                alt="avater"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-base font-normal">Animakid</span>
            </div>
          </div>
        </div>

        {/* show in small screen*/}
        <div className="sm:hidden">
          <Button
            label="Get Started"
            href={NAV_Links.signUp}
            style="mt-10 bg-primary"
          >
            <PiRocketLaunchThin size={20} className=" text-white" />
          </Button>

          <div className="flexBetween mt-10">
            <NftData title="Total Sale" quanTity={140} />
            <NftData title="Auctions" quanTity={240} />
            <NftData title="Artists" quanTity={340} />
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Trending collection"
          text="Checkout our weekly updated trending collection."
        />
        <div className="grid gap-10 pt-10 md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:pt-[60px]">
          {trendingCollection.map((item) => (
            <div key={item.id}>
              <Image
                src={item.images[0]}
                width={330}
                height={330}
                objectFit="cover"
                className="scale-animation h-[315px] w-full rounded-2xl md:h-[300px]"
                alt={`trending collection image ${item.id}`}
              />
              <div className="my-[15px] grid grid-cols-3 gap-[15px]">
                <Image
                  src={item.images[1]}
                  width={95}
                  height={95}
                  alt={`trending collection image ${item.id}`}
                  className="scale-animation h-[95px] rounded-2xl object-cover md:h-[100px]"
                />
                <Image
                  src={item.images[2]}
                  width={95}
                  height={95}
                  alt={`trending collection image ${item.id}`}
                  className="scale-animation rounded-2xl object-cover sm:h-[100px]"
                />
                <div className="scale-animation grid cursor-pointer place-content-center rounded-2xl bg-primary font-spaceMono font-bold sm:text-[22px]">
                  <span>1025+</span>
                </div>
              </div>

              <div>
                <span className="text-[22px] font-semibold leading-[30px]">
                  {item.title}
                </span>
                <div className="mt-[10px] flex gap-3">
                  <Image
                    src={item.avatar}
                    width={24}
                    height={24}
                    className="object-cover"
                    alt="user image"
                  />
                  <span>{item.userName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP CREATOR SECTION */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Top Creators"
          text="Checkout Top Rated Creators on the NFT Marketplace"
        >
          <Button
            label="View Rankings"
            href="/top-creator"
            style="ring-2 px-5 lg:px-[50px] ring-primary hidden sm:flex"
          >
            <PiRocketLaunchDuotone size={20} className="text-primary" />
          </Button>
        </SectionHeader>

        <div className="space-y-5 pt-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 lg:grid-cols-3">
          {topCreators?.slice(0, 12).map((user) => (
            <Link
              href={NAV_Links.artist}
              key={user.id}
              className="scale-animation flex cursor-pointer items-center gap-5 rounded-5 bg-secondary p-5 lg:flex-col lg:justify-center"
            >
              <div className="relative h-[60px] w-[60px] rounded-full lg:h-[120px] lg:w-[120px]">
                <div className="absolute -left-2 -top-2 z-10 grid h-[30px] w-[30px] place-content-center rounded-full bg-dark text-label lg:-left-10 lg:top-0">
                  {user.id}
                </div>
                <Image
                  src={user.avatar}
                  alt={`no. ${user.id} top creator`}
                  width={120}
                  height={120}
                  className="h-full w-full rounded-full"
                />
              </div>

              <div className="lg:text-center">
                <span className="text-[22px] font-semibold leading-[30px]">
                  {user.creatorName}
                </span>
                <div className="pt-1.5 lg:text-center">
                  <span className=" text-label">Total Sales:</span>
                  <span className="ml-2 font-spaceMono">
                    {user.totalSales} ETH
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Button
          label="View Rankings"
          href={NAV_Links.topCreator}
          style="ring-2 ring-primary sm:hidden mt-10"
        >
          <PiRocketLaunchDuotone size={20} className="text-primary" />
        </Button>
      </section>

      {/* CATEGORY SECTION */}
      <section className="section-padding main-container">
        <SectionHeader headerTitle="Browse Categories" />
        <div className="grid grid-cols-2 gap-5 pt-10 md:grid-cols-4 md:gap-[30px] lg:pt-12">
          {Categories.map((item) => (
            <Link
              href={NAV_Links.marketPlace}
              key={item.id}
              className="group cursor-pointer transition-all"
            >
              <div className="overflow-hidden rounded-5 bg-secondary">
                <div className="relative">
                  <div className="relative h-[142px] overflow-hidden lg:h-[240px]">
                    <Image
                      src={item.bgImageUrl}
                      alt={`nft ${item.title} background image`}
                      priority
                      width={240}
                      height={240}
                      className="object-cover transition duration-300 group-hover:blur-md "
                    />
                    <div className="absolute inset-0 grid place-content-center">
                      <Image
                        src={item.iconImageUrl}
                        alt={`nft ${item.title} category icon image`}
                        width={100}
                        height={100}
                        className="hidden h-20 w-20 group-hover:block lg:h-[100px] lg:w-[100px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-[25px] pl-[30px] pt-5">
                  <h5 className="font-semibold">{item.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MORE NFT SECTION */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Discover More NFTS"
          text="Explore new Trending NFTS"
        >
          <Button
            label="See All"
            href={NAV_Links.marketPlace}
            style="ring-2 px-5 lg:px-[50px] ring-primary hidden sm:flex"
          >
            <FiEye size={20} className="text-primary" />
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
          label="See All"
          href={NAV_Links.marketPlace}
          style="ring-2 ring-primary sm:hidden mt-10"
        >
          <FiEye size={20} className="text-primary" />
        </Button>
      </section>

      {/* HIGHLIGHT NFT SECTION */}
      <section>
        <div className="relative h-[593px] w-full sm:h-[600px]">
          <Image
            src="/images/mashroom-sm.png"
            alt="nft"
            fill
            className="object-cover sm:hidden"
          />
          <Image
            src="/images/mashroom-lg.png"
            alt="nft"
            fill
            className="hidden object-cover sm:block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#a259ff00] to-primary" />

          <div className="sm:main-container absolute inset-0 z-10 flex items-end px-7">
            <div className="flex-1 pb-10">
              <div className="flex flex-col gap-[30px] sm:flex-row sm:items-end sm:justify-between sm:gap-0">
                <div className="space-y-[30px]">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 rounded-5 bg-secondary px-5 py-[10px]">
                      <Image
                        src="/images/top-creators/1.png"
                        alt="avater"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                      <span>Shroomie</span>
                    </div>
                  </div>
                  <h2>
                    Magic <br className="sm:hidden" /> Mashrooms
                  </h2>
                  <div className="hidden sm:inline-block">
                    <Button
                      label="See NFT"
                      href={NAV_Links.nftDetails}
                      style="bg-white text-secondary px-[50px]"
                    >
                      <FiEye size={20} className="text-primary" />
                    </Button>
                  </div>
                </div>

                <CountDownTimer />
              </div>

              <Button
                label="See NFT"
                href={NAV_Links.nftDetails}
                style="bg-white text-secondary sm:hidden mt-[30px]"
              >
                <FiEye size={20} className="text-primary" />
              </Button>
            </div>
            {/* <div className="px-7 pb-10 pt-[120px] sm:pt-[360px]">
              <div className="flex flex-col gap-[30px] sm:flex-row sm:items-end sm:justify-between sm:gap-0">
                <div className="space-y-[30px]">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 rounded-5 bg-secondary px-5 py-[10px]">
                      <Image
                        src="/images/top-creators/1.png"
                        alt="avater"
                        width={24}
                        height={24}
                      />
                      <span>Shroomie</span>
                    </div>
                  </div>
                  <h2>
                    Magic <br className="sm:hidden" /> Mashrooms
                  </h2>
                  <div className="hidden sm:inline-block">
                    <Button
                      label="See NFT"
                      href={NAV_Links.nftDetails}
                      style="bg-white text-secondary px-[50px]"
                    >
                      <FiEye size={20} className="text-primary" />
                    </Button>
                  </div>
                </div>

                <CountDownTimer />
              </div>

              <Button
                label="See NFT"
                href={NAV_Links.nftDetails}
                style="bg-white text-secondary sm:hidden mt-[30px]"
              >
                <FiEye size={20} className="text-primary" />
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="How it works"
          text="Find out how to get started"
        />

        <div className="grid gap-5 pt-10 md:grid-cols-3 md:gap-[30px] lg:pt-12 ">
          {workFlow.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 rounded-5 bg-secondary p-5 md:flex-col md:px-5 md:pb-[30px] md:pt-[10px]"
            >
              <Image
                src={item.imgUrl}
                width={250}
                height={250}
                alt="workflow image"
                className="md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px]"
              />

              <div>
                <h5 className="mb-[10px] md:text-center">{item.title}</h5>
                <p className="text-xs opacity-80 md:text-center lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="section-padding main-container">
        <div className="items-center rounded-5 sm:grid sm:grid-cols-2 sm:items-center sm:gap-[30px] sm:bg-secondary sm:px-[30px] sm:py-10 lg:gap-20 lg:p-[60px]">
          <Image
            src="/images/NewsLetter.png"
            alt="Newsletter image"
            width={425}
            height={310}
            className="h-[255px] rounded-5 object-cover md:h-[280px] lg:h-[310px]"
          />

          <div className="pt-[30px] sm:pt-0">
            <h3 className="capitalize">
              Join our weekly <br /> digest
            </h3>
            <p className="pt-[10px] opacity-80 lg:text-[22px] lg:leading-[35px]">
              Get exclusive promotions & updates{" "}
              <br className="hidden lg:block" /> straight to your inbox.
            </p>

            <form onSubmit={handleFormSubmit} className="pt-10">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="text-bgSecondary w-full rounded-5 py-3 pl-5 text-dark outline-none placeholder:text-dark lg:py-4"
              />
              <div className="w-full">
                <button className="scale-animation mt-4 flex w-full items-center justify-center gap-3 rounded-5 bg-primary py-3 font-semibold lg:py-4">
                  <FiMail className="text-white" size={20} />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
