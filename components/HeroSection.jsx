"use client";

import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight, Calculator, MessageSquare } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function HeroSection() {
  return (
    <section
      className={`bg-[#FAF6F2] pt-[150px] pb-20 mt-[-100px] flex items-center px-6 sm:px-12 lg:px-24 text-[#0F0C09] ${jakarta.className}`}
    >
      <div className="max-w-5xl mx-auto w-full space-y-6">

        {/* TOP BADGE / PILL */}
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-[11px] font-extrabold uppercase tracking-widest border border-[#FA5B16]/20">
            <span>US Market Launch Ready</span>
          </span>
        </div>

        {/* MAIN DISPLAY HEADLINE */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#0F0C09] leading-[1.05] max-w-4xl">
          Scale Your US Operations With Dedicated
          <span className="block mt-2 text-[#FA5B16]">
            Office-Based Professionals
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="text-base sm:text-lg text-[#0F0C09]/80 max-w-2xl font-medium leading-[1.5] tracking-[-0.01em] pt-1">
          Deploy vetted, full-time specialists operating on your time zone with 160 hours/month included. Cut overhead by up to 70% without compromising on quality or control.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 pt-4">

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[7px] bg-[#FA5B16] text-white font-bold text-sm tracking-tight hover:bg-[#FA5B16]/90 transition-all shadow-md cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Team Building Calculator Button */}
          <Link
            href="/team-building-calculator"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[7px] bg-white border border-[#0F0C09]/15 text-[#0F0C09] font-bold text-sm tracking-tight hover:border-[#FA5B16] hover:text-[#FA5B16] transition-all shadow-sm cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#FA5B16]" />
            <span>Team Building Calculator</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
