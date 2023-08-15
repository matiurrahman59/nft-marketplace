import { faker } from "@faker-js/faker";

// user images
import userOne from "../public/images/top-creators/Creator-6.png";
import userTwo from "../public/images/top-creators/Creator-7.png";

// Trending collection
import bear from "../public/images/all-nft-collection/Bear.png";
import cat from "../public/images/all-nft-collection/Cat.png";
import dog from "../public/images/all-nft-collection/Dog-1.png";

// magic mushrooms
import magicMushroom from "../public/images/nft-highlight.png";

// disco machines
import dancingRobotOne from "../public/images/all-nft-collection/Dancing-robot-1.png";
import dancingRobotTwo from "../public/images/all-nft-collection/Dancing-robot-2.png";
import dancingRobotThree from "../public/images/all-nft-collection/Dancing-robot-5.png";

import mushroom from "../public/images/all-nft-collection/MagicMushroom.png";

// workflow images
import workFlowOne from "../public/images/work-timeline/Timeline-Image-1.png";
import workFlowTwo from "../public/images/work-timeline/Timeline-Image-2.png";
import workFlowThree from "../public/images/work-timeline/Timeline-Image-3.png";

// category images
import categoryBG1 from "../public/images/categories/Art.png";
import categoryBG2 from "../public/images/categories/Collectibles.png";
import categoryBG3 from "../public/images/categories/Music.png";
import categoryBG4 from "../public/images/categories/Photography.png";
import categoryBG7 from "../public/images/categories/Sport.png";
import categoryBG6 from "../public/images/categories/Utility.png";
import categoryBG5 from "../public/images/categories/Video.png";
import categoryBG8 from "../public/images/categories/VirtualWorlds.png";

// category icons
import categoryIcon7 from "../public/images/category-icons/Basketball.png";
import categoryIcon4 from "../public/images/category-icons/Camera.png";
import categoryIcon6 from "../public/images/category-icons/MagicWand.png";
import categoryIcon3 from "../public/images/category-icons/MusicNotes.png";
import categoryIcon1 from "../public/images/category-icons/PaintBrush.png";
import categoryIcon8 from "../public/images/category-icons/Planet.png";
import categoryIcon2 from "../public/images/category-icons/Swatches.png";
import categoryIcon5 from "../public/images/category-icons/VideoCamera.png";
import { Url } from "url";

export const trendingCollection = [
  {
    id: 1,
    title: "DEGN Animals",
    images: [dog, cat, bear],
    totalItem: 1025,
    userName: "MRFox",
    avatar: userOne,
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    images: [mushroom, mushroom, mushroom],
    totalItem: 725,
    userName: "Shroomie",
    avatar: userTwo,
  },
  {
    id: 3,
    title: "Disco Machines",
    images: [dancingRobotOne, dancingRobotTwo, dancingRobotThree],
    totalItem: 1300,
    userName: "BeKind2Robots",
    avatar: userOne,
  },
];

export const salesDetails = [
  {
    id: 1,
    title: "Total Sale",
    amount: 240,
  },
  {
    id: 2,
    title: "Auctions",
    amount: 100,
  },
  {
    id: 3,
    title: "Artists",
    amount: 240,
  },
];

export const workFlow = [
  {
    id: 1,
    title: "Setup Your wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    imgUrl: workFlowOne,
  },
  {
    id: 2,
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    imgUrl: workFlowTwo,
  },
  {
    id: 3,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    imgUrl: workFlowThree,
  },
];

export const Categories = [
  {
    id: 1,
    title: "Art",
    bgImageUrl: categoryBG1,
    iconImageUrl: categoryIcon1,
  },
  {
    id: 2,
    title: "Collectibles",
    bgImageUrl: categoryBG2,
    iconImageUrl: categoryIcon2,
  },
  {
    id: 3,
    title: "Music",
    bgImageUrl: categoryBG3,
    iconImageUrl: categoryIcon3,
  },
  {
    id: 4,
    title: "Photography",
    bgImageUrl: categoryBG4,
    iconImageUrl: categoryIcon4,
  },
  {
    id: 5,
    title: "Video",
    bgImageUrl: categoryBG5,
    iconImageUrl: categoryIcon5,
  },
  {
    id: 6,
    title: "Utility",
    bgImageUrl: categoryBG6,
    iconImageUrl: categoryIcon6,
  },
  {
    id: 7,
    title: "Sport",
    bgImageUrl: categoryBG7,
    iconImageUrl: categoryIcon7,
  },
  {
    id: 8,
    title: "Virtual Worlds",
    bgImageUrl: categoryBG8,
    iconImageUrl: categoryIcon8,
  },
];

export function createRandomUser() {
  const creators = [];
  for (let i = 1; i <= 20; i++) {
    creators.push({
      id: i,
      creatorName: faker.internet.userName(),
      totalSales: faker.number.int({
        min: 10,
        max: 50,
      }),
      avatar: faker.image.avatar(),
    });
  }
  return creators;
}

type creatorType = {
  id: number;
  creatorName: string;
  totalSales: number;
  avatar: string;
  change: number;
  nftSold: number;
};

