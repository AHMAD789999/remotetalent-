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
    <footer className="relative bg-[#FA5B16] text-white pt-14 pb-8 px-6 sm:px-10 lg:px-12 select-none border-t border-[#FA5B16] overflow-hidden">
      {/* Background Ambient Depth Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* 5-COLUMN SINGLE ROW GRID AT DESKTOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
          
          {/* COLUMN 1: BRAND / ABOUT */}
          <div className="space-y-4">
            <div className="min-h-[32px] flex items-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/footerlogo.png"
                  alt="RemoteTalent"
                  width={200}
                  height={60}
                  className="h-10 sm:h-11 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                Offshore Talent Partners
              </span>
            </div>

            <p className="text-xs text-white/90 leading-relaxed font-normal">
              Connecting global businesses with dedicated, pre-vetted remote
              talent and full-scale operational support managed directly from
              our office in Pakistan.
            </p>
          </div>

          {/* COLUMN 2: CONTACT INFO */}
          <div className="space-y-4">
            <div className="min-h-[32px] border-b border-white/20 flex items-center pb-2">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">
                Contact Info
              </h3>
            </div>

            <ul className="space-y-3 text-xs">
              <li>
                <div className="flex items-start gap-2.5 group">
                  <div className="p-1.5 rounded bg-white/10 border border-white/15 shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-white/70 uppercase tracking-wider font-semibold">
                      Location
                    </span>
                    <span className="text-white/90 font-medium">
                      Lahore, Pakistan
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="mailto:business@talentharbor.net"
                  className="flex items-start gap-2.5 group"
                >
                  <div className="p-1.5 rounded bg-white/10 border border-white/15 shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-white/70 uppercase tracking-wider font-semibold">
                      Business Email
                    </span>
                    <span className="text-white/90 font-medium truncate group-hover:underline">
                      business@talentharbor.net
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@talentharbor.net"
                  className="flex items-start gap-2.5 group"
                >
                  <div className="p-1.5 rounded bg-white/10 border border-white/15 shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-white/70 uppercase tracking-wider font-semibold">
                      Support Email
                    </span>
                    <span className="text-white/90 font-medium truncate group-hover:underline">
                      support@talentharbor.net
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="tel:+13322224593"
                  className="flex items-start gap-2.5 group"
                >
                  <div className="p-1.5 rounded bg-white/10 border border-white/15 shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-white/70 uppercase tracking-wider font-semibold">
                      Phone
                    </span>
                    <span className="text-white/90 font-semibold group-hover:underline">
                      +1 (332) 222-4593
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: DEVELOPMENT SERVICES */}
          <div className="space-y-4">
            <div className="min-h-[32px] border-b border-white/20 flex items-center pb-2">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">
                Development
              </h3>
            </div>

            <ul className="space-y-2.5">
              {serviceCategories[0].items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 transition-all group"
                  >
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span className="group-hover:underline leading-snug">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CUSTOMER SUPPORT SERVICES */}
          <div className="space-y-4">
            <div className="min-h-[32px] border-b border-white/20 flex items-center pb-2">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">
                Customer Support
              </h3>
            </div>

            <ul className="space-y-2.5">
              {serviceCategories[1].items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 transition-all group"
                  >
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span className="group-hover:underline leading-snug">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: OPERATIONS & LOGISTICS */}
          <div className="space-y-4">
            <div className="min-h-[32px] border-b border-white/20 flex items-center pb-2">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">
                Operations & Logistics
              </h3>
            </div>

            <ul className="space-y-2.5">
              {serviceCategories[2].items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="text-xs text-white/90 hover:text-white flex items-center gap-1.5 transition-all group"
                  >
                    <ChevronRight className="w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span className="group-hover:underline leading-snug">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-white/20" />

        {/* BOTTOM COPYRIGHT & LEGAL / FAQ LINKS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[11px] text-white/80 font-normal text-center sm:text-left">
            © {new Date().getFullYear()} RemoteTalent. All rights reserved.
          </p>

          <div className="flex items-center gap-5 font-semibold text-white/90">
            <Link
              href="/faqs"
              className="hover:underline hover:text-white transition-all"
            >
              FAQs
            </Link>

            <span className="opacity-40">•</span>

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
