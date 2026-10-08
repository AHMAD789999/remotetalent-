"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Headphones, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  ShieldCheck, 
  RefreshCw, 
  TrendingUp, 
  FileCheck2, 
  Zap, 
  Users, 
  Bot, 
  CheckSquare, 
  MessageCircle, 
  Globe, 
  CalendarCheck, 
  UserCheck
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function CustomerSupportServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Support Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "support-channels-types", label: "All Support Channels & Tasks" },
    { id: "reporting-guarantee", label: "CSAT Audits & SLAs" },
    { id: "tiered-pricing", label: "Support Agent Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Quality vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Support HQ",
      desc: "Your dedicated customer support representatives operate directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and floor supervisors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Business Shift",
      desc: "Zero customer wait time. Whichever representative tier you select will clock in physically to cover your exact local support shift—EST, PST, CET, GMT, or AEST for seamless live chat and ticketing coverage."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Strict Support SLAs",
      desc: "We sign service level agreements defining First Response Time (FRT), Average Resolution Time (ART), Customer Satisfaction (CSAT) benchmarks, and strict client data confidentiality NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Agent Replacement Guarantee",
      desc: "If an assigned support representative does not match your brand tone, typing speed, or software proficiency standards, we replace them immediately with an equally vetted agent at zero extra fee."
    }
  ];

  // COMPREHENSIVE CUSTOMER SUPPORT CHANNELS & WORKFLOWS
  const supportChannelsTypes = [
    {
      icon: MessageSquare,
      title: "1. Live Chat & Omnichannel Messaging",
      desc: "Real-time customer engagement and instant troubleshooting across website widgets and web apps.",
      details: [
        "Live chat operations in Intercom, Zendesk Chat, Gorgias, LiveChat, and Crisp.",
        "Managing concurrent chat threads while maintaining high CSAT and low response times.",
        "Issuing instant refund links, tracking orders, and resolving pre-sale inquiries.",
        "Routing complex technical or billing tickets to appropriate internal departments."
      ]
    },
    {
      icon: Mail,
      title: "2. Helpdesk & Email Ticket Management",
      desc: "Comprehensive ticket backlog clearing, classification, and resolution workflows.",
      details: [
        "Resolving inbound email inquiries via Zendesk, Help Scout, Freshdesk, and Gmail workspaces.",
        "Creating and maintaining macro template libraries for swift, branded responses.",
        "Managing shipping delay claims, damaged item reports, and exchange requests.",
        "Tagging tickets by category to track recurring product or website bugs."
      ]
    },
    {
      icon: PhoneCall,
      title: "3. Voice Support & Inbound Calling",
      desc: "Professional phone assistance with clear accent neutrality and warm communication etiquette.",
      details: [
        "Inbound voice support managed via Aircall, RingCentral, Talkdesk, and Zendesk Talk.",
        "Handling order placement over the phone and processing secure payment details.",
        "Assisting callers with account login issues, password resets, and subscription updates.",
        "Maintaining professional de-escalation protocols for frustrated customers."
      ]
    },
    {
      icon: Bot,
      title: "4. AI Chatbot Supervision & Handoff",
      desc: "Monitoring automated AI bots and stepping in seamlessly when human intervention is required.",
      details: [
        "Monitoring AI chat logs to catch mismanaged queries or failed bot loops.",
        "Training and updating bot knowledge bases with new FAQs, policies, and products.",
        "Handling seamless bot-to-human handoffs with full context retention.",
        "Analyzing chatbot deflection rates and identifying common user pain points."
      ]
    },
    {
      icon: MessageCircle,
      title: "5. Social Media & Community Support",
      desc: "Protecting brand reputation and resolving inquiries across social media channels.",
      details: [
        "Answering direct messages (DMs) and comments on Instagram, Facebook, and TikTok.",
        "Monitoring brand mentions and resolving public complaints professionally.",
        "Guiding social shoppers directly to checkout links and active discount codes.",
        "Flagging PR risks or viral customer service issues to your management team."
      ]
    },
    {
      icon: CheckSquare,
      title: "6. Order Discrepancy & Refund Processing",
      desc: "Detailed back-office support handling refunds, chargebacks, and logistics claims.",
      details: [
        "Processing returns, exchanges, and store credits inside Shopify and WooCommerce.",
        "Gathering evidence and filing carrier claims for lost, stolen, or damaged packages.",
        "Investigating suspicious orders and managing chargeback defense documentation.",
        "Coordinating with fulfillment centers to correct shipping address errors."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Support Representative",
      badge: "6M - 1 Year Experience",
      price: "$799",
      period: "/ month",
      desc: "Ideal for managing email tickets, basic live chat inquiries, order tracking lookups, and routine customer FAQ responses.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Support Shift",
        "Seated in Our Physical Support HQ Floor",
        "Email & Basic Live Chat Ticket Management",
        "Shopify / WooCommerce Order Tracking",
        "Daily Ticket Resolution & Response Logs",
        "Immediate Agent Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Omnichannel Support Specialist",
      badge: "Most Popular Choice",
      price: "$1,199",
      period: "/ month",
      desc: "Best for handling live chat, email helpdesks, phone support, order refunds, chargeback evidence, and maintaining high CSAT scores.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Support Shift",
        "Seated in Our Physical Support HQ Floor",
        "Omnichannel (Chat, Email, Voice & Social)",
        "Zendesk, Intercom, Gorgias & Help Scout Mastery",
        "Refunds, Exchanges & RMA Processing",
        "Daily, Weekly & Monthly CSAT Reports",
        "Immediate Agent Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Support Team Lead & QA Manager",
      badge: "5+ Years Experience",
      price: "$1,699",
      period: "/ month",
      desc: "Experienced customer service manager responsible for team supervision, macro creation, ticket auditing, escalation handling, and SLA optimization.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Support Shift",
        "Seated in Our Physical Support HQ Floor",
        "Advanced Team Leadership & QA Audits",
        "SLA Optimization (FRT & ART Reduction)",
        "Escalation Management & De-escalation Mastery",
        "Dedicated Support Operations Lead Oversight"
      ],
      popular: false,
    },
  ];

  const scrollTo = (id: string) => {
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
            <span className="text-[#FA5B16]">Customer Support Representative Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Customer Support Agents</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Customer Support Representatives Working Live In Your Shift
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated support representative will physically sit inside our high-security support office in Lahore, Pakistan—delivering lightning-fast live chat, email ticket resolution, voice support, and exceptional CSAT scores live during your exact business hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Support Agent</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Support Desk</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Support Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise ticket quality, typing speed, tone of voice, response times, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Support Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE SUPPORT DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Support Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Support Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate unverified home freelancers who miss shifts, ghost customers, or have noisy home backgrounds. At Talentharbor, your support agents work inside our secure, managed office facility in Lahore, Pakistan.
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
                  Whether you choose a Junior, Mid-Level, or Senior support agent through Talentharbor, they operate exclusively during your local shift hours, ensuring live chat and email queues remain pristine around the clock.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your support agent clocks in to cover your peak customer traffic hours.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Agent
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative answers tickets and chats exclusively for your brand. No shared resources or split attention across multiple competing client accounts.
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
                      Agents work on professional audio headsets and dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee zero dropped calls or slow chats.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Holiday & Weekend Coverage
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need robust support during Black Friday, Cyber Monday, holiday sales, or weekend surges? We scale support bandwidth instantly to handle high inquiry volume.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: SUPPORT CHANNELS & TASKS */}
            <div id="support-channels-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Channels & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Support Channels & Customer Service Workflows We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained support representatives master all major helpdesk platforms, communication channels, and back-office order resolution tasks.
                </p>
              </div>

              <div className="space-y-6">
                {supportChannelsTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, CSAT AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Metrics
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  CSAT Audits, Ticket SLAs & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track First Response Times, Average Resolution Times, and Customer Satisfaction scores daily to ensure pristine brand reputation.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Support Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Ticket Summary</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Inbound ticket volume, closed tickets, pending backlog, and average first response times.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly CSAT Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Customer satisfaction scores, positive customer feedback highlights, and recurring complaint trends.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly QA Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Supervisor chat/email transcript reviews, grammar scoring, brand tone compliance, and macro accuracy.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Staffing & Shift Planning</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Peak traffic analysis and schedule adjustments to ensure optimal live chat and phone coverage.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Agent Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned support representative fails to match your brand tone, types too slowly, or misses CSAT benchmarks, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office support agent at zero extra cost.
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
                  Junior, Mid-Level & Senior Support Agent Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time customer support representatives operating as your dedicated team member during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Support Representatives From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Support Cost Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK support agents cost $3,000–$4,500/month plus benefits. Talentharbor provides elite, vetted support professionals with immaculate English communication for a fraction of that cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
