// components/Faq.js
"use client";
import Image from "next/image";
import React, { useState } from "react"; // Optional: install lucide-react icons

const faqData = [
  {
    question: "What kind of design work do you specialize in?",
    answer:
      "I focus on brand identity, social media design, UI design, and motion graphics. I love crafting bold, story-driven visuals.",
  },
  {
    question: "Which software tools do you use?",
    answer:
      "I regularly use Adobe Illustrator, Photoshop, After Effects, Figma, and Blender. For web interfaces, I explore tools like Framer and Next.js.",
  },
  {
    question: "Can you design both digital and print materials?",
    answer:
      "Yes! I create everything from digital assets like banners and UI components to print-ready posters, brochures, and brand books.",
  },
  {
    question: "Do you create motion graphics?",
    answer:
      "Absolutely. I use After Effects for animating logos, reels, social media posts, and explainer videos.",
  },
  {
    question: "Are your designs based on templates?",
    answer:
      "No, every project is built from scratch, based on the brand’s story, purpose, and personality. I believe in originality.",
  },
  {
    question: "Can I collaborate with you for freelance work?",
    answer:
      "Yes! I'm open to freelance opportunities and collaborations. Let’s create something awesome together.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-primary uppercase text-sm">
                Popular Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                Learn more about how I work
              </h2>
              <p className="text-gray-400 mt-2">
                Curious about my design process? Here are a few things I get
                asked often.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <Image
                    src={"/images/icons/plus-icon.svg"}
                    alt="plus-icon"
                    width={20}
                    height={20}
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>

                <div
                  className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40 visible" : "max-h-0 hidden"
                  }`}
                >
                  <p className="py-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
