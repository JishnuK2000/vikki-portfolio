"use client";
import { useState } from "react";

export default function CompanyProfile() {
  const [expanded, setExpanded] = useState(false);

  const imagePaths = [
    "/images/portfolio/title.jpeg",
    "/images/portfolio/title2.jpeg",
    "/images/portfolio/page1.jpeg",
    "/images/portfolio/page2.jpeg",
    "/images/portfolio/page3.jpeg",
    "/images/portfolio/page4.jpeg",
    "/images/portfolio/page5.jpeg",
    "/images/portfolio/page6.jpeg",
    "/images/portfolio/page7.jpeg",
    "/images/portfolio/page8.jpeg",
  ];

  return (
    <div className="relative w-full  mx-auto mt-10">
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out rounded-lg border border-neutral-800 shadow-xl`}
         style={{
          maxHeight: expanded ? "none" : "400px", // ← FIXED LINE
        }}
      >
        {imagePaths.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            loading="lazy"
            className={`w-full transition-all duration-700 ${
              !expanded && idx === 0
                ? "h-[400px] object-cover object-center"
                : "object-contain"
            }`}
          />
        ))}
      </div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pointer-events-none">
          <div className="pointer-events-auto pb-4">
            <button
              onClick={() => setExpanded(true)}
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full"
            >
              Explore Project
            </button>
          </div>
        </div>
      )}

      {expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pointer-events-none">
          <div className="pointer-events-auto pb-4">
            <button
              onClick={() => setExpanded(false)}
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full"
            >
              Close Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
