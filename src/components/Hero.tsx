import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-0 lg:min-h-screen pt-[72px] sm:pt-[80px] bg-marble flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 md:px-12 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-6 lg:py-20 relative z-10">
        {/* Left Side: Primary Image */}
        <div className="w-full lg:w-1/2 relative mb-4 lg:mb-0">
          <div className="relative shadow-2xl bg-white p-2 sm:p-3 z-10">
            <img
              src="/hero-bg.png"
              alt="Symphony Heights tower"
              className="w-full h-[58vh] sm:h-auto sm:aspect-[4/5] object-cover object-bottom"
            />
            {/* Pricing Box (Mobile overlay) */}
            <div className="lg:hidden absolute bottom-0 translate-y-[65%] left-1/2 -translate-x-1/2 w-[88%] max-w-[290px] bg-navy-primary text-white py-2.5 px-4 shadow-2xl z-20 rounded-sm border border-white/10 text-center">
              <div className="text-[10px] sm:text-xs text-champagne uppercase tracking-widest font-extrabold mb-0.5">
                Starting from
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-champagne leading-tight">
                ₹1.85 Crore*
              </div>
              <div className="border-t border-white/10 pt-1.5 mt-1">
                <div className="font-body text-[10px] font-bold tracking-wider text-white/90 uppercase">
                  Flexi Payment Plan
                </div>
                <div className="text-2xl text-white/70 font-semibold font-body leading-tight mt-0.5">
                  25 : 25 : 25 : 25
                </div>
              </div>
            </div>
          </div>

          {/* Quick Summary Banner (Mobile Only) */}
          <div className="lg:hidden mt-24 mx-4 p-4 bg-white rounded-lg border border-navy-primary/10 shadow-lg flex items-center justify-between text-left">
            <div className="space-y-1.5 flex-[1.4] pr-3">
              <div className="text-[10px] font-extrabold text-navy-primary uppercase tracking-wider font-body">
                Premium 3 BHK Homes
              </div>
              <div className="text-[18px] font-bold text-charcoal/80 uppercase tracking-widest flex items-center gap-1 font-body">
                <MapPin className="h-4 w-4 text-bronze shrink-0" />
                Hennur
              </div>
            </div>

            <div className="h-12 w-[1px] bg-charcoal/20" />

            <div className="flex-1 pl-4 flex items-center justify-center">
              <img
                src="/combo-logo.png"
                alt="Disha Properties Logo"
                className="max-h-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 px-6 md:px-0">
          <div className="flex flex-row items-start justify-between w-full gap-4 mb-6">
            <div className="flex-1">
              <h1 className="font-display text-[20px] sm:text-5xl md:text-5xl text-navy-primary font-bold tracking-tight leading-[1.15] mb-2 animate-fade-in">
                Your First Premium Home Should Never Be a Compromise.
              </h1>
              <p className="hidden lg:block font-body text-lg text-navy-primary/80 mb-2 animate-fade-in delay-100 leading-relaxed max-w-xl">
                Introducing Symphony Heights by Disha Properties—a boutique
                community of just 128 premium 3 BHK residences in the heart of
                Hennur. Designed for the perfect balance of connectivity,
                lifestyle, and long-term value.
              </p>
            </div>
          </div>

          {/* Pricing Box (Desktop) */}
          <div className="hidden lg:block mt-6 bg-navy-primary text-white py-4 px-5 relative transform hover:-translate-y-1 transition-transform duration-300 w-full max-w-[280px] shadow-2xl animate-slide-up delay-300 mb-8 rounded-sm border border-white/5">
            <div className="text-[10px] text-champagne uppercase tracking-widest font-extrabold mb-0.5">
              Starting from
            </div>
            <div className="font-display text-3xl font-bold mb-1 text-champagne leading-tight">
              ₹1.85 Crore*
            </div>
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="font-body text-[11px] font-bold tracking-wider text-white/90 uppercase">
                Flexi Payment Plan
              </div>
              <div className="text-[9px] text-white/70 font-medium font-body leading-relaxed mt-0.5">
                Pay 25% now and nothing for 1 year
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400 w-full sm:w-auto relative z-30">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center justify-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg w-full sm:w-auto rounded-sm"
            >
              Book a site visit
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onRequestDownload}
              className="flex items-center justify-center gap-2 bg-transparent border border-navy-primary text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary hover:text-white transition-colors w-full sm:w-auto rounded-sm cursor-pointer"
            >
              <Download className="h-4 w-4" />
              Brochure
            </button>
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
