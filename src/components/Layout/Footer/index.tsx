import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 pb-16">
          {/* Links Section */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h4 className="text-white mb-4 font-semibold text-24">Explore</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-primary text-17 transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer or Add another section if needed */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* About / Logo / Socials */}
          <div className="sm:col-span-12 lg:col-span-6 flex flex-col gap-6 sm:items-start items-center text-center sm:text-left">
            <Logo />
            <p className="text-white/60 max-w-md">
              Every pixel here tells a story — thanks for scrolling through my
              creative journey.
            </p>
            <div className="flex gap-6 mt-2">
              <Link
                href="https://www.instagram.com/gypsy.pneuma?igsh=MTB2bzIxeGVqamVxcA%3D%3D&utm_source=qr"
                className="group"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary transition-colors"
                />
              </Link>
              <Link href="http://linkedin.com/in/vignesh-0m" className="group">
                <Icon
                  icon="fa6-brands:linkedin"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary transition-colors"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <p className="text-white/40 text-center py-6 border-t border-white/20 text-sm">
          Designed & Developed by Jishnu –{" "}
          <Link
            className="hover:text-primary"
            href="https://www.instagram.com/dezignduck"
            target="_blank"
          >
            Dezign Duck
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
