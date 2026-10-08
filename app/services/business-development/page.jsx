"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Network, 
  Handshake, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  ShieldCheck, 
  RefreshCw, 
  FileCheck2, 
  Zap, 
  Users, 
  UserCheck, 
  CalendarCheck, 
  Target, 
  Globe, 
  PieChart 
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function BusinessDevelopmentServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office BD Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "bd-workflow-types", label: "All BD & Partnership Workflows" },
    { id: "reporting-guarantee", label: "Partnership Audits & SLAs" },
    { id: "tiered-pricing", label: "Business Development Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Growth vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Corporate BD HQ",
      desc: "Your dedicated Business Development specialists operate directly inside our supervised corporate office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and executive growth directors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Global Growth Hours",
      desc: "Zero time-zone delay in partnership outreach. Whichever BD tier you select will clock in physically to cover your exact local operating shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Outreach SLAs & Data Security",
      desc: "We sign service level agreements defining weekly partnership targets, outbound networking velocity, CRM pipeline updates, and strict client data confidentiality NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned Business Development manager does not match your networking style, strategic positioning, or partnership acquisition targets, we replace them immediately with an equally vetted professional at zero extra cost."
    }
  ];

  // COMPREHENSIVE BUSINESS DEVELOPMENT WORKFLOW TYPES
  const bdWorkflowTypes = [
    {
      icon: Network,
      title: "1. Strategic Partnerships & Joint Ventures",
      desc: "Identifying, pitching, and securing high-value strategic alliances and co-marketing partners.",
      details: [
        "Mapping potential strategic partner ecosystems within your industry niche.",
        "Crafting compelling partnership value propositions and co-marketing proposals.",
        "Conducting introductory partnership alignment calls and pitching joint venture models.",
        "Negotiating affiliate terms, revenue-share splits, and cross-promotion agreements."
      ]
    },
    {
      icon: Target,
      title: "2. Market Expansion & Niche Research",
      desc: "Thorough market analysis and competitor intelligence to uncover new revenue streams.",
      details: [
        "Evaluating new geographic markets or vertical industry segments for expansion.",
        "Conducting competitor benchmarking and identifying untapped market gaps.",
        "Compiling comprehensive target account lists (TAM/SAM/SOM) for outbound outreach.",
        "Analyzing industry trends and regulatory landscapes to inform go-to-market strategies."
      ]
    },
    {
      icon: Handshake,
      title: "3. B2B Channel Partner Recruitment",
      desc: "Building and scaling third-party distributor, reseller, and agency partner programs.",
      details: [
        "Recruiting value-added resellers (VARs), agencies, and system integrators.",
        "Developing partner enablement materials, onboarding decks, and sales toolkits.",
        "Managing active channel partner relationships to drive recurring referral volume.",
        "Structuring incentive tiers and commission payout guidelines."
      ]
    },
    {
      icon: Briefcase,
      title: "4. Enterprise Outbound & Sponsorship Sourcing",
      desc: "Securing lucrative enterprise accounts, sponsorships, and high-ticket contracts.",
      details: [
        "Initiating high-level executive outreach to C-suite decision makers via LinkedIn and email.",
        "Sourcing event sponsorships, speaking opportunities, and media partnerships.",
        "Coordinating RFP (Request for Proposal) responses and enterprise bid submissions.",
        "Managing long sales cycles and multi-stakeholder corporate negotiations."
      ]
    },
    {
      icon: PieChart,
      title: "5. Lead Generation Strategy & Funnel Alignment",
      desc: "Aligning outbound business development workflows with marketing and sales funnels.",
      details: [
        "Collaborating with marketing teams to refine ideal customer profiles (ICPs).",
        "Testing messaging angles, email subject lines, and outreach scripts for maximum conversion.",
        "Building automated B2B lead generation funnels across LinkedIn and email channels.",
        "Optimizing lead handoff processes from BD to Account Executives."
      ]
    },
    {
      icon: Globe,
      title: "6. CRM Pipeline Management & Growth Reporting",
      desc: "Rigorous pipeline tracking and strategic forecasting for executive leadership.",
      details: [
        "Logging partnership discussions, deal stages, and milestones in HubSpot or Salesforce.",
        "Tracking business development KPIs including meetings booked, active partner pilots, and closed-won revenue.",
        "Preparing executive weekly and monthly growth review presentations.",
        "Continuously refining outreach strategies based on pipeline conversion data."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior BD Outreach Specialist",
      badge: "6M - 1 Year Experience",
      price: "$799",
      period: "/ month",
      desc: "Ideal for outbound partner prospecting, LinkedIn networking, introductory email sequencing, and basic CRM list building.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Corporate HQ Floor",
        "LinkedIn & Email Partner Prospecting",
        "Outreach Sequence Execution & Tracking",
        "Daily Activity & Meeting Booking Logs",
        "Immediate Specialist Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Business Development Manager",
      badge: "Most Popular Choice",
      price: "$1,399",
      period: "/ month",
      desc: "Best for running strategic partnership pitches, channel partner recruitment, co-marketing negotiations, and pipeline management.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Corporate HQ Floor",
        "Strategic Partnership Pitching & Joint Ventures",
        "Channel & Reseller Program Management",
        "HubSpot / Salesforce Pipeline Tracking",
        "Daily, Weekly & Monthly Growth Reports",
        "Immediate Specialist Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Director of Business Development",
      badge: "5+ Years Experience",
      price: "$1,999",
      period: "/ month",
      desc: "Seasoned BD leader capable of orchestrating enterprise market expansion, high-level corporate alliances, and long-term scaling strategy.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Corporate HQ Floor",
        "Enterprise Market Expansion & Strategic Alliances",
        "High-Ticket Corporate Negotiations & RFPs",
        "Advanced Growth Forecasting & Analytics",
        "Dedicated Corporate Operations Manager Oversight"
      ],
      popular: false,
    },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-[#FAF6F2] text-[#0F0C09] mt-[-100px] pt-14 select-none min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-5xl mx-auto space-y-4 text-left">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F0C09]/60 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FA5B16] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FA5B16]">Business Development Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Business Development Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Business Development Managers Working Live In Your Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated Business Development manager will physically sit inside our high-security corporate office in Lahore, Pakistan—securing strategic partnerships, expanding market channels, and driving corporate growth live during your exact business shift.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your BD Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/calculator"
              className="px-6 py-3 rounded-[7px] bg-white hover:bg-[#FAF6F2] text-[#0F0C09] border border-[#0F0C09]/15 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Calculate Custom Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#FA5B16]" />
            </Link>
          </div>

        </div>
      </section>

      {/* MARQUEE SECTION */}
      <TalentShowcaseMarquee />

      {/* 2. MAIN SPLIT SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* BRAND COLOR STICKY LEFT SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <div className="bg-[#FA5B16] text-white rounded-[10px] p-6 shadow-md space-y-6 border border-[#FA5B16]">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block border-b border-white/20 pb-2">
                  Service Navigation
                </span>
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor BD Desk</h3>
              </div>

              <nav className="space-y-1.5">
                {sidebarNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-[6px] text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      activeSection === item.id
                        ? "bg-white text-[#FA5B16] shadow-sm"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === item.id ? "rotate-90 text-[#FA5B16]" : "opacity-50"}`} />
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/20 space-y-3">
                <div className="p-3 bg-white/10 rounded-[7px] border border-white/20 space-y-1">
                  <span className="text-[11px] font-bold text-white block">Physically Managed Corporate Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise partnership output, CRM pipeline velocity, networking quality, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our BD Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE BD DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Corporate Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Business Development Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate stalled partnerships, unmanaged pipelines, poor networking consistency, and unmonitored home freelancers. At Talentharbor, your Business Development specialists work inside our secure, managed corporate office in Lahore, Pakistan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inOfficePillars.map((pillar, idx) => {
                  const IconComp = pillar.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-[10px] p-5 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] transition-all space-y-3"
                    >
                      <div className="w-10 h-10 rounded-[7px] bg-[#FAF6F2] text-[#FA5B16] border border-[#0F0C09]/10 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0F0C09]">{pillar.title}</h3>
                      <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: WORKING HOURS & SHIFT COVERAGE */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Shift Coverage Alignment
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Availability In Your Working Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Whether you choose a Junior BD specialist, Mid-Level Manager, or Senior Growth Director through Talentharbor, they operate exclusively during your local shift hours, ensuring seamless global networking and partnership outreach.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Clock className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Matched Shift Timings
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your BD manager clocks in to cover your exact operational window.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Specialist
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative pitches and negotiates exclusively for your corporate profile. No shared targets or split attention across multiple competing client brands.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        High-Speed Fiber Workstations
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Specialists work on dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee seamless video calls and CRM updating.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Outreach Velocity & Agility
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need rapid partner recruitment sprints or conference follow-up campaigns? We scale business development data teams instantly to hit ambitious corporate growth milestones.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: BUSINESS DEVELOPMENT WORKFLOWS */}
            <div id="bd-workflow-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Capabilities & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Strategic Partnership & Growth Tasks We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained Business Development managers master strategic partnerships, market expansion research, channel partner programs, and corporate networking.
                </p>
              </div>

              <div className="space-y-6">
                {bdWorkflowTypes.map((cat, idx) => {
                  const IconComp = cat.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm hover:border-[#FA5B16] transition-all space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[7px] bg-[#FAF6F2] text-[#FA5B16] border border-[#0F0C09]/10 flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#0F0C09]">{cat.title}</h3>
                          <p className="text-xs text-[#0F0C09]/70 font-medium">{cat.desc}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#0F0C09]/10">
                        {cat.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FA5B16] shrink-0 mt-0.5" />
                            <span className="text-[11px] font-semibold text-[#0F0C09]/80 leading-tight">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 4: REPORTING, PARTNERSHIP AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Partnership Audits, Pipeline Logs & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track outbound outreach volume, partnership meetings booked, signed agreements, and CRM pipeline velocity with structured reporting so you maintain 100% growth transparency.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly BD Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Outreach Log</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">New partner prospects contacted, LinkedIn connection requests, email replies, and calls booked.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Pipeline Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Active partnership negotiations, co-marketing pilot updates, and channel partner onboarding status.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Growth Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Comprehensive review of signed agreements, revenue generated from alliances, and market expansion progress.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Strategic Roadmapping</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quarterly target account list expansions, partnership incentive updates, and new vertical planning.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Specialist Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned Business Development manager misses outreach quotas, lacks strategic closing acumen, or fails to secure partnership meetings, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office BD specialist at zero extra cost.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 5: TIERED MONTHLY SALARY PLANS */}
            <div id="tiered-pricing" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  05. Flat Monthly Investment
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Junior, Mid-Level & Senior Business Development Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time Business Development managers operating as your dedicated corporate team member during your working hours. Flat monthly pricing with zero hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tierPricingPlans.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-[10px] p-5 space-y-4 relative border transition-all flex flex-col justify-between ${
                      plan.popular 
                        ? "bg-white border-[#FA5B16] shadow-md" 
                        : "bg-white border-[#0F0C09]/10 shadow-sm"
                    }`}
                  >
                    <div>
                      {plan.popular && (
                        <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#FA5B16] text-white text-[10px] font-bold uppercase tracking-wider">
                          {plan.badge}
                        </span>
                      )}

                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase text-[#FA5B16] tracking-wider block">
                          {plan.level}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#0F0C09]">{plan.price}</span>
                          <span className="text-xs font-bold text-[#0F0C09]/50">{plan.period}</span>
                        </div>
                        <p className="text-[11px] text-[#0F0C09]/60 font-medium leading-normal pt-1">
                          {plan.desc}
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-[#0F0C09]/10 pt-3 mt-3">
                        {plan.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-bold text-[#0F0C09]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FA5B16] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-2 rounded-[6px] text-xs font-bold uppercase tracking-wider text-center block transition-all mt-4 cursor-pointer ${
                        plan.popular
                          ? "bg-[#FA5B16] text-white hover:bg-[#FA5B16]/90"
                          : "bg-[#FAF6F2] text-[#0F0C09] border border-[#0F0C09]/10 hover:border-[#FA5B16]"
                      }`}
                    >
                      Hire {plan.level}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 6: WHY HIRE FROM US */}
            <div id="why-hire-us" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  06. Strategic Advantage
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire Business Development Managers From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Corporate BD Overhead Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK Business Development managers cost $5,500–$9,000/month plus corporate benefits. Talentharbor provides elite, vetted BD professionals with immaculate English communication for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Corporate Floor Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our BD managers operate in a supervised corporate facility with strict security protocols, fiber connectivity, power backups, and continuous executive management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS IMPORTED COMPONENT */}
      <div id="how-we-work-section" className="border-t border-[#0F0C09]/10 scroll-mt-8">
        <HowItWorks />
      </div>
      
    </main>
  );
}
