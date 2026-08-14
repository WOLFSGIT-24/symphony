import React from "react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#241c18] text-white/80 border-t border-white/5 py-20 relative overflow-hidden font-body">
      {/* Radial warm lighting backdrop overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,214,91,0.02),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column: Logo & Address */}
          <div className="md:col-span-5 space-y-6">
            <img
              src="/combo-logo.png"
              alt="Disha Properties Logo"
              className="max-h-16 w-auto object-contain brightness-0 invert"
            />
            <div className="space-y-2 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              <p>Symphony Heights by Disha Properties</p>
              <p>Hennur Bagalur Road, Doddagubbi Main Rd, Bengaluru, 560077</p>
              <p className="italic text-gold/80 pt-2">Rooted in convenience. Blossoming in value.</p>
            </div>
          </div>

          {/* Middle Column: Navigate */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Navigate
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              {[
                { label: "Overview", id: "overview" },
                { label: "Master Plan", id: "floor-plans" },
                { label: "Amenities", id: "amenities" },
                { label: "Location", id: "location" },
                { label: "Enquire", id: "lead-capture-section" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: CTA & Contact */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl text-white font-medium leading-snug">
              Begin your journey to <br />
              <span className="italic text-gold">uncompromised living.</span>
            </h3>

            <div className="space-y-2">
              <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
                Contact
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                <a href="tel:08047359991" className="hover:text-gold transition-colors">080 4735 9991</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo("lead-capture-section")}
                className="border border-gold/40 text-gold font-body text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-gold hover:text-navy-dark transition-all rounded-sm cursor-pointer"
              >
                Book a Private Tour
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-10" />

        {/* Legal & Compliance bottom section */}
        <div className="space-y-8 text-xs text-white/50 leading-relaxed">
          
          {/* RERA and legal copy */}
          <div className="space-y-3">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block">
              Compliance & RERA
            </span>
            <p className="max-w-4xl text-[11px]">
              Karnataka RERA Registration No: <strong className="text-white/85">{projectSnapshot.rera}</strong> is available at the official website <a href="https://rera.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">https://rera.karnataka.gov.in</a>.
            </p>
            <p className="max-w-4xl text-[10px] text-white/40">
              Disclaimer: The information provided on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any real estate. Visuals, renders, and layouts are artistic impressions only and subject to change by the developer.
            </p>
          </div>

          {/* Privacy & copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/5 text-[11px]">
            <div>
              <p>© {new Date().getFullYear()} Disha Properties. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
                className="hover:text-white underline cursor-pointer focus:outline-none"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
                className="hover:text-white underline cursor-pointer focus:outline-none"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

          {/* Authorized Sales Partner Branding */}
          <div className="pt-6 border-t border-white/5 space-y-1">
            <span className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] block mb-1">
              Authorized Sales Partner
            </span>
            <p className="text-[11px] font-bold text-white/80">
              Wolf Media
            </p>
            <p className="text-[11px] text-white/60">
              This website is operated by an authorized marketing partner for Disha Properties.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
