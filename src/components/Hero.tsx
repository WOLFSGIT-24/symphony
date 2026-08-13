import React from "react";
import { ArrowRight, Download } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-screen pt-[72px] sm:pt-[80px] bg-marble flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20 relative z-10">
        
        {/* Left Side: Primary Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl bg-white p-2 sm:p-3 z-10">
            <img
              src="/hero-bg.png"
              alt="Symphony Heights tower"
              className="w-full h-[50vh] sm:h-auto sm:aspect-[4/5] object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-navy-primary font-bold tracking-tight leading-[1.1] mb-2 animate-fade-in">
            Elegance <br className="hidden lg:block"/> Thoughtfully Built.
          </h1>
          <p className="font-body text-lg sm:text-2xl text-navy-primary/80 mb-6 animate-fade-in delay-100">
            To Live. To Relax. To Thrive.
          </p>
          
          <div className="font-body text-[10px] sm:text-xs font-bold tracking-[0.2em] text-navy-primary/60 uppercase mb-8 animate-fade-in delay-200">
            Premium 3 BHK Residences at Hennur, North Bangalore
          </div>

          {/* Pricing Box */}
          <div className="bg-navy-primary text-white p-6 sm:p-8 relative transform hover:-translate-y-1 transition-transform duration-300 w-full max-w-md shadow-2xl animate-slide-up delay-300 mb-8 rounded-sm">
            <div className="text-[10px] sm:text-xs text-champagne uppercase tracking-widest font-bold mb-2 flex items-center gap-2 justify-center lg:justify-start">
              <span className="h-[1px] w-6 bg-champagne"></span>
              Launching
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold mb-2 text-champagne">
              Symphony Heights
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mt-5 border-t border-white/10 pt-4">
              <div className="font-body text-sm font-medium tracking-wider text-white/80 uppercase">
                3 Bed Homes
              </div>
              <div className="text-center sm:text-right">
                <div className="font-display text-2xl font-bold">₹1.85 Cr onwards*</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400 w-full sm:w-auto relative z-30">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg w-full sm:w-auto rounded-sm"
            >
              Book A Home Tour
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/Brochure.pdf"
              download="Symphony-Heights-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border border-navy-primary text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary hover:text-white transition-colors w-full sm:w-auto rounded-sm"
            >
              <Download className="h-4 w-4" />
              Brochure
            </a>
          </div>

          {/* Secondary Tilted Image (Bottom Right) */}
          <div className="hidden xl:block absolute -right-20 -bottom-16 w-56 h-64 transform rotate-6 shadow-2xl bg-white p-2.5 z-10 hover:rotate-2 transition-transform duration-700 pointer-events-none">
            <img 
              src="/kidsplay.jpg" 
              alt="Kids playing at Symphony Heights"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
