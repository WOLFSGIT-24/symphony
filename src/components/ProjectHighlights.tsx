import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function ProjectHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-marble relative z-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white grid">
          
          {/* Slide 0: Pricing & Payment Plan */}
          <div 
            className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Logo Side */}
              <div className="w-full md:w-5/12 bg-champagne/30 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-navy-primary/10">
                <span className="font-body text-[10px] sm:text-xs font-bold tracking-widest text-navy-primary/60 uppercase mb-4">
                  Launching
                </span>
                <img src="/logo.png" alt="Symphony Heights" className="h-24 sm:h-28 object-contain mb-4" />
                <span className="font-body text-[10px] font-bold tracking-widest text-navy-primary uppercase">
                  Hennur, North Bangalore
                </span>
              </div>
              
              {/* Right Content Side */}
              <div className="w-full md:w-7/12 flex-1 bg-navy-primary p-8 sm:p-12 flex flex-col justify-center">
                <div className="font-body text-xl sm:text-2xl font-semibold text-white tracking-wide mb-2">
                  3 BED Homes
                </div>
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-champagne mb-8">
                  ₹ 1.85 Cr* Onwards
                </div>
                
                <div className="h-[1px] w-full bg-white/10 mb-8"></div>
                
                <div className="font-body text-sm sm:text-base font-bold text-white uppercase tracking-widest mb-3">
                  ZERO PRE-EMI PLAN
                </div>
                <div className="font-body text-sm text-white/70 tracking-wide leading-relaxed">
                  Pay 25% on Booking, 25% on Plinth, 25% on Structure, 25% on Possession.
                </div>
              </div>
            </div>
          </div>

          {/* Slide 1: Features Grid */}
          <div 
            className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out bg-white ${currentSlide === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Logo Side */}
              <div className="w-full md:w-5/12 bg-champagne/30 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-navy-primary/10">
                <span className="font-body text-[10px] sm:text-xs font-bold tracking-widest text-navy-primary/60 uppercase mb-4">
                  Experience
                </span>
                <img src="/logo.png" alt="Symphony Heights" className="h-24 sm:h-28 object-contain mb-4" />
                <span className="font-body text-[10px] font-bold tracking-widest text-navy-primary uppercase">
                  Hennur, North Bangalore
                </span>
              </div>
              
              {/* Right Features Grid */}
              <div className="w-full md:w-7/12 flex-1 p-4 sm:p-10 grid grid-cols-2 gap-3 sm:gap-6 bg-marble/20">
                
                {/* Feature 1 */}
                <div className="border border-navy-primary/15 rounded-lg p-3 sm:p-5 bg-white hover:bg-champagne/10 transition-colors shadow-sm">
                  <div className="font-display text-[16px] sm:text-xl font-bold text-navy-primary mb-1 sm:mb-2 leading-tight">128 Residences</div>
                  <div className="font-body text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-navy-primary/60">Boutique Community</div>
                </div>

                {/* Feature 2 */}
                <div className="border border-navy-primary/15 rounded-lg p-3 sm:p-5 bg-white hover:bg-champagne/10 transition-colors shadow-sm">
                  <div className="font-display text-[16px] sm:text-xl font-bold text-navy-primary mb-1 sm:mb-2 leading-tight">1 Acre Canvas</div>
                  <div className="font-body text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-navy-primary/60">Intimate Scale</div>
                </div>

                {/* Feature 3 */}
                <div className="border border-navy-primary/15 rounded-lg p-3 sm:p-5 bg-white hover:bg-champagne/10 transition-colors shadow-sm">
                  <div className="font-display text-[16px] sm:text-xl font-bold text-navy-primary mb-1 sm:mb-2 leading-tight">Rooftop Oasis</div>
                  <div className="font-body text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-navy-primary/60">With Infinity Pool</div>
                </div>

                {/* Feature 4 */}
                <div className="border border-navy-primary/15 rounded-lg p-3 sm:p-5 bg-white hover:bg-champagne/10 transition-colors shadow-sm">
                  <div className="font-display text-[16px] sm:text-xl font-bold text-navy-primary mb-1 sm:mb-2 leading-tight">Global Planners</div>
                  <div className="font-body text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-navy-primary/60">RERA Approved</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls & CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => {
              const target = document.getElementById("lead-capture-section");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg w-full sm:w-auto rounded-sm cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </button>

          {/* Navigation Dots */}
          <div className="flex items-center gap-3">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? 'w-8 h-2 bg-navy-primary'
                    : 'w-2 h-2 bg-navy-primary/20 hover:bg-navy-primary/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
