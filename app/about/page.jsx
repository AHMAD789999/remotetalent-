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
  Zap,
  Eye,
  Heart,
  TrendingUp,
  Clock,
  Lock,
  Headphones,
  Code2,
  Truck,
  Megaphone,
  Briefcase,
  Star,
  Rocket
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
      desc: "All remote teams operate from our centralized physical headquarters in Lahore, Pakistan with dedicated team leads and floor supervisors.",
      icon: Building2,
    },
    {
      title: "Guaranteed SLA Compliance",
      desc: "Strict adherence to fast response times, sub-60 second chat SLAs, and high first-contact resolution rates across every account.",
      icon: Zap,
    },
    {
      title: "Enterprise Grade Security",
      desc: "Strict confidentiality, signed NDA agreements, encrypted communication, and secure access protocols for every client account.",
      icon: ShieldCheck,
    },
    {
      title: "Seamless Integration",
      desc: "Our specialists integrate seamlessly into your current workflows, tools (Zendesk, Shopify, HubSpot), and communication channels.",
      icon: Target,
    },
  ];

  const teamMembers = [
    {
      name: "Muhammad Ali Raja",
      role: "Chief Executive Officer (CEO)",
      experience: "8+ Years Exp",
      desc: "Leads overall strategy, growth, and vision for  Talent Harbor  managing global client partnerships and scaling offshore operations across 12+ countries.",
      icon: Award,
    },
    {
      name: "Muhammad Shahwaiz",
      role: "Head of Internal Operations & Talent Recruitment",
      experience: "5+ Years Exp",
      desc: "Manages internal operations alignment, team resource allocation, and end-to-end talent recruitment ensuring every client is matched with the right vetted professional.",
      icon: Users,
    },
  {
  name: "Ahmad Ali",
  role: "Chief Operating Officer (COO) & Lead Systems Architect",
  experience: "3+ Years Exp",
  desc: "Oversees internal operations, team infrastructure, and system uptime across all departments while also leading enterprise web architecture in Next.js, Laravel, and WordPress.",
  icon: Code2,
},
  ];

  const serviceCategories = [
    {
      icon: Headphones,
      title: "Customer Support",
      count: "6 Specializations",
      desc: "Live chat, email helpdesk, phone, and omnichannel support teams.",
    },
    {
      icon: TrendingUp,
      title: "Sales & Business Development",
      count: "3 Specializations",
      desc: "Account executives, SDRs, and B2B partnership managers.",
    },
    {
      icon: Code2,
      title: "Development & Engineering",
      count: "4 Specializations",
      desc: "Full-stack web development, Shopify, Next.js, and app engineers.",
    },
    {
      icon: Truck,
      title: "Operations & Logistics",
      count: "5 Specializations",
      desc: "Warehouse, order management, dispatch, and RMA teams.",
    },
    {
      icon: Megaphone,
      title: "Marketing & Creative",
      count: "2 Specializations",
      desc: "Social media managers, content creators, and paid ads specialists.",
    },
    {
      icon: Briefcase,
      title: "Executive & Admin",
      count: "2 Specializations",
      desc: "Executive assistants, chiefs of staff, and virtual assistants.",
    },
  ];

  const differentiators = [
    {
      icon: Building2,
      title: "100% In-Office Operations",
      desc: "Every professional works from our secured, generator-backed Lahore HQ — never from noisy home setups or unreliable freelancer environments.",
    },
    {
      icon: Clock,
      title: "True Time Zone Alignment",
      desc: "Your team clocks in during YOUR business hours — EST, PST, CET, GMT, or AEST. No time zone friction, ever.",
    },
    {
      icon: Lock,
      title: "Signed NDA & Data Security",
      desc: "We sign comprehensive NDAs, follow GDPR-conscious handling, and restrict client data to authorized physical workstations only.",
    },
    {
      icon: Award,
      title: "Immediate Replacement Guarantee",
      desc: "If an assigned specialist doesn't match your expectations, we replace them instantly with a vetted substitute at zero extra cost.",
    },
  ];

  return (
    <main className="bg-[#FAF6F2] text-[#0F0C09] mt-[-100px] pt-16 select-none min-h-screen">
      
      {/* 1. HERO SECTION */}
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
            We bridge the gap between high-performing talent and global companies. From custom full-stack web engineering to 24/7 customer support and logistics dispatching, we manage dedicated operations directly from Pakistan — delivering enterprise-grade quality at 60–70% lower cost than local hiring.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
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

      {/* MARQUEE */}
      <TalentShowcaseMarquee />

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission Card */}
          <div className="bg-white rounded-[10px] p-7 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] transition-all space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#0F0C09]">Our Mission</h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
              To help global businesses scale faster by delivering elite, English-fluent, professionally managed remote talent that operates with the same accountability, security, and communication standards as an in-house team — while cutting operational costs by 60–70%.
            </p>
            <ul className="space-y-2 pt-2 border-t border-[#0F0C09]/10">
              {[
                "Reliable 160 hours/month dedicated specialists",
                "Managed physical office infrastructure",
                "Zero time-zone friction operations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#0F0C09]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FA5B16] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0F0C09] text-white rounded-[10px] p-7 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-[10px] bg-[#FA5B16] text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Vision</h2>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
              To become the most trusted global outsourcing partner for small and mid-sized businesses — recognized not for being the cheapest, but for delivering the highest reliability, transparency, and long-term value in every dedicated team we deploy.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/20">
              {[
                "1,000+ active offshore professionals by 2027",
                "Serving clients across 30+ countries",
                "Best-in-class SLA performance benchmarks"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-white/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FA5B16] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Heart className="w-3.5 h-3.5" />
              <span>What Drives Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0C09]">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium max-w-2xl leading-relaxed">
              The principles that guide every decision, every hire, and every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreValues.map((value, idx) => {
              const IconComp = value.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-11 h-11 rounded-[8px] bg-[#FAF6F2] text-[#FA5B16] border border-[#0F0C09]/10 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F0C09]">{value.title}</h3>
                  <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SERVICE CATEGORIES WE MANAGE */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Globe2 className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0C09]">
              Six Categories. One Reliable Partner.
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium max-w-2xl leading-relaxed">
              From frontline customer support to enterprise engineering — we deploy managed offshore teams across the entire operational spectrum of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-[8px] bg-[#FAF6F2] text-[#FA5B16] border border-[#0F0C09]/10 flex items-center justify-center group-hover:bg-[#FA5B16] group-hover:text-white transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16] bg-[#FA5B16]/10 px-2 py-1 rounded-full">
                      {srv.count}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0F0C09]">{srv.title}</h3>
                  <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. LEADERSHIP / TEAM SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0C09]">
              Meet the People Behind Your Teams
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium max-w-2xl leading-relaxed">
              Our leadership brings 16+ combined years of offshore operations, engineering, recruitment, and client management experience — running every department from our Lahore headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teamMembers.map((member, idx) => {
              const IconComp = member.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FA5B16] to-[#ff8a4d] text-white flex items-center justify-center text-xl font-bold shadow-md">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-[#0F0C09] truncate">{member.name}</h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#FA5B16] mt-1">
                        <Star className="w-3 h-3" />
                        {member.experience}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-[#0F0C09]/10">
                    <div className="flex items-start gap-2">
                      <IconComp className="w-4 h-4 text-[#FA5B16] shrink-0 mt-0.5" />
                      <h4 className="text-xs font-bold text-[#0F0C09]">{member.role}</h4>
                    </div>
                    <p className="text-[11px] text-[#0F0C09]/70 font-medium leading-relaxed pl-6">
                      {member.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US / DIFFERENTIATORS */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Award className="w-3.5 h-3.5" />
              <span>The Talent Harbor Difference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0C09]">
              Why Global Businesses Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium max-w-2xl leading-relaxed">
              We are not a freelancer marketplace. We are a fully managed outsourcing partner with physical infrastructure, HR oversight, and SLA-backed guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-11 h-11 rounded-[8px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F0C09]">{item.title}</h3>
                  <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. HOW WE WORK */}
      <HowItWorks />

      {/* 9. FINAL CTA SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#FA5B16] to-[#e04f0f] rounded-[12px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Rocket className="w-3.5 h-3.5" />
                <span>Ready to Scale?</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
                Let's Build Your Dedicated Offshore Team
              </h2>

              <p className="text-xs sm:text-sm text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                Tell us what roles you need, your time zone, and your target start date. We'll match you with vetted professionals from our Lahore office within 48 hours — no lengthy recruiting, no overhead, no risk.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-[7px] bg-white text-[#FA5B16] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:bg-[#FAF6F2] transition-all cursor-pointer"
                >
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/team-building-calculator"
                  className="px-7 py-3.5 rounded-[7px] bg-[#0F0C09]/30 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#0F0C09]/50 transition-all cursor-pointer"
                >
                  <span>Calculate Your Savings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-5 flex flex-wrap items-center justify-center gap-5 text-[10px] font-bold uppercase tracking-wider text-white/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Signed NDA Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>48-Hour Onboarding</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
