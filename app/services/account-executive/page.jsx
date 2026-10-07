"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  PhoneCall, 
  Mail, 
  Target, 
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
  Briefcase, 
  DollarSign, 
  MessageSquare 
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function AccountExecutiveServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Sales Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "ae-workflow-types", label: "All Sales & Closing Workflows" },
    { id: "reporting-guarantee", label: "Pipeline Audits & SLAs" },
    { id: "tiered-pricing", label: "Account Executive Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Closing vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Sales HQ",
      desc: "Your dedicated Account Executives operate directly inside our supervised sales floor in Lahore, Pakistan. Equipped with high-speed fiber internet, noise-canceling headsets, dual-monitor setups, CRM dialing systems, and sales floor managers."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Local Sales Hours",
      desc: "Zero lead response delay. Whichever AE tier you select will clock in physically to cover your exact local prospecting and closing hours—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Pipeline SLAs & Data Security",
      desc: "We sign service level agreements defining outbound call volume, demo booking targets, pipeline hygiene standards, CRM update velocity, and strict client data confidentiality."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned Account Executive does not match your closing conversion benchmarks, objection-handling style, or communication standards, we replace them immediately with an equally vetted closer at zero extra cost."
    }
  ];

  // COMPREHENSIVE ACCOUNT EXECUTIVE & SALES WORKFLOW TYPES
  const aeWorkflowTypes = [
    {
      icon: Target,
      title: "1. B2B Outbound Prospecting & Lead Generation",
      desc: "Strategic multi-channel outreach to decision-makers and high-value target accounts.",
      details: [
        "Executing targeted cold calling campaigns using US/UK local caller IDs.",
        "Crafting and sending hyper-personalized cold email sequences via Salesloft, Outreach, or Instantly.",
        "Prospecting ideal customer profiles (ICPs) using LinkedIn Sales Navigator, ZoomInfo, and Apollo.io.",
        "Mapping enterprise account org charts and identifying key economic buyers."
      ]
    },
    {
      icon: PhoneCall,
      title: "2. Discovery Calls & Needs Analysis",
      desc: "Conducting high-discovery sales conversations to uncover deep client pain points.",
      details: [
        "Running structured MEDDPICC or SPIN selling discovery frameworks.",
        "Asking probing questions to identify budget, authority, need, and timeline (BANT).",
        "Uncovering hidden operational bottlenecks and quantifying the cost of inaction.",
        "Positioning your product or service as the ultimate solution to client challenges."
      ]
    },
    {
      icon: Briefcase,
      title: "3. Product Demos & Solution Pitching",
      desc: "Compelling software or service demonstrations tailored to specific buyer use cases.",
      details: [
        "Hosting engaging Zoom, Google Meet, or Microsoft Teams presentation calls.",
        "Tailoring live product walkthroughs to address specific prospect pain points discussed in discovery.",
        "Handling live feature questions and software capability inquiries with authority.",
        "Connecting technical features directly to tangible business ROI."
      ]
    },
    {
      icon: MessageSquare,
      title: "4. Objection Handling & Deal Closing",
      desc: "Overcoming pricing, timing, and competitor objections to secure signed agreements.",
      details: [
        "Skillfully neutralizing pushback regarding price, budget constraints, or competitor alternatives.",
        "Negotiating contract terms, scopes, and discount parameters within approved thresholds.",
        "Creating urgency around proposal deadlines and quarterly targets.",
        "Securing verbal commitments and driving prospects across the finish line."
      ]
    },
    {
      icon: FileCheck2,
      title: "5. Proposal Writing & Contract Negotiation",
      desc: "Drafting formal commercial proposals, SOWs, and closing documentation.",
      details: [
        "Creating polished, bespoke commercial proposals and pricing decks.",
        "Drafting Statements of Work (SOW) and Master Services Agreements (MSA).",
        "Managing e-signature workflows via DocuSign, PandaDoc, or HelloSign.",
        "Coordinating legal or procurement review cycles to accelerate deal velocity."
      ]
    },
    {
      icon: TrendingUp,
      title: "6. CRM Pipeline Hygiene & Forecasting",
      desc: "Flawless CRM management ensuring real-time revenue visibility.",
      details: [
        "Logging all call notes, email interactions, and deal stage changes in HubSpot, Salesforce, or Close CRM.",
        "Maintaining rigorous pipeline hygiene with accurate close dates and deal sizes.",
        "Providing weekly revenue forecasting reports and quota attainment metrics.",
        "Handing off closed-won accounts smoothly to customer success and onboarding teams."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior SDR / Outbound Prospector",
      badge: "6M - 1 Year Experience",
      price: "$799",
      period: "/ month",
      desc: "Ideal for outbound cold calling, LinkedIn prospecting, email sequencing, setting qualified discovery meetings, and basic CRM list building.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Local Sales Hours",
        "Seated in Our Physical Sales HQ Floor",
        "Cold Calling & LinkedIn Sales Navigator Prospecting",
        "Email Sequencing via Apollo / Instantly",
        "Daily Outbound Activity & Demo Booking Logs",
        "Immediate Sales Rep Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Account Executive (Closer)",
      badge: "2+ Years Experience",
      price: "$1,399",
      period: "/ month",
      desc: "Best for running full-cycle sales: discovery calls, product demos, handling objections, proposal writing, and closing B2B deals.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Local Sales Hours",
        "Seated in Our Physical Sales HQ Floor",
        "Full-Cycle Discovery, Demo & Closing",
        "HubSpot / Salesforce Pipeline Management",
        "Proposal Creation & Contract Negotiation",
        "Daily, Weekly & Monthly Revenue Reports",
        "Immediate Sales Rep Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Enterprise Sales Director",
      badge: "5+ Years Experience",
      price: "$1,999",
      period: "/ month",
      desc: "Seasoned enterprise closer capable of handling high-ticket sales, complex multi-stakeholder deals, outbound playbook creation, and quota scaling.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Local Sales Hours",
        "Seated in Our Physical Sales HQ Floor",
        "Enterprise Sales Closing & Stakeholder Management",
        "Sales Playbook & Outbound Strategy Development",
        "Advanced Forecasting & Revenue Analytics",
        "Dedicated Sales Floor Manager Oversight"
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
            <span className="text-[#FA5B16]">Account Executive Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Account Executives & Sales Closers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Account Executives Working Live In Your Sales Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated Account Executive will physically sit inside our high-security sales floor in Lahore, Pakistan—executing cold outreach, running discovery calls, pitching product demos, and closing deals live during your exact business shift.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Account Executive</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Sales Desk</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Sales Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise outbound call volume, CRM pipeline hygiene, conversion rates, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Sales Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE SALES DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Sales Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Sales Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate missed dials, unmanaged pipelines, poor phone audio quality, and unmonitored home freelancers. At Talentharbor, your Account Executives work inside our secure, managed sales floor in Lahore, Pakistan.
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
                  100% Dedicated Availability In Your Sales Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Whether you choose a Junior SDR, Mid-Level AE, or Senior Closer through Talentharbor, they operate exclusively during your local shift hours, ensuring leads are called within minutes of submission.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your sales rep clocks in to cover your peak prospect availability.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Closer
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative pitches and closes deals exclusively for your company. No shared quotas or split attention across multiple competing client brands.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Professional Audio & Fiber Rigs
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Sales reps work on professional USB headsets in acoustic-managed booths backed by redundant fiber internet and power backups for crystal-clear discovery calls.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Inbound Speed-to-Lead
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Instant response workflows for inbound form fills, webinar attendees, and trial sign-ups to maximize conversion percentages before leads go cold.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ACCOUNT EXECUTIVE WORKFLOWS */}
            <div id="ae-workflow-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Capabilities & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Outbound, Prospecting & Closing Tasks We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained Account Executives master cold outreach, discovery calls, live product demonstrations, objection handling, contract negotiation, and CRM pipeline hygiene.
                </p>
              </div>

              <div className="space-y-6">
                {aeWorkflowTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, PIPELINE AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Pipeline Audits, Activity Logs & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track outbound dial counts, meetings booked, closed-won revenue, and CRM hygiene with structured reporting so you maintain 100% sales transparency.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Sales Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Outbound Log</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Total dials made, emails sent, connect rates, discovery calls held, and demos booked.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Pipeline Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Open deals by stage, proposal follow-ups, closed-won revenue, and pipeline velocity metrics.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Revenue Forecast</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quota attainment tracking, conversion rate analysis, and deal lost post-mortem reviews.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Sales Strategy Planning</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quarterly territory mapping, ICP refinements, and outbound script optimizations.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Sales Rep Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned Account Executive misses activity quotas, struggles with objection handling, or fails to close consistently, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office closer at zero extra cost.
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
                  Junior, Mid-Level & Senior Account Executive Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time Account Executives operating as your dedicated sales closer during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Account Executives From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Sales Overhead Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK Account Executives cost $5,000–$8,000/month plus high base salaries and commissions. Talentharbor provides elite, vetted sales closers with immaculate English for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Sales Floor Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our sales reps operate in a supervised facility with strict security protocols, dialer logging, fiber connectivity, and continuous sales coaching.
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
