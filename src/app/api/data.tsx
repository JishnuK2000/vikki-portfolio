import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "/images/works/IMG1.JPEG",
    background: "bg-warning/20",
    price: "$93,291.24",
    mark: "$94,040.99 (-0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "/images/works/IMG2.JPG",
    background: "bg-light_grey",
    price: "$3,128.84",
    mark: "$4,878.26 (-35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Polkadot",
    short: "BTC/USD",
    icon: "/images/works/IMG3.JPEG",
    background: "bg-warning/20",
    price: "$443.27",
    mark: "$3,785.82 (-88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "/images/works/IMG4.JPEG",
    background: "bg-light_grey",
    price: "$86.11",
    mark: "$410.26 (-79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "/images/works/IMG5.JPEG",
    background: "bg-light_grey",
    price: "$238.70",
    mark: "$259.96 (-8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/works/IMG6.JPEG",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/works/IMG7.JPEG",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/works/IMG8.JPEG",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/portfolio-icon-1.svg",
    title: "Manage your portfolio",
  },
  {
    image: "/images/portfolio/portfolio-icon-2.svg",
    title: "Vault protection",
  },
  {
    image: "/images/portfolio/portfolio-icon-3.svg",
    title: "Mobile apps",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "Free figma file" },
  { title: "A fraction of the cost" },
  { title: "Powerful in performance" },
  { title: "More durable" },
  { title: "Designed for crypto" },
  { title: "Easier to use" },
  { title: " 100% free framer template" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/peak-icon-1.svg",
    title: "Design Support",
    text: "Quick fixes or iterations based on feedback.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/peak-icon-2.svg",
    title: "Creative Community",
    text: "Collaborated with peers & mentors to polish ideas.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/peak-icon-3.svg",
    title: "Ongoing Learning",
    text: "Each project sharpened my branding & layout skills.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/idea.svg",
    title: "Concept",
    text: "Started with an idea to reflect my creative identity.",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/design.svg",
    title: "Design",
    text: "Created visuals, layout, and mockups.",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/refine.svg",
    title: "Refinement",
    text: "Polished typography, colors, and rhythm.",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/showcase.svg",
    title: "Showcase",
    text: "Presented it as a portfolio piece with confidence.",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
