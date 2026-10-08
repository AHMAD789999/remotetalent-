"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
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
  Headphones, 
  CalendarCheck, 
  UserCheck, 
  Target, 
  FileSpreadsheet, 
  UserPlus, 
  AlertCircle,
  Mic,
  RotateCcw
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function CustomerCallSupportServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Call Center Model" },
    { id: "working-hours-dedication", label: "Working Hours & Availability" },
    { id: "call-support-types", label: "Inbound & Outbound Call Scope" },
    { id: "reporting-guarantee", label: "Call Audits & SLA Guarantee" },
    { id: "tiered-pricing", label: "Call Representative Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Call Center HQ",
      desc: "Your call representatives operate directly inside our noise-controlled, supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, noise-canceling headsets, VOIP softphones, power backup, and floor managers."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Working Hours",
      desc: "Zero delay or timezone friction. Whichever representative tier you select will clock in physically to cover your exact operational shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Strict Call SLAs",
      desc: "We sign legally binding agreements defining average handle time (AHT), call connect rates, first call resolution (FCR), CSAT goals, and strict caller privacy NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Agent Replacement Guarantee",
      desc: "If a call representative does not meet your accent, fluency, or script conversion standards, we swap them immediately with an equally trained agent at zero extra fee."
    }
  ];

  const callSupportTypes = [
    {
      icon: PhoneIncoming,
      title: "1. Inbound Customer Service & VIP Helpline",
      desc: "Frontline voice assistance for phone inquiries, store help, and order assistance.",
      details: [
        "Real-time customer helpline handling with clear, friendly American English fluency.",
        "Aircall, RingCentral, Zendesk Talk, Gorgias Voice, and Dialpad integration.",
        "Store policy guidance, pricing inquiries, and product recommendation calls.",
        "Call transfer and escalation management to internal store managers."
      ]
    },
    {
      icon: ShoppingCart,
      title: "2. E-Commerce Order Verification & Address Checks",
      desc: "Phone verification for high-risk or COD orders to eliminate returns and fraud.",
      details: [
        "Inbound order status lookups via Shopify, WooCommerce, and ERP systems.",
        "Outbound order confirmation calls for Cash on Delivery (COD) markets.",
        "Shipping address verification prior to dispatch to lower return-to-origin (RTO) rates.",
        "Custom item customization confirmation and delivery schedule booking."
      ]
    },
    {
      icon: PhoneOutgoing,
      title: "3. Outbound Lead Generation & Cold Calling",
      desc: "B2B and B2C sales phone outreach to turn prospect databases into booked meetings.",
      details: [
        "Outbound cold calling using your CRM lists (HubSpot, Salesforce, GoHighLevel).",
        "Lead qualification according to BANT criteria (Budget, Authority, Need, Timeline).",
        "Direct appointment setting on your sales team's Google Calendar or Calendly.",
        "Follow-up calls on missed inbound web leads and form submissions."
      ]
    },
    {
      icon: Target,
      title: "4. Abandoned Cart & Checkout Recovery Calls",
      desc: "Phone recovery campaigns to convert shoppers who dropped off before paying.",
      details: [
        "Immediate outbound callback to high-value shoppers who abandoned cart.",
        "Addressing phone payment concerns and offering custom discount codes on call.",
        "Sending SMS or email checkout links during live telephone assistance.",
        "Documenting common cart abandonment reasons for store optimization."
      ]
    },
    {
      icon: RotateCcw,
      title: "5. Escalated Disputes, Chargeback & Refund Calls",
      desc: "Calm, professional telephone conflict management to protect store revenue.",
      details: [
        "De-escalating angry or dissatisfied callers to maintain customer retention.",
        "RMA return procedure guidance and phone payment adjustment processing.",
        "Preventing bank chargebacks by resolving delivery grievances over the phone.",
        "Filing courier claim reports for damaged, missing, or stolen shipments."
      ]
    },
    {
      icon: UserPlus,
      title: "6. Subscription Renewal & Customer Win-Back Calls",
      desc: "Proactive customer outreach to reduce churn and reactive dormant accounts.",
      details: [
        "Outbound renewal reminder calls for recurring product/service subscriptions.",
        "Win-back phone campaigns targeting churned or inactive buyers.",
        "Collecting qualitative phone feedback from unsubscribed customers.",
        "Upselling higher-tier subscription plans and annual billing options."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Call Agent",
      badge: "6M - 1 Year Experience",
      price: "$699",
      period: "/ month",
      desc: "Ideal for handling routine inbound customer calls, order status lookups, basic telephone queries, and logging call notes into your CRM.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Call Center HQ",
        "Inbound Order Status & Basic Phone FAQs",
        "Noise-Canceling Equipment & Fiber Line",
        "Daily Call Logs & First Call Resolution Reports",
        "Immediate Agent Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Phone Specialist",
      badge: "Most Popular Choice",
      price: "$1,299",
      period: "/ month",
      desc: "Best for complex inbound escalations, outbound lead generation, abandoned cart recovery, and executive/director assistance.",
      features: [
        "Experience: 2+ years (includes CEO/C-suite & director support)",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Call Center HQ",
        "Inbound & Outbound Phone Campaigns",
        "Abandoned Cart Recovery & Sales Appointments",
        "RingCentral, Aircall & CRM Power Dialing",
        "Daily, Weekly & Monthly CSAT & Call Recording Audits"
      ],
      popular: true,
    },
    {
      level: "Senior Call Center Lead",
      badge: "5+ Years Experience",
      price: "$1,799",
      period: "/ month",
      desc: "Experienced calling team lead responsible for cold calling scripts, handling high-stakes B2B calls, training phone agents, and auditing voice quality.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Call Center HQ",
        "Full Script Architecture & Objection Handling Build",
        "B2B Cold Prospecting & High-Ticket Closing",
        "Daily Call Recording Quality Analysis (QA)",
        "Dedicated Floor Manager Oversight & Fast Replacement"
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
            <span className="text-[#FA5B16]">Dedicated Inbound & Outbound Call Support</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Call Center Representatives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Inbound & Outbound Phone Agents Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or calling agent you select, they will physically sit inside our noise-controlled call center floor in Lahore, Pakistan, operating live during your exact business shift—handling customer helplines, outbound sales calls, order confirmations, and abandoned cart recovery with professional American English fluency.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Call Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Call Center Operations</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Supervised Call Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise call recordings, accent clarity, handle times, and attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Consult With Our Call Manager
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE CALL CENTER MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Voice Quality Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Call Center Floor
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate background noise, dropped VOIP calls, and unmonitored home freelancers. Our voice agents work inside our noise-proofed, managed facility in Lahore, Pakistan.
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
                  Whichever tier you select—Junior, Mid-Level, or Senior—your calling agent will remain fully live and dedicated during your exact shift schedule and local working hours.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your caller clocks in to cover your exact calling window.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Phone Agent
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative answers and makes calls exclusively for your brand. No shared call queues or split focus across multiple client accounts.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Noise-Isolated Workstations
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Agents use active noise-canceling headsets in an acoustically treated facility, ensuring zero background echo or household noise on your caller audio.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Flexible Campaign Scheduling
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need weekend customer line coverage or specialized holiday shift boosts? We adapt phone schedules seamlessly to your campaign calendar.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: INBOUND & OUTBOUND CALL SUPPORT TYPES */}
            <div id="call-support-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Voice Service Capabilities
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Inbound & Outbound Calling Types We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our voice representatives are trained in active listening, professional objection handling, neutral American English accents, and CRM logging across all phone channels.
                </p>
              </div>

              <div className="space-y-6">
                {callSupportTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Audits
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Call Recording Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We monitor audio clarity, script compliance, call handle times, and conversion benchmarks to ensure elite telephone customer experiences.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Voice Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Call Summary</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Log of total inbound calls answered, outbound dials made, connects, and average handle time (AHT).</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Audio QA Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Random sampling of 10-15 call recordings for tone, script accuracy, and customer satisfaction (CSAT).</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Conversion Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Detailed breakdown of recovered cart sales, booked meetings, order confirmations, and refund retention.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Campaign Strategy</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual review of VOIP infrastructure, IVR menu routing, dialing script updates, and team scaling.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Agent Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned caller fails to match your brand tone, struggles with American English fluency, or does not hit agreed-upon calling targets, inform your Account Manager. We will immediately replace them with an equally qualified in-office caller at zero extra cost.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 5: TIERED MONTHLY SALARY PLANS */}
            <div id="tiered-pricing" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  05. Flat Monthly Salaries
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Junior, Mid-Level & Senior Call Representative Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time call representatives operating as your dedicated employee during your working hours. Flat monthly pricing with no extra per-minute agent charges.
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
                  Why Hire Call Support Representatives From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Call Center Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK call center agents cost $3,800–$5,500/month per seat. Our in-office agents provide native American English fluency, high phone uptime, and professional call management for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Quality Oversight</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike remote freelancers with unstable internet or background noise, our voice agents work in a supervised call facility with fiber connections, power backups, and daily quality audits.
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
