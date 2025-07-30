"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import BrandLogo from "../BrandLogo";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AnimatedProgress } from "./circularProgress";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 pt-48 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div {...leftAnimation} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <div className="py-1.5 px-4 bg-primary/10 rounded-full border border-white/10">
                  <span className="text-primary font-medium">
                    Designs that speak louder than words
                  </span>
                </div>
              </div>
              <h1 className="font-medium xl:text-[72px] lg:text-6xl md:text-54 sm:text-5xl text-4xl md:text-start text-center text-white">
                Hi, I’m Vikki{" "}
              </h1>
              <p className="text-white">
                A passionate and detail-oriented designer who believes in the
                power of visual storytelling. With a strong eye for aesthetics
                and a heart full of creativity, I love turning ideas into
                engaging, meaningful designs. Over the years, I’ve worked on a
                variety of projects, from branding and print to digital
                experiences. My approach combines strategy, simplicity, and
                strong design fundamentals to create work that not only looks
                good but works well. When I’m not designing, I’m probably
                sketching new ideas, exploring design trends, or sipping on a
                hot cup of coffee thinking about the next big concept.
              </p>

              {/* Skills Section */}
              <div className="mt-6">
                {/* <h2 className="text-4xl text-white font-semibold mb-4 text-left">
                  Tools I Use
                </h2> */}
                <div className="flex gap-8 justify-center flex-wrap">
                  <AnimatedProgress
                    value={90}
                    icon="/images/software/ps.png"
                    alt="Photoshop"
                    color="#31A8FF"
                  />
                  <AnimatedProgress
                    value={85}
                    icon="/images/software/ai.png"
                    alt="Illustrator"
                    color="#FF9A00"
                  />
                  <AnimatedProgress
                    value={80}
                    icon="/images/software/ae.png"
                    alt="After Effects"
                    color="#D291FF"
                  />
                  <AnimatedProgress
                    value={75}
                    icon="/images/software/pr.png"
                    alt="Premiere Pro"
                    color="#9999FF"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link
                href={"/#work"}
                className="bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-darkmode py-3 px-7 cursor-pointer"
              >
                Let’s Collaborate
                <Image
                  src={"/images/icons/icon-arrow.svg"}
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="">
            <div className="w-full h-full">
              <Image
                src="/images/profile/vikk.PNG"
                alt="Banner"
                width={584}
                height={582}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
        <BrandLogo />
        <CardSlider />
      </div>

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
          </div>
        </div>
      )}
      {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
