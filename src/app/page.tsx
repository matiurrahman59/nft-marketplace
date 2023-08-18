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
          <div className="relative h-[206px] sm:h-[221px] lg:h-[400px]">
            <Image
              src="/images/Banner.png"
              alt="Banner image"
              fill={true}
              className="overflow-hidden rounded-t-[20px] object-cover"
            />
          </div>

          <div className="space-y-[10px] rounded-b-[20px] bg-secondary p-5">
            <span className="text-[22px] font-bold">Space walking</span>
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-6 rounded-full">
                <Image
                  src="/images/top-creators/2.png"
                  alt="avater"
                  className="h-6 w-6"
                  fill
                />
              </div>
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
              <div className="scale-animation relative h-[315px] md:h-[330px] ">
                <Image
                  src={item.images[0]}
                  fill
                  className="rounded-2xl object-cover"
                  alt={`trending collection image ${item.id}`}
                />
              </div>
              <div className="my-[15px] grid grid-cols-3 gap-[15px]">
                <div className="scale-animation relative h-[95px] w-[95px] md:h-[100px]">
                  <Image
                    src={item.images[1]}
                    fill
                    alt={`trending collection image ${item.id}`}
                    className=" rounded-2xl object-cover "
                  />
                </div>
                <div className="scale-animation relative h-[95px] w-[95px] md:h-[100px]">
                  <Image
                    src={item.images[2]}
                    fill
                    alt={`trending collection image ${item.id}`}
                    className=" rounded-2xl object-cover "
                  />
                </div>
                <div className="scale-animation grid cursor-pointer place-content-center rounded-2xl bg-primary font-spaceMono font-bold sm:text-[22px]">
                  <span>1025+</span>
                </div>
              </div>

              <div>
                <span className="text-[22px] font-semibold leading-[30px]">
                  {item.title}
                </span>
                <div className="mt-[10px] flex gap-3">
                  <div className="relative h-6 w-6">
                    <Image
                      src={item.avatar}
                      fill
                      className=" object-cover"
                      alt="user image"
                    />
                  </div>
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
                  fill
                  className="rounded-full"
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
                  <div className="relative grid h-[142px] place-content-center overflow-hidden lg:h-[240px]">
                    <Image
                      src={item.bgImageUrl}
                      alt={`nft ${item.title} background image`}
                      priority
                      fill
                      className="object-cover transition duration-300 group-hover:blur-md "
                    />

                    <div className="relative hidden h-20 w-20 group-hover:block ">
                      <Image
                        src={item.iconImageUrl}
                        alt={`nft ${item.title} category icon image`}
                        fill
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
        <div className="relative h-[593px] w-full bg-[url('/images/mashroom-sm.png')]  bg-cover sm:h-[630px] sm:bg-[url('/images/mashroom-lg.png')]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#a259ff00] to-primary" />

          <div className="sm:main-container absolute inset-0 z-10">
            <div className="px-7 pb-10 pt-[120px] sm:pt-[360px]">
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
            </div>
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
              className="flexCenter gap-5 rounded-5 bg-secondary  p-5 md:flex-col md:p-0 "
            >
              <div className="relative h-[100px] w-[100px]  md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px]">
                <Image
                  src={item.imgUrl}
                  fill
                  className=" object-fill"
                  alt="workflow image "
                />
              </div>

              <div className=" md:p-5 md:pb-[30px] lg:p-[30px] lg:pt-[20px]">
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
        <div className="items-center rounded-5 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:bg-secondary sm:px-[30px] sm:py-10 lg:gap-20 lg:p-[60px]">
          <div className="relative h-[255px] md:h-[280px] lg:h-[310px]">
            <Image
              src="/images/NewsLetter.png"
              alt="Newsletter image"
              priority
              fill
              className="h-full w-full rounded-5 object-cover"
            />
          </div>

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
