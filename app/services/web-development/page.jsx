"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Code2, 
  ShoppingCart, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Globe,
  Clock,
  ShieldCheck,
  Building2,
  Bot,
  MessageSquareCode,
  RefreshCw,
  TrendingUp,
  FileCheck2,
  Zap,
  Users
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function WebDevelopmentServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Dedicated Model" },
    { id: "all-web-services", label: "Full Service & Tech Spectrum" },
    { id: "reporting-guarantee", label: "Reports & Instant Replacement" },
    { id: "tiered-pricing", label: "Junior, Mid & Senior Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Office HQ",
      desc: "Your dedicated employee works physically inside our supervised headquarters in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup power generators, and strict physical attendance supervision."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Business Shift",
      desc: "Zero time-zone delay. Your assigned developer clocks into our physical office matching your exact local working hours—whether you are based in the US, Canada, UK, Europe, Australia, or the Middle East."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Clear Agreement",
      desc: "We establish a clear service agreement defining work scope, operational hours, NDA security, and deliverable schedules, guaranteeing complete professional transparency from day one."
    },
    {
      icon: RefreshCw,
      title: "Immediate Replacement Guarantee",
      desc: "If an assigned employee fails to meet your standard or technical requirements, we take immediate action to swap and replace them with a vetted substitute at no extra transition cost."
    }
  ];

  const servicesSpectrum = [
    {
      icon: Globe,
      title: "All Website Types & CMS Platforms",
      desc: "WordPress, Elementor, Divi, Webflow, Wix, Squarespace, and custom corporate portals tailored for high performance and clean aesthetics."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & High-Risk Niches",
      desc: "Shopify, Liquid templates, WooCommerce, Magento, Peptide & research stores, high-risk payment gateway integration, and cart optimization."
    },
    {
      icon: Code2,
      title: "Custom Web Applications & APIs",
      desc: "Full-stack development using Next.js, React, Node.js, PHP, Laravel, custom databases, REST APIs, and SaaS platform engineering."
    },
    {
      icon: Bot,
      title: "AI Website Chatbots & Automation",
      desc: "Custom-trained LLM AI chatbots embedded into your website to handle customer service, sales leads, product recommendations, and automated ticket logging."
    },
    {
      icon: MessageSquareCode,
      title: "WhatsApp AI Chatbot Integration",
      desc: "Official WhatsApp Business API integration with AI capabilities for auto-replying to client inquiries, order status updates, and automated sales outreach."
    },
    {
      icon: Wrench,
      title: "Proactive Store Maintenance & Fixes",
      desc: "Continuous speed tuning, Core Web Vitals optimization, database cleanup, PHP error resolution, SSL management, and security patch updates."
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Developer",
      badge: "Cost-Effective Execution",
      price: "$799",
      period: "/ month",
      desc: "Ideal for routine website updates, basic Elementor/WordPress edits, product uploads, bug fixing, and continuous site maintenance.",
      features: [
        "Full-time (160 Hours / Month)",
        "Seated in Our Physical Office HQ",
        "Operates During Your Business Hours",
        "Elementor, WordPress & Basic HTML/CSS/JS",
        "Daily & Weekly Task Progress Reports",
        "Instant Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Engineer",
      badge: "Most Popular Choice",
      price: "$1,399",
      period: "/ month",
      desc: "Perfect for complex WooCommerce, Shopify Liquid theme edits, custom plugin tweaks, API setups, and custom web page builds.",
      features: [
        "Full-time (160 Hours / Month)",
        "Seated in Our Physical Office HQ",
        "Operates During Your Business Hours",
        "Shopify, WooCommerce, Custom PHP & JS",
        "AI Website & WhatsApp Chatbot Setups",
        "Daily, Weekly & Monthly Task Progress Reports",
        "Immediate Developer Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Full-Stack Developer",
      badge: "Advanced Architecture",
      price: "$1,999",
      period: "/ month",
      desc: "Experienced engineer for heavy web app engineering, Next.js, Laravel, complex databases, custom AI integrations, and multi-store setups.",
      features: [
        "Full-time (160 Hours / Month)",
        "Seated in Our Physical Office HQ",
        "Operates During Your Business Hours",
        "Next.js, React, Laravel, Node.js & APIs",
        "Complex Database & Cloud Architecture",
        "Daily, Weekly, Monthly & Yearly Roadmap Reports",
        "Immediate Replacement & Dedicated Senior Lead Oversight"
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
            <span className="text-[#FA5B16]">Dedicated In-Office Remote Team Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Talent & Web Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Web Talent Sitting in Our Office During Your Work Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Get a full-time employee who physically works inside our supervised Lahore headquarters. They operate live during your exact business shift, handling all websites, e-commerce stores, custom web apps, and AI chatbots with detailed progress reporting and an immediate replacement guarantee.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Dedicated Developer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* MARQUEE SECTION */}
      <TalentShowcaseMarquee />

      {/* 2. MAIN SPLIT: STICKY BRAND SIDEBAR + RIGHT CONTENT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* BRAND COLOR STICKY LEFT SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <div className="bg-[#FA5B16] text-white rounded-[10px] p-6 shadow-md space-y-6 border border-[#FA5B16]">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block border-b border-white/20 pb-2">
                  Service Navigation
                </span>
                <h3 className="text-lg font-bold text-white mt-2">In-Office Dedicated Teams</h3>
              </div>

              <nav className="space-y-1.5">
                {sidebarNav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-[6px] text-xs font-bold transition-all flex items-center justify-between ${
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
                  <span className="text-[11px] font-bold text-white block">Supervised Physical Office</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We manage attendance, internet stability, hardware, and physical oversight in our Lahore HQ so you get 100% reliable output.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Consult With Our Team
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE DEDICATED MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Complete Operational Trust
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  How Our Physical Office Model Works
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Unlike traditional unverified freelancing platforms, we provide full-time staff who sit in our own physical office. You get total control over their daily task backlog, while we ensure high-speed setup, security, and continuous physical management.
                </p>
              </div>

              {/* PILLARS GRID */}
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

            {/* SECTION 2: FULL SERVICE & TECH SPECTRUM */}
            <div id="all-web-services" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Complete Technical Capabilities
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Websites, E-Commerce, Web Apps & AI Solutions
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Your dedicated employee isn't limited to basic page tweaks. They handle full design builds, specialized e-commerce operations, custom web applications, and cutting-edge AI integrations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesSpectrum.map((srv, idx) => {
                  const IconComp = srv.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-[8px] p-5 border border-[#0F0C09]/10 space-y-2 shadow-sm hover:border-[#FA5B16] transition-all"
                    >
                      <div className="w-9 h-9 rounded-[6px] bg-[#FAF6F2] text-[#FA5B16] border border-[#0F0C09]/10 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
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

            {/* SECTION 3: REPORTING & IMMEDIATE REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Accountability & Quality Control
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Structured Progress Reports & Instant Replacement
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We maintain strict corporate governance to guarantee that your business goals are met consistently without wasting time or capital.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                
                {/* REPORTING SCHEDULE */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Task Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Shift Standup</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Log of tasks started, bugs fixed, code pushed, and active tickets completed before clocking out.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Summary of completed features, velocity metrics, upcoming tasks, and pending client approvals.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Full website health report, site speed analysis, security audit, and backlog retrospective.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Strategy</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Long-term architecture upgrade plan, tech stack modernizations, and continuous scaling roadmap.</p>
                    </div>
                  </div>
                </div>

                {/* IMMEDIATE REPLACEMENT POLICY */}
                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Developer Replacement Protection</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned employee is not performing to your expectations, working sluggishly, or lacking specific technical depth, you simply notify your dedicated Account Manager. We will take immediate action to address the situation or assign a fully qualified replacement developer from our office without any extra onboarding fees.
                  </p>
                </div>

              </div>
            </div>

            {/* SECTION 4: TIERED PRICING (JUNIOR, MID, SENIOR MONTHLY SALARIES) */}
            <div id="tiered-pricing" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Transparent Monthly Salary Plans
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Junior, Mid-Level & Senior Dedicated Developer Hiring
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time dedicated talent operating as your monthly employee during your business hours. Flat monthly salary with no hidden contract fees.
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
                      className={`w-full py-2 rounded-[6px] text-xs font-bold uppercase tracking-wider text-center block transition-all mt-4 ${
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

            {/* SECTION 5: WHY HIRE FROM US (MARKET SAVINGS VS QUALITY) */}
            <div id="why-hire-us" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  05. Strategic Advantage
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire From Us Over Market Alternatives?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Budget Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local developer in the US or Europe costs $5,000–$8,000/month plus taxes and benefits. Hiring our dedicated in-office developer gives you top technical quality for a fraction of the market budget.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Physical Office Infrastructure</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike solo remote freelancers who deal with power cuts, personal delays, or vanishing acts, our staff sits in a fully managed physical office with backup power, fiber lines, and HR management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 6: HOW WE WORK */}
            <div id="how-we-work-section" className="space-y-6 scroll-mt-8">
              <HowItWorks />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
