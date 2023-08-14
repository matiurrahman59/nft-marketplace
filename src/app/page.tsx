"use client";

import Image from "next/image";
import Link from "next/link";
import { PiRocketLaunchDuotone, PiRocketLaunchThin } from "react-icons/pi";
import { FiMail, FiEye } from "react-icons/fi";

// internal imports
import SectionHeader from "@/components/SectionHeader";
import {
  Categories,
  createRandomUser,
  moreNfts,
  trendingCollection,
  workFlow,
} from "../../dummy-data";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello there");
  };

  const [data, setData] = useState(() => createRandomUser());

  return (
    <main>
      {/* banner section */}
      <section className="main-container grid-cols-2 items-start gap-[30px] py-10 sm:grid sm:py-20 lg:gap-16 ">
        <div>
          <h1 className="text-[28px] font-semibold capitalize leading-10 sm:text-[38px] lg:text-[67px] lg:leading-[73px]">
            Discover digital art & Collect NFTs
          </h1>
          <p className="pt-[10px] text-base sm:pt-5 lg:text-[22px] lg:leading-9">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          {/* hidden in sm screen */}
          <div className="hidden sm:block">
            <div className="inline-block">
              <Button
                label="Get Started"
                href="3"
                style="mt-5 lg:mt-[30px] bg-primary px-[50px]"
              >
                <PiRocketLaunchThin size={20} className=" text-white" />
              </Button>
            </div>

            <div className="mt-5 flex items-center justify-between sm:w-[90%] lg:mt-[30px]">
              <div className="flex flex-col text-center">
                <span className="font-spaceMono text-[22px] font-bold leading-[35px] lg:text-[28px] lg:leading-[40px]">
                  240k+
                </span>
                <span className="lg:text-2xl lg:leading-[38px]">
                  Total Sale
                </span>
              </div>

              <div className="flex flex-col text-center">
                <span className="font-spaceMono text-[22px] font-bold leading-[35px] lg:text-[28px] lg:leading-[40px]">
                  100k+
                </span>
                <span className="lg:text-2xl lg:leading-[38px]">Auctions</span>
              </div>

              <div className="flex flex-col text-center">
                <span className="font-spaceMono text-[22px] font-bold leading-[35px] lg:text-[28px] lg:leading-[40px]">
                  240k+
                </span>
                <span className="lg:text-2xl lg:leading-[38px]">Artists</span>
              </div>
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
                  src="/images/top-creators/Creator-1.png"
                  alt="avater"
                  className="h-6 w-6"
                  fill
                />
              </div>
              <span className="text-base font-normal">Animakid</span>
            </div>
          </div>
        </div>

        {/* hidden in tab or large screen */}
        <div className="sm:hidden">
          <Button label="Get Started" href="#" style="mt-10 bg-primary">
            <PiRocketLaunchThin size={20} className=" text-white" />
          </Button>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex flex-col text-center">
              <span className="font-spaceMono text-[22px] font-bold">
                240k+
              </span>
              <span>Total Sale</span>
            </div>

            <div className="flex flex-col text-center">
              <span className="font-spaceMono text-[22px] font-bold">
                100k+
              </span>
              <span>Auctions</span>
            </div>

            <div className="flex flex-col text-center">
              <span className="font-spaceMono text-[22px] font-bold">
                240k+
              </span>
              <span>Artists</span>
            </div>
          </div>
        </div>
      </section>

      {/* trending section */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Trending collection"
          text="Checkout our weekly updated trending collection."
        />
        {/* Image Container */}
        <div className="grid gap-10 pt-10 md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:pt-[60px]">
          {trendingCollection.map((item) => (
            <div key={item.id}>
              <Image
                src={item.images[0]}
                priority
                className="scale-animation h-[315px] w-full rounded-2xl object-cover md:h-[330px]"
                alt={`trending collection image ${item.id}`}
              />
              <div className="my-[15px] grid grid-cols-3 gap-[15px]">
                <Image
                  src={item.images[1]}
                  priority
                  alt={`trending collection image ${item.id}`}
                  className="scale-animation h-[95px] w-[95px] rounded-2xl object-cover md:h-[100px]"
                />
                <Image
                  src={item.images[2]}
                  priority
                  alt={`trending collection image ${item.id}`}
                  className="scale-animation h-[95px] w-[95px] rounded-2xl object-cover md:h-[100px]"
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
                    className="h-6 w-6 object-cover"
                    alt="user image"
                  />

                  <span>{item.userName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* top creators */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Top Creators"
          text="Checkout Top Rated Creators on the NFT Marketplace"
        >
          <Button
            label="View Rankings"
            href="#"
            style="ring-2 px-5 lg:px-[50px] ring-primary hidden sm:flex"
          >
            <PiRocketLaunchDuotone size={20} className="text-primary" />
          </Button>
        </SectionHeader>

        <div className="space-y-5 pt-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 lg:grid-cols-3">
          {data?.slice(0, 12).map((user) => (
            <div
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
                <span className=" text-[22px] font-semibold leading-[30px]">
                  {user.creatorName}
                </span>
                <div className="pt-1.5 lg:text-center">
                  <span className=" text-label">Total Sales:</span>
                  <span className="ml-2 font-spaceMono">
                    {user.totalSales} ETH
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          label="View Rankings"
          href="#"
          style="ring-2 ring-primary sm:hidden"
        >
          <PiRocketLaunchDuotone size={20} className="text-primary" />
        </Button>
      </section>

      {/* Category section */}
      <section className="section-padding main-container">
        <SectionHeader headerTitle="Browse Categories" />
        <div className="grid grid-cols-2 gap-5 pt-10 md:grid-cols-4 md:gap-[30px] lg:pt-12">
          {Categories.map((item) => (
            <Link
              href="/about"
              key={item.id}
              className="group cursor-pointer transition-all"
            >
              <div className="overflow-hidden rounded-5 bg-secondary">
                <div className="relative">
                  <div className="overflow-hidden">
                    <Image
                      src={item.bgImageUrl}
                      alt={`nft ${item.title} background image`}
                      priority
                      className="h-[142px] w-full object-cover transition duration-300 group-hover:blur-md  md:w-full lg:h-[240px]"
                    />
                  </div>
                  <div className="absolute inset-0 hidden place-content-center transition duration-300 group-hover:grid">
                    <Image
                      src={item.iconImageUrl}
                      alt={`nft ${item.title} category icon image`}
                      width={80}
                      height={80}
                      className="lg:h-[100px] lg:w-[100px]"
                    />
                  </div>
                </div>
                <div className="pb-[25px] pl-[30px] pt-5">
                  <h5 className="font-semibold lg:text-[22px] lg:leading-[30px]">
                    {item.title}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* more nfts */}
      <section className="section-padding main-container">
        <SectionHeader
          headerTitle="Discover More NFTS"
          text="Explore new Trending NFTS"
        >
          <Button
            label="See All"
            href="#"
            style="ring-2 px-5 lg:px-[50px] ring-primary hidden sm:flex"
          >
            <FiEye size={20} className="text-primary" />
          </Button>
        </SectionHeader>

        <div className=" space-y-5 pt-10 sm:grid sm:grid-cols-2 sm:gap-[30px] sm:space-y-0 lg:grid-cols-3">
          {moreNfts.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-5 bg-secondary"
            >
              <div className="relative h-[238px] w-full sm:h-[295px]">
                <Image src={item.image} alt="nft images" fill />
              </div>

              <div className="p-5 pb-6">
                <div className="text-[22px] font-semibold leading-[30px]">
                  {item.title}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Image
                    src={item.avatar}
                    alt="avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-spaceMono">{item.name}</span>
                </div>

                <div className="flex  items-center justify-between pt-6 font-spaceMono text-xs text-label">
                  <div>
                    <p>Price</p>
                    <p className="mt-2 text-white">{item.price} ETH</p>
                  </div>
                  <div className="flex flex-col items-end justify-end">
                    <p>Highest Bid</p>
                    <p className="mt-2 text-white">{item.bid} ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          label="See All"
          href="#"
          style="ring-2 ring-primary sm:hidden mt-10"
        >
          <FiEye size={20} className="text-primary" />
        </Button>
      </section>

      {/* highlight mashrooms section */}
      <section className="section-padding">
        <div className="relative h-[593px] w-full bg-[url('/images/mashroom-sm.png')]  bg-cover sm:h-[630px] sm:bg-[url('/images/mashroom-lg.png')]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#a259ff00] to-primary" />

          <div className="sm:main-container absolute inset-0 z-10">
            {/* sm:pt-[360px] */}
            <div className="px-7 pb-10 pt-[120px] sm:pt-[360px]">
              <div className="flex flex-col gap-[30px] sm:flex-row sm:items-end sm:justify-between sm:gap-0">
                <div className="space-y-[30px]">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 rounded-5 bg-secondary px-5 py-[10px]">
                      <Image
                        src="/images/top-creators/Creator-1.png"
                        alt="avater"
                        width={24}
                        height={24}
                      />
                      <span>Shroomie</span>
                    </div>
                  </div>
                  <p className="text-[38px] font-semibold leading-[45.6px]">
                    Magic <br className="sm:hidden" /> Mashrooms
                  </p>
                  <div className="hidden sm:inline-block">
                    <Button
                      label="See NFT"
                      href="#"
                      style="bg-white text-secondary px-[50px]"
                    >
                      <FiEye size={20} className="text-primary" />
                    </Button>
                  </div>
                </div>

                <div className="bg-blur-1/50 rounded-5 p-[30px] backdrop-blur-sm">
                  <span className="font-spaceMono text-xs">
                    Auction ends in:
                  </span>
                  <div className="mt-[10px] flex justify-between gap-4">
                    <div>
                      <p className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                        59
                      </p>
                      <p className="font-spaceMono text-xs">Hours</p>
                    </div>
                    <div className="text-[28px] font-semibold leading-10">
                      :
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                        59
                      </p>
                      <p className="font-spaceMono text-xs">Minutes</p>
                    </div>
                    <div className="text-[28px] font-semibold leading-10">
                      :
                    </div>
                    <div>
                      <p className="font-spaceMono text-[38px] font-semibold leading-[45.6px]">
                        59
                      </p>
                      <p className="font-spaceMono text-xs">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                label="See NFT"
                href="#"
                style="bg-white text-secondary sm:hidden mt-[30px]"
              >
                <FiEye size={20} className="text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* work flow section */}
      <section className="section-padding main-container">
        {/* Heading text */}
        <SectionHeader
          headerTitle="How it works"
          text="Find out how to get started"
        />

        {/* WorkFlow */}
        <div className="grid gap-5 pt-10 md:grid-cols-3 md:gap-[30px] lg:pt-12 ">
          {workFlow.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-5 rounded-5 bg-secondary  p-5 md:flex-col md:p-0 "
            >
              {/* Image Container */}
              <Image
                src={item.imgUrl}
                priority
                className="h-[100px] w-[100px] object-fill md:h-[160px] md:w-[160px] lg:h-[250px] lg:w-[250px]"
                alt="workflow image "
              />

              {/* Workflow Details Container */}
              <div className=" md:p-5 md:pb-[30px] lg:p-[30px] lg:pt-[20px]">
                <h5 className="mb-[10px] font-semibold md:text-center lg:text-[22px]">
                  {item.title}
                </h5>
                <p className="text-xs opacity-80 md:text-center lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* newsLetter section */}
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
            <h5 className="text-[28px] font-semibold capitalize leading-10 lg:text-[38px] lg:leading-[46px] ">
              Join our weekly <br /> digest
            </h5>
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
