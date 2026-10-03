"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Truck, 
  PhoneCall, 
  MessageSquare, 
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
  MapPin, 
  Navigation, 
  AlertTriangle, 
  Headphones, 
  CalendarCheck, 
  UserCheck, 
  Radio, 
  Route, 
  FileSpreadsheet, 
  PhoneIncoming, 
  PhoneOutgoing, 
  ShieldAlert,
  PackageCheck
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function DriverDispatchSupportServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Dispatch HQ Model" },
    { id: "working-hours-dedication", label: "Working Hours & Fleet Coverage" },
    { id: "dispatch-support-types", label: "Driver Chat, Call & Dispatch Scope" },
    { id: "reporting-guarantee", label: "Fleet Audits & Dispatch SLAs" },
    { id: "tiered-pricing", label: "Dispatch Representative Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Speed)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Dispatch HQ Floor",
      desc: "Your dedicated driver chat, call, and dispatch coordinators operate directly inside our supervised office in Lahore, Pakistan. Equipped with multi-monitor tracking rigs, fiber lines, backup generators, and live shift managers."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Operational Shifts",
      desc: "Zero communication lag for drivers on the road. Whichever agent tier you select will clock in physically to cover your exact local shift—day, night, or 24/7 graveyard dispatch windows."
    },
    {
      icon: FileCheck2,
      title: "Formal Dispatch SLAs & Protocols",
      desc: "We sign strict service agreements defining driver call answer speed, route exception response times, load assignment speed, emergency handling protocols, and non-disclosure data security."
    },
    {
      icon: RefreshCw,
      title: "Immediate Dispatcher Replacement Guarantee",
      desc: "If a dispatch coordinator or driver support rep fails to meet your speed, stress management, or load board accuracy standards, we replace them instantly with a trained substitute."
    }
  ];

  // COMPREHENSIVE DRIVER CHAT, CALL & DISPATCH SUPPORT TYPES
  const dispatchSupportTypes = [
    {
      icon: Radio,
      title: "1. Real-Time Driver Voice Call & Radio Helpline",
      desc: "Immediate voice assistance for drivers on the road facing pickup, delivery, or traffic issues.",
      details: [
        "Inbound driver call handling via VOIP (Aircall, RingCentral, Dialpad, Samsara Voice).",
        "Assisting drivers with check-in procedures, facility gate codes, and dock directions.",
        "De-escalating stressed drivers and coordinating directly with warehouse managers.",
        "24/7 emergency hotline dispatch for breakdown, accident, or weather delays."
      ]
    },
    {
      icon: MessageSquare,
      title: "2. Fleet Mobile App & WhatsApp Live Driver Chat",
      desc: "Fast, asynchronous mobile messaging for active drivers needing quick load details.",
      details: [
        "In-app chat assistance via driver mobile apps, WhatsApp Business, or Telegram.",
        "Sending instant BOL (Bill of Lading), POD (Proof of Delivery), and load rate confirmations.",
        "Answering driver queries on detention pay, layovers, fuel advance, and pay stubs.",
        "Sending live traffic advisories, route changes, and weather alerts directly to driver chat."
      ]
    },
    {
      icon: Route,
      title: "3. Freight Dispatching, Load Assignment & Broker Calls",
      desc: "Comprehensive freight dispatch management connecting brokers, shippers, and drivers.",
      details: [
        "Booking profitability loads on DAT, Truckstop, and 123Loadboard.",
        "Calling brokers to negotiate freight rates, confirm pickup times, and lock ratecons.",
        "Assigning loads to available owner-operators or fleet drivers based on location & HOS.",
        "Managing carrier packets, broker-carrier agreements, and W-9 documentation."
      ]
    },
    {
      icon: Navigation,
      title: "4. Live GPS Telematics & Route Monitoring",
      desc: "Active GPS tracking to ensure loads arrive on time and routes stay optimized.",
      details: [
        "Live fleet GPS monitoring via Samsara, Motive (Keeptruckin), Geotab, or Verizon Connect.",
        "Proactive broker and customer updates for ETA changes or transit delays.",
        "Rerouting drivers around heavy traffic, toll plazas, or severe weather conditions.",
        "Hours of Service (HOS) & ELD log monitoring to prevent DOT safety violations."
      ]
    },
    {
      icon: PackageCheck,
      title: "5. Last-Mile Delivery & Field Service Dispatch",
      desc: "High-density local dispatch for courier, van delivery, and field service fleets.",
      details: [
        "Dispatching van and bike delivery drivers for e-commerce, food, or local parcel logistics.",
        "Re-assigning failed delivery attempts or incorrect customer addresses in real time.",
        "Calling end-customers to confirm delivery access, apartment gates, and drop-off notes.",
        "Updating Shopify, Onfleet, Circuit, or custom logistics dashboards continuously."
      ]
    },
    {
      icon: ShieldAlert,
      title: "6. Claims, POD Verification & Exception Handling",
      desc: "Post-delivery paperwork, damaged cargo handling, and detention payment collection.",
      details: [
        "Reviewing and auditing driver-uploaded PODs and signed BOLs for completeness.",
        "Filing detention time claims with freight brokers when drivers are delayed at docks.",
        "Documenting cargo damage, missing freight, or overage/shortage/damage (OS&D) reports.",
        "Submitting completed load packets to factoring companies or billing teams."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Driver Support Agent",
      badge: "Inbound Driver Desk",
      price: "$799",
      period: "/ month",
      desc: "Ideal for handling routine driver check-in calls, WhatsApp load status chats, basic gate directions, and logging POD paperwork into your software.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Schedule",
        "Seated in Our Physical Dispatch Floor HQ",
        "Driver Call & WhatsApp Chat Assistance",
        "Basic GPS Tracking & POD Document Uploads",
        "Daily Shift Log & Driver Status Reports",
        "Immediate Agent Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Dispatch Coordinator",
      badge: "Most Popular Choice",
      price: "$1,399",
      period: "/ month",
      desc: "Best for active freight dispatching, broker rate negotiation, ELD/HOS monitoring, emergency breakdown rerouting, and last-mile exception handling.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Schedule",
        "Seated in Our Physical Dispatch Floor HQ",
        "DAT / Truckstop Load Booking & Broker Calls",
        "Samsara / Motive ELD & Live Route Tracking",
        "Detention Claims & OS&D Exception Resolution",
        "Daily, Weekly & Monthly On-Time Fleet Reports",
        "Immediate Dispatcher Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Dispatch Operations Lead",
      badge: "Fleet Dispatch Manager",
      price: "$1,899",
      period: "/ month",
      desc: "Experienced fleet dispatch manager capable of running multi-truck operations, optimizing lane profitability, managing dispatchers, and handling complex claims.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift Schedule",
        "Seated in Our Physical Dispatch Floor HQ",
        "Full Freight Lane Optimization & Broker Strategy",
        "Carrier Safety Compliance & ELD Audit Oversight",
        "Daily, Weekly, Monthly & Yearly Fleet Audits",
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
    <main className="bg-[#FAF6F2] mt-[-100px] pt-14 text-[#0F0C09] select-none min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-5xl mx-auto space-y-4 text-left">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F0C09]/60 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FA5B16] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FA5B16]">Driver Chat, Call & Dispatch Support</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Truck className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Dispatch & Driver Support Agents</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Driver Chat, Call & Dispatch Agents Working Live In Your Shift Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated driver support and dispatch coordinator will physically sit inside our office floor in Lahore, Pakistan, operating live during your exact operational shift—handling driver calls, load assignments, GPS telematics, broker ratecons, and last-mile logistics.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Dispatch Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Dispatch Operations</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Supervised Facility</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise driver call response times, route monitoring, dispatch accuracy, and shift attendance directly inside our Lahore facility.
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
            
            {/* SECTION 1: IN-OFFICE DISPATCH MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Dispatch Center Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Dispatch & Driver Support Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate missed driver calls, delayed load updates, and unmonitored home freelancers. Our dispatch representatives work inside our physical office headquarters in Lahore, Pakistan, operating live during your exact schedule.
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

            {/* SECTION 2: WORKING HOURS & FLEET COVERAGE */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Operational Shift Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Your Operational Shift Schedule
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **Junior, Mid-Level, ya Senior level** jo bhi dispatch representative select karenge, wo aapke operational shift timings mein **live available hoga aur aapke working hours ke mutabiq hi drivers or fleet ko handle karega**.
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
                      Whether you operate US Long-Haul (EST/PST), Night Dispatch, European Logistics (CET/GMT), or Australian Shifts (AEST), your agent clocks in physically to cover your exact driver operating hours.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Fleet Dispatcher
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative coordinates exclusively for your fleet or freight company. No split attention across competing carrier accounts.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Physical Office Workstations
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      The agent clocks in at our Lahore office with multi-screen monitoring, high-speed fiber internet, and generator backup—ensuring zero offline gaps for drivers on the road.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        24/7 Fleet Coverage Options
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need weekend dispatch or round-the-clock 24/7 driver hotline support? We configure overlapping shift schedules so your trucks are never left without support.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL DISPATCH & DRIVER SUPPORT TYPES */}
            <div id="dispatch-support-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Dispatch Capabilities
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every Driver Chat, Call & Dispatch Task We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained agents handle all real-time logistics touchpoints—from inbound driver phone calls and mobile app chats to freight load booking, GPS telematics, and detention claims.
                </p>
              </div>

              <div className="space-y-6">
                {dispatchSupportTypes.map((cat, idx) => {
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
                  04. Fleet Quality Assurance
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Daily Dispatch Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We measure dispatch performance with clear logistics metrics so you maintain full visibility over driver satisfaction, route efficiency, and load completion.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Fleet Performance Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Shift Logs</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Driver call logs, assigned loads, on-time delivery percentages, and exception reports.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Fleet Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Driver feedback scores, detention payouts, fuel efficiency tracking, and ELD compliance checks.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Profit Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Gross revenue per mile (RPM), broker rate negotiations audit, and paperwork processing speed.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Logistics Strategy</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual review of dispatch software stack, telematics integrations, and shift scaling plans.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned dispatcher fails to handle driver calls with required speed, struggles with English communication, or makes errors on load assignments, notify your Account Manager. We will replace them immediately with a qualified in-office representative at zero additional cost.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 5: TIERED MONTHLY SALARY PLANS */}
            <div id="tiered-pricing" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  05. Flat Monthly Pricing
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Junior, Mid-Level & Senior Dispatch Representative Salaries
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time dispatch representatives operating as your dedicated employee during your working hours. Flat monthly salary with zero per-call or per-load commissions.
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
                  06. Logistics & Budget Advantage
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire Dispatch Specialists From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Dispatch Cost Reduction</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local US dispatcher costs $4,000–$6,000/month plus overtime and benefits. Our in-office agents offer skilled English coordination, fleet tracking, and high reliability at a fraction of the cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>In-Office Operational Oversight</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmonitored home-based freelancers who might miss calls or experience connectivity issues, our agents work in our Lahore headquarters under direct supervisor attendance and performance management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 7: HOW WE WORK */}
            <div id="how-we-work-section" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  07. Onboarding Process
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  How We Get Your Dispatcher Up & Running
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm">
                <HowItWorks />
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
