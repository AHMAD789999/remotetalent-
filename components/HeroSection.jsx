"use client";

import React from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { ArrowRight, Calculator, CheckCircle2, Users, Building2, Globe2, Sparkles } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function HeroSection() {
  return (
    <section
      className={`relative bg-[#FAF6F2] pt-[160px] pb-24 mt-[-100px] flex items-center px-6 sm:px-12 lg:px-20 text-[#0F0C09] overflow-hidden ${outfit.className}`}
    >
      {/* BACKGROUND ACCENT GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FA5B16]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#FEAA04]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="lg:col-span-7 space-y-7">

          {/* TOP BADGE / PILL */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FA5B16]" />
              <span>Your Team. Your Time Zone.</span>
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F0C09] leading-[1.08]">
            Your Next Stage Of Growth{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FA5B16] to-[#FEAA04]">
              Start With The Right Team
            </span>
            Built Around Your Business.
          </h1>

          {/* PARAGRAPH */}
          <p className="text-base sm:text-lg text-[#0F0C09]/75 max-w-xl font-normal leading-relaxed">
            Build your team with vetted, dedicated professionals working from our managed office on your schedule. Cut staffing costs by up to <span className="font-bold text-[#0F0C09]">70%</span>, tailored entirely to your workload.
          </p>

          {/* KEY BENEFIT CHECKMARKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              "Pre-screened Top 1% Talent",
              "Managed Physical Office Space",
              "100% Time-Zone Overlap",
              "Zero Overhead & Infrastructure Cost",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F0C09]/85">
                <CheckCircle2 className="w-4 h-4 text-[#FA5B16] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FA5B16] text-white font-bold text-sm tracking-wide hover:bg-[#FA5B16]/90 transition-all shadow-lg shadow-[#FA5B16]/25 hover:shadow-xl hover:shadow-[#FA5B16]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Team Building Calculator Button */}
            <Link
              href="/team-building-calculator"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white border border-[#0F0C09]/15 text-[#0F0C09] font-bold text-sm tracking-wide hover:border-[#FA5B16] hover:text-[#FA5B16] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#FA5B16]" />
              <span>Team Building Calculator</span>
            </Link>
          </div>

        </div>

        {/* RIGHT COLUMN: VISUAL DISPLAY CARD */}
        <div className="lg:col-span-5 relative">
          
          {/* MAIN CARD CONTAINER */}
          <div className="bg-white rounded-3xl p-7 border border-[#0F0C09]/10 shadow-2xl space-y-6 relative z-10 backdrop-blur-sm">
            
            {/* CARD HEADER */}
            <div className="flex items-center justify-between pb-4 border-b border-[#0F0C09]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FA5B16]/10 flex items-center justify-center text-[#FA5B16]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#0F0C09]">TalentHarbor Hub</h3>
                  <p className="text-xs text-[#0F0C09]/60 font-medium">Managed Operations • Pakistan</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Office
              </span>
            </div>

            {/* STATS HIGHLIGHT GRID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FAF6F2] p-4 rounded-2xl border border-[#0F0C09]/5">
                <p className="text-2xl font-extrabold text-[#FA5B16]">Up to 70%</p>
                <p className="text-xs font-semibold text-[#0F0C09]/70 mt-1">Cost Reduction</p>
              </div>

              <div className="bg-[#FAF6F2] p-4 rounded-2xl border border-[#0F0C09]/5">
                <p className="text-2xl font-extrabold text-[#0F0C09]">24/7</p>
                <p className="text-xs font-semibold text-[#0F0C09]/70 mt-1">Shift Coverage</p>
              </div>
            </div>

            {/* LIVE ROLES PREVIEW */}
            <div className="space-y-3 pt-1">
              <p className="text-xs uppercase font-extrabold tracking-wider text-[#0F0C09]/50">Dedicated Roles Available</p>

              {[
                { title: "Full-Stack Software Developers", count: "Ready to Deploy", icon: Users },
                { title: "24/7 Support & Logistics Agents", count: "Fully Managed", icon: Globe2 },
              ].map((role, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl border border-[#0F0C09]/10 hover:border-[#FA5B16]/40 transition-colors bg-white">
                  <div className="flex items-center gap-3">
                    <role.icon className="w-4 h-4 text-[#FA5B16]" />
                    <span className="text-xs font-bold text-[#0F0C09]">{role.title}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#FA5B16] bg-[#FA5B16]/10 px-2.5 py-1 rounded-lg">
                    {role.count}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* DECORATIVE BACKGROUND CARD SHADOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FA5B16] to-[#FEAA04] rounded-3xl transform rotate-3 scale-95 opacity-20 -z-10 blur-sm" />

        </div>

      </div>
    </section>
  );
}
