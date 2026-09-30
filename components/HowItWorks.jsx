"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Tell Us",
    desc: "Share your role, skills, hours and requirements.",
  },
  {
    num: "02",
    title: "We Search",
    desc: "We identify professionals matching your needs.",
  },
  {
    num: "03",
    title: "We Screen",
    desc: "Suitable candidates go through our initial screening.",
  },
  {
    num: "04",
    title: "You Interview",
    desc: "Meet the shortlisted candidates yourself.",
  },
  {
    num: "05",
    title: "You Select",
    desc: "Choose the professional who fits your business.",
  },
  {
    num: "06",
    title: "They Start",
    desc: "Your dedicated professional starts working for you.",
  },
];

// Interactive 3D Card with Tilt Effect
function Step3DCard({ step, isLast }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex-1 mb-19 min-w-[200px] lg:min-w-[0] group">
      {/* 3D Tilt Wrapper */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-white p-6 rounded-[7px] border border-[#0F0C09]/10 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 flex flex-col items-center text-center h-full hover:border-[#FA5B16]/40"
      >
        {/* Floating 3D Badge Circle */}
        <div className="w-14 h-14 rounded-full bg-[#FAF6F2] border-2 border-[#FA5B16] text-[#FA5B16] font-extrabold text-lg flex items-center justify-center shadow-md mb-5 group-hover:bg-[#FA5B16] group-hover:text-white transition-colors duration-300 [transform:translateZ(30px)]">
          {step.num}
        </div>

        {/* Card Content with Z-Depth */}
        <div className="space-y-2 [transform:translateZ(20px)]">
          <h3 className="text-base font-bold text-[#0F0C09] tracking-tight group-hover:text-[#FA5B16] transition-colors">
            {step.title}
          </h3>

          <p className="text-xs text-[#0F0C09]/70 font-normal leading-relaxed">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const whatsappNumber = "923090023381";
  const whatsappMessage = encodeURIComponent(
    "Hi! I want to start step 01 and share my hiring requirements."
  );

  return (
    <section className="bg-[#FAF6F2] mt-9 px-6 lg:px-12 text-[#0F0C09] overflow-hidden select-none [perspective:1200px]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Left-Aligned Header */}
        <div className="max-w-2xl space-y-3 text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-[11px] font-semibold uppercase tracking-wider border border-[#FA5B16]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STREAMLINED PROCESS</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#0F0C09] leading-[1.08]">
            How Our Remote Hiring Process Works
          </h2>
          <p className="text-[#0F0C09]/70 text-sm sm:text-base font-normal">
            A simple, transparent 6-step pathway to hiring dedicated professionals from Pakistan.
          </p>
        </div>

        {/* 6 Horizontal Steps Container with Connecting Line */}
        <div className="relative">
          
          {/* Subtle Horizontal Connecting Background Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-[#FA5B16]/20 z-0" />

          {/* Steps Grid / Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <Step3DCard key={idx} step={step} isLast={idx === steps.length - 1} />
            ))}
          </div>

        </div>

      

      </div>
    </section>
  );
}
