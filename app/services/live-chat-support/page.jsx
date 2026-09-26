"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Headphones, 
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
  Bot, 
  ShoppingCart, 
  Globe, 
  HelpCircle, 
  PhoneCall, 
  Mail, 
  PackageCheck, 
  CreditCard, 
  MessageCircle, 
  Share2, 
  AlertTriangle,
  RotateCcw,
  FileText,
  CalendarCheck,
  UserCheck
} from "lucide-react";

import TalentShowcaseMarquee from "@/components/TalentShowcaseMarquee";
import HowItWorks from "@/components/HowItWorks";

export default function LiveChatSupportServicePage() {
  const [activeSection, setActiveSection] = useState("in-office-model");

  const sidebarNav = [
    { id: "in-office-model", label: "In-Office Support Model" },
    { id: "working-hours-dedication", label: "Working Hours & Availability" },
    { id: "support-categories", label: "All Chat Support Types Handled" },
    { id: "reporting-guarantee", label: "Reporting & Replacement Policy" },
    { id: "tiered-pricing", label: "Support Representative Plans" },
    { id: "why-hire-us", label: "Why Hire From Us (Budget vs Quality)" },
    { id: "how-we-work-section", label: "How We Work" },
  ];

  const inOfficePillars = [
    {
      icon: Building2,
      title: "Seated Physically in Our Office HQ",
      desc: "Your dedicated chat representatives operate directly inside our supervised office in Lahore, Pakistan. Equipped with fiber internet, dual-monitor workstations, generator power backup, and strict shift oversight."
    },
    {
      icon: Clock,
      title: "100% Aligned To Your Business Hours",
      desc: "Zero response delay. Whichever agent tier you select will clock into our physical office matching your exact local business working hours."
    },
    {
      icon: FileCheck2,
      title: "Formal Contract & Service Agreement",
      desc: "We sign a comprehensive service agreement defining strict SLA first-response times, resolution rates, CSAT benchmarks, and NDA data security protocols."
    },
    {
      icon: RefreshCw,
      title: "Immediate Agent Replacement Guarantee",
      desc: "If a chat representative fails to meet your required communication tone or product knowledge depth, we replace them immediately with a trained substitute without extra costs."
    }
  ];

  // COMPREHENSIVE LIST OF ALL CHAT SUPPORT TYPES
  const supportCategories = [
    {
      icon: PackageCheck,
      title: "1. E-Commerce Order Tracking & Logistics Desk",
      desc: "Real-time updates on package delivery status, carrier delays, and shipping address corrections.",
      details: [
        "Live status checking via Shopify, WooCommerce, ShipStation, or Klaviyo.",
        "Proactive tracking updates for lost, stuck, or delayed courier packages.",
        "Address updates & redirect assistance before order dispatch.",
        "Courier claim filing (FedEx, UPS, DHL, USPS) for damaged or missing parcels."
      ]
    },
    {
      icon: FileText,
      title: "2. Order Details & Modifications Management",
      desc: "Direct administrative control over pending and active client orders in your backend store.",
      details: [
        "Pre-fulfillment order line modifications (adding/removing items or variants).",
        "Invoice generation, custom payment link creation, and checkout assistance.",
        "Custom order notes tagging for warehouse and fulfillment staff.",
        "Subscription management (recurring orders, pause, skip, or frequency changes)."
      ]
    },
    {
      icon: RotateCcw,
      title: "3. Refunds, Exchanges & Dispute Resolution",
      desc: "Structured workflow management for returns, store credit issuance, and chargeback prevention.",
      details: [
        "RMA (Return Merchandise Authorization) processing according to store policy.",
        "Immediate full or partial refund processing directly within your payment gateway.",
        "Store credit gift card issuance to retain revenue and minimize cash out-flow.",
        "Chargeback & dispute mitigation by resolving customer grievances before escalation."
      ]
    },
    {
      icon: Share2,
      title: "4. Multi-Channel Social Media Chat Support",
      desc: "Unified customer engagement across social networks, direct messages, and comments.",
      details: [
        "Instagram DM & Facebook Messenger customer inquiry and sales support.",
        "Public comment response management on ad campaigns to increase conversion rate.",
        "Official WhatsApp Business API live messaging & automated status alerts.",
        "TikTok & Twitter/X direct messaging inbox monitoring and ticket routing."
      ]
    },
    {
      icon: ShoppingCart,
      title: "5. Pre-Sale Conversion & Cart Recovery Chat",
      desc: "Active sales assistance to turn window-shoppers into high-value paying customers.",
      details: [
        "Answering pre-purchase product compatibility and sizing queries.",
        "Offering real-time discount vouchers or upsell recommendations in active chats.",
        "Abandoned cart chat outreach on WhatsApp or web widgets.",
        "High-ticket custom quote assistance and bulk order sales support."
      ]
    },
    {
      icon: ShieldCheck,
      title: "6. Specialized & High-Risk Niche Support (Peptides, etc.)",
      desc: "Trained communication desk handling complex regulatory or technical product catalogs.",
      details: [
        "Peptide, research chemical, and health-tech disclaimer-compliant messaging.",
        "Age verification & identity confirmation checks prior to processing orders.",
        "Technical COA (Certificate of Analysis) and batch lab report retrieval.",
        "Strict adherence to merchant payment gateway compliance guidelines."
      ]
    },
    {
      icon: Bot,
      title: "7. AI Chatbot + Human Hybrid Management",
      desc: "Human-in-the-loop oversight for automated AI website and WhatsApp chatbots.",
      details: [
        "Live takeover when an AI website chatbot encounters a complex user inquiry.",
        "Training data validation by auditing AI chat transcripts daily.",
        "Handling fallback escalation triggers for VIP or high-value clients.",
        "Connecting AI lead generation funnels with human booking agents."
      ]
    },
    {
      icon: Mail,
      title: "8. Helpdesk Ticket Desk & Email Support",
      desc: "Full administrative desk support for asynchronous ticket management.",
      details: [
        "Multi-inbox ticket sorting and SLA-bound replies on Gorgias, Zendesk, or Freshdesk.",
        "Macro template creation and canned response library optimization.",
        "VIP customer escalation routing to internal management.",
        "Technical bug report submission to your web engineering team."
      ]
    }
  ];

  const tierPricingPlans = [
    {
      level: "Junior Chat Agent",
      badge: "Cost-Effective Desk",
      price: "$699",
      period: "/ month",
      desc: "Ideal for routine e-commerce tracking chats, basic product FAQs, ticket tagging, and standardized email responses during your shift.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Business Shift",
        "Seated in Our Physical Office HQ",
        "Order Tracking & Basic FAQ Desk",
        "Daily Chat Logs & Response SLA Reports",
        "Immediate Agent Replacement Guarantee"
      ],
      popular: false,
    },
    {
      level: "Mid-Level Customer Specialist",
      badge: "Most Popular Choice",
      price: "$1,199",
      period: "/ month",
      desc: "Best for full order modifications, refund processing, pre-sale conversion chats, and multi-channel social media inbox management in real-time.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Business Shift",
        "Seated in Our Physical Office HQ",
        "Shopify / WooCommerce Refunds & Exchanges",
        "WhatsApp, IG, FB & Intercom Desk",
        "Daily, Weekly & Monthly CSAT Reports",
        "Immediate Agent Replacement Protection"
      ],
      popular: true,
    },
    {
      level: "Senior Support Operations Lead",
      badge: "Team Lead & Operations",
      price: "$1,699",
      period: "/ month",
      desc: "Experienced desk manager for setup of helpdesks, complex chargeback disputes, compliance-heavy niches, and leading shift teams.",
      features: [
        "Full-Time Dedicated (160 Hours / Month)",
        "Works 100% During Your Selected Business Shift",
        "Seated in Our Physical Office HQ",
        "Full Helpdesk Architecture & Canned Script Build",
        "Peptide & High-Risk Compliance Management",
        "Daily, Weekly, Monthly & Yearly Quality Audits",
        "Dedicated Team Lead Oversight & Fast Replacement"
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
    <main className="bg-[#FAF6F2] text-[#0F0C09] pt-15 mt-[-100px] select-none min-h-[80vh">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F0C09]/10">
        <div className="max-w-5xl mx-auto space-y-4 text-left">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F0C09]/60 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#FA5B16] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#FA5B16]">Full Spectrum Live Chat Support Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated In-Office Live Chat & Helpdesk Agents</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F0C09] leading-tight max-w-3xl">
            Hire Dedicated Live Chat Agents Working Live During Your Business Hours
          </h1>

          <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium max-w-2xl leading-relaxed">
            Whichever plan or candidate you select, your dedicated chat agent will physically sit inside our office in Lahore, Pakistan and work live during your exact operational shift—handling order tracking, refunds, pre-sale conversions, and social inbox desk tasks in real-time.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Hire Your Dedicated Chat Specialist</span>
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
                <h3 className="text-lg font-bold text-white mt-2">Chat Support Operations</h3>
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
                    We supervise shift attendance, response SLA, chat tone, and store accuracy directly in our physical office.
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
            
            {/* SECTION 1: IN-OFFICE MODEL */}
            <div id="in-office-model" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  01. Operational Rigor
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  In-Office Supervised Live Chat Model
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Eliminate missed chats, slow response times, and unmonitored home freelancers. Our support staff works inside our office headquarters in Lahore, Pakistan, operating live during your exact schedule.
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

            {/* NEW EXPLICIT SECTION: WORKING HOURS & AVAILABILITY */}
            <div id="working-hours-dedication" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  02. Business Hours Guarantee
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  100% Dedicated Alignment To Your Exact Working Hours
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Aap hamari team se **koi bi level ya plan select karein (Junior, Mid-Level, ya Senior)**, aapka hire kiya gaya chat representative aapke specify kiye gaye business shift timing mein **live available hoga aur aapke working hours ke mutabiq hi kaam karega**.
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
                      Whether you operate in US Eastern (EST), Pacific (PST), European (CET), UK (GMT), or Australian (AEST) hours, your agent clocks in physically to match your exact online peak hours.
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
                      Your hired representative works exclusively on your store/brand inbox during their entire shift. No shared agents or split attention across multiple client stores.
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
                      The agent clocks in at our Lahore office floor with biometric monitoring, ensuring zero unexcused lateness, no sudden power disruptions, and immediate team lead supervision.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#FA5B16]">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider">
                        24/7 or Custom Shift Flexibility
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Need weekend support or round-the-clock 24/7 coverage? We configure shift schedules so your live chat widget never goes offline when customers are shopping.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 3: ALL CHAT SUPPORT TYPES EXPLAINED IN FULL DETAIL */}
            <div id="support-categories" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  03. Full Capabilities Spectrum
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Every Chat Support Type We Handle
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Our trained agents handle all touchpoints of the customer journey—from initial pre-sale queries to complex post-purchase order modifications and multi-channel social inbox desks.
                </p>
              </div>

              <div className="space-y-6">
                {supportCategories.map((cat, idx) => {
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

            {/* SECTION 4: REPORTING & REPLACEMENT POLICY */}
            <div id="reporting-guarantee" className="space-y-6 scroll-mt-8">
              <div className="space-y-2 border-b border-[#0F0C09]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA5B16]">
                  04. Quality Control & Reporting
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Daily Progress Reports & Instant Agent Replacement
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  We measure chat performance with total metrics visibility so you always know your customer satisfaction standing.
                </p>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-[#0F0C09] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FA5B16]" />
                    <span>Daily, Weekly, Monthly & Yearly Performance Audits</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Daily Shift Logs</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Total tickets closed, first response time (FRT), and escalated order logs.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Weekly CSAT Review</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Customer feedback ratings, frequent product objection logs, and refund analysis.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Monthly Quality Audit</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Transcript audits, canned script updates, and sales conversion optimization.</p>
                    </div>

                    <div className="p-3 bg-[#FAF6F2] rounded-[6px] border border-[#0F0C09]/10 space-y-1">
                      <span className="text-xs font-bold text-[#FA5B16]">Yearly SLA Strategy</span>
                      <p className="text-[11px] text-[#0F0C09]/70 font-medium">Annual helpdesk automation roadmap, AI integration, and shift expansion planning.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FA5B16]/10 rounded-[8px] border border-[#FA5B16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FA5B16] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Immediate Action & Replacement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/80 font-medium leading-relaxed">
                    If an assigned chat agent fails to meet your speed requirements or brand tone standards, inform your Account Manager. We will take immediate action to replace them with an equally qualified in-office representative at zero additional cost.
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
                  Junior, Mid-Level & Senior Chat Representative Pricing
                </h2>
                <p className="text-xs sm:text-sm text-[#0F0C09]/70 font-medium leading-relaxed">
                  Hire full-time chat representatives operating as your dedicated monthly employee during your specific working hours. Flat monthly rate with no additional ticket fees.
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
                  06. Financial & Operational Edge
                </span>
                <h2 className="text-2xl font-bold text-[#0F0C09]">
                  Why Hire Live Chat Agents From Us?
                </h2>
              </div>

              <div className="bg-white rounded-[10px] p-6 border border-[#0F0C09]/10 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FA5B16]" />
                      <span>60-70% Cost Reduction</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      A local US/UK support agent costs $3,500–$5,000/month plus taxes. Our in-office agents provide fluent English support and superior attendance for a fraction of that cost.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF6F2] rounded-[8px] border border-[#0F0C09]/10 space-y-2">
                    <h3 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#FA5B16]" />
                      <span>In-Office Quality Control</span>
                    </h3>
                    <p className="text-xs text-[#0F0C09]/70 font-medium leading-relaxed">
                      Unlike remote freelancers who experience power outages or communication delays, our team operates inside a physical facility with fiber lines, backup generators, and team lead oversight.
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