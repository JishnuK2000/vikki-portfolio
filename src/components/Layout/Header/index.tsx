"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
        sticky ? " shadow-lg bg-darkmode pt-5" : "shadow-none pt-7"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container px-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="hidden lg:block text-black bg-primary/100 border border-primary hover:bg-primary/80 rounded-lg font-semibold py-2.5 px-5 z-50"
          >
            Book a call
          </button>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
          </button>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <button
              onClick={() => {
                setIsPopupOpen(true);
                setNavbarOpen(false);
              }}
              className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Book a call
            </button>
          </nav>
        </div>

        {isPopupOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-darkmode p-6 rounded-lg shadow-xl w-[90%] max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-center text-dark dark:text-white">
                Book a Call
              </h3>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 text-black dark:text-white dark:bg-darkmode"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vikki666v@gmail.com&su=Book a Call&body=${encodeURIComponent(
                      message
                    )}`;
                    window.open(gmailUrl, "_blank");
                    setIsPopupOpen(false);
                    setMessage("");
                  }}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
                >
                  Send
                </button>
                <button
                  onClick={() => {
                    setIsPopupOpen(false);
                    setMessage("");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
