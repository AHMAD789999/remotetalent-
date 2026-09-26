"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { XCircle, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from "lucide-react";

// 3D Tilt Card Wrapper Component
function Interactive3DCard({ children, className = "" }) {
  const cardRef = useRef(null);

  // Motion values for smooth 3D mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-[7px] transition-shadow duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ProblemSolution() {
  const problems = [
    "Expensive local hiring & high payroll taxes",
    "Time-consuming recruitment & screening cycles",
    "Complex local management & overhead burden",
    "Limited talent availability in your immediate region",
    "Unpredictable hiring risks & costly turnover",
  ];

  const solutions = [
    "We gather your specific role & technical requirements",
    "We source & screen top-tier talent in Pakistan",
    "We evaluate candidates through multi-stage interviews",
    "You interview & select your preferred professional",
    "We host and manage them in our dedicated physical office",
    "They work aligned strictly to your required timezone",
  ];

  return (
    <section className="bg-[#FAF6F2] py-20 sm:py-28 px-6 lg:px-12 text-[#0F0C09] overflow-hidden select-none [perspective:1200px]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Left-Aligned Clean Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-[11px] font-semibold uppercase tracking-wider border border-[#FA5B16]/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Smart Hiring Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#0F0C09] leading-[1.08]">
            Hiring Great Talent Shouldn't Be Complicated
          </h2>
          <p className="text-[#0F0C09]/70 text-base font-normal max-w-2xl">
            Replace costly local recruitment with a fully managed, in-office remote team operating out of Pakistan.
          </p>
        </div>

        {/* 3D DUAL COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* PROBLEM CARD (3D Depth Layered Warm Card) */}
          <Interactive3DCard className="bg-[#EFE8E0] p-8 sm:p-10 border border-[#0F0C09]/10 shadow-lg hover:shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D9381E]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative [transform:translateZ(40px)] space-y-6">
              <div className="flex items-center gap-2 text-[#D9381E]">
                <AlertCircle className="w-4.5 h-4.5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Traditional Hiring Challenges</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0F0C09]">
                The Old Way
              </h3>

              <ul className="space-y-4 pt-2">
                {problems.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3.5 text-sm text-[#0F0C09]/80 font-normal group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <XCircle className="w-4.5 h-4.5 text-[#D9381E] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Interactive3DCard>

          {/* SOLUTION CARD (3D Orange Floating Brand Elevation) */}
          <Interactive3DCard className="bg-white p-8 sm:p-10  shadow-xl hover:shadow-2xl relative overflow-hidden">
            {/* Top Right Orange Glow Accent */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#FA5B16]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative [transform:translateZ(50px)] space-y-6">
              
              {/* Header Badge Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#FA5B16]">
                  <Sparkles className="w-4.5 h-4.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Our Managed Solution</span>
                </div>
                <span className="px-3 py-1 rounded-[7px] bg-[#FA5B16] text-white text-[11px] font-semibold tracking-wide shadow-sm">
                  Save 60%+ Cost
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0F0C09]">
                The Managed Remote Way
              </h3>

              <ul className="space-y-3.5 pt-2">
                {solutions.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3.5 text-sm text-[#0F0C09]/85 font-normal group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#FA5B16] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

            </div>
          </Interactive3DCard>

        </div>

      </div>
    </section>
  );
}