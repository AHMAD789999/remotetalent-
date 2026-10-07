"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Tags, 
  Package, 
  Layers, 
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
  FileSpreadsheet, 
  Image as ImageIcon, 
  Sliders, 
  Globe, 
  CalendarCheck, 
  UserCheck
} from "lucide-react";

// Imported requested components ONLY
import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function StoreCatalogManagementServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Catalog Desk Model" },
    { id: "working-hours-dedication", label: "Working Hours & Shift Coverage" },
    { id: "catalog-workflow-types", label: "All Catalog & Inventory Workflows" },
    { id: "reporting-guarantee", label: "Data Quality Audits & SLAs" },
    { id: "tiered-pricing", label: "Catalog Specialist Pricing Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Accuracy vs Cost)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Catalog HQ",
      desc: "Your dedicated store catalog and inventory management specialists operate directly inside our supervised office in Lahore, Pakistan. Equipped with high-speed fiber internet, dual-monitor workstations, backup generator power, and floor supervisors."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Business Shift",
      desc: "Zero delay in product launches or inventory updates. Whichever specialist tier you select will clock in physically to cover your exact local operating shift—EST, PST, CET, GMT, or AEST."
    },
    {
      icon: FileCheck2,
      title: "Formal Data Accuracy SLAs & Confidentiality",
      desc: "We sign service level agreements defining product data accuracy metrics, bulk upload turnaround times, SEO optimization benchmarks, and strict client data confidentiality NDAs."
    },
    {
      icon: RefreshCw,
      title: "Immediate Specialist Replacement Guarantee",
      desc: "If an assigned catalog manager does not match your platform speed, data entry precision, or attention to detail standards, we replace them immediately with an equally vetted specialist at zero extra fee."
    }
  ];

  // COMPREHENSIVE STORE CATALOG & INVENTORY WORKFLOW TYPES
  const catalogWorkflowTypes = [
    {
      icon: Package,
      title: "1. Product Listing & SKU Creation",
      desc: "Comprehensive product creation and data entry across all major e-commerce platforms.",
      details: [
        "Creating single and variable products in Shopify, WooCommerce, Amazon, eBay, and Magento.",
        "Writing catchy, conversion-optimized product descriptions and feature bullet points.",
        "Structuring custom attributes, SKUs, barcodes (UPC/EAN), weights, and dimensions.",
        "Setting up digital downloads, downloadable files, and downloadable licenses."
      ]
    },
    {
      icon: Sliders,
      title: "2. Variant & Attribute Management",
      desc: "Organizing complex product variations, sizes, colors, materials, and pricing matrices.",
      details: [
        "Configuring matrix options like size, color, scent, style, and bundled packs.",
        "Managing tier pricing, wholesale pricing tiers, and currency conversions.",
        "Setting up custom metafields and variant-specific inventory tracking rules.",
        "Ensuring seamless sync between parent and child SKU inventory levels."
      ]
    },
    {
      icon: Tags,
      title: "3. Categories, Collections & Taxonomy",
      desc: "Structuring clean store navigation and automated collection filtering rules.",
      details: [
        "Building hierarchical category structures, sub-categories, and menu trees.",
        "Creating automated smart collections based on tags, vendors, prices, and stock.",
        "Managing product tags, search keywords, and backend filtering parameters.",
        "Optimizing site architecture for intuitive user browsing and lower bounce rates."
      ]
    },
    {
      icon: ImageIcon,
      title: "4. Image Editing & Media Optimization",
      desc: "Enhancing product imagery for professional aesthetics and fast store loading speeds.",
      details: [
        "Cropping, background removal, color correction, and watermarking product photos.",
        "Formatting images to exact pixel dimensions required by Shopify and WooCommerce themes.",
        "Compressing image file sizes (WebP conversion) to preserve Google PageSpeed scores.",
        "Organizing media galleries, swatches, and alt text for accessibility and SEO."
      ]
    },
    {
      icon: FileSpreadsheet,
      title: "5. Bulk CSV Imports, Exports & Migrations",
      desc: "Error-free bulk data manipulation and platform-to-platform catalog migrations.",
      details: [
        "Cleaning, formatting, and mapping messy supplier CSV/Excel spreadsheets.",
        "Executing bulk product imports, price updates, and inventory syncs via CSV.",
        "Migrating entire product catalogs smoothly between different e-commerce engines.",
        "Performing rigorous post-import audits to eliminate broken links or missing prices."
      ]
    },
    {
      icon: Globe,
      title: "6. SEO Product Optimization & Metadata",
      desc: "Maximizing organic search visibility for every single product in your catalog.",
      details: [
        "Writing SEO-friendly product URLs, meta titles, and meta descriptions.",
        "Optimizing product image alt attributes with target keyword variations.",
        "Integrating schema markup (JSON-LD) for rich product snippets in Google search.",
        "Auditing and fixing duplicate content, missing tags, and broken product links."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Catalog Specialist",
      badge: "6M - 1 Year Experience",
      price: "$749",
      period: "/ month",
      desc: "Ideal for routine product data entry, basic image cropping, simple CSV uploads, tag management, and straightforward SKU creation.",
      features: [
        "Experience: At least 6 months to 1 year",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Catalog HQ Floor",
        "Shopify / WooCommerce Product Data Entry",
        "Basic Image Resizing & Tagging",
        "Daily Task Progress & Upload Logs",
        "Immediate Specialist Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Catalog & Inventory Manager",
      badge: "2+ Years Experience",
      price: "$1,249",
      period: "/ month",
      desc: "Best for complex variable product creation, bulk CSV spreadsheet mapping, multi-channel catalog sync, and SEO meta optimization.",
      features: [
        "Experience: 2+ years experience",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Catalog HQ Floor",
        "Complex Variant & Metafield Architecture",
        "Bulk CSV Imports, Mapping & Migrations",
        "SEO Metadata & Image Optimization",
        "Daily, Weekly & Monthly Accuracy Audits",
        "Immediate Specialist Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior E-Commerce Data Architect",
      badge: "5+ Years Experience",
      price: "$1,749",
      period: "/ month",
      desc: "Experienced catalog operations manager capable of handling massive multi-thousand SKU inventories, enterprise migrations, and automated PIM workflows.",
      features: [
        "Experience: At least 5+ years",
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Shift",
        "Seated in Our Physical Catalog HQ Floor",
        "Enterprise Catalog Migration & PIM Setup",
        "Advanced Multi-Store Inventory Architecture",
        "Rigorous Quality Assurance & Schema Audits",
        "Dedicated Data Operations Lead Oversight"
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
            <span className="text-[#FA5B16]">Store Catalog Management Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Tags className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Catalog & Inventory Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Store Catalog Specialists Working Live In Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select for <strong className="text-[#FA5B16]">talentharbor</strong>, your dedicated catalog manager will physically sit inside our high-security operations office in Lahore, Pakistan—executing error-free product listings, bulk CSV imports, variant structuring, and SEO optimizations live during your exact business shift.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Hire Your Catalog Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Talentharbor Catalog Desk</h3>
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
                  <span className="text-[11px] font-bold text-white block">Physically Managed Operations Floor</span>
                  <p className="text-[11px] text-white/80 font-medium leading-normal">
                    We supervise data entry precision, CSV mapping accuracy, daily task output, and shift attendance directly inside our Lahore facility.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#0F0C09] hover:bg-[#0F0C09]/90 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all cursor-pointer"
                >
                  Consult With Our Data Lead
                </Link>
              </div>

            </div>
          </aside>

          {/* RIGHT SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* SECTION 1: IN-OFFICE CATALOG DESK MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operations Infrastructure & Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Catalog Operations Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate sloppy data entry, missing product descriptions, broken variants, and unmonitored home freelancers. At Talentharbor, your catalog specialists work inside our secure, managed office facility in Lahore, Pakistan.
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
                  100% Dedicated Availability In Your Working Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Whether you choose a Junior, Mid-Level, or Senior catalog manager through Talentharbor, they operate exclusively during your local shift hours, ensuring product rollouts and inventory updates happen seamlessly.
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
                      Whether you require US Daytime (EST/PST), European business hours (CET/GMT), or Australian (AEST) shifts, your catalog specialist clocks in to cover your exact operational window.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <UserCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        100% Dedicated Specialist
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Your hired representative manages product data exclusively for your store. No shared resources or split attention across multiple competing client brands.
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
                      Specialists work on dual-monitor setups backed by redundant high-speed fiber internet and uninterrupted power supplies to guarantee fast CSV processing and media uploads.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        Season Launch Readiness
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need rapid catalog expansion for seasonal collection drops or new supplier line sheets? We scale catalog data teams instantly to hit your deadlines.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: CATALOG & INVENTORY WORKFLOWS */}
            <div id="catalog-workflow-types" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Capabilities & Task Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  All Store Catalog & Inventory Tasks We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained data specialists handle every aspect of e-commerce product architecture—from individual SKU creation and variant matrices to bulk CSV migrations and SEO metadata.
                </p>
              </div>

              <div className="space-y-6">
                {catalogWorkflowTypes.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING, DATA AUDITS & REPLACEMENT GUARANTEE */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Assurance & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Data Audits, Upload Logs & Instant Replacement Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We track daily product output, CSV import accuracy, and metadata completion with structured reporting so you maintain 100% catalog integrity.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly & Monthly Catalog Performance Reporting</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Product Logs</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Summary of newly created SKUs, edited variants, optimized images, and published listings.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly CSV & Sync Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Verification of bulk CSV imports, inventory price mappings, and category tree structures.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly SEO & Link Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Comprehensive check for missing meta tags, broken image URLs, and unassigned product categories.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Catalog Scaling Plan</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Quarterly roadmap for upcoming supplier catalogs, seasonal drops, and PIM optimizations.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Specialist Replacement Policy</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned catalog specialist makes data entry errors, works too slowly, or fails to meet catalog formatting standards, inform your Account Manager at Talentharbor. We will immediately replace them with an equally qualified in-office data specialist at zero extra cost.
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
                  Junior, Mid-Level & Senior Catalog Specialist Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time store catalog and inventory specialists operating as your dedicated team member during your working hours. Flat monthly pricing with zero hidden fees.
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
                  Why Hire Catalog Specialists From Talentharbor?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Catalog Overhead Savings</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      US/UK e-commerce data entry specialists cost $3,500–$5,000/month plus benefits. Talentharbor provides elite, vetted catalog professionals for a fraction of that cost without compromising precision.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>Managed Office Operations Supervision</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike unmanaged remote freelancers, our catalog specialists operate in a supervised facility with strict security protocols, fiber connectivity, power backups, and continuous data quality auditing.
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
