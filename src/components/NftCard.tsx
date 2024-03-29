import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { NAV_Links } from "@/utils/constants";

interface itemProperty {
  title: string;
  image: string;
  avatar: string;
  name: string;
  price: number | string;
  bid: number | string;
}

interface NftCardProps {
  item: itemProperty;
  style?: string;
}

const NftCard: FC<NftCardProps> = ({ item, style }) => {
  return (
    <div
      className={`scale-animation cursor-pointer overflow-hidden rounded-5 ${
        style ? style : "bg-secondary"
      }`}
    >
      <Link href={NAV_Links.nftDetails}>
        <div className="relative h-56 w-full md:h-64 lg:h-72">
          <Image
            src={item.image}
            alt="nft images"
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 321px, (min-width: 1040px) 284px, (min-width: 640px) calc(50vw - 71px), calc(100vw - 56px)"
          />
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

          <div className="flex items-center justify-between pt-6 font-spaceMono">
            <div>
              <span className="text-xs text-label">Price</span>
              <p className="mt-2 text-white">{item.price} ETH</p>
            </div>
            <div className="flex flex-col items-end justify-end">
              <span className="text-xs text-label">Highest Bid</span>
              <p className="mt-2 text-white">{item.bid} ETH</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NftCard;
