"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Warehouse, 
  Boxes, 
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
  QrCode, 
  Truck, 
  RotateCcw, 
  BarChart3, 
  CalendarCheck, 
  UserCheck, 
  Layers, 
  AlertTriangle, 
  FileSpreadsheet, 
  ClipboardList, 
  Container
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function WarehouseOrderManagementServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office WMS Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "wms-support-types", label: "All Order & Warehouse Workflows" },
    { id: "reporting-guarantee", label: "Inventory Audits & SLAs" },
    { id: "tiered-pricing", label: "WMS Specialist Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Accuracy vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Operations HQ",
      desc: "Your dedicated warehouse and order management specialists operate directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and floor supervisors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Operational Hours",
      desc: "Zero delay in order processing or inventory reconciliation. Whichever representative tier you select will clock in physically to match your exact local fulfillment shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Order Processing SLAs & Data Security",
      desc: "We sign service level agreements defining order accuracy metrics, daily pick/pack log reconciliations, inventory discrepancy reporting speed, and strict client data confidentiality."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned WMS or order processing coordinator does not match your speed, system proficiency, or detail accuracy standards, we replace them immediately with a trained agent at zero extra cost."
    }
  ];

  // COMPREHENSIVE WAREHOUSE & ORDER MANAGEMENT WORKFLOW TYPES
  const wmsSupportTypes = [
    {
      icon: Boxes,
      title: "1. Multi-Channel Order Processing & Routing",
      desc: "Centralized order lifecycle management from checkout to warehouse fulfillment allocation.",
      details: [
        "Processing inbound orders across Shopify, WooCommerce, Amazon, eBay, Walmart, and Etsy.",
        "Routing orders automatically to local 3PLs, regional warehouses, or dropship vendors.",
        "Managing pre-fulfillment order holds, address validation, and custom note additions.",
        "Canceling, splitting, or modifying line items before warehouse picking begins."
      ]
    },
    {
      icon: QrCode,
      title: "2. WMS System & Barcode Scanning Operations",
      desc: "Hands-on data entry and workflow execution inside leading Warehouse Management Systems.",
      details: [
        "Live operations in ShipBob, ShipStation, Fishbowl, NetSuite WMS, Logiwa, and SKULabs.",
        "Assigning bin locations, SKU pick paths, and warehouse zone routing rules.",
        "Generating pick lists, packing slips, shipping labels, and commercial export invoices.",
        "Resolving barcode mismatches, unallocated stock errors, and system sync bottlenecks."
      ]
    },
    {
      icon: BarChart3,
      title: "3. Inventory Reconciliation & Cycle Count Oversight",
      desc: "Maintaining real-time stock integrity to eliminate overselling and costly stockouts.",
      details: [
        "Reconciling physical warehouse count logs against digital WMS stock records.",
        "Setting up low-stock safety thresholds and automated reorder trigger alerts.",
        "Auditing deadstock, slow-moving inventory, and expiration/lot numbers.",
        "Investigating inventory shrinkage, mispicks, and damaged stock adjustments."
      ]
    },
    {
      icon: Truck,
      title: "4. Inbound Freight & Supplier Purchase Order Tracking",
      desc: "End-to-end oversight of incoming factory shipments and warehouse receiving logs.",
      details: [
        "Creating and sending Purchase Orders (POs) to overseas manufacturers and suppliers.",
        "Tracking inbound ocean/air freight containers and booking warehouse dock appointments.",
        "Verifying supplier packing lists against physical receiving count reports.",
        "Filing supplier discrepancy claims for missing, incorrect, or damaged inbound stock."
      ]
    },
    {
      icon: RotateCcw,
      title: "5. Reverse Logistics, RMA & Return Processing",
      desc: "Streamlined handling of customer returns, warehouse inspection logs, and re-stocking.",
      details: [
        "Issuing Return Merchandise Authorizations (RMA) and pre-paid return labels.",
        "Logging returned item condition reports (Grade A re-stock, refurbished, or scrap).",
        "Updating inventory counts automatically once returned goods pass warehouse QA.",
        "Executing customer exchanges, refunds, or store credits upon verified receipt."
      ]
    },
    {
      icon: Container,
      title: "6. B2B Wholesale & EDI Order Dispatch",
      desc: "Complex compliance and document preparation for retail and wholesale distribution.",
      details: [
        "Managing Electronic Data Interchange (EDI) order flows for major retail chains.",
        "Generating Master Bill of Lading (BOL), pallet routing guides, and UCC-128 labels.",
        "Coordinating freight LTL/FTL carrier pickups for bulk B2B shipments.",
        "Ensuring compliance with retailer vendor handbooks to prevent costly chargeback fees."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Order Processing Specialist",
      badge: "6M - 1 Year Experience",
      price: "$749",
      period: "/ month",
      desc: "Ideal for daily order entry, address verification, basic ShipStation/Shopify tag management, basic inventory logging, and routine label generation.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "Shopify / ShipStation Order Entry & Routing",
        "Basic Tracking Updates & Customer Address Holds",
        "Daily Order Processing & SLA Logs",
        "Immediate Specialist Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level WMS & Inventory Coordinator",
      badge: "Most Popular Choice",
      price: "$1,299",
      period: "/ month",
      desc: "Best for full WMS administration, multi-warehouse routing, inventory cycle reconciliation, inbound supplier PO tracking, and 3PL communication.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "Advanced WMS Management (ShipBob, Fishbowl, NetSuite)",
        "Inventory Reconciliation & Safety Stock Alerts",
        "3PL Dock Scheduling & Inbound PO Audits",
        "RMA & Reverse Logistics Condition Logging",
        "Daily, Weekly & Monthly Stock Accuracy Audits"
      ],
      popular: true,
    },
    {
      level: "Senior Supply Chain & Fulfillment Operations Lead",
      badge: "5+ Years Experience",
      price: "$1,799",
      period: "/ month",
      desc: "Experienced warehouse operations manager capable of building multi-warehouse workflows, managing EDI retail orders, auditing 3PL SLAs, and optimizing fulfillment costs.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Operational Shift",
        "Seated in Our Physical Operations HQ Floor",
        "Multi-Warehouse Network Architecture & Setup",
        "EDI B2B Retail Routing & Compliance Audits",
        "Supplier Purchase Planning & Lead Time Analytics",
        "Daily, Weekly, Monthly & Yearly WMS Audits",
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
    <main className="bg-[#FAF6F2] mt-[-100px] pt-15 text-[#0F0C09] select-none min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-5xl mx-auto space-y-4 text-left">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F0C09]/60 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FA5B16] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FA5B16]">Warehouse & Order Management Support</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Warehouse className="w-3.5 h-3.5" />
            <span>Dedicated In-Office WMS & Order Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Warehouse & Order Management Specialists Working Live In Your Shift
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated order processing and warehouse management system (WMS) coordinator will physically sit inside our supervised office in Lahore, Pakistan—managing multi-channel orders, stock reconciliation, 3PL communication, and inbound supply logs live during your exact hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your WMS Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">WMS Operations</h3>
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
                    We supervise order entry accuracy, stock logs, 3PL dispatch speed, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Operations Manager
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE WMS DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Warehouse & Order Desk Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate mispicked orders, overselling disasters, stockout delays, and unmonitored home freelancers. Our warehouse order specialists work inside our physical office facility in Lahore, Pakistan, operating live during your exact shift schedule.
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
                  02. Operational Shift Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Your Fulfillment Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **Junior, Mid-Level, ya Senior level** jo bhi order management representative select karenge, wo aapke operational shift timings mein **live available hoga aur aapke working hours ke mutabiq hi warehouse tools or stock queues process karega**.
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
                      Whether you manage US Warehouses (EST/PST), European Fulfillment (CET/GMT), or Australian Hubs (AEST), your specialist clocks in physically during your active picking/packing cut-off hours.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated WMS Resource
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative manages inventory exclusively for your account. No split focus across multiple client store portals.
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
                      The agent operates at our Lahore office floor with dual-monitor data setups, fiber connectivity, and floor manager supervision—ensuring zero downtime for daily dispatch deadlines.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Zero Fulfillment Backlog
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      We structure order flows to ensure all pending daily orders are audited and released to warehouse floors prior to carrier cutoff times.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL WMS & ORDER WORKFLOW TYPES */}
            <div id="wms-support-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Capabilities Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every Warehouse & Order Management Task We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained supply chain agents handle every stage of the order and stock lifecycle—from checkout validation and WMS bin allocation to stock counts, supplier POs, and reverse logistics.
                </p>
              </div>

              <div className="space-y-6">
                {wmsSupportTypes.map((cat, idx) => {
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
                  Inventory Audits & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We measure fulfillment and inventory management performance with structured reporting so you maintain 100% operational transparency.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly WMS Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Dispatch Logs</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Summary of processed orders, pending holds, address exceptions, and warehouse release metrics.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly Inventory Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Reconciliation of stock movements, low-stock warnings, cycle count variances, and RMA logs.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Supplier Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Evaluation of supplier lead times, inbound stock discrepancy claims, and 3PL pick SLA accuracy.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly Supply Chain Strategy</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual review of WMS tool stack integrations, multi-warehouse expansion, and carrier costs.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned WMS specialist makes data entry errors, mismanages stock logs, or fails to meet shift accuracy expectations, inform your Account Manager. We will take immediate action to replace them with a qualified in-office representative at zero extra cost.
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
                  Junior, Mid-Level & Senior WMS Specialist Plans
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time warehouse and order management representatives operating as your dedicated employee during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Warehouse & Order Specialists From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Supply Chain Overhead Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local US/UK inventory manager costs $3,800–$5,500/month plus benefits. Our in-office specialists provide rigorous system management, precise stock logs, and constant shift alignment at a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>In-Office System Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our WMS coordinators operate in a secure facility with continuous supervision, strict data protocols, and reliable infrastructure.
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
