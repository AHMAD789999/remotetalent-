"use client";

import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Shopify", icon: "shopify" },
  { name: "WordPress", icon: "wordpress" },
  { name: "WooCommerce", icon: "woocommerce" },
  { name: "Magento", icon: "magento" },
  { name: "ShipStation", icon: "shipstation" },
  { name: "Zendesk", icon: "zendesk" },
  { name: "Freshdesk", icon: "freshdesk" },
  { name: "HubSpot", icon: "hubspot" },
  { name: "Slack", icon: "slack" },
  { name: "Google Workspace", icon: "googleworkspace" },
  { name: "Microsoft Teams", icon: "microsoftteams" },
  { name: "ClickUp", icon: "clickup" },
  { name: "ChatGPT", icon: "openai" },
  { name: "Claude", icon: "claude" },
  { name: "Zapier", icon: "zapier" },
  { name: "Stripe", icon: "stripe" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#FA5B16] mt-[60px] py-14 sm:py-16 text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-[7px] bg-white/15 border border-white/10 text-white text-[10px] font-semibold uppercase tracking-[0.18em]">
            Tools We Work With
          </span>

          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Your Tools. Our Talent.
          </h3>

          <p className="mt-4 text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Dedicated professionals ready to work with the platforms your
            business uses every day.
          </p>
        </div>

        {/* Tools Marquee */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FA5B16] to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FA5B16] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center gap-3 mx-5 sm:mx-7 group"
              >
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-[7px] bg-white/10 border border-white/15 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                  <img
                    src={`https://cdn.simpleicons.org/${tool.icon}/ffffff`}
                    alt={`${tool.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    loading="lazy"
                  />
                </div>

                <span className="text-sm sm:text-[15px] font-medium text-white/90 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
