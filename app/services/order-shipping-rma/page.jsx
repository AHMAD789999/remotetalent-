"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Truck, 
  RotateCcw, 
  PackageCheck, 
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
  PackageX, 
  Barcode, 
  ClipboardCheck, 
  UserCheck, 
  CalendarCheck, 
  AlertTriangle, 
  Layers, 
  FileSpreadsheet, 
  Scale, 
  Boxes
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function OrderShippingRMAServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Logistics Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Dispatch SLAs" },
    { id: "shipping-rma-types", label: "All Shipping & RMA Workflows" },
    { id: "reporting-guarantee", label: "Carrier Claims & Quality Audits" },
    { id: "tiered-pricing", label: "Logistics Specialist Pricing" },
    { id: "why-hire-us", label: "Why Hire From Us (ROI vs Carrier Loss)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Operations HQ",
      desc: "Your dedicated shipping and RMA coordinator operates directly inside our supervised office in Lahore, Pakistan. Equipped with dual fiber internet, dual-monitor workstations, backup generator power, and floor management."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Shipping & Pickup Hours",
      desc: "Zero carrier cutoff delays or ignored return queues. Whichever specialist tier you select will clock in physically to match your local warehouse or 3PL operational shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal SLAs & Carrier Claim Recovery",
      desc: "We establish strict service level agreements covering return label issuance times, damaged package inspection logs, carrier loss claims, and restocking accuracy metrics."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned shipping and RMA representative fails to maintain target label generation speed, inspection accuracy, or customer issue resolution, we replace them immediately at zero extra cost."
    }
  ];

  // COMPREHENSIVE SHIPPING & RMA WORKFLOW TYPES
  const shippingRmaTypes = [
    {
      icon: Truck,
      title: "1. Multi-Carrier Dispatch & Shipping Label Generation",
      desc: "Daily shipping rate shopping, label creation, and carrier manifest processing.",
      details: [
        "Generating shipping labels via ShipStation, Shippo, EasyPost, FedEx, UPS, DHL, and USPS.",
        "Executing rate shopping logic to automatically route parcels through the lowest cost, fastest carrier.",
        "Managing international export customs documentation, HS code tags, and commercial invoices.",
        "Fulfilling split-shipments and backorders across multi-node warehouse networks."
      ]
    },
    {
      icon: RotateCcw,
      title: "2. End-to-End RMA Authorization & Return Label Management",
      desc: "Seamless customer return portals, authorization rules, and return tracking.",
      details: [
        "Issuing pre-paid return shipping labels and Return Merchandise Authorizations (RMA).",
        "Configuring return policy rules in Loop Returns, Returnly, AfterShip, or Gorgias.",
        "Managing address validation and return fraud verification before issuing labels.",
        "Providing live tracking assistance to customers returning items."
      ]
    },
    {
      icon: ClipboardCheck,
      title: "3. Warehouse Return Inspection & Restock Logging",
      desc: "Accurate physical condition logging, grading, and inventory adjustments.",
      details: [
        "Verifying warehouse receiving logs for returned package condition (Grade A, Refurbished, Scrap).",
        "Auditing returned items against customer claims to prevent fraudulent or empty box returns.",
        "Triggering automatic inventory restock counts inside Shopify, WooCommerce, or WMS systems.",
        "Processing instant customer exchanges, store credits, or original payment refunds."
      ]
    },
    {
      icon: AlertTriangle,
      title: "4. Damaged, Lost & Stolen Freight Claims",
      desc: "Recovering money lost to carrier damage, missing packages, and transit delays.",
      details: [
        "Filing and monitoring insurance claims directly with FedEx, UPS, DHL, and parcel insurers.",
        "Gathering photos, customer proof of loss, and invoice documentation required by carriers.",
        "Tracking payout statuses and reconciling refunded claim amounts back into your account.",
        "Reshipping replacement orders immediately to preserve customer retention."
      ]
    },
    {
      icon: PackageX,
      title: "5. Address Exception & Undeliverable Return (RTS) Handling",
      desc: "Proactive management of failed carrier deliveries and returned-to-sender parcels.",
      details: [
        "Monitoring carrier Exception reports for incorrect addresses, recipient absent, or refused delivery.",
        "Reaching out to buyers proactively to update correct shipping details before packages are returned.",
        "Processing Return-To-Sender (RTS) stock back into inventory upon warehouse delivery.",
        "Managing address change requests for in-transit parcels via carrier intercept tools."
      ]
    },
    {
      icon: Scale,
      title: "6. B2B Freight, LTL/FTL & Customs Duty Tracking",
      desc: "Heavier parcel routing, palletized freight dispatches, and cross-border duties.",
      details: [
        "Coordinating Less-Than-Truckload (LTL) and Full-Truckload (FTL) bill of lading (BOL) documents.",
        "Auditing carrier dimensional weight charges and overage fees to eliminate billing errors.",
        "Handling Duty Delivered Paid (DDP) and Duty Delivered Unpaid (DDU) customer queries.",
        "Communicating with customs brokers to clear held international parcels."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Shipping & RMA Associate",
      badge: "Routine Label Desk",
      price: "$749",
      period: "/ month",
      desc: "Ideal for daily shipping label generation, address validation, basic RMA label issuance, Return-To-Sender tracking, and routine customer dispatch updates.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "ShipStation / Shippo Label Generation",
        "RMA Return Label Issuance & Basic Rules",
        "Address Exception & RTS Log Tracking",
        "Immediate Specialist Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Logistics & RMA Coordinator",
      badge: "Most Popular Choice",
      price: "$1,299",
      period: "/ month",
      desc: "Best for full return lifecycle management, warehouse inspection grading, carrier claim filing, rate shopping optimization, and Loop/Returnly workflow administration.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "Loop / Returnly Portal Administration",
        "Warehouse Condition Logging & Auto-Restock",
        "Carrier Loss & Damage Claim Management",
        "Multi-Carrier Rate Shopping & International Customs",
        "Daily, Weekly & Monthly Return SLA Reports",
        "Immediate Agent Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Supply Chain & Logistics Operations Lead",
      badge: "Logistics Operations Lead",
      price: "$1,799",
      period: "/ month",
      desc: "Experienced logistics lead capable of auditing carrier billings, setting up automated multi-node fulfillment routing, negotiating 3PL SLAs, and reducing total return friction.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "LTL/FTL Freight & Cross-Border Customs Strategy",
        "Carrier Audit & Overcharge Recovery",
        "Automated RMA Workflow Architecture",
        "Daily, Weekly, Monthly & Yearly Freight Audits",
        "Dedicated Floor Operations Manager Oversight"
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
            <span className="text-[#FA5B16]">Order Shipping & RMA Handling</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Truck className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Logistics & RMA Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Order Shipping & RMA Specialists Working Live In Your Shift
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated shipping and RMA handling specialist will physically sit inside our supervised office in Lahore, Pakistan—managing carrier dispatches, return label queues, warehouse inspection logs, and carrier claims live during your exact hours.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Shipping & RMA Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Logistics Desk</h3>
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
                    We supervise return verification, label generation speed, carrier claim logs, and shift attendance directly inside our Lahore facility.
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
            
            {/* SECTION 1: IN-OFFICE LOGISTICS MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Shipping & Return Desk Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate delayed carrier manifests, unhandled return portals, uncollected damage claims, and unmonitored home freelancers. Our shipping and RMA coordinators work inside our physical office facility in Lahore, Pakistan, operating live during your exact shift schedule.
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

            {/* SECTION 2: WORKING HOURS & DISPATCH SLAS */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Operational Shift Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Your Shipping & Carrier Cutoffs
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **Junior, Mid-Level, ya Senior level** jo bhi shipping & RMA representative select karenge, wo aapke operational shift timings mein **live available hoga aur aapke working hours ke mutabiq hi carrier queues aur return logs manage karega**.
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
                      Whether your warehouse operates in North America (EST/PST), Europe (CET/GMT), or Australia (AEST), your specialist clocks in physically to align with carrier pickup cutoff times.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Logistics Specialist
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired resource works exclusively on your store account—ensuring zero split attention across other client dispatches.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <Building2 className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Physical Office Facility
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Operating from our Lahore HQ floor with dual-monitor data setups, uninterrupted fiber internet, and floor manager supervision to handle heavy daily parcel volume.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Same-Day RMA Processing
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Return requests and RMA ticket queues are reviewed continuously to ensure return labels or refunds are issued within guaranteed target windows.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL SHIPPING & RMA WORKFLOW TYPES */}
            <div id="shipping-rma-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Capabilities Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every Order Shipping & Return Task We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained logistics agents manage every phase of parcel movement—from rate shopping and label printing to RMA authorization, carrier loss claims, and restocking inventory.
                </p>
              </div>

              <div className="space-y-6">
                {shippingRmaTypes.map((cat, idx) => {
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
                  Carrier Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track dispatch efficiency, carrier claim recovery rates, and return restock accuracy through structured reports so you maintain full operational control.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Shipping Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Dispatch Summary</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Log of generated shipping labels, unfulfilled exceptions, RMA approvals, and carrier pickups.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Return & RMA Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Breakdown of return causes, warehouse inspection outcomes, restocking counts, and refund totals.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Carrier Claim Report</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Reconciliation of lost/damaged package claims submitted, pending approval, and carrier payouts.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Logistics Optimization</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual review of shipping spend, carrier rate negotiations, and return policy optimization.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned shipping and RMA representative makes label generation errors, misses return inspection SLAs, or mismanages carrier claim logs, inform your Account Manager. We will replace them immediately with a qualified in-office representative at zero extra cost.
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
                  Junior, Mid-Level & Senior Logistics Specialist Plans
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time order shipping and return management specialists operating as your dedicated employee during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Shipping & RMA Specialists From Us?
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
                      A local US/UK logistics and return desk staff member costs $3,800–$5,200/month plus office overhead. Our in-office specialists handle all rate shopping, RMA logging, and carrier claims at a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Supervised In-Office Execution</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike home-based freelancers who risk missing daily carrier manifest cutoffs, our team works inside a physical office equipped with redundant fiber connections, backup generator power, and floor supervisor oversight.
                    </p>
                  </div>
                </div>
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