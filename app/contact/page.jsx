"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "Web Development & Maintenance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "business@talentharbor.net";

    const subject = `New Inquiry - ${formData.service} - ${formData.fullName}`;

    const body = `Hello Talent Harbor Team,

I would like to discuss a project with your team.

CONTACT DETAILS
------------------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Service Required: ${formData.service}

PROJECT DETAILS
------------------------------
${formData.message}

Please contact me at your earliest convenience.

Best regards,
${formData.fullName}
`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <section className="bg-[#FAF6F2] pt-[160px] pb-20 mt-[-100px] px-4 sm:px-6 lg:px-12 text-[#0F0C09] select-none">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-7">

          {/* Header */}
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider border border-[#FA5B16]/20">
              <Building2 className="w-3.5 h-3.5" />
              Direct Communication
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

          {/* Contact Details */}
          <div className="space-y-3">

            {/* Email */}
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
                    Email Us
                  </span>

                  <span className="text-xs sm:text-sm font-bold text-[#0F0C09] group-hover:text-[#FA5B16] transition-colors">
                    business@talentharbor.net
                  </span>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#0F0C09]/30 group-hover:text-[#FA5B16] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Location */}
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

            {/* Form Header */}
            <div className="mb-6 pb-4 border-b border-[#0F0C09]/10 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#0F0C09]">
                  Send Inquiry
                </h2>

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
                  Inquiry Prepared
                </h3>

                <p className="text-xs text-[#0F0C09]/70 max-w-xs mx-auto font-medium leading-relaxed">
                  Your email client has been opened with your inquiry details.
                  Please review and send the email to complete your inquiry.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-[#FA5B16] hover:underline"
                >
                  Send Another Inquiry
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                {/* Service */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Service Required
                  </label>

                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service: e.target.value,
                      })
                    }
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

                {/* Project Details */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Project Details *
                  </label>

                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your requirements or technical goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
