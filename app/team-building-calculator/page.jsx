"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, Plus, Trash2, ArrowRight, Sparkles } from "lucide-react";

// Predefined roles with base onshore and Talent Harbor offshore pricing tiers
const availableRoles = [
  {
    name: "Customer Support Representative",
    tiers: {
      Junior: { onshore: 3200, offshore: 1200 },
      Mid: { onshore: 4200, offshore: 1600 },
      Senior: { onshore: 5800, offshore: 2200 },
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
    name: "Executive Assistant",
    tiers: {
      Junior: { onshore: 3500, offshore: 1300 },
      Mid: { onshore: 4800, offshore: 1800 },
      Senior: { onshore: 6500, offshore: 2600 },
    },
  },
  {
    name: "Website Developer & Maintenance",
    tiers: {
      Junior: { onshore: 4500, offshore: 1600 },
      Mid: { onshore: 6500, offshore: 2500 },
      Senior: { onshore: 9000, offshore: 3800 },
    },
  },
];

export default function TeamBuildingCalculatorPage() {
  const [selectedRole, setSelectedRole] = useState(availableRoles[0].name);
  const [selectedExperience, setSelectedExperience] = useState("Junior");
  const [teamMembers, setTeamMembers] = useState([]);

  // Get current pricing based on selections
  const currentRoleObj = availableRoles.find((r) => r.name === selectedRole) || availableRoles[0];
  const currentPricing = currentRoleObj.tiers[selectedExperience] || { onshore: 3200, offshore: 1200 };
  const currentSavings = currentPricing.onshore - currentPricing.offshore;

  // Add member to team list
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

  // Remove member from team list
  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  // Calculate totals
  const totalOnshore = teamMembers.reduce((acc, curr) => acc + curr.onshore, 0);
  const totalOffshore = teamMembers.reduce((acc, curr) => acc + curr.offshore, 0);
  const totalSavings = teamMembers.reduce((acc, curr) => acc + curr.savings, 0);
  const savingsPercentage = totalOnshore > 0 ? ((totalSavings / totalOnshore) * 100).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-[#FAF6F2] text-[#0F0C09] flex flex-col font-sans select-none">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Page Title */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Cost Efficiency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F0C09]">
            Team Building Calculator
          </h1>
          <p className="text-sm text-[#0F0C09]/70">
            Build your remote department, compare onshore versus Talent Harbor offshore costs, and see your exact financial savings instantly.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="bg-[#0F0C09] rounded-[10px] p-6 sm:p-8 border border-[#0F0C09]/20 shadow-xl space-y-8 text-white">
          
          {/* Top Selector Box */}
          <div className="bg-[#14100D] rounded-[7px] border border-white/10 p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs font-bold tracking-wider text-[#FA5B16] uppercase pb-2 border-b border-white/10 hidden sm:grid">
              <div>Role</div>
              <div>Required Experience</div>
              <div>Your Savings</div>
              <div>Hire Onshore</div>
              <div>Hire With Talent Harbor</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
              {/* Select Role */}
              <div>
                <label className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase mb-1">Role</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-[#1F1A16] border border-white/15 rounded-[7px] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FA5B16]"
                >
                  {availableRoles.map((r, idx) => (
                    <option key={idx} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Experience */}
              <div>
                <label className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase mb-1">Required Experience</label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full bg-[#1F1A16] border border-white/15 rounded-[7px] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FA5B16]"
                >
                  <option value="Junior">Junior (6m - 1yr / C-suite support)</option>
                  <option value="Mid">Mid Level (2+ yrs experience)</option>
                  <option value="Senior">Senior (5+ yrs experience)</option>
                </select>
              </div>

              {/* Calculated Preview Savings */}
              <div className="text-sm font-semibold text-white/90">
                <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Your Savings</span>
                ${currentSavings.toLocaleString()}
              </div>

              {/* Onshore Cost Preview */}
              <div className="text-sm font-semibold text-white/90">
                <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Hire Onshore</span>
                ${currentPricing.onshore.toLocaleString()}
              </div>

              {/* Offshore Cost Preview */}
              <div className="text-sm font-semibold text-[#FA5B16]">
                <span className="block sm:hidden text-[10px] text-[#FA5B16] font-bold uppercase">Hire With Talent Harbor</span>
                ${currentPricing.offshore.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Add to Team Button */}
          <div>
            <button
              onClick={handleAddToTeam}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Team</span>
            </button>
          </div>

          {/* Team Members Added Table */}
          <div className="bg-[#14100D] rounded-[7px] border border-white/10 overflow-hidden">
            <div className="grid grid-cols-6 gap-2 p-4 text-[11px] font-bold tracking-wider text-[#FA5B16] uppercase border-b border-white/10 hidden sm:grid">
              <div className="col-span-2">Role</div>
              <div>Experience</div>
              <div>Your Savings</div>
              <div>Hire Onshore</div>
              <div className="flex justify-between items-center">
                <span>Hire With Talent Harbor</span>
                <span>Action</span>
              </div>
            </div>

            {teamMembers.length === 0 ? (
              <div className="p-8 text-center text-xs text-white/50">
                No roles added to your team yet. Select a role above and click &quot;Add to Team&quot;.
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {teamMembers.map((member) => (
                  <div key={member.id} className="grid grid-cols-1 sm:grid-cols-6 gap-2 p-4 items-center text-xs">
                    <div className="col-span-2 font-bold text-white">{member.role}</div>
                    <div className="text-white/80">{member.experience}</div>
                    <div className="text-white/90 font-semibold">${member.savings.toLocaleString()}</div>
                    <div className="text-white/90">${member.onshore.toLocaleString()}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#FA5B16] font-bold">${member.offshore.toLocaleString()}</span>
                      <button
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-red-400 hover:text-red-300 p-1 transition-colors"
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

          {/* Summary Breakdown Card */}
          <div className="bg-[#14100D] rounded-[7px] border border-white/10 p-6 space-y-3">
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

          {/* Bottom Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/70">
              Ready to assemble your custom team? Get in touch with our specialists today.
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
      </main>

      <Footer />
    </div>
  );
}
