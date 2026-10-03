"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Code2, 
  Layout, 
  Database, 
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
  ShoppingCart, 
  Globe, 
  Cpu, 
  CalendarCheck, 
  UserCheck, 
  Target, 
  Layers, 
  Terminal, 
  AlertCircle,
  Smartphone,
  GitBranch
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function StoreDevelopmentServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Development Model" },
    { id: "working-hours-dedication", label: "Working Hours & Availability" },
    { id: "development-stack-types", label: "Store & Tech Stack Scope" },
    { id: "reporting-guarantee", label: "Code Audits & SLA Guarantee" },
    { id: "tiered-pricing", label: "Developer Plans & Pricing" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Development HQ",
      desc: "Your developers operate directly inside our high-security, supervised engineering office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, power backup, and senior technical leads."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Working Hours",
      desc: "Zero delay or timezone friction. Whichever developer tier you select will clock in physically to cover your exact operational shift—EST, PST, CET, GMT, or AEST for seamless daily standups."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Strict Code SLAs",
      desc: "We sign legally binding agreements defining sprint delivery timelines, code quality benchmarks, performance optimization targets, and strict intellectual property (IP) assignment NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Developer Replacement Guarantee",
      desc: "If a developer does not meet your technical stack, architecture speed, or code documentation standards, we swap them immediately with an equally vetted engineer at zero extra fee."
    }
  ];

  // STORE & TECH STACK DEVELOPMENT TYPES DETAILED
  const developmentStackTypes = [
    {
      icon: ShoppingCart,
      title: "1. Custom Shopify & WooCommerce Stores",
      desc: "High-converting e-commerce platforms engineered for lightning-fast speeds and secure checkout workflows.",
      details: [
        "Custom Shopify Liquid theme development and headless storefront setups.",
        "Advanced WooCommerce architecture, custom plugin creation, and cart optimization.",
        "Multi-currency, localized tax engines, and automated regional shipping rule setup.",
        "Seamless payment gateway integration (Stripe, PayPal, Apple Pay, Afterpay)."
      ]
    },
    {
      icon: Layers,
      title: "2. Full-Stack Web App & Next.js Stores",
      desc: "Next-generation web applications and bespoke portals built with modern Javascript frameworks.",
      details: [
        "React and Next.js server-side rendered (SSR) storefronts for ultimate SEO performance.",
        "Tailwind CSS responsive UI design tailored precisely to your brand guidelines.",
        "Robust backend API routes, authentication pipelines, and secure database connections.",
        "Progressive Web App (PWA) configurations for offline shopping and push notifications."
      ]
    },
    {
      icon: Database,
      title: "3. Laravel Backend & Custom PHP Solutions",
      desc: "Scalable enterprise web applications, inventory databases, and custom business logic frameworks.",
      details: [
        "Custom Laravel MVC architecture, Eloquent ORM tuning, and secure migration handling.",
        "Complex ERP, CRM, and warehouse inventory management system integration.",
        "Secure RESTful and GraphQL API design for third-party vendor syncing.",
        "Automated background queues, scheduled job processing, and server hardening."
      ]
    },
    {
      icon: Globe,
      title: "4. Multi-Vendor Marketplaces & Dokan",
      desc: "Complex peer-to-peer and multi-seller marketplace platforms with automated commission payouts.",
      details: [
        "Multi-vendor dashboard customization for independent sellers and store owners.",
        "Automated commission calculation, split-payment gateways, and payout management.",
        "Vendor onboarding workflows, product approval queues, and store analytics.",
        "Role-based access control (RBAC) for administrators, vendors, and buyers."
      ]
    },
    {
      icon: Cpu,
      title: "5. Headless Commerce & API Integrations",
      desc: "Decoupled commerce architectures connecting modern frontends with powerful inventory backends.",
      details: [
        "Connecting Next.js or Nuxt frontends to Shopify, Medusa, or WooCommerce backends.",
        "Custom webhook handlers for real-time inventory and order status synchronization.",
        "Third-party software integrations (Klaviyo, Gorgias, QuickBooks, ShipStation).",
        "Microservices architecture setup for high-traffic enterprise stores."
      ]
    },
    {
      icon: Terminal,
      title: "6. Performance Optimization & Security Audits",
      desc: "Comprehensive code refactoring, Core Web Vitals optimization, and security hardening.",
      details: [
        "Achieving 90+ Google PageSpeed scores via asset optimization and caching strategies.",
        "Database query profiling, indexing, and slow-loading script elimination.",
        "Security patching, vulnerability scanning, and SSL/TLS configuration.",
        "Comprehensive QA testing, cross-browser compatibility, and bug fixing."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Developer",
      badge: "Frontend & Layouts",
      price: "$899",
      period: "/ month",
      desc: "Ideal for building responsive UI components, tweaking theme templates, managing product catalog updates, and handling basic bug fixes.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Engineering HQ",
        "Shopify, WordPress & Tailwind Implementation",
        "High-Speed Fiber Workstation Setup",
        "Daily Git Commits & Task Progress Reports",
        "Immediate Developer Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Full-Stack Engineer",
      badge: "Most Popular Choice",
      price: "$1,399",
      period: "/ month",
      desc: "Best for building custom e-commerce features, integrating third-party APIs, database management, and developing full-stack store architecture.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Engineering HQ",
        "Next.js, Laravel, WooCommerce & Shopify Stack",
        "Custom API Integrations & Database Routing",
        "Git Version Control & Code Review Protocols",
        "Daily Standups & Weekly Sprint Planning",
        "Immediate Developer Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Store Architect",
      badge: "Tech Lead & DevOps",
      price: "$1,899",
      period: "/ month",
      desc: "Seasoned technical lead responsible for complex system architecture, headless store builds, database optimization, and code quality oversight.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Engineering HQ",
        "Advanced System Architecture & Headless Builds",
        "DevOps, Server Deployment & CI/CD Pipelines",
        "Rigorous Code Audits & Performance Tuning",
        "Dedicated Engineering Manager Oversight"
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
            <span className="text-[#FA5B16]">Talentharbor Store Development</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Store Development Engineers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Full-Stack Store Developers Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or engineering tier you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your developer will physically sit inside our high-security engineering office in Lahore, Pakistan, writing clean code live during your exact business shift—building high-converting Shopify stores, custom WooCommerce marketplaces, and Next.js applications.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Store Developer</span>
              <ArrowRight className="w-4 h-4" />
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Engineering</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Engineering Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise code commits, sprint deadlines, architectural standards, and team attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Consult With Our Tech Lead
                </Link>
            </div>

          </div>
        </aside>

        {/* RIGHT SCROLLABLE CONTENT */}
        <div className="lg:col-span-8 space-y-14">
          
          {/* SECTION 1: IN-OFFICE DEVELOPMENT MODEL */}
          <div id="in-office-model" className="space-y-6 scroll-mt-8">
            <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                01. Engineering Rigor & Infrastructure
              </span>
              <h2 className="text-2xl font-bold text-[#0F0C09]">
                In-Office Supervised Development Headquarters
              </h2>
              <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                Eliminate freelancer ghosting, unstable internet connections, and unvetted code. At Talentharbor, your developers work inside our secure, managed engineering facility in Lahore, Pakistan.
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

          {/* SECTION 2: WORKING HOURS & AVAILABILITY */}
          <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
            <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                02. Working Hours Alignment
              </span>
              <h2 className="text-2xl font-bold text-[#0F0C09]">
                100% Dedicated Availability In Your Working Hours
              </h2>
              <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                Whether you choose a Junior, Mid-Level, or Senior developer through Talentharbor, they operate exclusively during your local shift hours, joining your daily standups and syncing in real-time.
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
                    Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your developer clocks in to cover your exact development sprint window.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#FA5B16]">
                    <UserCheck className="w-5 h-5 shrink-0" />
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                      100% Dedicated Developer
                    </h3>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                    Your hired engineer writes code and builds stores exclusively for your brand. No shared resources or split focus across multiple competing client agencies.
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
                    Engineers work on dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee zero downtime.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#FA5B16]">
                    <CalendarCheck className="w-5 h-5 shrink-0" />
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                      Flexible Sprint Scheduling
                    </h3>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                    Need urgent store feature deployments, holiday sale preparation, or weekend maintenance releases? We scale engineering bandwidth instantly to fit your roadmap.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* SECTION 3: STORE & TECH STACK DEVELOPMENT TYPES */}
          <div id="development-stack-types" className="space-y-6 scroll-mt-8">
            <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                03. Technical Capabilities & Stack
              </span>
              <h2 className="text-2xl font-bold text-[#0F0C09]">
                All Store Development & Engineering Services We Provide
              </h2>
              <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                Our engineers are masters of modern e-commerce frameworks, custom backend logic, database architecture, and performance optimization.
              </p>
            </div>

            <div className="space-y-6">
              {developmentStackTypes.map((cat, idx) => {
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

        {/* SECTION 4: REPORTING, CODE AUDITS & REPLACEMENT GUARANTEE */}
        <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
          <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
              04. Code Quality & Accountability
            </span>
            <h2 className="text-2xl font-bold text-[#0F0C09]">
              Git Commits, Code Audits & Instant Replacement Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
              We monitor code quality, sprint velocity, pull request reviews, and architecture benchmarks to ensure enterprise-grade software delivery.
            </p>
          </div>

          <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                <span>Daily, Weekly & Monthly Engineering Performance Reporting</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                  <span className="text-xs font-bold text-[#FA5B16]">Daily Git Activity</span>
                  <p className="text-[11px] text-[#0F0C09]/70 font-medium">Detailed commit logs, branch updates, open pull requests, and daily task completion reports.</p>
                </div>

                <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                  <span className="text-xs font-bold text-[#FA5B16]">Weekly Code Review</span>
                  <p className="text-[11px] text-[#0F0C09]/70 font-medium">Senior architect code walk-throughs, security scans, and speed optimization benchmarks.</p>
                </div>

                <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                  <span className="text-xs font-bold text-[#FA5B16]">Monthly Sprint Audit</span>
                  <p className="text-[11px] text-[#0F0C09]/70 font-medium">Review of store feature delivery velocity, bug resolution rates, and infrastructure stability.</p>
                </div>

                <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                  <span className="text-xs font-bold text-[#FA5B16]">Roadmap Planning</span>
                  <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quarterly architectural planning for scaling store traffic, database sharding, and API expansion.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Immediate Action & Developer Replacement Policy</span>
            </div>
            <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
              If an assigned developer fails to match your technical skill expectations, writes suboptimal code, or misses milestone deadlines, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office engineer at zero extra cost.
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
            Junior, Mid-Level & Senior Developer Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
            Hire full-time store development engineers operating as your dedicated team member during your working hours. Flat monthly pricing with zero hidden fees.
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

    {/* SECTION 6: WHY HIRE FROM US */}
    <div id="why-hire-us" className="space-y-6 scroll-mt-8">
      <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
          06. Strategic Advantage
        </span>
        <h2 className="text-2xl font-bold text-[#0F0C09]">
          Why Hire Store Developers From Talentharbor?
        </h2>
      </div>

      <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
            <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#FA5B16]" />
              <span>60-70% Development Cost Savings</span>
            </h3>
            <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
              US/UK full-stack engineers cost $6,000–$9,000/month. Talentharbor provides elite, vetted engineers with deep e-commerce expertise for a fraction of that cost without compromising quality.
            </p>
          </div>

          <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
            <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#FA5B16]" />
              <span>Managed Office Engineering Oversight</span>
            </h3>
            <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
              Unlike unmanaged remote freelancers, our engineers operate in a supervised facility with strict security protocols, fiber connectivity, power backups, and senior code reviews.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* SECTION 7: HOW WE WORK */}
    <div id="how-we-work-section" className="scroll-mt-8 pt-4">
      <HowItWorks />
    </div>

    </div>

  </div>
</section>

</main>
  );
}
