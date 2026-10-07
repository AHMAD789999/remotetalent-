"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Clock, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ChevronRight
} from "lucide-react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience Levels" },
  { id: "responsibilities", label: "Key Responsibilities" },
  { id: "faq", label: "FAQs" },
];

export default function LiveChatSupportPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#0F0C09] flex flex-col font-sans select-none">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb / Top Header */}
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F0C09]">
            Customer Support Representative
          </h1>
          <p className="text-sm sm:text-base text-[#0F0C09]/70 max-w-2xl">
            Deliver exceptional live chat, social inbox, phone, and email support with dedicated professionals trained on your exact brand voice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-4">
            <div className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-4 shadow-sm space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FA5B16] px-2 pb-2 border-b border-[#0F0C09]/10">
                Navigation
              </h3>
              <nav className="space-y-1">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-[7px] text-xs font-bold transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-[#FA5B16] text-white shadow-sm"
                        : "bg-[#FAF6F2] text-[#0F0C09]/80 hover:bg-[#0F0C09]/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeSection === item.id
                          ? "rotate-90 text-white"
                          : "opacity-50 text-[#0F0C09]"
                      }`}
                    />
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Calculator Card */}
            <div className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-5 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0F0C09]">Team Building Calculator</h4>
              <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                Estimate exact costs and scale your remote support department effortlessly.
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-[7px] bg-[#0F0C09] text-white text-xs font-bold hover:bg-[#FA5B16] transition-colors cursor-pointer"
              >
                <span>Calculate Team Cost</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-10">
            {/* Overview Section */}
            <section id="overview" className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28">
              <h2 className="text-xl font-extrabold text-[#0F0C09] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FA5B16]" />
                <span>Service Overview</span>
              </h2>
              <p className="text-sm text-[#0F0C09]/80 leading-relaxed">
                Your customers expect instant, friendly, and accurate resolutions across every channel. Our vetted Customer Support Representatives seamlessly integrate with your existing helpdesk software (Zendesk, Intercom, Gorgias, or custom CRM solutions) to maintain 99% satisfaction rates and boost customer retention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#FA5B16]">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Coverage Availability</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70">
                    Never miss a query. Cover overnight queues, weekends, and peak holiday shopping seasons with ease.
                  </p>
                </div>
                <div className="p-4 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-[#FA5B16]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Brand Protection</span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70">
                    Rigorous vetting and multi-stage communication training ensure reps safeguard your brand reputation.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Levels Section */}
            <section id="experience" className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28">
              <h2 className="text-xl font-extrabold text-[#0F0C09] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FA5B16]" />
                <span>Experience Levels & Tiers</span>
              </h2>
              <p className="text-sm text-[#0F0C09]/80">
                Choose the right seniority tier based on your support volume, escalation complexity, and leadership requirements:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-[7px] border border-[#0F0C09]/10 bg-[#FAF6F2]/50 space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="text-sm font-bold text-[#0F0C09]">Junior Level</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16]">
                      At least 6 months to 1 year experience
                    </span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                    Ideal for standard ticketing, chat queries, social media inbox management, and junior level support assistance.
                  </p>
                </div>

                <div className="p-5 rounded-[7px] border border-[#0F0C09]/10 bg-[#FAF6F2]/50 space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="text-sm font-bold text-[#0F0C09]">Mid Level</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16]">
                      2+ years experience
                    </span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                    Handles complex customer escalations, billing inquiries, refund processing, and mid-level customer support workflows.
                  </p>
                </div>

                <div className="p-5 rounded-[7px] border border-[#0F0C09]/10 bg-[#FAF6F2]/50 space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="text-sm font-bold text-[#0F0C09]">Senior Level</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16]">
                      At least 5+ years experience
                    </span>
                  </div>
                  <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                    Advanced leadership, team training, KPI management, QA oversight, and high-level enterprise customer support strategy.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Responsibilities Section */}
            <section id="responsibilities" className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28">
              <h2 className="text-xl font-extrabold text-[#0F0C09] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FA5B16]" />
                <span>Key Responsibilities</span>
              </h2>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Live web chat & instant visitor assistance",
                  "Social media DM & comment moderation (IG/FB/TikTok)",
                  "Inbound customer phone support & voice handling",
                  "Structured email ticketing & RMA resolution",
                  "Order tracking, shipping updates & status checks",
                  "Customer satisfaction (CSAT) score optimization"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#0F0C09]/80 p-3 rounded-[7px] bg-[#FAF6F2]">
                    <CheckCircle2 className="w-4 h-4 text-[#FA5B16] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs Section */}
            <section id="faq" className="bg-white rounded-[7px] border border-[#0F0C09]/10 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-28">
              <h2 className="text-xl font-extrabold text-[#0F0C09]">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b border-[#0F0C09]/10 pb-4">
                  <h4 className="text-xs font-bold text-[#0F0C09]">How fast can a customer support representative start?</h4>
                  <p className="text-xs text-[#0F0C09]/70 mt-1 leading-relaxed">
                    Once matched and onboarded, your dedicated rep can begin training and handling tickets within 48 to 72 hours.
                  </p>
                </div>
                <div className="border-b border-[#0F0C09]/10 pb-4">
                  <h4 className="text-xs font-bold text-[#0F0C09]">Do they work in our time zone?</h4>
                  <p className="text-xs text-[#0F0C09]/70 mt-1 leading-relaxed">
                    Yes! Our professionals operate directly from our office in Pakistan matching US, UK, or Australian time zones as required.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom CTA Card */}
            <div className="bg-[#FA5B16] rounded-[7px] p-8 text-white space-y-4 shadow-md text-center">
              <h3 className="text-xl font-extrabold">Ready to Elevate Your Customer Experience?</h3>
              <p className="text-xs text-white/95 max-w-lg mx-auto leading-relaxed">
                Hire vetted, professional talent tailored specifically to your exact operational requirements.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[7px] bg-white text-[#FA5B16] text-xs font-bold shadow hover:bg-[#FAF6F2] transition-colors cursor-pointer"
                >
                  <span>Hire Dedicated Talent</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
