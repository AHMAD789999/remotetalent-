"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Plus, Trash2, ArrowRight, ShieldCheck, Users, TrendingUp, CheckCircle2 } from "lucide-react";

// Official launch rate card (160 hours / month per dedicated professional)
const availableRoles = [
  {
    name: "Customer Support Representative",
    tiers: {
      Junior: { onshore: 3200, offshore: 699 },
      Mid: { onshore: 4200, offshore: 1199 },
      Senior: { onshore: 5800, offshore: 1699 },
    },
  },
  {
    name: "Customer Phone Support",
    tiers: {
      Junior: { onshore: 3500, offshore: 799 },
      Mid: { onshore: 4500, offshore: 1299 },
      Senior: { onshore: 6200, offshore: 1799 },
    },
  },
  {
    name: "Email & Helpdesk Support",
    tiers: {
      Junior: { onshore: 3200, offshore: 699 },
      Mid: { onshore: 4200, offshore: 1199 },
      Senior: { onshore: 5800, offshore: 1699 },
    },
  },
  {
    name: "Business Development",
    tiers: {
      Junior: { onshore: 4000, offshore: 1500 },
      Mid: { onshore: 5500, offshore: 2100 },
      Senior: { onshore: 7500, offshore: 3000 },
    },
  },
  {
    name: "Account Executive",
    tiers: {
      Junior: { onshore: 4500, offshore: 1700 },
      Mid: { onshore: 6000, offshore: 2400 },
      Senior: { onshore: 8500, offshore: 3500 },
    },
  },
  {
    name: "Marketing & Social Media Manager",
    tiers: {
      Junior: { onshore: 3800, offshore: 1400 },
      Mid: { onshore: 5200, offshore: 2000 },
      Senior: { onshore: 7000, offshore: 2800 },
    },
  },
  {
    name: "Executive Assistant Services",
    tiers: {
      Junior: { onshore: 3500, offshore: 799 },
      Mid: { onshore: 4800, offshore: 1399 },
      Senior: { onshore: 6500, offshore: 1899 },
    },
  },
  {
    name: "Website Development & Maintenance",
    tiers: {
      Junior: { onshore: 4500, offshore: 799 },
      Mid: { onshore: 6500, offshore: 1399 },
      Senior: { onshore: 9000, offshore: 1999 },
    },
  },
  {
    name: "Order Processing & Inventory Coordination",
    tiers: {
      Junior: { onshore: 3400, offshore: 749 },
      Mid: { onshore: 4600, offshore: 1299 },
      Senior: { onshore: 6200, offshore: 1799 },
    },
  },
  {
    name: "Shipping, Returns & RMA Support",
    tiers: {
      Junior: { onshore: 3400, offshore: 749 },
      Mid: { onshore: 4600, offshore: 1299 },
      Senior: { onshore: 6200, offshore: 1799 },
    },
  },
  {
    name: "Driver Support & Dispatch Coordination",
    tiers: {
      Junior: { onshore: 3600, offshore: 799 },
      Mid: { onshore: 4800, offshore: 1399 },
      Senior: { onshore: 6500, offshore: 1899 },
    },
  },
];

