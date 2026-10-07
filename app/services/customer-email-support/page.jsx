"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Inbox, 
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
  FileText, 
  Send, 
  HelpCircle, 
  RotateCcw,
  AlertTriangle,
  Layers,
  MessageSquareCode
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function CustomerEmailSupportServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Helpdesk Model" },
    { id: "working-hours-dedication", label: "Working Hours & SLA Commitments" },
    { id: "email-support-types", label: "All Email & Ticket Workflows" },
    { id: "reporting-guarantee", label: "Helpdesk Audits & SLA Guarantee" },
    { id: "tiered-pricing", label: "Email Representative Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Helpdesk HQ",
      desc: "Your email and ticket support representatives operate directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and floor supervisors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Working Hours",
      desc: "Zero response delay during peak traffic. Whichever representative tier you select will clock in physically to match your exact local operational shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Response SLAs",
      desc: "We sign service agreements guaranteeing First Response Time (FRT), Ticket Resolution Rate, Customer Satisfaction (CSAT) scores, and non-disclosure data security protocols."
    },
    {
      icon: RefreshCw,
      title: "Immediate Agent Replacement Guarantee",
      desc: "If an email support representative does not match your written brand tone, product accuracy, or speed expectations, we swap them immediately with an equally trained agent at zero extra cost."
    }
  ];

  const emailSupportTypes = [
    {
      icon: Inbox,
      title: "1. E-Commerce Order Status & Fulfillment Tracking",
      desc: "Resolving daily WISMO ('Where Is My Order?') ticket volume with rapid precision.",
      details: [
        "Direct tracking updates via Gorgias, Zendesk, Freshdesk, Help Scout, or Gmail.",
        "Proactive courier delay investigations with FedEx, UPS, DHL, USPS, and local carriers.",
        "Address update requests & delivery redirection prior to warehouse dispatch.",
        "Lost, damaged, or stolen shipment claim filings and customer replacements."
      ]
    },
    {
      icon: RotateCcw,
      title: "2. Refunds, Returns & Store Credit Management",
      desc: "Structured workflow management for return approvals, store credit, and exchange tickets.",
      details: [
        "RMA (Return Merchandise Authorization) processing according to exact store guidelines.",
        "Executing full or partial refunds directly inside Shopify, WooCommerce, or payment portals.",
        "Issuing store credit and gift cards to protect revenue and retain shoppers.",
        "Handling exchange requests and setting up replacement shipment orders."
      ]
    },
    {
      icon: Send,
      title: "3. Pre-Purchase Consultations & Product Inquiries",
      desc: "Turning incoming email inquiries into completed high-value checkout transactions.",
      details: [
        "Answering detailed technical specifications, sizing questions, and compatibility inquiries.",
        "Sending custom checkout invoice links and limited-time promotional discount codes.",
        "Bulk order quote creation and custom corporate inquiry management.",
        "Assisting hesitant buyers through complex checkout and payment gateway steps."
      ]
    },
    {
      icon: AlertTriangle,
      title: "4. Chargeback Mitigation & Escalated Complaints",
      desc: "De-escalating negative customer inquiries to prevent payment gateway disputes.",
      details: [
        "Empathetic, brand-aligned email written solutions for dissatisfied or delayed customers.",
        "Resolving merchant chargebacks before formal bank escalation occurs.",
        "Internal ticket escalation to management for high-tier custom accounts.",
        "Fulfilling regulatory, legal, or compliance documentation requests via email."
      ]
    },
    {
      icon: MessageSquareCode,
      title: "5. Macro Library & Canned Script Optimization",
      desc: "Building and refining standardized email macros to accelerate response speed.",
      details: [
        "Creating organized canned response templates for all common store questions.",
        "Continuous optimization of macro tone of voice to match your brand identity.",
        "Automating ticket tagging, priority routing, and departmental assignments.",
        "A/B testing email templates to improve customer satisfaction (CSAT) ratings."
      ]
    },
    {
      icon: Layers,
      title: "6. Multi-Inbox & Omnichannel Ticket Routing",
      desc: "Consolidate scattered inbox communications into a centralized helpdesk workflow.",
      details: [
        "Managing multiple support inboxes (support@, billing@, sales@, info@).",
        "Converting social media comments and contact form submissions into organized tickets.",
        "Routing technical software bugs and platform defects to your dev team.",
        "Managing recurring subscription edits, pauses, skips, and cancellations."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Email Agent",
      badge: "6M - 1 Year Experience",
      price: "$699",
      period: "/ month",
      desc: "Ideal for handling high-volume routine order tracking emails, simple FAQs, basic ticket tagging, and template-based customer replies.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Office HQ",
        "WISMO & Basic Product FAQ Desk",
        "Gorgias / Zendesk / Freshdesk Inboxes",
        "Daily SLA & First Response Time Reports",
        "Immediate Agent Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Ticket Specialist",
      badge: "2+ Years (CEO & Director Support)",
      price: "$1,199",
      period: "/ month",
      desc: "Best for complex refund approvals, order modifications, chargeback dispute prevention, pre-sale sales emails, and director assistance.",
      features: [
        "Experience: 2+ years (includes CEO/C-suite & director support)",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Office HQ",
        "Full Refund, Exchange & Order Edits Desk",
        "Pre-Purchase Conversion & Discount Vouchers",
        "Multi-Inbox Routing & VIP Escalations",
        "Daily, Weekly & Monthly CSAT Reports"
      ],
      popular: true,
    },
    {
      level: "Senior Helpdesk Operations Lead",
      badge: "5+ Years Experience",
      price: "$1,699",
      period: "/ month",
      desc: "Experienced support manager responsible for building helpdesk architectures, auditing agent replies, managing complex SLAs, and team leadership.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Office HQ",
        "Helpdesk Architecture & Macro Library Setup",
        "Compliance Heavy & High-Risk Niche Writing",
        "Daily Written Quality & Tone Audits",
        "Dedicated Floor Lead Oversight & Fast Replacement"
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
    <main className="bg-[#FAF6F2] mt-[-100px] pt-15 text-[#0F0C09] select-none min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-5xl mx-auto space-y-4 text-left">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F0C09]/60 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FA5B16] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FA5B16]">Customer Email & Ticket Support Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Email & Helpdesk Agents</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Email & Ticket Support Representatives Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated email support representative will physically sit inside our office in Lahore, Pakistan and operate live during your exact shift—managing Gorgias, Zendesk, Help Scout, or Gmail inboxes with rapid response times and perfect English grammar.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Email Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Helpdesk Operations</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Supervised Facility</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise written tone, grammar, ticket resolution speed, and shift attendance directly inside our physical Lahore office.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Consult With Our Operations Manager
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE HELPDESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Email Support Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate inbox backlogs, delayed customer responses, and unmonitored home freelancers. Our email support agents work inside our physical office headquarters in Lahore, Pakistan, operating live during your exact schedule.
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

            {/* SECTION 2: WORKING HOURS & SLA COMMITMENTS */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Working Hours Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Your Exact Working Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **koi bhi level ya plan select karein (Junior, Mid-Level, ya Senior)**, aapka hire kiya gaya email representative aapke specify kiye gaye shift timings mein **live available hoga aur aapke working hours ke mutabiq hi inbox clear karega**.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Clock className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Matched Shift Schedules
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Whether you operate in US Eastern (EST), Pacific (PST), European (CET), UK (GMT), or Australian (AEST) hours, your agent clocks in physically to clear your ticket queue during your peak customer activity.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Resource
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative answers tickets exclusively for your brand. No shared agents or split attention across other client inboxes.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Physical Office Attendance
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      The agent clocks in at our Lahore office floor with biometric monitoring, ensuring zero unexcused absence, zero power/internet disruption, and live supervisor assistance.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Zero Backlog Guarantee
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      We structure response workflows to reach Inbox Zero at the end of every operational shift, keeping First Response Time (FRT) consistently low.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL EMAIL & TICKET SUPPORT TYPES */}
            <div id="email-support-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Capabilities Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every Email & Ticket Workflow We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained helpdesk agents handle every email customer touchpoint—from basic tracking requests to intricate refund approvals, chargeback defense, and macro system setups.
                </p>
              </div>

              <div className="space-y-6">
                {emailSupportTypes.map((cat, idx) => {
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
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Written QA Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We measure email helpdesk performance with transparent metrics so you always know your inbox resolution standing.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Written Quality Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Ticket Reports</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Log of total tickets resolved, First Response Time (FRT), and escalated order logs.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Written QA Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Audit of email tone, grammar accuracy, resolution quality, and CSAT ratings.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Macro Optimization</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Updating macro canned templates, tag automations, and refund retention metrics.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Helpdesk Roadmap</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual review of inbox architecture, AI auto-responder integration, and shift expansion.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned email agent fails to meet your written English standards or product knowledge expectations, inform your Account Manager. We will take immediate action to replace them with an equally qualified in-office representative at zero extra cost.
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
                  Junior, Mid-Level & Senior Email Representative Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time email representatives operating as your dedicated employee during your working hours. Flat monthly pricing with no hidden ticket fees.
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
                  06. Strategic & Financial Edge
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire Email Support Representatives From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Operational Cost Reduction</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local US/UK email support agent costs $3,500–$4,800/month plus taxes. Our in-office agents deliver pristine written English and reliable shift attendance for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Quality Control</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike remote freelancers who suffer from power outages or communication delays, our helpdesk team operates inside a physical facility with fiber lines, backup generators, and supervisor oversight.
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