export const topCreators: creatorType[] = [
  {
    id: 1,
    creatorName: "Ruben Carder",
    avatar: "/images/top-creators/Creator-1.png",
    change: 1.41,
    totalSales: 12.4,
    nftSold: 602,
  },
  {
    id: 2,
    creatorName: "Alice Smith",
    avatar: "/images/top-creators/Creator-2.png",
    change: -0.32,
    totalSales: 8.7,
    nftSold: 420,
  },
  {
    id: 3,
    creatorName: "John Doe",
    avatar: "/images/top-creators/Creator-3.png",
    change: 0.75,
    totalSales: 9.2,
    nftSold: 310,
  },
  {
    id: 4,
    creatorName: "Emma Johnson",
    avatar: "/images/top-creators/Creator-4.png",
    change: -0.92,
    totalSales: 5.6,
    nftSold: 180,
  },
  {
    id: 5,
    creatorName: "David Brown",
    avatar: "/images/top-creators/Creator-5.png",
    change: 0.21,
    totalSales: 14.8,
    nftSold: 720,
  },
  {
    id: 6,
    creatorName: "Sophia Wilson",
    avatar: "/images/top-creators/Creator-6.png",
    change: 1.03,
    totalSales: 17.2,
    nftSold: 920,
  },
  {
    id: 7,
    creatorName: "Michael Garcia",
    avatar: "/images/top-creators/Creator-7.png",
    change: -0.15,
    totalSales: 11.1,
    nftSold: 540,
  },
  {
    id: 8,
    creatorName: "Olivia Taylor",
    avatar: "/images/top-creators/Creator-8.png",
    change: 0.64,
    totalSales: 6.9,
    nftSold: 260,
  },
  {
    id: 9,
    creatorName: "William Anderson",
    avatar: "/images/top-creators/Creator-9.png",
    change: -0.82,
    totalSales: 3.5,
    nftSold: 130,
  },
  {
    id: 10,
    creatorName: "Ava Martinez",
    avatar: "/images/top-creators/Creator-10.png",
    change: 0.96,
    totalSales: 10.5,
    nftSold: 450,
  },
  {
    id: 11,
    creatorName: "James Jackson",
    avatar: "/images/top-creators/Creator-11.png",
    change: -0.43,
    totalSales: 7.8,
    nftSold: 380,
  },
  {
    id: 12,
    creatorName: "Isabella Brown",
    avatar: "/images/top-creators/Creator-12.png",
    change: 0.51,
    totalSales: 13.7,
    nftSold: 680,
  },
  {
    id: 13,
    creatorName: "Logan Thomas",
    avatar: "/images/top-creators/Creator-1.png",
    change: 1.12,
    totalSales: 16.3,
    nftSold: 780,
  },
  {
    id: 14,
    creatorName: "Mia White",
    avatar: "/images/top-creators/Creator-2.png",
    change: -0.27,
    totalSales: 8.1,
    nftSold: 390,
  },
  {
    id: 15,
    creatorName: "Benjamin Davis",
    avatar: "/images/top-creators/Creator-3.png",
    change: 0.37,
    totalSales: 11.9,
    nftSold: 570,
  },
  {
    id: 16,
    creatorName: "Charlotte Rodriguez",
    avatar: "/images/top-creators/Creator-4.png",
    change: -0.63,
    totalSales: 4.4,
    nftSold: 210,
  },
  {
    id: 17,
    creatorName: "Daniel Lopez",
    avatar: "/images/top-creators/Creator-5.png",
    change: 0.81,
    totalSales: 9.8,
    nftSold: 470,
  },
  {
    id: 18,
    creatorName: "Emily Garcia",
    avatar: "/images/top-creators/Creator-6.png",
    change: -0.18,
    totalSales: 6.2,
    nftSold: 290,
  },
  {
    id: 19,
    creatorName: "Ethan Martinez",
    avatar: "/images/top-creators/Creator-7.png",
    change: 0.69,
    totalSales: 7.5,
    nftSold: 360,
  },
  {
    id: 20,
    creatorName: "Elena Martinez",
    avatar: "/images/top-creators/Creator-8.png",
    change: 0.76,
    totalSales: 15.9,
    nftSold: 820,
  },
];

export const moreNfts = [
  {
    id: 1,
    title: "Distant Galaxy",
    name: "MoonDancer",
    price: 1.63,
    bid: 0.33,
    image: "/images/all-nft-collection/DistantGalaxy.png",
    avatar: "/images/top-creators/Creator-1.png",
  },
  {
    id: 2,
    title: "Life On Edena",
    name: "Nebulakid",
    price: 1.63,
    bid: 0.33,
    image: "/images/all-nft-collection/LifeOnEdena.png",
    avatar: "/images/top-creators/Creator-2.png",
  },
  {
    id: 3,
    title: "AstroFiction",
    name: "Spaceone",
    price: 1.63,
    bid: 0.33,
    image: "/images/all-nft-collection/AstroFiction.png",
    avatar: "/images/top-creators/Creator-3.png",
  },
];
