import React, { useState } from "react";
import { Check, ZoomIn, Heart, Sparkles } from "lucide-react";
import { amenitiesData } from "../data";
import { AmenityItem } from "../types";

export default function Amenities() {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <section id="amenities" className="w-full py-28 bg-navy-primary text-white relative">
      {/* Editorial stars/grid effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(254,214,91,0.12),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.25em]">
            Curated Amenities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold">
            Designed Around The Rhythm Of Life
          </h2>
          <div className="h-[2px] w-16 bg-gold mx-auto" />
          <p className="font-body text-sm md:text-base text-on-primary-container leading-relaxed">
            At Symphony Heights, amenities are not simply added—they are thoughtfully planned to support everyday living. The community is organised across three distinct lifestyle levels, each designed for a different purpose.
          </p>
        </div>

        {/* Stacked Levels Section */}
        <div className="space-y-32">
          {amenitiesData.map((tier: AmenityItem, idx: number) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={tier.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-24`}
              >
                {/* Visual Image container with 01, 02, 03 level triggers */}
                <div
                  className={`lg:col-span-6 relative group ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.4)] bg-navy-dark">
                    {/* Hover state overlay */}
                    <div className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                      <button
                        onClick={() => handleImageClick(tier.imageUrl)}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 p-3 rounded-full backdrop-blur-md transition-all scale-90 group-hover:scale-100 flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase"
                      >
                        <ZoomIn className="h-4.5 w-4.5" />
                        Explore Level
                      </button>
                    </div>

                    <img
                      src={tier.imageUrl}
                      alt={tier.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-[400px] sm:h-[480px] object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-103"
                    />
                  </div>

                  {/* Absolute Level Indicators */}
                  <div
                    className={`absolute -bottom-6 bg-white text-navy-primary p-5 rounded-lg shadow-2xl hidden md:flex items-center gap-4 border border-champagne z-10 ${
                      isEven ? "-right-6" : "-left-6"
                    }`}
                  >
                    <span className="font-display text-4xl font-extrabold tracking-tight text-navy-primary">
                      {tier.levelNumber}
                    </span>
                    <div className="h-8 w-[1px] bg-navy-primary/20" />
                    <span className="font-body text-xs font-bold uppercase tracking-widest text-navy-primary">
                      {tier.level}
                    </span>
                  </div>
                </div>

                {/* Content description panel */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-gold/10 text-gold rounded font-body text-[10px] font-bold tracking-widest uppercase">
                      Level {tier.levelNumber}
                    </span>
                    <span className="text-white/40 font-display italic text-sm">
                      {tier.level}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold">
                    {tier.title}
                  </h3>

                  <p className="font-body text-sm md:text-base text-on-primary-container leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Bullet features with hover expansion */}
                  <div className="space-y-3 pt-2">
                    {tier.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-3.5 group/bullet"
                      >
                        <div className="h-5 w-5 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/bullet:bg-gold/20 transition-colors">
                          <Check className="h-3.5 w-3.5 text-gold" />
                        </div>
                        <span className="font-body text-sm text-on-primary-container group-hover/bullet:text-white transition-colors">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Engagement Action */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => {
                        const target = document.getElementById("lead-capture-section");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-xs font-bold tracking-wider text-gold hover:text-white uppercase transition-colors flex items-center gap-1.5 focus:outline-none"
                    >
                      Explore Lifestyle Amenities
                      <span className="text-base">→</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Panoramic Zoom Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col gap-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white font-body text-xs font-bold tracking-widest uppercase flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-all focus:outline-none"
            >
              Close Overlay ✕
            </button>
            <img
              src={selectedImage}
              alt="High resolution amenity layout"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-white/60 font-body text-xs italic">
              Artist's Impression — Subject to final structural verification.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
