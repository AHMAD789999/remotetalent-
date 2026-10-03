"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
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
  CalendarCheck, 
  UserCheck, 
  Briefcase, 
  Mail, 
  PhoneCall, 
  FileSpreadsheet, 
  Headphones, 
  ClipboardList
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function GeneralVirtualAssistanceServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office VA Operation Model" },
    { id: "working-hours-dedication", label: "Working Hours & Availability" },
    { id: "development-stack-types", label: "Virtual Assistant Tasks & Scope" },
    { id: "reporting-guarantee", label: "Daily Logs & SLA Guarantee" },
    { id: "tiered-pricing", label: "Assistant Plans & Pricing" },
    { id: "why-hire-us", label: "Why Hire From Us (Value vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Supervised HQ",
      desc: "Your virtual assistant operates directly inside our professional operations office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup power, and continuous team supervision."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Working Hours",
      desc: "Zero communication lag. Whichever virtual assistant tier you select will clock in physically to cover your exact operational shift—EST, PST, CET, GMT, or AEST for seamless daily task handovers."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Strict Data Security",
      desc: "We sign legally binding agreements defining task turnaround times, data privacy benchmarks, confidentiality standards, and strict intellectual property (IP) protection NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Assistant Replacement Guarantee",
      desc: "If an assistant does not match your communication speed, administrative style, or tool proficiency standards, we replace them immediately with an equally vetted professional at zero extra fee."
    }
  ];

  // VA TASKS & CAPABILITIES DETAILED
  const developmentStackTypes = [
    {
      icon: Mail,
      title: "1. Executive Email & Inbox Management",
      desc: "Streamline your communication channels with professional inbox triage and swift client correspondence.",
      details: [
        "Daily email triage, categorization, flagging urgent items, and archiving spam.",
        "Drafting professional email responses, follow-ups, and newsletter broadcasts.",
        "Managing customer support inquiries, ticketing queues, and FAQ resolutions.",
        "Setting up email filters, templates, and automated auto-responder workflows."
      ]
    },
    {
      icon: CalendarCheck,
      title: "2. Calendar & Schedule Coordination",
      desc: "Eliminate scheduling friction with meticulous calendar management and meeting preparation.",
      details: [
        "Managing executive calendars, booking appointments, and coordinating time zones.",
        "Setting up meeting agendas, sending calendar invites, and tracking RSVPs.",
        "Arranging travel itineraries, hotel bookings, and flight reservations.",
        "Following up with attendees for rescheduling and post-meeting action item summaries."
      ]
    },
    {
      icon: FileSpreadsheet,
      title: "3. Data Entry & Spreadsheet Management",
      desc: "Maintain pristine records, organized databases, and accurate business documentation.",
      details: [
        "Data entry into CRM platforms, Google Sheets, Excel, and database systems.",
        "Formatting spreadsheets, cleaning raw data, and building pivot tables/charts.",
        "Product catalog updates, inventory spreadsheet tracking, and price list syncs.",
        "Digitizing physical documents, receipts, invoices, and PDF forms."
      ]
    },
    {
      icon: ClipboardList,
      title: "4. Research & Lead Generation",
      desc: "Scale your sales pipeline and market intelligence with targeted web and competitor research.",
      details: [
        "Prospecting B2B leads, gathering verified email addresses, and LinkedIn research.",
        "Competitor price tracking, feature analysis, and market trend reports.",
        "Vendor sourcing, price comparison spreadsheets, and supplier outreach.",
        "Compiling comprehensive industry reports and summaries for decision making."
      ]
    },
    {
      icon: Headphones,
      title: "5. Customer Support & Live Chat Operations",
      desc: "Deliver exceptional customer experiences across email, live chat, and social media channels.",
      details: [
        "Handling live chat support on e-commerce websites and SaaS applications.",
        "Processing customer refunds, order tracking inquiries, and shipping updates.",
        "Managing social media direct messages (DMs) and engaging with follower comments.",
        "Documenting customer feedback and reporting recurring product issues to management."
      ]
    },
    {
      icon: Briefcase,
      title: "6. General Admin & Document Preparation",
      desc: "Handle day-to-day business paperwork, formatting, and administrative coordination.",
      details: [
        "Preparing professional business reports, proposals, and presentation decks.",
        "Invoicing clients, tracking accounts receivable, and expense report organization.",
        "Proofreading documents, blog posts, and marketing copy for grammatical clarity.",
        "Coordinating team check-ins, minute-taking, and task tracking across project boards."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Virtual Assistant",
      badge: "Data Entry & Admin",
      price: "$599",
      period: "/ month",
      desc: "Ideal for routine data entry, email sorting, basic calendar management, and straightforward administrative tasks.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Operations HQ",
        "Email Management & Data Entry",
        "High-Speed Fiber Workstation Setup",
        "Daily Task Logs & Progress Updates",
        "Immediate Assistant Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Executive Assistant",
      badge: "Most Popular Choice",
      price: "$899",
      period: "/ month",
      desc: "Best for executive calendar coordination, customer support, lead generation, and complex multi-tool workflow management.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Operations HQ",
        "Executive Inbox & Calendar Management",
        "Lead Generation & CRM Data Hygiene",
        "Live Chat & Customer Support Handling",
        "Daily Standups & Weekly Task Planning",
        "Immediate Assistant Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Operations Coordinator",
      badge: "Project Lead & Ops",
      price: "$1,299",
      period: "/ month",
      desc: "Seasoned administrative lead responsible for managing complex operational workflows, vendor coordination, and team oversight.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Working Hours",
        "Seated in Our Physical Operations HQ",
        "Advanced Operations & Workflow Management",
        "Standard Operating Procedure (SOP) Creation",
        "Rigorous Quality Audits & Task Oversight",
        "Dedicated Operations Manager Support"
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
            <span className="text-[#FA5B16]">Talentharbor Virtual Assistance</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Virtual Assistants</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Virtual Assistants Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or assistant tier you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your virtual assistant will physically sit inside our high-security operations facility in Lahore, Pakistan, managing your emails, calendars, data entry, and customer support live during your exact business shift.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Virtual Assistant</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Operations</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Operations Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise task turnaround times, communication benchmarks, and team attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Consult With Our Operations Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE OPERATION MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor & Infrastructure
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Operations Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate unreliable freelancers, communication delays, and unmonitored task execution. At Talentharbor, your virtual assistants work inside our secure, managed operations facility in Lahore, Pakistan.
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
                  Whether you choose a Junior, Mid-Level, or Senior virtual assistant through Talentharbor, they operate exclusively during your local shift hours, joining your daily briefings and syncing in real-time.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your assistant clocks in to cover your exact operational window.
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
                      Your hired assistant works exclusively on your tasks and business operations. No shared resources or split focus across multiple competing agency accounts.
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
                      Assistants work on dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee zero communication drop-offs.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Flexible Task Scheduling
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need urgent inbox clearance, peak season customer support coverage, or extra data entry bandwidth? We scale administrative support instantly to fit your workload.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: VIRTUAL ASSISTANT TASKS & SCOPE */}
            <div id="development-stack-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Administrative Capabilities & Scope
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All General Virtual Assistant Services We Provide
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our virtual assistants are trained professionals skilled in executive support, calendar management, database organization, and customer communications.
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

            {/* SECTION 4: DAILY LOGS, AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Accountability & Quality Assurance
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Daily Task Logs, Quality Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We monitor task turnaround times, communication responsiveness, accuracy benchmarks, and data confidentiality to ensure flawless administrative delivery.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Administrative Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Task Summaries</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Detailed logs of completed emails, scheduled meetings, updated spreadsheets, and pending items.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Quality Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Operations manager oversight on task accuracy, communication speed, and workflow efficiency.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly SLA Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Review of overall administrative output, responsiveness metrics, and support ticket resolution rates.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">SOP Optimization</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Continuous refinement of standard operating procedures to streamline repetitive business tasks.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Assistant Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned virtual assistant fails to match your communication speed, administrative expectations, or task accuracy standards, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office professional at zero extra cost.
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
                  Junior, Mid-Level & Senior Virtual Assistant Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time virtual assistants operating as your dedicated team member during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Virtual Assistants From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Administrative Cost Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK executive assistants cost $3,500–$5,000/month. Talentharbor provides elite, vetted virtual assistants with strong administrative acumen for a fraction of that cost without compromising quality.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Operations Oversight</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our virtual assistants operate in a supervised facility with strict security protocols, fiber connectivity, power backups, and continuous management supervision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 7: HOW WE WORK (Added to fix missing anchor ID) */}
            <div id="how-we-work-section" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  07. Onboarding Process
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  How We Work & Get You Started
                </h2>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS IMPORTED COMPONENT */}
      <div className="border-t border-[#0F0C09]/10">
        <HowItWorks />
      </div>

    </main>
  );
}
