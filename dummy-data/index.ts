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

export const moreNfts = [
  {
    id: 1,
    title: "Distant Galaxy",
    name: "MoonDancer",
    price: 1.63,
    bid: 0.33,
  },
  {
    id: 2,
    title: "Life On Edena",
    name: "Nebulakid",
    price: 1.63,
    bid: 0.33,
  },
  {
    id: 3,
    title: "AstroFiction",
    name: "Spaceone",
    price: 1.63,
    bid: 0.33,
  },
];
