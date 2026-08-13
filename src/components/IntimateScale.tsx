import React from "react";
import { ShieldAlert, Compass, Sparkles, Building2 } from "lucide-react";

export default function IntimateScale() {
  return (
    <section className="w-full py-24 bg-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational left section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[1px] bg-navy-light" />
              <span className="font-body text-xs font-bold text-gray-text uppercase tracking-[0.2em]">
                The Intimate Scale
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
              Boutique Living. Thoughtfully Designed.
            </h2>

            <p className="font-body text-base md:text-lg text-gray-text leading-relaxed">
              Luxury isn't measured by the number of amenities. It's reflected in planning, privacy and attention to detail. Symphony Heights offers a boutique living experience with just 128 residences, ensuring a quieter, more exclusive community.
            </p>

            {/* Project Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "1836 Sq.ft Onwards",
                "Single Tower Development",
                "Three Lifestyle Levels",
                "Premium Clubhouse",
                "Spacious Floor Plans",
                "Natural Ventilation"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 font-body text-sm text-charcoal/90">
                  <div className="h-1.5 w-1.5 rounded-full bg-bronze shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="/Brochure.pdf"
                download="Symphony-Heights-Brochure.pdf"
                className="inline-flex items-center gap-2 bg-transparent border border-navy-primary text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-navy-primary hover:text-white transition-colors w-full sm:w-auto justify-center rounded-sm"
              >
                Download Floor Plans
              </a>
            </div>
          </div>

          {/* Graphical Right Panel with Hover Depth Effect */}
          <div className="lg:col-span-7 relative flex justify-center">
            {/* Elegant Background Framing */}
            <div className="absolute inset-0 bg-champagne/25 rounded-2xl transform rotate-2 translate-x-2 translate-y-2 scale-98" />
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-2xl group">
              <img
                src="/intimate-scale.jpg"
                alt="Boutique high-ceiling living space"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Overlay Quality Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-navy-primary/90 text-white rounded backdrop-blur-sm border border-white/10 font-body text-[10px] font-bold tracking-widest uppercase">
                Premium Interiors
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
