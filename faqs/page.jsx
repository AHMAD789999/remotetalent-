"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight, Calculator } from "lucide-react";

const faqCategories = [
  {
    title: "General & Operations",
    questions: [
      {
        q: "What is Talent Harbor and how does it work?",
        a: "Talent Harbor provides dedicated, vetted remote professionals—ranging from customer support and ecommerce operators to full-stack developers—working directly from our professional office in Pakistan. They operate on your preferred US time zone (ET/PT) with 160 hours per month included.",
      },
      {
        q: "Where do your professionals work from?",
        a: "Unlike freelance marketplaces where workers operate from home with unpredictable conditions, all Talent Harbor professionals work from our secure, state-of-the-art office facility in Lahore, Punjab, Pakistan. This ensures high-speed redundant internet, backup power, secure hardware, and continuous on-site supervision.",
      },
      {
        q: "How does time zone alignment work?",
        a: "Your dedicated team members align their daily 8-hour shifts directly with your US business hours, ensuring real-time collaboration, instant communication via Slack/Teams, and seamless integration with your existing workflow.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    questions: [
      {
        q: "How much can I save compared to hiring onshore in the US?",
        a: "By partnering with Talent Harbor, US businesses typically save between 60% to 75% on labor costs compared to local onshore hiring, without compromising on professional quality, experience, or output.",
      },
      {
        q: "What is included in the monthly fee?",
        a: "Each monthly subscription covers 160 dedicated working hours per professional, high-end office infrastructure, continuous management oversight, regular performance reporting, and our hassle-free replacement guarantee.",
      },
      {
        q: "Are there any hidden setup or recruitment fees?",
        a: "No. Our pricing is completely transparent. There are zero upfront recruitment fees, placement charges, or hidden overheads.",
      },
    ],
  },
  {
    title: "Hiring & Onboarding",
    questions: [
      {
        q: "How fast can my remote team be deployed?",
        a: "Once you select your required roles and finalize your configuration using our Team Building Calculator, your dedicated professionals can be fully onboarded and integrated into your operations within 48 hours.",
      },
      {
        q: "Can I interview and vet the candidates before hiring?",
        a: "Yes! We present pre-screened profiles matching your exact technical and communication requirements. You have the final say and can interview candidates before they officially join your team.",
      },
      {
        q: "What kind of management support do you provide?",
        a: "We provide full administrative and operational oversight, attendance tracking, and local HR support. You simply delegate tasks and manage output just like you would with an in-house employee.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndices, setOpenIndices] = useState({ "0-0": true });

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#0F0C09] font-sans select-none flex flex-col justify-between pt-[120px]">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 w-full">

        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F0C09] leading-tight">
            Everything You Need to Know About Talent Harbor
          </h1>

          <p className="text-sm sm:text-base text-[#0F0C09]/75 font-medium leading-relaxed">
            Find clear answers regarding our office-based remote staffing model, US time zone alignment, transparent pricing, and 48-hour onboarding.
          </p>
        </div>

        {/* FAQ CATEGORIES & ACCORDIONS */}
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="text-lg font-bold text-[#0F0C09] pb-2 border-b border-[#0F0C09]/10">
                {category.title}
              </h2>

              <div className="space-y-3">
                {category.questions.map((item, qIdx) => {
                  const isOpen = !!openIndices[`${catIdx}-${qIdx}`];
                  return (
                    <div
                      key={qIdx}
                      className="bg-white rounded-[10px] border border-[#0F0C09]/10 shadow-sm overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F2]/50 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#0F0C09]">
                          {item.q}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#FAF6F2] border border-[#0F0C09]/10 text-[#FA5B16] flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#0F0C09]/75 font-medium leading-relaxed border-t border-[#0F0C09]/5 pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA CARD */}
        <div className="bg-[#0F0C09] text-white rounded-[10px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FA5B16]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Have More Questions or Ready to Scale?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Calculate your exact savings instantly or get in touch with our team to start your custom team deployment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 shrink-0">
            <Link
              href="/team-building-calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[7px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#FA5B16]" />
              <span>Use Calculator</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
