"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
  UserCheck,
  Share2,
  FileText,
  Boxes,
  RotateCcw,
  Truck,
  Calculator,
  ArrowRight,
} from "lucide-react";

const serviceCategories = [
  {
    category: "Development & Technology",
    items: [
      {
        title: "Website Development & Maintenance",
        desc: "Custom WordPress, Next.js & PHP development.",
        link: "/services/web-development",
        icon: Code,
      },
      {
        title: "E-Commerce Store Development",
        desc: "Shopify & WooCommerce build & setup.",
        link: "/services/store-development",
        icon: ShoppingBag,
      },
    ],
  },
  {
    category: "Customer Support",
    items: [
      {
        title: "Customer Support Representative",
        desc: "Live chat, social inbox, phone & email support.",
        link: "/services/customer-support-representative",
        icon: MessageSquare,
      },
      {
        title: "Customer Phone Support",
        desc: "Inbound & outbound voice customer agents.",
        link: "/services/customer-call-support",
        icon: MessageSquare,
      },
      {
        title: "Email & Helpdesk Support",
        desc: "Structured ticketing, email & refund workflows.",
        link: "/services/customer-email-support",
        icon: MessageSquare,
      },
    ],
  },
  {
    category: "Business & Sales",
    items: [
      {
        title: "Business Development",
        desc: "Lead generation, outreach & pipeline growth.",
        link: "/services/business-development",
        icon: TrendingUp,
      },
      {
        title: "Account Executive",
        desc: "Client acquisition, closing & account management.",
        link: "/services/account-executive",
        icon: UserCheck,
      },
    ],
  },
  {
    category: "Marketing & Management",
    items: [
      {
        title: "Marketing & Social Media Manager",
        desc: "Campaign management, social growth & branding.",
        link: "/services/marketing-social-media-manager",
        icon: Share2,
      },
      {
        title: "Executive Assistant",
        desc: "Calendar, inbox, meetings & C-suite support.",
        link: "/services/executive-assistant",
        icon: FileText,
      },
    ],
  },
  {
    category: "E-Commerce Operations",
    items: [
      {
        title: "E-Commerce Store & Catalog Management",
        desc: "Products, variants, collections & pricing updates.",
        link: "/services/store-catalog-management",
        icon: ShoppingBag,
      },
      {
        title: "Order Processing & Inventory Coordination",
        desc: "ShipStation, stock records & 3PL synchronization.",
        link: "/services/warehouse-order-management",
        icon: Boxes,
      },
    ],
  },
  {
    category: "Logistics & Fulfillment",
    items: [
      {
        title: "Shipping, Returns & RMA Support",
        desc: "Labels, return authorizations & logistics claims.",
        link: "/services/order-shipping-rma",
        icon: RotateCcw,
      },
      {
        title: "Driver Support & Dispatch Coordination",
        desc: "Real-time fleet tracking & status updates.",
        link: "/services/driver-dispatch-support",
        icon: Truck,
      },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 select-none transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-[7px] relative transition-all duration-300 border ${
          isScrolled
            ? "bg-[#FAF6F2]/90 backdrop-blur-md border-[#0F0C09]/15 shadow-md py-3.5 px-6"
            : "bg-white border-[#0F0C09]/10 shadow-sm py-4 px-6 sm:px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/talentlogo.png"
              alt="TalentHarbor"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors"
            >
              Home
            </Link>

            <div className="py-2 relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180 text-[#FA5B16]" : ""
                  }`}
                />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[1150px] z-50">
                  <div className="bg-white rounded-[7px] border border-[#0F0C09]/10 shadow-2xl p-8 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                    
                    {/* Categories Section arranged in 4 columns for perfect row alignment */}
                    <div className="col-span-10 grid grid-cols-4 gap-5">
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#FA5B16] border-b border-[#0F0C09]/10 pb-2">
                            {cat.category}
                          </h4>

                          <div className="space-y-2">
                            {cat.items.map((item, itemIdx) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={itemIdx}
                                  href={item.link}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className="group/item flex items-start gap-2 p-2 rounded-[7px] hover:bg-[#FAF6F2] transition-colors min-w-0"
                                >
                                  <div className="w-5 h-5 rounded-[5px] bg-[#FAF6F2] text-[#0F0C09] flex items-center justify-center shrink-0 group-hover/item:bg-[#FA5B16] group-hover/item:text-white transition-colors mt-0.5">
                                    <Icon className="w-3 h-3" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold text-[#0F0C09] group-hover/item:text-[#FA5B16] transition-colors whitespace-normal leading-snug">
                                      {item.title}
                                    </div>
                                    <div className="text-[10px] text-[#0F0C09]/60 line-clamp-1 mt-0.5">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right side CTA card */}
                    <div className="col-span-2 bg-[#FAF6F2] rounded-[7px] p-5 border border-[#0F0C09]/5 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16]">
                          Hiring
                        </span>
                        <h5 className="text-xs font-bold text-[#0F0C09] leading-snug">
                          Scale in 48 Hours
                        </h5>
                        <p className="text-[11px] text-[#0F0C09]/70 leading-relaxed">
                          Vetted remote experts working on your time zone.
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-[7px] bg-[#FA5B16] text-white text-[11px] font-bold shadow-sm hover:bg-[#e04f0f] transition-all mt-3"
                      >
                        <span>Talk to Specialist</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/team-building-calculator"
              className="text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-[#FA5B16]" />
              <span>Calculator</span>
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md hover:bg-[#e04f0f] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Hire Dedicated Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-[7px] bg-white border border-[#0F0C09]/10 text-[#0F0C09]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#0F0C09]/10 space-y-4 max-h-[70vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0F0C09] py-1 border-b border-[#0F0C09]/5"
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-sm font-bold text-[#0F0C09] py-1 border-b border-[#0F0C09]/5 text-left"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180 text-[#FA5B16]" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-2 py-2 space-y-4 bg-[#FAF6F2] mt-2 rounded-[7px] p-3">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16]">
                        {cat.category}
                      </div>
                      <div className="space-y-1.5">
                        {cat.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={itemIdx}
                              href={item.link}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2 p-1.5 rounded-[6px] hover:bg-white transition-colors group/mob"
                            >
                              <div className="w-5 h-5 rounded-[5px] bg-white text-[#0F0C09] border border-[#0F0C09]/10 flex items-center justify-center shrink-0 group-hover/mob:bg-[#FA5B16] group-hover/mob:text-white group-hover/mob:border-[#FA5B16] transition-colors">
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="text-xs font-semibold text-[#0F0C09]/80 group-hover/mob:text-[#FA5B16] transition-colors leading-tight">
                                {item.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/team-building-calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-bold text-[#0F0C09] py-1 border-b border-[#0F0C09]/5"
            >
              <Calculator className="w-4 h-4 text-[#FA5B16]" />
              <span>Team Building Calculator</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0F0C09] py-1 border-b border-[#0F0C09]/5"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#0F0C09] py-1"
            >
              Contact Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md mt-2"
            >
              <span>Hire Dedicated Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