export default function TeamBuildingCalculatorPage() {
  const [selectedRole, setSelectedRole] = useState(availableRoles[0].name);
  const [selectedExperience, setSelectedExperience] = useState("Junior");
  const [teamMembers, setTeamMembers] = useState([]);

  // Get pricing based on selection
  const currentRoleObj = availableRoles.find((r) => r.name === selectedRole) || availableRoles[0];
  const currentPricing = currentRoleObj.tiers[selectedExperience] || { onshore: 3200, offshore: 699 };
  const currentSavings = currentPricing.onshore - currentPricing.offshore;

  const handleAddToTeam = () => {
    const newItem = {
      id: Date.now(),
      role: selectedRole,
      experience: selectedExperience,
      onshore: currentPricing.onshore,
      offshore: currentPricing.offshore,
      savings: currentSavings,
    };
    setTeamMembers([...teamMembers, newItem]);
  };

  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const totalOnshore = teamMembers.reduce((acc, curr) => acc + curr.onshore, 0);
  const totalOffshore = teamMembers.reduce((acc, curr) => acc + curr.offshore, 0);
  const totalSavings = teamMembers.reduce((acc, curr) => acc + curr.savings, 0);
  const savingsPercentage = totalOnshore > 0 ? ((totalSavings / totalOnshore) * 100).toFixed(1) : "0.0";

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#0F0C09] font-sans select-none flex flex-col justify-between">
      
      <div className="space-y-12 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white border-b border-[#0F0C09]/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Talent Harbor Cost Calculator</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F0C09] leading-tight">
              Build Your Remote Team & Calculate Your Savings
            </h1>
            <p className="text-sm sm:text-base text-[#0F0C09]/70 max-w-2xl mx-auto leading-relaxed">
              Compare local US hiring costs against dedicated, vetted remote professionals operating from our office in Pakistan on your time zone with 160 hours/month included.
            </p>
          </div>
        </section>

        {/* CALCULATOR TOOL SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[10px] p-6 sm:p-8 border border-[#0F0C09]/15 shadow-xl space-y-8">
            
            {/* Top Selector Card */}
            <div className="bg-[#FAF6F2] rounded-[7px] border border-[#0F0C09]/10 p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs font-bold tracking-wider text-[#FA5B16] uppercase pb-2 border-b border-[#0F0C09]/10 hidden sm:grid">
                <div>Role</div>
                <div>Required Experience</div>
                <div>Your Savings</div>
                <div>Hire Onshore</div>
                <div>Hire With Talent Harbor</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
                {/* Role Select */}
                <div>
                  <label className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase mb-1">Role</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-white border border-[#0F0C09]/20 rounded-[7px] px-3 py-2.5 text-xs text-[#0F0C09] font-medium focus:outline-none focus:border-[#FA5B16]"
                  >
                    {availableRoles.map((r, idx) => (
                      <option key={idx} value={r.name}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Select */}
                <div>
                  <label className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase mb-1">Required Experience</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full bg-white border border-[#0F0C09]/20 rounded-[7px] px-3 py-2.5 text-xs text-[#0F0C09] font-medium focus:outline-none focus:border-[#FA5B16]"
                  >
                    <option value="Junior">Junior (6m-1yr / C-suite support)</option>
                    <option value="Mid">Mid Level (2+ yrs experience)</option>
                    <option value="Senior">Senior (5+ yrs experience)</option>
                  </select>
                </div>

                {/* Savings Preview */}
                <div className="text-sm font-bold text-[#0F0C09]/90">
                  <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Your Savings</span>
                  ${currentSavings.toLocaleString()}
                </div>

                {/* Onshore Preview */}
                <div className="text-sm font-bold text-[#0F0C09]/90">
                  <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Hire Onshore</span>
                  ${currentPricing.onshore.toLocaleString()}
                </div>

                {/* Offshore Preview */}
                <div className="text-sm font-extrabold text-[#FA5B16]">
                  <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Hire With Talent Harbor</span>
                  ${currentPricing.offshore.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Add Button */}
            <div>
              <button
                onClick={handleAddToTeam}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Role to Team</span>
              </button>
            </div>

            {/* Team Table */}
            <div className="bg-[#FAF6F2] rounded-[7px] border border-[#0F0C09]/10 overflow-hidden">
              <div className="grid grid-cols-6 gap-2 p-4 text-[11px] font-bold tracking-wider text-[#FA5B16] uppercase border-b border-[#0F0C09]/10 hidden sm:grid">
                <div className="col-span-2">Role</div>
                <div>Experience</div>
                <div>Your Savings</div>
                <div>Hire Onshore</div>
                <div className="flex justify-between items-center">
                  <span>Talent Harbor</span>
                  <span>Action</span>
                </div>
              </div>

              {teamMembers.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#0F0C09]/50">
                  No roles added to your team yet. Select a role above and click &quot;Add Role to Team&quot;.
                </div>
              ) : (
                <div className="divide-y divide-[#0F0C09]/10">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="grid grid-cols-1 sm:grid-cols-6 gap-2 p-4 items-center text-xs">
                      <div className="col-span-2 font-bold text-[#0F0C09]">{member.role}</div>
                      <div className="text-[#0F0C09]/80">{member.experience}</div>
                      <div className="text-[#0F0C09] font-bold">${member.savings.toLocaleString()}</div>
                      <div className="text-[#0F0C09]/80">${member.onshore.toLocaleString()}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#FA5B16] font-extrabold">${member.offshore.toLocaleString()}</span>
                        <button
                          onClick={() => handleRemoveMember(member.id)}
                          className="text-red-500 hover:text-red-700 p-1 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Summary Breakdown Box */}
            <div className="bg-[#0F0C09] text-white rounded-[7px] p-6 space-y-3 shadow-md">
              <div className="text-xs text-white/80 flex justify-between border-b border-white/10 pb-2.5">
                <span>Monthly cost of onshore hiring:</span>
                <span className="font-bold text-white">${totalOnshore.toLocaleString()}</span>
              </div>
              <div className="text-xs text-white/80 flex justify-between border-b border-white/10 pb-2.5">
                <span>Monthly savings with Talent Harbor:</span>
                <span className="font-bold text-[#FA5B16]">${totalSavings.toLocaleString()}</span>
              </div>
              <div className="text-xs text-white/80 flex justify-between border-b border-white/10 pb-2.5">
                <span>You could be Saving:</span>
                <span className="font-bold text-white">{savingsPercentage}%</span>
              </div>
              <div className="text-sm text-white flex justify-between pt-1">
                <span className="font-bold">Estimated Monthly Cost:</span>
                <span className="font-extrabold text-lg text-[#FA5B16]">${totalOffshore.toLocaleString()}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#0F0C09]/70">
                Ready to deploy your customized remote team within 48 hours?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all"
              >
                <span>Hire Your Custom Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* BOTTOM SECTION 1: Why Top US Brands Trust Talent Harbor */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[7px] border border-[#0F0C09]/10 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0C09]">Vetted Office-Based Talent</h3>
              <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                Our specialists work directly from our professional office in Pakistan with high-speed redundant internet, secure hardware, and dedicated supervision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[7px] border border-[#0F0C09]/10 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0C09]">Strict Time Zone Alignment</h3>
              <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                Your dedicated professionals operate during your preferred US business hours (ET/PT), ensuring instantaneous communication and live collaboration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[7px] border border-[#0F0C09]/10 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#0F0C09]">Transparent Monthly Fee</h3>
              <p className="text-xs text-[#0F0C09]/70 leading-relaxed">
                All packages include 160 hours per month with recruitment, management oversight, reporting, and seamless replacement support included.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM SECTION 2: Ready to Scale Your Operations? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F0C09] rounded-[10px] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Scale Your Operations in 48 Hours
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl">
                Avoid lengthy recruiting cycles and overhead. Speak with our specialists to match the exact skills, tools, and experience level your business needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md hover:bg-[#e04f0f] transition-all shrink-0"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
