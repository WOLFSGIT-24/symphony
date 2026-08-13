import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function ProjectHighlights() {
  return (
    <section className="py-8 bg-navy-dark border-b border-navy-primary/10 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Compact Strip for Pricing and Payment Plan */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 lg:p-6 mb-5 shadow-lg backdrop-blur-sm max-w-5xl mx-auto">
          
          {/* Price Section */}
          <div className="flex flex-col items-center lg:items-start flex-1 w-full lg:w-auto pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/10">
            <span className="font-body text-[10px] lg:text-xs tracking-[0.2em] text-champagne uppercase mb-1">
              Starting From
            </span>
            <div className="flex items-baseline gap-2 text-center lg:text-left">
              <span className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-wide">
                ₹1.85 Cr*
              </span>
            </div>
            <span className="text-[9px] text-white/50 italic mt-1 text-center lg:text-left">
              *Exclusive Launch Incentives
            </span>
          </div>

          {/* Payment Plan Section */}
          <div className="flex flex-col items-center lg:items-end flex-1 w-full lg:w-auto pt-4 lg:pt-0 relative group">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-body text-[10px] lg:text-xs tracking-[0.2em] text-gold font-bold uppercase text-center lg:text-right">
                Exclusive Payment Plan
              </span>
              <div className="relative group/tooltip">
                <HelpCircle className="h-3.5 w-3.5 text-gold/80 hover:text-gold cursor-pointer" />
                <div className="absolute bottom-full right-[-50px] lg:right-0 mb-2 w-52 p-2.5 bg-white text-navy-dark text-[10px] rounded shadow-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity z-20 text-center font-body normal-case tracking-normal border border-gold/20">
                  Pay 25% on Booking, 25% on Plinth, 25% on Structure completion, and 25% on Possession.
                </div>
              </div>
            </div>
            <span className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-widest whitespace-nowrap">
              25:25:25:25
            </span>
            <span className="text-[9px] text-gold/90 font-semibold tracking-wider uppercase mt-1 text-center lg:text-right">
              Zero Pre-EMI Interest Option
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
