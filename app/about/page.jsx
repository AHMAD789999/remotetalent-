"use client";

import React from "react";
import Link from "next/link";
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

import { 
  Building2, 
  Target, 
  Users, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Sparkles,
  Zap
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Client Retain Rate", value: "98%" },
    { label: "Active Offshore Teams", value: "50+" },
    { label: "Support Tickets Resolved", value: "100k+" },
    { label: "Global Markets Served", value: "12+" },
  ];

  const coreValues = [
    {
      title: "Direct Physical Management",
      desc: "All remote teams operate from our centralized physical headquarters in Pakistan with dedicated team leads.",
      icon: Building2,
    },
    {
      title: "Guaranteed SLA Compliance",
      desc: "Strict adherence to fast response times, sub-60 second chat SLAs, and high first-contact resolution rates.",
      icon: Zap,
    },
    {
      title: "Enterprise Grade Security",
      desc: "Strict confidentiality, signed NDA agreements, and secure access protocols for every client account.",
      icon: ShieldCheck,
    },
    {
      title: "Seamless Integration",
      desc: "Our specialists integrate seamlessly into your current workflows, tools, and communication channels.",
      icon: Target,
    },
  ];

  const teamMembers = [
    {
      name: "Ahmad",
      role: "Lead Systems Architect & Full-Stack Engineer",
      experience: "8+ Years Exp",
      desc: "Specializing in Next.js, Laravel, WordPress, and enterprise web architecture.",
    },
    {
      name: "Operations Director",
      role: "Head of Offshore Talent & Logistics",
      experience: "10+ Years Exp",
      desc: "Managing customer support queues, driver dispatch fleets, and warehouse operations.",
    },
    {
      name: "Quality Assurance Lead",
      role: "Client SLA & Performance Manager",
      experience: "6+ Years Exp",
      desc: "Auditing daily communications, ticket queues, and system uptime across all teams.",
    },
  ];

  return (
    <main className="bg-[#FAF6F2] text-[#0F0C09] mt-[-100px] pt-16 select-none min-h-screen">
      
      {/* 1. HERO SECTION (LEFT ALIGNED) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto space-y-5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Empowering Global Businesses with Managed Remote Operations
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            We bridge the gap between high-performing talent and global companies. From custom full-stack web engineering to 24/7 customer support and logistics dispatching, we manage dedicated operations directly from Pakistan.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="px-6 py-3.5 rounded-[7px] bg-white border border-[#0F0C09]/15 hover:border-[#FA5B16] text-[#0F0C09] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS & NUMBERS BAR (LEFT ALIGNED) */}
      <section className="bg-white py-10 px-4 mb-9 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-3xl sm:text-4xl font-bold text-[#FA5B16] block">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/60 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

     

     <TalentShowcaseMarquee />

     <HowItWorks />

    </main>
  );
}