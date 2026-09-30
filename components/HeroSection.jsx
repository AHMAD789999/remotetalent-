"use client";

import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section
      className={`bg-[#FAF6F2] pt-[150px] mt-[-100px] flex items-center px-6 sm:px-12 lg:px-24 text-[#0F0C09] ${jakarta.className}`}
    >
      <div className="max-w-5xl mx-auto w-full space-y-6">

        {/* TOP BADGE / PILL */}
        <div>
          <span className="inline-block px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16] text-white text-[11px] font-extrabold uppercase tracking-widest">
            BUSINESS & SOLUTION
          </span>
        </div>

        {/* MAIN DISPLAY HEADLINE */}
        <h1 className="text-5xl font-extrabold tracking-[-0.04em] text-[#0F0C09] leading-[0.98] max-w-4xl">
          Dedicated Remote Talent
          <span className="block mt-3 text-[#ff4719]">
            Managed In Pakistan
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="text-base sm:text-lg text-[#0F0C09]/80 max-w-xl font-medium leading-[1.4] tracking-[-0.01em] pt-2">
          Delivering bespoke, outcome-focused remote staffing solutions that
          enhance workflows, augment productivity, and expedite corporate
          expansion.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4 pt-4">

          {/* Let's Talk - Email */}
          <a
            href="mailto:business@talentharbor.net"
            className="px-7 py-3.5 rounded-[7px] bg-[#FA5B16] text-white font-bold text-sm tracking-tight hover:bg-[#fa5b16]/90 transition-all shadow-sm"
          >
            Let's Talk
          </a>

          {/* Contact Us - Contact Page */}
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-[7px] bg-[#EBE6E0] text-[#0F0C09] font-bold text-sm tracking-tight hover:bg-[#e2dcd5] transition-all"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}
