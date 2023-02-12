import r1 from "@/assets/images/Decentralized@2x.png";
import r2 from "@/assets/images/Demand-driven@2x.png";
import r3 from "@/assets/images/Web3@2x.png";
import r4 from "@/assets/images/NO KYC@2x.png";

import s1 from "@/assets/images/Decentralized CDN@2x.png";
import s2 from "@/assets/images/Decentralized Edge Computing@2x.png";
import s3 from "@/assets/images/Decentralized Edge DVPN@2x.png";

import p1 from "@/assets/images/BINANCE@2x.png";
import p2 from "@/assets/images/IPFS@2x.png";
import p3 from "@/assets/images/FILECOIN@2x.png";
import p4 from "@/assets/images/arweave-org@2x.png";
import p5 from "@/assets/images/everVision@2x.png";
import p6 from "@/assets/images/PORTALVERSE@2x.png";

import c1 from "@/assets/images/Twitter@2x.png";
import c2 from "@/assets/images/email@2x.png";
import c3 from "@/assets/images/Telegram@2x.png";
import c4 from "@/assets/images/github@2x.png";

export const reasons = [
  {
    title: "Decentralized",
    desc: "No KYC and anti-censorship to protect users' data privacy and security",
    src: r1,
  },
  {
    title: "Performant and Cheap",
    desc: "Ultra-low latency by pushing computing power close to the user side and cut costs by reducing backbone data traffic",
    src: r2,
  },
  {
    title: "Web3 Developers Friendly",
    desc: "Build Web3 Developers friendly API and Commit to Web3's Composability and Interoperability",
    src: r3,
  },
  {
    title: "ESG Friendly",
    desc: "Low-emission data processing by reducing network traffic and using renewable energy",
    src: r4,
  },
];

export const solutions = [
  {
    title: "Decentralized p2p CDN",
    desc: "The decentralized computing network protects user's data and privacy and provides lower network latency and a cheaper price than traditional CDNs. ",
    src: s1,
  },
  {
    title: "Decentralized edge transcoding",
    desc: "The decentralized edge computing infrastructure to encode and process live streams for video uploaders.",
    src: s2,
  },
  {
    title: "dVPN",
    desc: "The decentralized edge computing infrastructure to combine network security and build Web 3.0 infrastructure and ecosystem for users.",
    src: s3,
  },
];

export const partners = [
  {
    href: "",
    src: p1,
    width: "60%",
  },
  {
    href: "",
    src: p2,
    width: "30%",
  },
  {
    href: "",
    src: p3,
    width: "50%",
  },
  {
    href: "",
    src: p4,
  },
  {
    href: "",
    src: p5,
  },
  {
    href: "",
    src: p6,
  },
];

export const roadmaps = [
  {
    year: 2022,
    plan: "Launch MVP",
  },
  {
    year: 2023,
    plan: "Release Dev/Test Network Acquire more Web3's developers.",
  },
  {
    year: 2024,
    plan: "Release Main Network.",
  },
  {
    year: 2025,
    plan: "Serve mainstream customers in some regions.",
  },
];

export const contracts = [
  {
    name: "Twitter",
    href: "https://twitter.com/apus_network",
    src: c1,
  },
  {
    name: "Email",
    href: "mailto:jason@apus.network",
    src: c2,
  },
  {
    name: "Telegram",
    href: "https://t.me/+AWdHtLSl2m4yM2I1",
    src: c3,
  },
  {
    name: "GitHub",
    href: "https://github.com/apusnetwork",
    src: c4,
  },
];

export const clone = (value) => JSON.parse(JSON.stringify(value));

export const sleep = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};
