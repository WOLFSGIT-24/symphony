import React, { useState, useEffect } from "react";
import { Download, CheckCircle, Calendar, Sparkles, Phone, Mail, User, ShieldCheck } from "lucide-react";
import { projectSnapshot } from "../data";
import { LeadSubmission } from "../types";

interface BrochureFormProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  preselectedUnit?: string | null;
}

export default function BrochureForm({ onAddLead, preselectedUnit }: BrochureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "11:00",
    unitType: "",
    source: "brochure_form" as const,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validatedCode, setValidatedCode] = useState("");

  // Sync pre-selected unit from outer clicks
  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({ ...prev, unitType: preselectedUnit }));
      // Scroll to form automatically
      const el = document.getElementById("lead-capture-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preselectedUnit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate lead verification and catalog creation
    setTimeout(() => {
      const generatedCode = "SH-" + Math.floor(100000 + Math.random() * 900000);
      setValidatedCode(generatedCode);

      // Persist the lead
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate || undefined,
        preferredTime: formData.preferredTime || undefined,
        source: formData.source,
        notes: formData.unitType ? `Selected Unit preference: ${formData.unitType}` : undefined,
      });

      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleDownloadBrochure = () => {
    // Generate simulated dynamic catalog download
    const brochureText = `
========================================
SYMPHONY HEIGHTS - BOUTIQUE COLLECTIVE
========================================
Brochure Code: ${validatedCode}
Lead Register: ${formData.fullName}
Unit Preference: ${formData.unitType || "General Information"}
Contact Registered: ${formData.email} / ${formData.phone}
========================================
Thank you for your interest in North Bangalore's 
most exclusive 128 boutique enclave.

PROJECT SNAPSHOT:
- Total Land Area: 2.5 Acres
- Boutique Units: 128 Elite Residences
- Configuration: 2 & 3 BHK Premium Units
- Intended Possession: December 2026
- RERA ID: PRM/KA/RERA/1251/446/PR/250925/008120

A customized investment projection has been sent 
to your email address. Our Relationship Director 
will contact you shortly.
========================================
    `;

    const blob = new Blob([brochureText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Symphony_Heights_E_Brochure_${formData.fullName.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="snapshots" className="w-full py-24 bg-navy-dark text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(254,214,91,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div id="lead-capture-section" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Project Snapshot & Metadata */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl text-champagne font-semibold leading-tight">
              Your Next Chapter Begins Here.
            </h2>


            <div className="bg-navy-primary/60 p-6 sm:p-8 rounded-lg space-y-5 border border-white/5 shadow-2xl">
              <h4 className="font-display text-lg font-bold text-champagne tracking-wide flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-gold" />
                Project Snapshot
              </h4>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-on-primary-container">
                <li className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="font-semibold text-white">Premium 3 BHK Homes</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="font-semibold text-white">Starting from ₹1.85 Crore</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="font-semibold text-white">Only 128 Residences</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="font-semibold text-white">Hennur Outer Ring Road Corner, North Bangalore</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="font-semibold text-white">Exclusive 25:25:25:25 Payment Plan</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="font-semibold text-white">RERA No. PRM/KA/RERA/1251/446/PR/250925/008120</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Lead Intake Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#1b1b1d] p-8 sm:p-10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gold" />

              {!formSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-primary">
                      Schedule Your Exclusive Site Visit
                    </h3>
                    <p className="font-body text-xs text-gray-text mt-1">
                      Experience the project, understand the floor plans and explore the lifestyle that Symphony Heights has to offer.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-1.5">
                      <label className="text-[10px] font-bold text-navy-primary uppercase tracking-wider block mb-1">
                        Full Name
                      </label>
                      <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Goyal"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-300 py-1"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-1.5">
                      <label className="text-[10px] font-bold text-navy-primary uppercase tracking-wider block mb-1">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@example.com"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-300 py-1"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="relative border-b border-gray-200 focus-within:border-navy-primary transition-colors py-1.5">
                      <label className="text-[10px] font-bold text-navy-primary uppercase tracking-wider block mb-1">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-transparent border-none text-sm font-body outline-none placeholder:text-gray-300 py-1"
                        />
                      </div>
                    </div>

                    {/* Multi-Unit Interest Segment */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Apartment Preference Selector */}
                      <div>
                        <label className="text-[10px] font-bold text-navy-primary uppercase tracking-wider block mb-2">
                          Apartment Interest
                        </label>
                        <select
                          id="unitType"
                          value={formData.unitType}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-body px-3.5 py-2.5 rounded outline-none focus:border-navy-primary"
                        >
                          <option value="">Select Configuration</option>
                          <option value="Premium 2 BHK">Premium 2 BHK (1,250 Sq.Ft)</option>
                          <option value="Luxury 3 BHK">Luxury 3 BHK (1,680 Sq.Ft)</option>
                          <option value="Both Layouts">Inquire About Both</option>
                        </select>
                      </div>

                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-navy-primary text-white font-body text-xs font-bold tracking-widest uppercase py-4 rounded hover:bg-navy-light transition-all flex items-center justify-center gap-2.5 shadow hover:shadow-lg disabled:opacity-50 mt-4 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          VERIFYING LEDGER...
                        </>
                      ) : (
                        "BOOK MY SITE VISIT"
                      )}
                    </button>

                    <div className="flex gap-2 justify-center items-center text-[10px] text-gray-400 font-body">
                      <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                      <span>End-to-End SSL secured. Your credentials are never shared.</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy-primary">
                      Registration Complete
                    </h3>
                    <p className="font-body text-sm text-gray-text mt-1.5 max-w-md mx-auto">
                      Pleasure registering you, <strong>{formData.fullName}</strong>. Your customized e-brochure file and layout drafts are validated and ready.
                    </p>
                  </div>

                  {/* Verification coupon */}
                  <div className="p-4 bg-navy-primary/5 rounded border border-navy-primary/10 max-w-sm mx-auto flex flex-col items-center">
                    <span className="text-[9px] font-extrabold text-navy-primary uppercase tracking-[0.2em]">
                      Secure Brochure Verification Token
                    </span>
                    <span className="font-display text-xl font-bold text-navy-primary mt-1 tracking-wider">
                      {validatedCode}
                    </span>
                    {formData.preferredDate && (
                      <span className="text-[10px] text-gray-text mt-2 font-body flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-bronze" />
                        Site appointment locked: {formData.preferredDate} at {formData.preferredTime}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={handleDownloadBrochure}
                      className="bg-navy-primary hover:bg-navy-light text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded flex items-center justify-center gap-2 shadow"
                    >
                      <Download className="h-4 w-4" />
                      DOWNLOAD CATALOG
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-navy-primary/5 hover:bg-navy-primary/10 text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded"
                    >
                      REGISTER ANOTHER
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
