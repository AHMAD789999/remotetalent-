"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Share2, 
  Megaphone, 
  TrendingUp, 
  BarChart2, 
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
  Video, 
  Target, 
  MessageSquare, 
  Calendar, 
  Globe, 
  CalendarCheck, 
  UserCheck
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function MarketingSocialMediaManagerServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Marketing Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "marketing-workflow-types", label: "All Marketing & Social Workflows" },
    { id: "reporting-guarantee", label: "ROI Audits & SLAs" },
    { id: "tiered-pricing", label: "Social Media Manager Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (ROI vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Marketing HQ",
      desc: "Your dedicated social media managers and digital marketers operate directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and creative directors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Business Shift",
      desc: "Zero delay in publishing campaigns or community engagement. Whichever marketing tier you select will clock in physically to cover your exact local operating shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Performance SLAs & Brand Security",
      desc: "We sign service level agreements defining content calendar delivery speeds, ad ROAS targets, engagement benchmarks, and strict brand security NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned marketer does not match your brand voice, creative aesthetic, or campaign performance goals, we replace them immediately with an equally vetted specialist at zero extra fee."
    }
  ];

  // COMPREHENSIVE MARKETING & SOCIAL MEDIA WORKFLOW TYPES
  const marketingWorkflowTypes = [
    {
      icon: Calendar,
      title: "1. Social Media Strategy & Content Calendars",
      desc: "Data-driven organic content planning across Instagram, TikTok, LinkedIn, Facebook, and X (Twitter).",
      details: [
        "Developing monthly content pillars, promotional schedules, and campaign themes.",
        "Scheduling posts using Buffer, Hootsuite, Later, Sprout Social, and Meta Business Suite.",
        "Writing engaging captions, hook lines, and high-converting CTA copy.",
        "Curating trending audio tracks, aesthetic aesthetics, and brand visual guidelines."
      ]
    },
    {
      icon: Video,
      title: "2. Short-Form Video Editing (Reels, TikToks & Shorts)",
      desc: "High-retention video editing optimized for viral reach and audience engagement.",
      details: [
        "Editing raw video footage into dynamic Instagram Reels, TikToks, and YouTube Shorts.",
        "Adding trendy animated captions, sound effects, B-roll, and engaging visual transitions.",
        "Optimizing video hooks within the first 3 seconds to maximize viewer retention.",
        "Repurposing long-form webinars or podcasts into bite-sized marketing clips."
      ]
    },
    {
      icon: Megaphone,
      title: "3. Paid Ads Management (Meta, TikTok & Google)",
      desc: "Profitable paid advertising campaigns engineered for high return on ad spend (ROAS).",
      details: [
        "Setting up, structuring, and optimizing Meta (Facebook/Instagram) & TikTok ad campaigns.",
        "Audience research, custom lookalike audience creation, and retargeting funnel setup.",
        "A/B testing ad creatives, headlines, thumb-stoppers, and bidding strategies.",
        "Monitoring cost-per-acquisition (CPA), click-through rates (CTR), and daily ad spend."
      ]
    },
    {
      icon: MessageSquare,
      title: "4. Community Management & Engagement",
      desc: "Proactive relationship building and brand reputation management across social channels.",
      details: [
        "Replying to comments, direct messages (DMs), and mentions with personalized brand tone.",
        "Engaging with relevant industry accounts and niche hashtags to build organic reach.",
        "De-escalating negative reviews or complaints with professional de-escalation protocols.",
        "Nurturing warm leads from social DMs directly into sales funnels or booking links."
      ]
    },
    {
      icon: Target,
      title: "5. Email Marketing & Newsletter Campaigns",
      desc: "Retention marketing automation designed to drive repeat purchases and customer lifetime value.",
      details: [
        "Building automated email sequences in Klaviyo, Mailchimp, ActiveCampaign, and Omnisend.",
        "Designing eye-catching promotional newsletters, abandoned cart flows, and welcome series.",
        "Segmenting subscriber lists based on purchase history, browsing behavior, and engagement.",
        "Tracking open rates, click rates, and revenue generated per email campaign."
      ]
    },
    {
      icon: BarChart2,
      title: "6. Analytics, Growth Tracking & Competitor Research",
      desc: "In-depth performance reporting and market intelligence to steer marketing strategy.",
      details: [
        "Analyzing weekly and monthly profile growth, reach, engagement rate, and ad ROAS.",
        "Conducting competitor audits to identify content gaps and emerging industry trends.",
        "Using Google Analytics 4 (GA4) and UTM tagging to track social-driven website traffic.",
        "Refining marketing strategies continuously based on real-time data insights."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Social Media Specialist",
      badge: "6M - 1 Year Experience",
      price: "$799",
      period: "/ month",
      desc: "Ideal for daily posting, content calendar scheduling, basic video caption writing, and community engagement across Instagram and Facebook.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Marketing HQ Floor",
        "Organic Social Posting & Scheduling",
        "Basic Caption Writing & Community Replies",
        "Daily Task Progress & Content Logs",
        "Immediate Specialist Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Digital Marketer & Content Creator",
      badge: "Most Popular Choice",
      price: "$1,349",
      period: "/ month",
      desc: "Best for short-form video editing (Reels/TikTok), paid ads management (Meta/TikTok), email marketing flows, and comprehensive growth tracking.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Marketing HQ Floor",
        "Reels & TikTok Editing with Animated Captions",
        "Paid Meta & TikTok Ad Campaigns Setup",
        "Klaviyo / Mailchimp Email Automation Flows",
        "Daily, Weekly & Monthly Growth Reports",
        "Immediate Specialist Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Growth Marketing Director",
      badge: "5+ Years Experience",
      price: "$1,899",
      period: "/ month",
      desc: "Experienced marketing lead capable of orchestrating multi-channel ad scaling, brand positioning, funnel optimization, and high-converting acquisition strategy.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Marketing HQ Floor",
        "Multi-Channel Ad Strategy & Scaling ($50k+/mo)",
        "Full Funnel Architecture & Conversion Optimization",
        "Rigorous ROI Analysis & Competitor Audits",
        "Dedicated Marketing Operations Lead Oversight"
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
            <span className="text-[#FA5B16]">Marketing & Social Media Manager Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Share2 className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Social Media Managers & Marketers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Social Media Managers Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated social media manager and digital marketer will physically sit inside our high-security creative office in Lahore, Pakistan—crafting viral short-form videos, running profitable paid ad campaigns, managing email flows, and growing your brand live during your exact business shift.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Social Media Manager</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Marketing Desk</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Creative Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise content output, video editing quality, ad ROAS benchmarks, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Marketing Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE MARKETING DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Creative Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Marketing Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate uninspired content, missed posting deadlines, wasted ad budgets, and unmonitored home freelancers. At Talentharbor, your marketing managers work inside our secure, managed creative office in Lahore, Pakistan.
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
                  Whether you choose a Junior, Mid-Level, or Senior marketer through Talentharbor, they operate exclusively during your local shift hours, ensuring real-time campaign adjustments and community engagement.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your social media manager clocks in to cover your peak audience activity hours.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Marketer
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative executes campaigns and content exclusively for your brand. No shared resources or split attention across multiple competing client agencies.
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
                      Marketers work on high-performance creative rigs backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee fast video rendering and ad dashboard management.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Campaign & Launch Agility
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need rapid ad creative pivots or flash-sale campaign rollouts? We scale creative marketing teams instantly to match your dynamic promotional calendar.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: MARKETING & SOCIAL MEDIA WORKFLOWS */}
            <div id="marketing-workflow-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Capabilities & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Social Media & Digital Marketing Tasks We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained marketing professionals master organic growth, short-form video editing, paid advertising, community management, and email retention automation.
                </p>
              </div>

              <div className="space-y-6">
                {marketingWorkflowTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, ROI AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  ROI Audits, Growth Metrics & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We measure ad ROAS, follower engagement growth, and content publishing consistency with structured reporting so you maintain 100% marketing transparency.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Marketing Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Content Logs</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Published posts, scheduled reels/TikToks, community DM response tracking, and ad spend checks.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly ROAS & Growth Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Ad campaign performance, cost-per-acquisition (CPA), follower engagement rates, and top-performing creatives.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Strategy Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Comprehensive brand reach analysis, email revenue attribution, competitor benchmarking, and pillar adjustments.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Quarterly Campaign Roadmaps</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Long-term promotional calendar planning, seasonal ad budget allocation, and creative asset pipelines.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Specialist Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned social media manager fails to capture your brand aesthetic, misses publishing schedules, or underperforms on ad campaigns, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office marketer at zero extra cost.
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
                  Junior, Mid-Level & Senior Social Media Manager Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time social media managers and digital marketers operating as your dedicated team member during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Social Media Managers From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Marketing Overhead Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK social media managers cost $4,000–$7,000/month plus benefits. Talentharbor provides elite, vetted creative marketers with stellar English and video editing skills for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Creative Floor Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our marketers operate in a supervised facility with strict security protocols, fiber connectivity, power backups, and continuous creative director oversight.
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
