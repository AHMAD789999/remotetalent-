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
    <footer className="relative bg-[#FA5B16] text-white pt-16 pb-10 px-6 sm:px-10 lg:px-16 select-none border-t border-[#FA5B16] overflow-hidden">
      {/* Background Ambient Depth Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

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
        {/* MAIN 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND & ABOUT (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/footerlogo.png"
                alt="RemoteTalent"
                width={220}
                height={70}
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>

            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                Offshore Talent Partners
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm">
              Connecting global businesses with dedicated, pre-vetted remote
              talent and full-scale operational support managed directly from
              our office in Pakistan.
            </p>
          </div>

          {/* COLUMN 2: CONTACT INFO (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="border-b border-white/20 pb-2">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white">
                Contact Info
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-white/10 border border-white/15 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                    Address
                  </span>
                  <span className="text-white/90 font-medium">Lahore, Pakistan</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-white/10 border border-white/15 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                    Email
                  </span>
                  <a
                    href="mailto:business@talentharbor.net"
                    className="text-white/90 hover:text-white font-medium hover:underline transition-colors break-all"
                  >
                    business@talentharbor.net
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-white/10 border border-white/15 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
                    Phone
                  </span>
                  <a
                    href="tel:+13322224593"
                    className="text-white/90 hover:text-white font-semibold hover:underline transition-colors"
                  >
                    +1 (332) 222-4593
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK SERVICES LINK (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="border-b border-white/20 pb-2">
              <h3 className="text-sm font-bold tracking-wider uppercase text-white">
                Quick Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {serviceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-2.5">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider block">
                    {cat.category}
                  </span>
                  <ul className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.link}
                          className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 transition-all group"
                        >
                          <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                          <span className="hover:underline line-clamp-1">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-white/20" />

        {/* BOTTOM COPYRIGHT & LEGAL LINKS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[11px] text-white/80 font-normal text-center sm:text-left">
            © {new Date().getFullYear()} RemoteTalent. All rights reserved.
          </p>

          <div className="flex items-center gap-5 font-semibold text-white/90">
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
