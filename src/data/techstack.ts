// import HardHat from '../assets/techstack/hardhat.png';
import React from "../assets/techstack/react.png";
import TypeScript from "../assets/techstack/typescript.png";
// import JavaScript from '../assets/techstack/javascript.png';
// import Ganache from '../assets/techstack/ganache.png';
import Ethersjs from "../assets/techstack/ethersjs.png";
import FlashBots from "../assets/techstack/flashbots.png";
import Solidity from "../assets/techstack/solidity.png";
import Chakra from "../assets/techstack/chakraui.png";
import Linux from "../assets/techstack/linux.png";
import Vim from "../assets/techstack/vim.png";
import Foundry from "../assets/techstack/foundry.png";
import Rust from "../assets/techstack/rust.png";

export interface Skill {
  name: string;
  description: string;
  link: string;
  image: string;
}

const techstack: Skill[] = [
  {
    name: "Foundry",
    description: "Smart contract dev tools",
    link: "https://book.getfoundry.sh/index.html",
    image: Foundry,
  },
  // {
  //   name: 'HardHat',
  //   description: 'EVM dev environment',
  //   link: 'https://hardhat.org/',
  //   image: HardHat,
  // },
  {
    name: "Solidity",
    description: "Smart contract scripting for EVM",
    link: "https://docs.soliditylang.org/en/v0.8.15/",
    image: Solidity,
  },
  {
    name: "ethersJS",
    description: "JS/TS library to interact with EVM",
    link: "https://docs.ethers.io/v5/",
    image: Ethersjs,
  },
  // {
  //   name: "FlashBots",
  //   description: "Send private txs to miners",
  //   link: "https://docs.flashbots.net/",
  //   image: FlashBots,
  // },
  {
    name: "TypeScript",
    description: "Web dev scripting",
    link: "https://www.typescriptlang.org/",
    image: TypeScript,
  },
  {
    name: "React",
    description: "Frontend UI library",
    link: "https://reactjs.org/",
    image: React,
  },
  {
    name: "React Native",
    description: "Cross-platform mobile UI library",
    link: "https://reactjs.org/",
    image: React,
  },
  {
    name: "Rust (actively learning)",
    description: "Blazingly fast general purpose programming language",
    link: "https://www.rust-lang.org/",
    image: Rust,
  },
  {
    name: "Anchor Lang (actively learning)",
    description: "Rust framework for Solana's sealevel runtime",
    link: "https://trufflesuite.com/docs/ganache/",
    image: Ganache,
  },
  // {
  //   name: 'JavaScript',
  //   description: 'Web dev scripting',
  //   link: 'https://www.javascript.com/',
  //   image: JavaScript,
  // },
  {
    name: "Linux",
    description: "My os daily driver",
    link: "https://www.archlinux.org/",
    image: Linux,
  },
  {
    name: "Vim",
    description: "Text editor of choice",
    link: "https://www.vim.org/",
    image: Vim,
  },
];

export default techstack;
