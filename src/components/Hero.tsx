import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Immersive background image with cinematic gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-bg.png"
          alt="Symphony Heights twilight high-rise"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, professional gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/45 via-navy-primary/20 to-navy-dark/65" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center text-center">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
          <span className="font-body text-[10px] md:text-xs font-bold tracking-[0.25em] text-champagne uppercase">
            A Boutique Collection of 128 Residences
          </span>
        </div>

        {/* Elegant Display Title & Subheadline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[1.1] max-w-4xl mb-6 animate-slide-up">
          Your First Premium Home Should Never Be a Compromise.
        </h1>
        <p className="font-body text-sm md:text-base text-champagne/90 max-w-2xl mb-8 animate-fade-in leading-relaxed text-center">
          Introducing Symphony Heights by Disha Properties—a boutique community of just 128 premium 3 BHK residences in the heart of Hennur. Designed for the perfect balance of connectivity, lifestyle, and long-term value.
        </p>

        {/* Central Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full mb-10 animate-fade-in">
          {/* Starting Price Card */}
          <div className="bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md border border-champagne/20 rounded-lg p-5 flex flex-col items-center group">
            <span className="font-body text-[10px] tracking-widest text-champagne/80 uppercase mb-1">
              Starting From
            </span>
            <span className="font-display text-2xl md:text-3xl font-semibold text-white tracking-wide">
              ₹1.85 Cr*
            </span>
            <span className="text-[10px] text-white/40 mt-1 italic group-hover:text-white/60 transition-colors">
              *Exclusive Launch Incentives
            </span>
          </div>

          {/* Flexible Multi-Phase Payment structure */}
          <div className="bg-navy-primary/80 border border-gold/30 rounded-lg p-5 flex flex-col items-center shadow-2xl relative overflow-hidden group">
            {/* Soft gold accent glow */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gold/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-body text-[10px] tracking-widest text-gold font-bold uppercase">
                Exclusive Payment Plan
              </span>
              <div className="relative group/tooltip">
                <HelpCircle className="h-3.5 w-3.5 text-gold/80 hover:text-gold cursor-pointer" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-navy-dark text-white text-[9px] rounded shadow-lg opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity z-20 text-center font-body normal-case tracking-normal">
                  Pay 25% on Booking, 25% on Plinth, 25% on Structure completion, and 25% on Possession.
                </div>
              </div>
            </div>
            <span className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-widest">
              25 : 25 : 25 : 25
            </span>
            <span className="text-[10px] text-gold/80 mt-1 font-semibold">
              Zero Pre-EMI Interest Option Available
            </span>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 max-w-5xl w-full text-[10px] sm:text-xs font-body font-semibold text-white/90 uppercase tracking-widest animate-fade-in">
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">Premium 3 BHK Homes</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">Only 128 Residences</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">Hennur, North Bangalore</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">3 Levels of Amenities</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">25 Mins to Manyata Tech</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center">20 Mins to Mall of Asia</div>
          <div className="bg-white/5 border border-white/10 rounded px-4 py-2.5 backdrop-blur-sm flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-2">30 Mins to Kempegowda Int. Airport</div>
        </div>

        {/* Cinematic Call to Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up w-full sm:w-auto">
          <button
            onClick={onOpenEnquiry}
            className="group relative flex items-center justify-center gap-3 bg-champagne text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-white transition-all shadow-2xl hover:shadow-[0_10px_40px_rgba(237,229,208,0.3)] hover:-translate-y-1 duration-300 w-full sm:w-auto"
          >
            Book Your Exclusive Site Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="/Brochure.pdf"
            download="Symphony-Heights-Brochure.pdf"
            className="group relative flex items-center justify-center gap-3 bg-navy-dark/40 border border-champagne/30 text-champagne font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-champagne/10 hover:border-champagne transition-all backdrop-blur-sm hover:-translate-y-1 duration-300 w-full sm:w-auto"
          >
            Download Brochure
          </a>
        </div>
      </div>


    </section>
  );
}
