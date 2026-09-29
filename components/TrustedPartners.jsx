"use client";

import React from "react";

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
  { name: "Google", icon: "google" },
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

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border border-white/15 rounded-[10px] overflow-hidden bg-white/5">

          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 px-3 py-5 border-r border-b border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-[7px] bg-white/10 border border-white/15">
                <img
                  src={`https://cdn.simpleicons.org/${tool.icon}/ffffff`}
                  alt={`${tool.name} logo`}
                  className="w-5 h-5 object-contain"
                  loading="lazy"
                />
              </div>

              <span className="text-xs sm:text-sm font-medium text-white/90 text-center whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
