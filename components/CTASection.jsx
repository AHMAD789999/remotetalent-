"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Mail,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#FAF6F2] py-20 sm:py-28 px-6 lg:px-12 text-[#0F0C09] select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main CTA Card Box */}
        <div className="relative rounded-[7px] bg-[#0F0C09] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-[#0F0C09]/20">
          
          {/* Subtle Ambient Brand Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FA5B16]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#FA5B16]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Background Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/20 border border-[#FA5B16]/40 text-[#FA5B16]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  Ready To Scale Your Team?
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Start Building Your Dedicated Remote Team In Under 48 Hours.
              </h2>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-2xl">
                Get pre-screened developers, customer support specialists, and
                operations managers hosted in our office in Pakistan. Zero
                hiring overheads.
              </p>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FA5B16]" />
                  <span>Vetted Professionals</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FA5B16]" />
                  <span>Fast Onboarding</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FA5B16]" />
                  <span>Full Management Support</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons Area */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start lg:justify-center">
              
              {/* Primary Action Button - Email */}
              <a
                href="mailto:business@talentharbor.net"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-[7px] bg-[#FA5B16] text-white text-sm font-bold shadow-lg hover:bg-[#e04f0f] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>

              {/* Secondary Action Button - Contact Page */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[7px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>

          {/* Bottom Micro Stat Accent Line */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
            <p>100% Risk-Free Trial Period Included</p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FA5B16] animate-pulse" />
              <span className="text-white/80 font-medium">
                Offices Active in Pakistan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
