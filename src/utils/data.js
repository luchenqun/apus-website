export const imageUrl = (pic) => {
  return new URL(pic, import.meta.url).href;
};

export const reasons = [
  {
    title: "Decentralized",
    desc: "No KYC and anti-censorship to protect users' data privacy and security",
    src: imageUrl("/src/assets/images/Decentralized@2x.png"),
  },
  {
    title: "Performant and Cheap",
    desc: "Ultra-low latency by pushing computing power close to the user side and cut costs by reducing backbone data traffic",
    src: imageUrl("/src/assets/images/Demand-driven@2x.png"),
  },
  {
    title: "Web3 Developers Friendly",
    desc: "Build Web3 Developers friendly API and Commit to Web3's Composability and Interoperability",
    src: imageUrl("/src/assets/images/Web3@2x.png"),
  },
  {
    title: "ESG Friendly",
    desc: "Low-emission data processing by reducing network traffic and using renewable energy",
    src: imageUrl("/src/assets/images/NO KYC@2x.png"),
  },
];

export const solutions = [
  {
    title: "Decentralized p2p CDN",
    desc: "The decentralized computing network protects user's data and privacy and provides lower network latency and a cheaper price than traditional CDNs. ",
    src: imageUrl("/src/assets/images/Decentralized CDN@2x.png"),
  },
  {
    title: "Decentralized edge transcoding",
    desc: "The decentralized edge computing infrastructure to encode and process live streams for video uploaders.",
    src: imageUrl("/src/assets/images/Decentralized Edge Computing@2x.png"),
  },
  {
    title: "dVPN",
    desc: "The decentralized edge computing infrastructure to combine network security and build Web 3.0 infrastructure and ecosystem for users.",
    src: imageUrl("/src/assets/images/Decentralized Edge DVPN@2x.png"),
  },
];

export const partners = [
  {
    href: "",
    src: imageUrl("/src/assets/images/BINANCE@2x.png"),
  },
  {
    href: "",
    src: imageUrl("/src/assets/images/IPFS@2x.png"),
  },
  {
    href: "",
    src: imageUrl("/src/assets/images/FILECOIN@2x.png"),
  },
  {
    href: "",
    src: imageUrl("/src/assets/images/arweave-org@2x.png"),
  },
  {
    href: "",
    src: imageUrl("/src/assets/images/everVision@2x.png"),
  },
  {
    href: "",
    src: imageUrl("/src/assets/images/PORTALVERSE@2x.png"),
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
    src: imageUrl("/src/assets/images/Twitter@2x.png"),
  },
  {
    name: "Email",
    href: "mailto:jason@apus.network",
    src: imageUrl("/src/assets/images/email@2x.png"),
  },
  {
    name: "Telegram",
    href: "https://t.me/+AWdHtLSl2m4yM2I1",
    src: imageUrl("/src/assets/images/Telegram@2x.png"),
  },
  {
    name: "GitHub",
    href: "https://github.com/apusnetwork",
    src: imageUrl("/src/assets/images/github@2x.png"),
  },
];

export const clone = (value) => JSON.parse(JSON.stringify(value));

export const sleep = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};
