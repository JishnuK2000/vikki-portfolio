"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

const Portfolio = () => {
  const handleDownload = () => {
    toast.error("Portfolio download not added yet!");
  };
  return (
    <section className="pt-12" id="portfolio">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
       
          >
            <Image
              src="/images/portfolio/PORT.jpg"
              alt="Crypto Portfolio"
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">
                About My <span className="text-primary">Portfolio</span>
              </p>
              <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
                A curated collection of creative and impactful design work
              </h2>
            </div>
            <p className="text-muted/60 text-18">
              My portfolio showcases a range of design projects—from branding
              and illustrations to UI/UX and motion graphics. Each piece
              reflects my focus on clean aesthetics, thoughtful strategy, and
              delivering value through visual storytelling.
            </p>

            {/* <table className="w-full sm:w-[80%] mt-10">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className="border-b border-dark_border/10">
                    <td className="py-5">
                      <div className="bg-primary/20 p-3 rounded-full w-fit">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted text-xl ml-5">{item.title}</h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                className="w-[220px] bg-primary hover:bg-primary/80 text-sm text-black font-medium px-4 py-3.5 leading-none rounded-lg text-nowrap"
              >
                Download My Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
