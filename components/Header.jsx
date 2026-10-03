"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  ShoppingBag,
  MessageSquare,
  PhoneCall,
  Mail,
  Truck,
  Boxes,
  UserCheck,
  RotateCcw,
  ArrowRight,
  FileText,
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
        title: "Live Chat & Social Inbox Support",
        desc: "Web chat, Instagram, Facebook & WhatsApp.",
        link: "/services/live-chat-support",
        icon: MessageSquare,
      },
      {
        title: "Customer Phone Support",
        desc: "Inbound & outbound voice customer agents.",
        link: "/services/customer-call-support",
        icon: PhoneCall,
      },
      {
        title: "Email & Helpdesk Support",
        desc: "Structured ticketing, email & refund workflows.",
        link: "/services/customer-email-support",
        icon: Mail,
      },
    ],
  },
  {
    category: "E-Commerce Operations & Logistics",
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
  {
    category: "Executive & Administrative Support",
    items: [
      {
        title: "Executive Assistant Services",
        desc: "Calendar, inbox, meetings & travel management.",
        link: "/services/executive-assistant-c-suite",
        icon: UserCheck,
      },
      {
        title: "General Virtual Assistance",
        desc: "Routine docs, research, CRM updates & data entry.",
        link: "/services/general-virtual-assistance",
        icon: FileText,
      },
    ],
  },
];

const hireEmail =
  "mailto:business@talentharbor.net?subject=Hire%20Dedicated%20Talent&body=Hello%20TalentHarbor%2C%0A%0AI%20am%20interested%20in%20hiring%20dedicated%20talent.%0A%0AThank%20you.";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors"
            >
              Home
            </Link>

            <div
              className="py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] transition-colors">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? "rotate-180 text-[#FA5B16]" : ""
                  }`}
                />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 right-0 pt-3 w-full z-50">
                  <div className="bg-white rounded-[7px] border border-[#0F0C09]/10 shadow-2xl p-8 grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-9 grid grid-cols-2 gap-8">
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-4">
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
                                  className="group/item flex items-start gap-3 p-2 rounded-[7px] hover:bg-[#FAF6F2] transition-colors min-w-0"
                                >
                                  <div className="w-7 h-7 rounded-[7px] bg-[#FAF6F2] text-[#0F0C09] flex items-center justify-center shrink-0 group-hover/item:bg-[#FA5B16] group-hover/item:text-white transition-colors mt-0.5">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold text-[#0F0C09] group-hover/item:text-[#FA5B16] transition-colors whitespace-normal leading-snug">
                                      {item.title}
                                    </div>
                                    <div className="text-[11px] text-[#0F0C09]/60 line-clamp-1 mt-0.5">
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

                    <div className="col-span-3 bg-[#FAF6F2] rounded-[7px] p-6 border border-[#0F0C09]/5 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16]">
                          Dedicated Hiring
                        </span>
                        <h5 className="text-sm font-bold text-[#0F0C09] leading-snug">
                          Scale Operations in 48 Hours
                        </h5>
                        <p className="text-xs text-[#0F0C09]/70 leading-relaxed pt-1">
                          Vetted remote experts working directly from our office
                          in Pakistan on your time zone.
                        </p>
                      </div>

                      <a
                        href={hireEmail}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-sm hover:bg-[#e04f0f] transition-all mt-4"
                      >
                        <span>Talk to Specialist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
            <a
              href={hireEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md hover:bg-[#e04f0f] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Hire Dedicated Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
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
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-[#FA5B16]" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 py-2 space-y-4 bg-[#FAF6F2] mt-2 rounded-[7px] p-3">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16]">
                        {cat.category}
                      </div>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs font-semibold text-[#0F0C09]/80 hover:text-[#FA5B16] py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

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

            <a
              href={hireEmail}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md mt-2"
            >
              <span>Hire Dedicated Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
