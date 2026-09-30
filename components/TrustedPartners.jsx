"use client";

import React from "react";

const tools = [
  {
    name: "Shopify",
    icon: "/shopify.png",
  },
  {
    name: "WordPress",
    icon: "/wordpress.png",
  },
  {
    name: "WooCommerce",
    icon: "/woocommerce.png",
  },
  {
    name: "Magento",
    icon: "/magento.png",
  },
  {
    name: "ShipStation",
    icon: "/shipstation.png",
  },
  {
    name: "Zendesk",
    icon: "/zendesk.png",
  },
  {
    name: "Freshdesk",
    icon: "/freshdesk.png",
  },
  {
    name: "HubSpot",
    icon: "/hubspot.png",
  },
  {
    name: "Slack",
    icon: "/slack.png",
  },
  {
    name: "Google Workspace",
    icon: "/google-workspace.png",
  },
  {
    name: "Microsoft Teams",
    icon: "/microsoft-teams.png",
  },
  {
    name: "ClickUp",
    icon: "/clickup.png",
  },
  {
    name: "ChatGPT",
    icon: "/chatgpt.png",
  },
  {
    name: "Claude",
    icon: "/claude.png",
  },
  {
    name: "Zapier",
    icon: "/zapier.png",
  },
  {
    name: "Stripe",
    icon: "/stripe.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#FA5B16] mt-[60px] py-14 sm:py-16 text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="max-w-3xl mb-10 text-left">
          <span className="inline-block px-3 py-1 rounded-[7px] bg-white/15 border border-white/10 text-white text-[10px] font-semibold uppercase tracking-[0.18em]">
            Tools We Work With
          </span>

          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Your Tools. Our Talent.
          </h3>

          <p className="mt-4 text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-2xl">
            Dedicated professionals ready to work with the platforms your
            business uses every day.
          </p>
        </div>

        <div className="w-full rounded-[10px] bg-white/5 border border-white/15 overflow-hidden">

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="
                  flex items-center justify-start gap-2.5
                  px-3 sm:px-4
                  py-4
                  border-r border-b border-white/10
                  hover:bg-white/10
                  transition-all duration-300
                  min-h-[68px]
                "
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[6px] bg-white/10 border border-white/15 overflow-hidden">
                  <img
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <span className="text-[11px] sm:text-xs font-medium text-white/90 leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
