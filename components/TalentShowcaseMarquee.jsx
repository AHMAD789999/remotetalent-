"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://framerusercontent.com/images/Xup44lT05fI7ULikDpDUcdet5M.png?width=687&height=533",
  "https://framerusercontent.com/images/3TWrH1LgWz28bycoINqeqegsxw4.png?scale-down-to=512&width=533&height=533",
  "https://framerusercontent.com/images/GADo4cDx3P81nDG7pb7yA6hjkzw.png?width=426&height=533",
  "https://framerusercontent.com/images/eWSFN4vEE5WYVdCDBVEtEV2oX0.png?width=461&height=514",
  "https://framerusercontent.com/images/muPZCrML4kWDHgdZz284LoRPNY.png?scale-down-to=512&width=533&height=533",
];

export default function TalentShowcaseMarquee() {
  return (
    <section className="bg-[#FAF6F2] my-9 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* 7XL CONTAINER WITH FADE-EDGES & 3D PERSPECTIVE */}
        <div className="relative w-full overflow-hidden [perspective:1000px]">
          
          {/* Subtle Left/Right Fade Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF6F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAF6F2] to-transparent z-10 pointer-events-none" />

          {/* INFINITE SMOOTH MARQUEE */}
          <div className="flex whitespace-nowrap py-6 overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8 items-center flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...images, ...images, ...images, ...images].map((imgUrl, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] overflow-hidden rounded-t-full rounded-b-[40px] bg-stone-200 border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:rotate-1 hover:scale-105"
                >
                  {/* Subtle 3D Depth Inner Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

                  <img
                    src={imgUrl}
                    alt={`Talent Showcase ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
