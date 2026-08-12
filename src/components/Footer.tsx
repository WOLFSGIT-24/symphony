import React from "react";
import { Landmark, ShieldAlert, ArrowUpCircle } from "lucide-react";
import { projectSnapshot } from "../data";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-navy-dark text-white border-t border-white/10 py-16 relative overflow-hidden">
      {/* Radial soft background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,214,91,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 ">
            <img
              src="/logo.png"
              alt="Symphony Heights logo"
              referrerPolicy="no-referrer"
              className="w-48 md:w-39 h-auto object-contain object-left brightness-0 invert"
            />
            <p className="font-body text-xs sm:text-sm text-on-primary-container max-w-sm leading-relaxed">
              A harmonious blend of architectural precision and lifestyle elegance in the heart of Hennur Road, North Bangalore. Crafted for families seeking uncompromised luxury.
            </p>
          </div>

          {/* Location & Contact Grid */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-bold text-champagne uppercase tracking-wider">
              Enclave Location
            </h4>
            <div className="font-body text-xs sm:text-sm text-on-primary-container space-y-1.5">
              <p className="text-white font-medium">Hennur Outer Ring Road Corner</p>
              <p>North Bangalore, Karnataka</p>
              <p>India - 560077</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gold uppercase tracking-wider font-bold">
              <Landmark className="h-3 w-3" />
              RERA Approved
            </div>
          </div>

          {/* Legacy & Developer Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-champagne uppercase tracking-wider">
              The Legacy
            </h4>
            <p className="font-body text-xs sm:text-sm text-on-primary-container leading-relaxed">
              A landmark residential development engineered by <strong>{projectSnapshot.developer}</strong>. Redefining high-end regional living through meticulous construction and deliberate visual design.
            </p>
          </div>

        </div>

        {/* Legal & Copyright bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <span className="block font-body text-[10px] tracking-wider text-on-primary-container uppercase">
              © {new Date().getFullYear()} SYMPHONY HEIGHTS COLLECTIVE. ALL RIGHTS RESERVED.
            </span>
            <span className="block text-[9px] text-white/30 font-body">
              RERA Reg. ID: {projectSnapshot.rera} | Developer: {projectSnapshot.developer}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-bold text-champagne uppercase tracking-wider">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <button
              onClick={handleScrollTop}
              title="Scroll back to top"
              className="p-1 rounded-full text-white/50 hover:text-white transition-colors focus:outline-none flex items-center gap-1.5 font-body text-[10px] font-semibold tracking-wider uppercase"
            >
              Back to Top
              <ArrowUpCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
