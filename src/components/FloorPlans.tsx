import React, { useState } from "react";
import { ZoomIn, Bed, ShowerHead, Grid, ArrowRight, Table, CheckCircle2 } from "lucide-react";
import { floorPlansData } from "../data";
import { FloorPlanUnit } from "../types";

interface FloorPlansProps {
  onSelectUnit: (unitType: string) => void;
}

export default function FloorPlans({ onSelectUnit }: FloorPlansProps) {
  const [activeTab, setActiveTab] = useState<string>("ground");
  const [blueprintModal, setBlueprintModal] = useState<FloorPlanUnit | null>(null);

  const filteredPlans = floorPlansData.filter((plan) => plan.id === activeTab);

  return (
    <section id="floor-plans" className="w-full py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em]">
            Bespoke Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold">
            Architectural Drafting
          </h2>
          <div className="h-[2px] w-16 bg-navy-primary mx-auto" />
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            Meticulously designed floor plans that optimize usable space, facilitate natural breeze channels, and welcome beautiful morning sunlight.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: "ground", label: "Ground" },
            { id: "podium", label: "Podium" },
            { id: "rooftop", label: "Roof top" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-navy-primary text-white shadow-sm"
                  : "bg-navy-primary/5 text-navy-primary hover:bg-navy-primary/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Drafting Cards */}
        <div className="max-w-3xl mx-auto">
          {filteredPlans.map((plan: FloorPlanUnit) => (
            <div
              key={plan.id}
              className="bg-[#FBF9FB] p-6 sm:p-8 rounded-xl border border-champagne hover:border-navy-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Header Title with premium badge */}
              <div>
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl text-navy-primary font-semibold">
                      {plan.title}
                    </h4>
                    <span className="text-[10px] font-bold text-gray-text/70 uppercase tracking-widest mt-0.5 block">
                      Super Built-up Area: {plan.area}
                    </span>
                  </div>
                  <span className="px-4 py-1.5 bg-champagne text-navy-primary font-body text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {plan.type}
                  </span>
                </div>

                {/* Interactive blueprint visual preview */}
                <div className="aspect-video md:aspect-[2/1] relative p-4 sm:p-6 bg-white rounded-lg border border-navy-primary/5 flex items-center justify-center overflow-hidden">
                  {/* Magnifier glass button overlay */}
                  <div className="absolute inset-0 bg-navy-dark/45 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setBlueprintModal(plan)}
                      className="bg-white text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-5 py-3 rounded shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-champagne"
                    >
                      <ZoomIn className="h-4 w-4" />
                      View Blueprint
                    </button>
                  </div>

                  <img
                    src={plan.imageUrl}
                    alt={plan.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>



                {/* Structured details parameters */}
                <div className="mt-6">
                  <span className="text-[9px] font-extrabold text-navy-primary uppercase tracking-[0.2em] block mb-2">
                    Layout Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {plan.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-2 items-start text-xs text-gray-text font-body">
                        <CheckCircle2 className="h-4 w-4 text-bronze mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquire specifically about this unit */}
              <button
                onClick={() => onSelectUnit(plan.type)}
                className="w-full mt-8 bg-navy-primary/5 hover:bg-navy-primary hover:text-white border border-navy-primary/10 text-navy-primary font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded flex items-center justify-center gap-2 transition-all duration-300"
              >
                Inquire About Layout
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </div>
          ))}
        </div>
      </div>

      {/* Full Drafting Blueprint Magnifier Modal */}
      {blueprintModal && (
        <div
          className="fixed inset-0 bg-navy-dark/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setBlueprintModal(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-navy-primary/10 pb-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-primary">
                  {blueprintModal.title} Drafting Detail
                </h3>
                <span className="text-xs text-gray-text font-semibold uppercase">
                  {blueprintModal.type} — {blueprintModal.area} Architectural Blueprint
                </span>
              </div>
              <button
                onClick={() => setBlueprintModal(null)}
                className="text-gray-text hover:text-navy-primary font-body text-xs font-bold bg-navy-primary/5 hover:bg-navy-primary/10 px-3.5 py-2 rounded focus:outline-none"
              >
                Close ✕
              </button>
            </div>

            {/* Huge blueprint rendering */}
            <div className="h-[55vh] p-4 bg-navy-primary/5 rounded border border-navy-primary/10 flex items-center justify-center overflow-auto">
              <img
                src={blueprintModal.imageUrl}
                alt={blueprintModal.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Bottom metadata */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body border-t border-navy-primary/10 pt-4">
              <span className="text-gray-text italic">
                *Dimension standards adhere to RERA carpet guidelines. Final layout details subject to approval.
              </span>
              <button
                onClick={() => {
                  onSelectUnit(blueprintModal.type);
                  setBlueprintModal(null);
                }}
                className="bg-navy-primary hover:bg-navy-light text-white font-bold tracking-widest uppercase px-6 py-3 rounded shadow"
              >
                Book Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
