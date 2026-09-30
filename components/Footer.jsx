"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Code,
  ShoppingBag,
  MessageSquare,
  PhoneCall,
  Truck,
  Boxes,
  UserCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const serviceCategories = [
    {
      category: "Development",
      items: [
        {
          title: "Website Development & Maintenance",
          link: "/services/web-development",
          icon: Code,
        },
        {
          title: "E-Commerce Store Setup",
          link: "/services/web-development",
          icon: ShoppingBag,
        },
      ],
    },
    {
      category: "Customer Support",
      items: [
        {
          title: "Customer Live Chat Support",
          link: "/services/live-chat-support",
          icon: MessageSquare,
        },
        {
          title: "Customer Call Support",
          link: "/services/customer-call-support",
          icon: PhoneCall,
        },
        {
          title: "Customer Email Support",
          link: "/services/customer-email-support",
          icon: Mail,
        },
      ],
    },
    {
      category: "Operations & Logistics",
      items: [
        {
          title: "Driver Chat & Call Support",
          link: "/services/driver-dispatch-support",
          icon: Truck,
        },
        {
          title: "Order & Warehouse Management",
          link: "/services/warehouse-order-management",
          icon: Boxes,
        },
        {
          title: "C-Suite Executive Assistance",
          link: "/services/executive-assistant-c-suite",
          icon: UserCheck,
        },
        {
          title: "Order Shipping & RMA Handling",
          link: "/services/order-shipping-rma",
          icon: RotateCcw,
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#FA5B16] text-white pt-14 pb-8 px-6 lg:px-12 select-none border-t border-[#FA5B16] overflow-hidden">
      {/* Background Ambient Depth Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Background Small Square Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex justify-center items-center">
        <svg
          className="w-full h-full object-cover"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footer-small-boxes-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="36"
                height="36"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#footer-small-boxes-grid)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* TOP SECTION: 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMN 1: BRAND & ABOUT */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/footerlogo.png"
                alt="RemoteTalent"
                width={220}
                height={70}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                Offshore Talent Partners
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
              Connecting global businesses with dedicated, pre-vetted remote
              talent and full-scale operational support managed directly from
              our office in Pakistan.
            </p>
          </div>

          {/* COLUMN 2: CONTACT INFO */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold tracking-wide uppercase text-white border-b border-white/20 pb-2 inline-block">
              Contact Info
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-white/90">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Lahore, Pakistan</span>
              </li>

              <li>
                <a
                  href="mailto:business@talentharbor.net"
                  className="flex items-center gap-3 hover:text-white/80 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">business@talentharbor.net</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+13322224593"
                  className="flex items-center gap-3 hover:text-white/80 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">+1 (332) 222-4593</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK SERVICES LINK */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold tracking-wide uppercase text-white border-b border-white/20 pb-2 inline-block">
              Quick Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {serviceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-[11px] font-bold text-white/70 uppercase tracking-wider">
                    {cat.category}
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, itemIdx) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={itemIdx}>
                          <Link
                            href={item.link}
                            className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 transition-all group hover:translate-x-1"
                          >
                            <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white shrink-0" />
                            <span className="line-clamp-1">{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER LINE */}
        <div className="border-t border-white/20" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          {/* Copyright */}
          <p className="text-[11px] text-white/80 font-normal text-center sm:text-left">
            © {new Date().getFullYear()} RemoteTalent. All rights reserved.
          </p>

          {/* Policy Pages */}
          <div className="flex items-center gap-5 text-xs font-semibold text-white/90">
            <Link
              href="/terms"
              className="hover:underline hover:text-white transition-all"
            >
              Terms of Service
            </Link>

            <span className="opacity-40">•</span>

            <Link
              href="/privacy-policy"
              className="hover:underline hover:text-white transition-all"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
