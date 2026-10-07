"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Calendar, 
  Mail, 
  FileText, 
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
  PhoneCall, 
  CheckSquare, 
  PieChart, 
  Globe, 
  CalendarCheck, 
  UserCheck
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function ExecutiveAssistantServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office EA Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Executive Alignment" },
    { id: "ea-workflow-types", label: "All Executive Assistant Tasks" },
    { id: "reporting-guarantee", label: "Executive Audits & SLAs" },
    { id: "tiered-pricing", label: "Executive Assistant Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Efficiency vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Executive Office HQ",
      desc: "Your dedicated executive assistants operate directly inside our high-security, supervised corporate office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and executive operations managers."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Executive Timezone",
      desc: "Zero scheduling friction or communication delay. Whichever EA tier you select will clock in physically to cover your exact working hours—EST, PST, CET, GMT, or AEST for seamless calendar management."
    },
    {
      icon: FileCheck2,
      title: "Formal Confidentiality & Security NDAs",
      desc: "We sign strict legally binding non-disclosure agreements defining data privacy, password security benchmarks, inbox management protocols, and professional executive communication standards."
    },
    {
      icon: RefreshCw,
      title: "Immediate Assistant Replacement Guarantee",
      desc: "If an assigned executive assistant does not match your communication style, organization speed, or software proficiency standards, we replace them immediately with an equally vetted professional at zero extra fee."
    }
  ];

  // COMPREHENSIVE EXECUTIVE ASSISTANT WORKFLOW TYPES
  const eaWorkflowTypes = [
    {
      icon: Calendar,
      title: "1. Advanced Calendar & Schedule Management",
      desc: "Rigorous calendar coordination, timezone tracking, and meeting gatekeeping.",
      details: [
        "Managing Google Calendar, Outlook Calendar, and Calendly scheduling links.",
        "Prioritizing meeting requests, resolving scheduling conflicts, and setting buffer times.",
        "Coordinating multi-timezone international calls and board meetings.",
        "Sending calendar invites, preparing meeting agendas, and tracking RSVPs."
      ]
    },
    {
      icon: Mail,
      title: "2. Executive Inbox & Email Triage",
      desc: "Proactive email management to keep your primary inbox clean and organized.",
      details: [
        "Sorting, flagging, and categorizing incoming emails by urgency and importance.",
        "Drafting professional email replies, follow-ups, and newsletter responses.",
        "Unsubscribing from promotional clutter and organizing folder structures/labels.",
        "Flagging high-priority VIP messages for immediate executive attention."
      ]
    },
    {
      icon: FileText,
      title: "3. Document Preparation & Presentation Design",
      desc: "Professional creation of business reports, memos, and executive slide decks.",
      details: [
        "Designing polished PowerPoint and Google Slides presentations for client pitches or board meetings.",
        "Formatting Word documents, meeting minutes, PDF agreements, and SOP manuals.",
        "Proofreading corporate correspondence and ensuring flawless grammar and tone.",
        "Compiling weekly executive summary briefs and project status reports."
      ]
    },
    {
      icon: PhoneCall,
      title: "4. Travel Coordination & Logistics",
      desc: "End-to-end itinerary planning and corporate travel management.",
      details: [
        "Booking international and domestic flights, hotels, rental cars, and airport transfers.",
        "Creating comprehensive, day-by-day travel itineraries with confirmation numbers.",
        "Researching venue options and organizing corporate dinners or client retreats.",
        "Handling flight changes, travel cancellations, and airline customer support claims."
      ]
    },
    {
      icon: CheckSquare,
      title: "5. Project Tracking & Task Coordination",
      desc: "Keeping internal teams aligned and projects moving forward on schedule.",
      details: [
        "Tracking tasks and deadlines inside Asana, Trello, ClickUp, Notion, and Monday.com.",
        "Following up with department heads or contractors on pending deliverables.",
        "Taking detailed notes during team syncs and assigning post-meeting action items.",
        "Monitoring project milestone progress and reporting roadblocks to leadership."
      ]
    },
    {
      icon: PieChart,
      title: "6. Business Research & Data Organization",
      desc: "Thorough market research and administrative data compilation.",
      details: [
        "Conducting competitor research, pricing analysis, and industry trend reports.",
        "Building clean, organized Excel and Google Sheets databases for CRM or financial tracking.",
        "Processing expense reports, receipt logging, and basic invoice organization.",
        "Performing ad-hoc administrative research tasks to save executive time."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Executive Assistant",
      badge: "6M - 1 Year Experience",
      price: "$749",
      period: "/ month",
      desc: "Ideal for calendar scheduling, email sorting, travel bookings, basic data entry, and routine administrative support.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Working Hours",
        "Seated in Our Physical Executive HQ Floor",
        "Google/Outlook Calendar & Inbox Triage",
        "Travel Itinerary Booking & Coordination",
        "Daily Task Progress & Summary Reports",
        "Immediate Assistant Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Executive Assistant",
      badge: "2+ Years Experience",
      price: "$1,299",
      period: "/ month",
      desc: "Best for advanced executive gatekeeping, presentation deck creation, project management tracking, expense reports, and cross-department coordination.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Working Hours",
        "Seated in Our Physical Executive HQ Floor",
        "Advanced Inbox Management & Meeting Gatekeeping",
        "PowerPoint & Google Slides Presentation Design",
        "Asana / Trello / ClickUp Project Tracking",
        "Daily, Weekly & Monthly Executive Logs",
        "Immediate Assistant Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Chief of Staff / Executive Partner",
      badge: "5+ Years Experience",
      price: "$1,799",
      period: "/ month",
      desc: "Seasoned chief of staff capable of managing high-level business operations, executive workflows, strategic research, and team oversight.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Working Hours",
        "Seated in Our Physical Executive HQ Floor",
        "High-Level Executive Operations & Strategy",
        "Cross-Department Project Management Oversight",
        "Rigorous Confidentiality & Executive Governance",
        "Dedicated Executive Operations Manager Oversight"
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
            <span className="text-[#FA5B16]">Executive Assistant Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Executive Assistants & Chiefs of Staff</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Executive Assistants Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated executive assistant will physically sit inside our high-security corporate office in Lahore, Pakistan—managing your calendar, triaging your inbox, preparing presentations, and coordinating travel live during your exact business shift.
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Executive Desk</h3>
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
                    We supervise organizational efficiency, data confidentiality, task output, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Executive Lead
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
                  01. Corporate Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Executive Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate disorganized communication, missed meeting reminders, security vulnerabilities, and unmonitored home freelancers. At Talentharbor, your executive assistants work inside our secure, managed corporate office in Lahore, Pakistan.
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

            {/* SECTION 2: WORKING HOURS & EXECUTIVE ALIGNMENT */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Executive Timezone Alignment
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Availability In Your Working Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Whether you choose a Junior, Mid-Level, or Senior executive assistant through Talentharbor, they operate exclusively during your local shift hours, ensuring your calendar and inbox are managed in real-time.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your executive assistant clocks in to cover your exact operational window.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Assistant
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative manages schedules and correspondence exclusively for your executive profile. No shared resources or split attention across multiple competing executives.
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
                      Assistants work on dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee zero dropped meetings or delayed communications.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Priority Crisis Support
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need urgent rescheduling during executive travel emergencies or last-minute investor pitches? We provide reliable administrative backing when you need it most.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: EXECUTIVE ASSISTANT WORKFLOWS */}
            <div id="ea-workflow-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Capabilities & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Executive Assistant & Administrative Tasks We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained executive assistants master calendar gatekeeping, email triage, presentation design, travel logistics, and internal project coordination.
                </p>
              </div>

              <div className="space-y-6">
                {eaWorkflowTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, EXECUTIVE AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Executive Audits, Time Logs & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track calendar optimization, email backlog clearance, and task execution with structured reporting so you maintain 100% administrative transparency.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Executive Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Executive Brief</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Morning schedule overview, urgent inbox items highlighted, and pending task checklists.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Schedule Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Summary of completed administrative tasks, upcoming travel bookings, and project milestones.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Efficiency Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Evaluation of executive time saved, inbox response velocity, and administrative workflow bottlenecks.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Strategic Planning</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quarterly administrative roadmap planning, travel budgeting, and corporate calendar alignment.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Assistant Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned executive assistant makes scheduling errors, lacks organizational speed, or fails to maintain confidentiality standards, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office executive assistant at zero extra cost.
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
                  Junior, Mid-Level & Senior Executive Assistant Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time executive assistants operating as your dedicated corporate team member during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Executive Assistants From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Executive Support Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK executive assistants cost $4,000–$6,500/month plus benefits. Talentharbor provides elite, vetted administrative professionals with immaculate English communication for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Corporate Floor Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our executive assistants operate in a supervised facility with strict security protocols, fiber connectivity, power backups, and continuous corporate management.
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
