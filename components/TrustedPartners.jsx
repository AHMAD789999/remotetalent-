"use client";

import React from "react";
import { motion } from "framer-motion";

const partnerLogos = [
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/ffffff" },
  { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/ffffff" },
  { name: "Google", url: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/ffffff" },
  { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/ffffff" },
  { name: "Google", url: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/ffffff" },
  { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/ffffff" },
  { name: "Google", url: "https://cdn.simpleicons.org/google/ffffff" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#FA5B16] mt-[60px] py-10 sm:py-12 text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Left-Aligned Short Content */}
        <div className="max-w-xl mb-8 space-y-2 text-left">
          <span className="inline-block px-3 py-1 rounded-[7px] bg-white/15 text-white text-[10px] font-semibold uppercase tracking-wider">
            Integrations
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Compatible With Your Tech Stack
          </h3>
          <p className="text-white/80 text-sm font-normal">
            Our remote staff smoothly integrates into your daily software workflows.
          </p>
        </div>

        {/* Clean Logo Marquee */}
        <div className="relative w-full overflow-hidden rounded-[7px] bg-white/10 p-5 border border-white/15">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FA5B16]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FA5B16]/90 to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex gap-10 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={index} className="flex items-center gap-2.5 opacity-90 hover:opacity-100">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-sm font-medium text-white/90">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}