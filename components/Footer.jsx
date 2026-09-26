"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "923090023381";
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to discuss hiring dedicated staff for my business."
  );

  return (
    <footer className="relative bg-[#FA5B16] text-white py-12 px-6 lg:px-12 select-none border-t border-[#FA5B16] overflow-hidden">
      
      {/* Background Ambient Depth Patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background Small Square Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex justify-center items-center">
        <svg
          className="w-full h-full object-cover"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footer-small-boxes-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="36"
                height="36"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-small-boxes-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* CENTER SECTION: Logo, Description & Contact Badges */}
        <div className="max-w-2xl mx-auto text-center space-y-5">
          
          {/* Brand Name Badge (No Star Icon) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[7px] bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <span>Offshore Talent Partners</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase drop-shadow-sm">
            RemoteTalent
          </h3>

          {/* Tagline Paragraph */}
          <p className="text-xs sm:text-sm text-white/95 font-normal leading-relaxed max-w-xl mx-auto">
            Connecting global businesses with dedicated, pre-vetted remote talent and full-scale operational support managed directly from our office in Pakistan.
          </p>

          {/* Contact Info & Location Glass Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a 
              href="mailto:support@remotetalent.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-[7px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-md transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>support@remotetalent.com</span>
            </a>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[7px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-md transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>+92 309 0023381</span>
            </a>

            <div className="flex items-center gap-2 px-4 py-2 rounded-[7px] bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

        </div>

        {/* DIVIDER LINE */}
        <div className="border-t border-white/25" />

        {/* BOTTOM ROW: Split Left & Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          
          {/* Left Side: All Rights Reserved */}
          <p className="text-[11px] text-white/85 font-normal text-center sm:text-left">
            © {new Date().getFullYear()} RemoteTalent. All rights reserved.
          </p>

          {/* Right Side: Policy Pages */}
          <div className="flex items-center gap-5 text-xs font-semibold text-white">
            <Link href="/terms" className="hover:underline opacity-90 hover:opacity-100 transition-all">
              Terms of Service
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/privacy-policy" className="hover:underline opacity-90 hover:opacity-100 transition-all">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}