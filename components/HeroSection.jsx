"use client";

import React from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowRight, Calculator } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function HeroSection() {
  return (
    <section
      className={`bg-[#FAF6F2] pt-[160px] pb-24 mt-[-100px] flex items-center px-6 sm:px-12 lg:px-24 text-[#0F0C09] relative overflow-hidden ${outfit.className}`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-[#FA5B16]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto w-full space-y-7 relative z-10">

        {/* TOP BADGE / PILL */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20 shadow-sm">
            <span>YOUR TEAM. YOUR TIME ZONE.</span>
          </span>
        </div>

        {/* MAIN DISPLAY HEADLINE */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F0C09] leading-[1.08] max-w-4xl">
          Your Next Stage Of Growth
          <span className="block mt-2 text-[#FA5B16]">
            Start With The Right Team
          </span>
          Built Around Your Business.
        </h1>

        {/* PARAGRAPH */}
        <p className="text-base sm:text-lg text-[#0F0C09]/80 max-w-2xl font-normal leading-relaxed">
          Build your team with vetted, dedicated professionals working from our managed office and on your schedule. Cut staffing costs by up to <span className="font-bold text-[#0F0C09]">70%</span>, with working hours tailored to your workload and business requirements.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 pt-2">

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FA5B16] text-white font-bold text-sm tracking-wide hover:bg-[#FA5B16]/90 transition-all shadow-md shadow-[#FA5B16]/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Team Building Calculator Button */}
          <Link
            href="/team-building-calculator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#0F0C09]/15 text-[#0F0C09] font-bold text-sm tracking-wide hover:border-[#FA5B16] hover:text-[#FA5B16] transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#FA5B16]" />
            <span>Team Building Calculator</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
