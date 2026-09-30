"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { 
  Code, 
  ShoppingBag, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  Truck, 
  Boxes, 
  UserCheck, 
  RotateCcw, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const allServices = [
  {
    id: "web-dev",
    category: "Development",
    title: "Website Engineering & Dev",
    desc: "Custom Next.js, PHP, WordPress & WooCommerce web app architectures.",
    link: "/services/web-development",
    icon: Code,
  },
  {
    id: "ecommerce",
    category: "Development",
    title: "E-Commerce Store Operations",
    desc: "Full Shopify and WooCommerce catalog and workflow management.",
    link: "/services/web-development",
    icon: ShoppingBag,
  },
  {
    id: "live-chat",
    category: "Customer Support",
    title: "24/7 Live Chat Support",
    desc: "Real-time web chat support to capture leads and convert store visitors.",
    link: "/services/live-chat-support",
    icon: MessageSquare,
  },
  {
    id: "call-support",
    category: "Customer Support",
    title: "Inbound Call Support",
    desc: "Voice assistance for client inquiries, orders, and technical support.",
    link: "/services/customer-call-support",
    icon: PhoneCall,
  },
  {
    id: "email-support",
    category: "Customer Support",
    title: "Email Ticket Management",
    desc: "Zendesk & Freshdesk ticketing queue handling with fast SLA times.",
    link: "/services/customer-email-support",
    icon: Mail,
  },
  {
    id: "driver-support",
    category: "Operations & Logistics",
    title: "Driver Fleet Dispatch",
    desc: "Real-time route support and live dispatch for delivery personnel.",
    link: "/services/driver-dispatch-support",
    icon: Truck,
  },
  {
    id: "warehouse-management",
    category: "Operations & Logistics",
    title: "Warehouse & Inventory",
    desc: "Order processing powered by ShipStation and custom ERP setups.",
    link: "/services/warehouse-order-management",
    icon: Boxes,
  },
  {
    id: "executive-assistant",
    category: "Operations & Logistics",
    title: "Virtual Executive Assistant",
    desc: "Dedicated C-suite support for calendar management and emails.",
    link: "/services/executive-assistant-c-suite",
    icon: UserCheck,
  },
  {
    id: "rma-handling",
    category: "Operations & Logistics",
    title: "RMA & Returns Processing",
    desc: "Hassle-free return authorizations and replacement workflows.",
    link: "/services/order-shipping-rma",
    icon: RotateCcw,
  },
];

export default function ServicesSection() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#FAF6F2] py-20 px-4 sm:px-6 lg:px-12 text-[#0F0C09] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER & SCROLL CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0F0C09]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-[11px] font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              Offshore Capabilities Slider
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09]">
              Specialized Services Matrix
            </h2>
          </div>

          {/* LEFT / RIGHT MANUAL SCROLL BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-11 h-11 rounded-[7px] bg-white border border-[#0F0C09]/15 text-[#0F0C09] hover:bg-[#FA5B16] hover:text-white hover:border-[#FA5B16] flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="w-11 h-11 rounded-[7px] bg-white border border-[#0F0C09]/15 text-[#0F0C09] hover:bg-[#FA5B16] hover:text-white hover:border-[#FA5B16] flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL AUTO & MANUAL SCROLL CONTAINER */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allServices.map((service) => {
            const IconComponent = service.icon;

            return (
              <Link
                key={service.id}
                href={service.link}
                className="group relative flex-shrink-0 w-[280px] sm:w-[310px] h-[390px] rounded-t-[140px] rounded-b-[16px] bg-white border border-[#0F0C09]/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden snap-start flex flex-col justify-between"
              >
                {/* CARD INNER CONTAINER */}
                <div className="relative w-full h-full flex flex-col justify-between p-7 z-10">
                  
                  {/* RIGHT SIDE VERTICAL BRAND COLOR STRIP */}
                  <div className="absolute top-0 right-0 w-[15%] h-full bg-[#FA5B16] transition-all duration-500 group-hover:w-full group-hover:opacity-95" />

                  {/* CENTER EMBEDDED ICON CIRCLE GRAPHIC */}
                  <div className="relative z-20 pt-8 pb-4">
                    <div className="w-16 h-16 rounded-full bg-[#FAF6F2] border border-[#0F0C09]/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all shadow-sm">
                      <IconComponent className="w-8 h-8 text-[#FA5B16] transition-colors" />
                    </div>
                  </div>

                  {/* BOTTOM CONTENT AREA */}
                  <div className="relative z-20 space-y-3 pb-1">
                    <h3 className="text-xl font-bold text-[#0F0C09] tracking-tight leading-snug group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed group-hover:text-white/90 transition-colors line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#FA5B16] group-hover:text-white transition-colors border-t border-[#0F0C09]/10 group-hover:border-white/30">
                      <span>Explore Capability</span>
                      <div className="w-7 h-7 rounded-full bg-[#FAF6F2] text-[#0F0C09] group-hover:bg-white group-hover:text-[#FA5B16] flex items-center justify-center transition-all group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}   
