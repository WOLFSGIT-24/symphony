import React, { useState } from "react";
import { MapPin, Car, Train, Navigation, Info } from "lucide-react";
import { locationsData, projectSnapshot } from "../data";
import { CommuteDestination } from "../types";

type CommuteMode = "driving" | "transit" | "walking";

export default function Location() {
  const [commuteMode, setCommuteMode] = useState<CommuteMode>("driving");

  const getModeLabel = (mode: CommuteMode) => {
    switch (mode) {
      case "driving":
        return "By Car / Cab";
      case "transit":
        return "Metro / Bus";
      case "walking":
        return "Foot Commute";
    }
  };

  return (
    <section id="location" className="w-full py-24 bg-champagne/15 relative overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full fill-navy-primary" viewBox="0 0 100 100">
          <circle cx="85" cy="50" r="45" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational Connectivity details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[1px] bg-navy-primary" />
              <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.2em]">
                Prime Location
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
              Everything That Matters. In One Address.
            </h2>



            {/* Commute Mode Selector Panel */}
            <div className="bg-white/80 p-1.5 rounded-lg border border-navy-primary/10 shadow-sm flex items-center justify-between gap-1">
              {[
                { id: "driving", icon: "🚗", label: "Drive" },
                { id: "transit", icon: "🚇", label: "Transit" },
                { id: "walking", icon: "🚶", label: "Walk" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMockCommuteMode(tab.id as CommuteMode)}
                  className={`flex-1 py-2.5 rounded font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    commuteMode === tab.id
                      ? "bg-navy-primary text-white shadow-sm"
                      : "text-gray-text hover:text-navy-primary hover:bg-navy-primary/5"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Destination Hub List with Dynamic Times */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-primary uppercase tracking-wider mb-2">
                <Navigation className="h-3.5 w-3.5 text-bronze animate-pulse" />
                <span>Estimated Commute Times ({getModeLabel(commuteMode)})</span>
              </div>

              {locationsData.map((dest: CommuteDestination) => {
                const duration = dest.times[commuteMode];
                return (
                  <div
                    key={dest.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-navy-primary/5 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-navy-primary/5 flex items-center justify-center text-navy-primary">
                        <span className="material-symbols-outlined text-[20px] text-navy-primary">
                          {dest.icon}
                        </span>
                      </div>
                      <div>
                        <span className="block font-body text-sm font-semibold text-navy-primary">
                          {dest.name}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-text/70 uppercase">
                          Distance: {dest.distance}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-bold text-navy-primary block">
                        {duration}
                      </span>
                      <span className="text-[10px] text-gray-text font-bold uppercase tracking-wider -mt-1 block">
                        Minutes
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>


            
            {/* CTA Button */}
            <div className="pt-2">
              <button 
                onClick={() => {
                  const target = document.getElementById("lead-capture-section");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-navy-primary text-white hover:bg-navy-light text-xs font-bold tracking-widest uppercase px-6 py-4 rounded shadow-sm transition-colors"
              >
                Explore Location Advantages
              </button>
            </div>

            {/* Neighborhood quick fact */}
            <div className="flex gap-3 p-4 bg-gold/10 border border-gold/25 rounded-lg text-xs text-navy-primary/90 font-body">
              <Info className="h-5 w-5 text-bronze shrink-0 mt-0.5" />
              <p>
                <strong>Hennur Outer Ring Road:</strong> Upcoming Phase 3 Metro corridor is located within 500 meters of Symphony Heights, guaranteeing significant property capital appreciation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl shadow-2xl overflow-hidden relative border border-navy-primary/10 flex items-center justify-center bg-[#F4EDE5] p-6 sm:p-10 lg:p-12">
            
            <img 
              src="/map.png"
              alt="Location Map"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );

  function setMockCommuteMode(mode: CommuteMode) {
    setCommuteMode(mode);
  }
}
