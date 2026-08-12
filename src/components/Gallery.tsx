import React, { useEffect, useRef } from "react";

const images = [
  "/cricpitch.jpg",
  "/indoor-games.jpg",
  "/kitchen.jpg",
  "/kidsplay.jpg",
  "/pet-park.jpg",
  "/partyhall.jpg"
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run auto-scroll on mobile devices
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    let intervalId: number;
    const startAutoScroll = () => {
      intervalId = window.setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // If we reached the end, snap back to start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll right by roughly one image width
            const scrollAmount = window.innerWidth * 0.8; 
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-marble text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
            Curated Spaces
          </h2>
          <p className="font-body text-base text-gray-text max-w-2xl mx-auto mt-4 leading-relaxed">
            Experience the meticulously crafted interiors designed for uncompromised luxury.
          </p>
        </div>

        {/* Gallery Container - Mobile Carousel / Desktop Grid */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide webkit scrollbar */}
          <style>{`
            #gallery .flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {images.map((src, idx) => (
            <div 
              key={idx}
              className="flex-none w-[85vw] sm:w-[60vw] md:w-auto aspect-[4/3] rounded-lg overflow-hidden snap-center relative group"
            >
              <img
                src={src}
                alt={`Gallery interior ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
