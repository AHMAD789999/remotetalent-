"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  MessageSquare,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function ContactHero() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(event.target);
    formData.append("access_key", "1e848b27-4309-40de-a104-5697a4c266f4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to send inquiry.");
      }
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FAF6F2] pt-[160px] pb-20 mt-[-100px] px-4 sm:px-6 lg:px-12 text-[#0F0C09] select-none">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-7">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0C09] leading-tight">
              Let's Discuss Your Project
            </h1>

            <p className="text-xs sm:text-sm text-[#0F0C09]/75 font-medium leading-relaxed max-w-md">
              Need specialized web development, ecommerce operations, or
              dedicated customer support? Send us your requirements and our
              team will get back to you.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:business@talentharbor.net"
              className="group flex items-center justify-between p-4 rounded-[7px] bg-white border border-[#0F0C09]/10 hover:border-[#FA5B16] transition-all shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-[#FAF6F2] text-[#FA5B16] flex items-center justify-center shrink-0 border border-[#0F0C09]/5 group-hover:bg-[#FA5B16] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#0F0C09]/50 uppercase tracking-wider block">
                    For business inquiries
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F0C09] group-hover:text-[#FA5B16] transition-colors">
                    business@talentharbor.net
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0F0C09]/30 group-hover:text-[#FA5B16] group-hover:translate-x-1 transition-all" />
            </a>

            <div className="flex items-center gap-3.5 p-4 rounded-[7px] bg-white border border-[#0F0C09]/10 shadow-sm">
              <div className="w-10 h-10 rounded-[6px] bg-[#FAF6F2] text-[#FA5B16] flex items-center justify-center shrink-0 border border-[#0F0C09]/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0F0C09]/50 uppercase tracking-wider block">
                  Headquarters
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0F0C09]">
                  Lahore, Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[10px] p-6 sm:p-8 border border-[#0F0C09]/10 shadow-lg relative">
            <div className="mb-6 pb-4 border-b border-[#0F0C09]/10 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#0F0C09]">Send Inquiry</h2>
                <p className="text-xs text-[#0F0C09]/60 font-medium">
                  Fill in your requirements below.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FAF6F2] border border-[#0F0C09]/10 text-[#FA5B16] flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#FA5B16] mx-auto" />
                <h3 className="text-lg font-bold text-[#0F0C09]">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-xs text-[#0F0C09]/70 max-w-xs mx-auto font-medium leading-relaxed">
                  Thank you for reaching out. Your message has been successfully delivered to business@talentharbor.net.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-[#FA5B16] hover:underline cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-[7px] bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Service Required
                  </label>
                  <select
                    name="service"
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all cursor-pointer"
                  >
                    <option>Web Development & Maintenance</option>
                    <option>E-Commerce Store Operations</option>
                    <option>Customer Live Chat Support</option>
                    <option>Inbound & Outbound Voice Support</option>
                    <option>Email Ticketing Management</option>
                    <option>Driver Fleet Dispatch</option>
                    <option>Warehouse & Logistics</option>
                    <option>Executive Virtual Support</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your requirements or technical goals..."
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
