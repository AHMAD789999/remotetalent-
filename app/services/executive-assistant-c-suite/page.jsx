"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  UserCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  ShieldCheck, 
  RefreshCw, 
  TrendingUp, 
  Zap, 
  Users, 
  Mail, 
  FileText, 
  Briefcase, 
  Lock, 
  CalendarCheck, 
  Plane, 
  CreditCard 
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function ExecutiveAssistantCSuiteServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office EA Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "ea-support-types", label: "All Executive Assistant Workflows" },
    { id: "reporting-guarantee", label: "Executive Audits & SLAs" },
    { id: "tiered-pricing", label: "Executive Assistant Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Privacy vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Operations HQ",
      desc: "Your dedicated executive assistant operates directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and floor supervisors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Executive Working Hours",
      desc: "Zero communication delays or missed schedule changes. Whichever assistant level you select will clock in physically to match your exact local operational shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: Lock,
      title: "Strict NDA & Executive Confidentiality",
      desc: "We sign legally binding Non-Disclosure Agreements (NDAs) protecting sensitive corporate communications, executive calendars, financial records, and internal strategic decisions."
    },
    {
      icon: RefreshCw,
      title: "Immediate Assistant Replacement Guarantee",
      desc: "If an assigned executive assistant does not match your written tone, speed expectations, or discretion level, we swap them immediately with a substitute at zero extra cost."
    }
  ];

  const eaSupportTypes = [
    {
      icon: Calendar,
      title: "1. Executive Calendar & High-Stakes Appointment Management",
      desc: "Protecting C-Suite time through strategic scheduling, meeting triage, and buffer management.",
      details: [
        "Managing complex Google Calendar and Outlook schedules across multiple time zones.",
        "Prioritizing high-value client, investor, and board member meeting requests.",
        "Resolving double-booking conflicts and establishing non-negotiable executive focus blocks.",
        "Sending polite, firm meeting decline emails and rescheduling low-priority appointments."
      ]
    },
    {
      icon: Mail,
      title: "2. Executive Inbox Triage & Daily Priority Briefings",
      desc: "Transforming cluttered executive email accounts into actionable daily summaries.",
      details: [
        "Categorizing incoming emails into Action Required, FYI, and Low Priority folders.",
        "Drafting professional, brand-aligned email replies on behalf of the CEO or Director.",
        "Flagging urgent corporate items, contract approvals, and investor inquiries instantly.",
        "Preparing daily morning briefings detailing the day's schedule, key tasks, and meeting notes."
      ]
    },
    {
      icon: Plane,
      title: "3. Comprehensive Travel Planning & Itinerary Logistics",
      desc: "Flawless end-to-end corporate travel coordination for hassle-free business trips.",
      details: [
        "Booking flights, premium hotel accommodations, and ground transportation.",
        "Creating detailed, hour-by-hour digital itineraries with venue maps and flight updates.",
        "Managing passport, visa documentation, and travel insurance requirements.",
        "Adjusting travel bookings instantly when flight cancellations or schedule shifts occur."
      ]
    },
    {
      icon: FileText,
      title: "4. Meeting Preparation, Minutes & Task Tracking",
      desc: "Ensuring every C-suite meeting yields clear documentation and accountable follow-ups.",
      details: [
        "Preparing slide decks, background briefs, and talking points before key meetings.",
        "Attending virtual board or team meetings to record detailed minutes and action items.",
        "Assigning follow-up tasks to department heads via Slack, ClickUp, Asana, or Jira.",
        "Tracking leadership team deadlines to ensure prompt delivery of executive initiatives."
      ]
    },
    {
      icon: CreditCard,
      title: "5. Expense Reconciliation & Corporate Administration",
      desc: "Streamlining financial receipts, invoice approvals, and personal executive tasks.",
      details: [
        "Filing monthly corporate credit card expense reports inside QuickBooks, Expensify, or Xero.",
        "Auditing vendor invoices, tracking recurring software subscriptions, and processing approvals.",
        "Handling executive personal tasks (gift purchasing, event RSVPs, subscription renewals).",
        "Managing signature workflows for contracts via QuickBooks, DocuSign, or PandaDoc."
      ]
    },
    {
      icon: Briefcase,
      title: "6. Departmental Liaison & Leadership Operations",
      desc: "Serving as a seamless communication bridge between executives, managers, and stakeholders.",
      details: [
        "Communicating executive decisions and updates clearly across internal departments.",
        "Gathering weekly performance metrics from department leads for C-suite review.",
        "Onboarding key direct reports and coordinating executive leadership retreats.",
        "Maintaining absolute discretion during corporate restructuring or fundraising cycles."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Executive Assistant",
      badge: "6M - 1 Year Experience",
      price: "$799",
      period: "/ month",
      desc: "Ideal for daily email categorization, basic calendar management, setting appointment reminders, simple document preparation, and routine admin tasks.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Hours",
        "Seated in Our Physical Operations HQ Floor",
        "Calendar Management & Meeting Reminders",
        "Inbox Triage & Draft Email Replies",
        "Basic Travel Bookings & Expense Logging",
        "Immediate Assistant Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level C-Suite Executive Assistant",
      badge: "Most Popular Choice",
      price: "$1,399",
      period: "/ month",
      desc: "Best for high-stakes C-suite support, complex multi-timezone calendar control, executive travel itineraries, board meeting minutes, and project management tracking.",
      features: [
        "Experience: 2+ years (includes CEO/C-suite & director support)",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Hours",
        "Seated in Our Physical Operations HQ Floor",
        "Advanced CEO / Director Calendar Oversight",
        "Comprehensive Travel Logistics & Itineraries",
        "Meeting Minutes, Slide Decks & Task Tracking",
        "DocuSign & Expense Reconciliation (QuickBooks)",
        "Daily Morning Briefings & Priority Logins"
      ],
      popular: true,
    },
    {
      level: "Senior Chief of Staff / EA Lead",
      badge: "5+ Years Experience",
      price: "$1,899",
      period: "/ month",
      desc: "Experienced operational leader capable of acting as a right-hand liaison for Founders and Board Members, driving cross-departmental accountability, and managing leadership workflows.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Hours",
        "Seated in Our Physical Operations HQ Floor",
        "Chief of Staff Operations & Department Alignment",
        "High-Level Investor & Board Relationship Support",
        "Executive Strategy Tracking & KPI Reporting",
        "Daily, Weekly, Monthly & Yearly Executive Audits",
        "Dedicated Floor Operations Lead Oversight"
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
            <span className="text-[#FA5B16]">C-Suite Executive Assistant Support Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Dedicated In-Office C-Suite Executive Assistants</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Executive Assistants to Help C-Suite Executives Manage Appointments & Critical Tasks
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated executive assistant will physically sit inside our supervised office in Lahore, Pakistan and operate live during your exact shift—handling calendar control, inbox triage, travel logistics, meeting minutes, and daily operational priorities with utmost discretion.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Executive Assistant</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Executive Operations</h3>
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
                    We supervise task execution, calendar management speed, professional tone, and shift attendance directly inside our physical Lahore office.
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
            
            {/* SECTION 1: IN-OFFICE EA DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Executive Support Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate missed appointments, inbox chaos, delayed action items, and unmonitored home freelancers. Our executive assistants work inside our physical office headquarters in Lahore, Pakistan, operating live during your exact schedule.
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
                  02. Working Hours Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Executive Shift Schedules
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **Junior EA, Mid-Level Executive Assistant, ya Senior Chief of Staff level** jo bhi assistant select karenge, wo aapke shift timings mein **live available hoga aur aapke working hours ke mutabiq hi executive tasks execute karega**.
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
                      Whether you operate in US Eastern (EST), Pacific (PST), European (CET), UK (GMT), or Australian (AEST) time, your executive assistant clocks in physically to align with your daily calendar.
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
                      Your assistant works exclusively for you or your C-suite leadership team. No shared workload or split focus across other clients.
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
                      The assistant operates at our Lahore facility with biometric tracking, fiber internet, and generator backup—ensuring zero interruptions to executive communications.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Proactive Daily Execution
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      From morning briefing summaries to evening schedule confirmations, your assistant actively drives task completion before items become urgent.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL EXECUTIVE WORKFLOW TYPES */}
            <div id="ea-support-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Capabilities Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every C-Suite Assistant & Daily Task Workflow We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained assistants handle every executive support task—from high-stakes calendar management to travel coordination, meeting minutes, and financial admin.
                </p>
              </div>

              <div className="space-y-6">
                {eaSupportTypes.map((cat, idx) => {
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
                  Daily Briefings, Task Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We maintain strict quality control and structured task tracking so executives stay informed and organized without micromanagement.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Executive Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Morning Briefing</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Daily agenda breakdown, urgent inbox highlights, upcoming meetings, and pending decisions.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Task Log</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Summary of completed action items, pending team deliverables, and travel arrangement confirmations.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Expense & Admin Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Reconciled credit card statements, vendor invoice logs, and recurring subscription reviews.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Executive Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual audit of executive support workflows, software tool upgrades, and shift alignment scaling.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned executive assistant fails to meet your written communication standards, details accuracy, or discretion expectations, inform your Account Manager. We will take immediate action to replace them with an equally qualified in-office assistant at zero extra cost.
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
                  Junior, Mid-Level & Senior Executive Assistant Plans
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time executive assistants operating as your dedicated employee during your working hours. Flat monthly pricing with zero hidden fees.
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
                  06. Strategic & Financial Edge
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire Executive Assistants From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Executive Support Cost Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local US/UK C-suite Executive Assistant costs $4,500–$7,000/month plus health benefits and taxes. Our in-office assistants deliver polished English communication, high organization, and reliability at a fraction of the cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>In-Office Supervision & Data Security</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers working from home, our assistants operate inside a secure facility with continuous monitoring, strict NDAs, and reliable infrastructure.
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
