import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function ProjectHighlights() {
  return (
    <section className="py-8 bg-navy-dark border-b border-navy-primary/10 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Compact Strip for Pricing and Payment Plan */}
        <div className="flex flex-row items-center justify-center bg-white/5 border border-white/10 rounded-xl p-3 sm:p-5 mb-5 shadow-lg backdrop-blur-sm max-w-3xl mx-auto w-full">
          
          {/* Price Section */}
          <div className="flex flex-col items-center flex-1 border-r border-white/10 px-2 sm:px-4">
            <span className="font-body text-[8px] sm:text-[10px] lg:text-xs tracking-[0.2em] text-champagne uppercase mb-0.5">
              Starting From
            </span>
            <span className="font-body text-lg sm:text-2xl lg:text-3xl font-semibold text-white tracking-wide">
              ₹1.85 Cr*
            </span>
            <span className="text-[7px] sm:text-[9px] text-white/50 mt-0.5">
              *Exclusive Incentives
            </span>
          </div>

          {/* Payment Plan Section */}
          <div className="flex flex-col items-center flex-1 px-2 sm:px-4 relative group">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-body text-[8px] sm:text-[10px] lg:text-xs tracking-[0.2em] text-gold font-bold uppercase">
                Payment Plan
              </span>
              <div className="relative group/tooltip">
                <HelpCircle className="h-3 w-3 text-gold/80 hover:text-gold cursor-pointer" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white text-navy-dark text-[9px] rounded shadow-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity z-20 text-center font-body normal-case tracking-normal border border-gold/20">
                  Pay 25% on Booking, 25% on Plinth, 25% on Structure, and 25% on Possession.
                </div>
              </div>
            </div>
            <span className="font-body text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-widest whitespace-nowrap">
              25:25:25:25
            </span>
            <span className="text-[7px] sm:text-[9px] text-gold/90 font-semibold tracking-wider uppercase mt-0.5">
              Zero Pre-EMI Option
            </span>
          </div>
        </div>

        {/* Compact Highlight Pills */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-5xl mx-auto">
          {[
            "Premium 3 BHK Homes",
            "Only 128 Residences",
            "Hennur, North Bangalore",
            "3 Levels of Amenities",
            "25 Mins to Manyata Tech",
            "20 Mins to Mall of Asia",
            "30 Mins to Kempegowda Int. Airport"
          ].map((item, idx) => (
            <span key={idx} className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[9px] sm:text-[10px] font-body font-semibold text-white/80 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-colors cursor-default whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
