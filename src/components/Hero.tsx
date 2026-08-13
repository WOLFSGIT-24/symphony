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
      <div className="absolute inset-0 w-full h-full bg-navy-dark">
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
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 bg-navy-dark/40 border border-champagne/30 text-champagne font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-champagne/10 hover:border-champagne transition-all backdrop-blur-sm hover:-translate-y-1 duration-300 w-full sm:w-auto"
          >
            Download Brochure
          </a>
        </div>
      </div>


    </section>
  );
}
