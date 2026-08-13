import React from "react";
import { Landmark, ShieldAlert, ArrowUpCircle } from "lucide-react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
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

          {/* Site Address */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold text-champagne uppercase tracking-wider">
              Site Address
            </h4>
            <div className="font-body text-xs sm:text-sm text-on-primary-container space-y-1.5 leading-relaxed">
              <p>Hennur Bagalur Road, Doddagubbi Main Rd,</p>
              <p>Bengaluru, 560077</p>
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gold uppercase tracking-wider font-bold mb-1">
                <Landmark className="h-3 w-3" />
                RERA Approved
              </div>
              <p className="font-body text-[10px] text-white/50 tracking-wider">
                PRM/KA/RERA/1251/446/PR/250925/008120
              </p>
            </div>
          </div>

          {/* Corporate Address & Contact */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold text-champagne uppercase tracking-wider">
                Corporate Address
              </h4>
              <div className="font-body text-xs sm:text-sm text-on-primary-container space-y-1.5 leading-relaxed">
                <p>2nd Floor, Above Axis Bank, #43/2, Whitefield Main</p>
                <p>Road, Bengaluru, Karnataka 560066</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold text-champagne uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="font-body text-xs sm:text-sm text-on-primary-container space-y-1.5 leading-relaxed">
                <p>Phone: <a href="tel:08047359991" className="hover:text-white transition-colors">080 4735 9991</a></p>
                <p>Email: <a href="mailto:info@symphonyheights.com" className="hover:text-white transition-colors">info@symphonyheights.com</a></p>
              </div>
            </div>
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
            <button 
              onClick={(e) => {
                e.preventDefault();
                onOpenPrivacy?.();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase font-bold text-[10px]"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms?.();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase font-bold text-[10px]"
            >
              Terms & Conditions
            </button>
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
