"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Plus, Trash2, ArrowRight, ShieldCheck, Users, TrendingUp, X, Loader2, CheckCircle2, Calendar, DollarSign, Award } from "lucide-react";

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

  // Popup Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  // ANNUAL & MULTI-YEAR SAVINGS CALCULATIONS
  const monthlySavings = totalSavings;
  const annualSavings = totalSavings * 12;
  const threeYearSavings = totalSavings * 36;
  const fiveYearSavings = totalSavings * 60;

  // Annual Onshore vs Offshore
  const annualOnshore = totalOnshore * 12;
  const annualOffshore = totalOffshore * 12;

  // Handle Popup Submission to Web3Forms
  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Format team breakdown list into text
    const teamSummaryText = teamMembers.length > 0
      ? teamMembers.map((m, idx) => `${idx + 1}. Role: ${m.role} (${m.experience}) | Onshore: $${m.onshore} | Talent Harbor: $${m.offshore} | Savings: $${m.savings}`).join("\n")
      : "No specific roles pre-selected from calculator.";

    const fullMessage = `
CLIENT CONTACT INFORMATION:
- Name: ${clientName}
- Phone: ${clientPhone}
- Email: ${clientEmail}

CALCULATED TEAM CONFIGURATION:
${teamSummaryText}

FINANCIAL SUMMARY:
- Total Monthly Onshore Cost: $${totalOnshore.toLocaleString()}
- Total Estimated Talent Harbor Cost: $${totalOffshore.toLocaleString()}
- Total Monthly Savings: $${totalSavings.toLocaleString()} (${savingsPercentage}%)
- Total Annual Savings: $${annualSavings.toLocaleString()}
- Total 3-Year Savings: $${threeYearSavings.toLocaleString()}
- Total 5-Year Savings: $${fiveYearSavings.toLocaleString()}
    `;

    const formData = new FormData();
    formData.append("access_key", "1e848b27-4309-40de-a104-5697a4c266f4");
    formData.append("subject", `New Team Calculator Inquiry - ${clientName}`);
    formData.append("name", clientName);
    formData.append("email", clientEmail);
    formData.append("phone", clientPhone);
    formData.append("message", fullMessage);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to submit calculator data.");
      }
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all cursor-pointer"
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
                          className="text-red-500 hover:text-red-700 p-1 transition-colors cursor-pointer"
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

            {/* 🌟 NEW: ANNUAL & MULTI-YEAR SAVINGS SECTION 🌟 */}
            {teamMembers.length > 0 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Section Header */}
                <div className="flex items-center gap-3 border-b border-[#0F0C09]/10 pb-3">
                  <div className="w-9 h-9 rounded-[7px] bg-gradient-to-br from-[#FA5B16] to-[#ff8a4d] text-white flex items-center justify-center shadow-md">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F0C09] tracking-tight">
                      Your Long-Term Savings Breakdown
                    </h3>
                    <p className="text-[11px] text-[#0F0C09]/60 font-medium">
                      See how much your business saves over time with Talent Harbor
                    </p>
                  </div>
                </div>

                {/* Beautiful Savings Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Monthly Savings Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#FAF6F2] to-white rounded-[10px] p-5 border border-[#0F0C09]/10 shadow-sm hover:shadow-md hover:border-[#FA5B16]/40 transition-all group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FA5B16]/5 rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F0C09]/60">
                          Monthly Savings
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-[#0F0C09]">
                          ${monthlySavings.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#0F0C09]/60 font-medium leading-relaxed">
                        Saved every single month
                      </p>
                    </div>
                  </div>

                  {/* Annual Savings Card - HIGHLIGHTED */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#FA5B16] to-[#e04f0f] rounded-[10px] p-5 shadow-lg hover:shadow-xl transition-all group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/5 rounded-full"></div>
                    <div className="relative space-y-2 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-[7px] bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                            Annual Savings
                          </span>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-white text-[#FA5B16] px-2 py-0.5 rounded-full">
                          Most Loved
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-white">
                          ${annualSavings.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/80 font-medium leading-relaxed">
                        Saved over a full 12-month year
                      </p>
                    </div>
                  </div>

                  {/* 3-Year Savings Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#FAF6F2] to-white rounded-[10px] p-5 border border-[#0F0C09]/10 shadow-sm hover:shadow-md hover:border-[#FA5B16]/40 transition-all group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FA5B16]/5 rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-[7px] bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
                          <Award className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F0C09]/60">
                          3-Year Savings
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-[#0F0C09]">
                          ${threeYearSavings.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#0F0C09]/60 font-medium leading-relaxed">
                        Compounded over 36 months
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Annual Comparison Bar */}
                <div className="bg-white rounded-[10px] border border-[#0F0C09]/10 p-5 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-xs font-bold text-[#0F0C09] uppercase tracking-wider flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#FA5B16]" />
                      <span>Annual Cost Comparison</span>
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16] bg-[#FA5B16]/10 px-2.5 py-1 rounded-full">
                      You Save {savingsPercentage}%
                    </span>
                  </div>

                  {/* Onshore Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#0F0C09]/70 uppercase tracking-wider text-[10px]">Onshore Hiring (Annual)</span>
                      <span className="font-extrabold text-[#0F0C09]">${annualOnshore.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-3 bg-[#FAF6F2] rounded-full overflow-hidden border border-[#0F0C09]/5">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0F0C09] to-[#3a3532] rounded-full transition-all duration-1000"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Offshore Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#FA5B16] uppercase tracking-wider text-[10px]">Talent Harbor (Annual)</span>
                      <span className="font-extrabold text-[#FA5B16]">${annualOffshore.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-3 bg-[#FAF6F2] rounded-full overflow-hidden border border-[#0F0C09]/5">
                      <div 
                        className="h-full bg-gradient-to-r from-[#FA5B16] to-[#ff8a4d] rounded-full transition-all duration-1000"
                        style={{ width: `${(annualOffshore / annualOnshore) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Savings Highlight */}
                  <div className="pt-3 border-t border-[#0F0C09]/10 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FA5B16]/10 text-[#FA5B16] flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F0C09]/60">Net Annual Savings</p>
                        <p className="text-lg font-extrabold text-[#FA5B16] leading-tight">
                          ${annualSavings.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F0C09]/60">5-Year Projection</p>
                      <p className="text-lg font-extrabold text-[#0F0C09] leading-tight">
                        ${fiveYearSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Action CTA Triggering Popup */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#0F0C09]/70">
                Ready to deploy your customized remote team within 48 hours?
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all cursor-pointer"
              >
                <span>Hire Your Custom Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
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
            <button
              onClick={() => {
                setSubmitted(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow-md hover:bg-[#e04f0f] transition-all shrink-0 cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

      {/* POPUP MODAL FOR CALCULATOR SUBMISSION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 select-none animate-in fade-in duration-200">
          <div className="bg-white rounded-[10px] border border-[#0F0C09]/15 shadow-2xl max-w-md w-full p-6 sm:p-8 relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF6F2] text-[#0F0C09] hover:bg-[#FA5B16] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#FA5B16] mx-auto" />
                <h3 className="text-lg font-bold text-[#0F0C09]">
                  Team Inquiry Received!
                </h3>
                <p className="text-xs text-[#0F0C09]/70 max-w-xs mx-auto leading-relaxed">
                  Thank you! Your custom calculator configuration and contact details have been successfully sent to business@talentharbor.net.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-[7px] bg-[#FA5B16] text-white text-xs font-bold shadow hover:bg-[#e04f0f] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handlePopupSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FA5B16]">
                    Finalize Your Setup
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F0C09]">
                    Where should we send your team estimate?
                  </h3>
                  <p className="text-xs text-[#0F0C09]/60">
                    Enter your details below and our team will reach out within 2 hours.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-[7px] bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#0F0C09]/80 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[7px] bg-[#FAF6F2] border border-[#0F0C09]/10 text-xs font-semibold text-[#0F0C09] focus:outline-none focus:border-[#FA5B16] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-[7px] bg-[#FA5B16] hover:bg-[#FA5B16]/90 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-70 cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Send to Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
