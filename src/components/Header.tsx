import React, { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
}

export default function Header({ onOpenBooking, onToggleAdmin, isAdminActive }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link determination
      const sections = ["overview", "amenities", "location", "floor-plans", "snapshots"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-marble/95 backdrop-blur-md border-b border-navy-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="Symphony Heights logo"
              referrerPolicy="no-referrer"
              className="h-36 md:h-40 py-1 w-auto object-contain brightness-0 group-hover:scale-105 transition-transform duration-300"
              style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "OVERVIEW", id: "overview" },
              { label: "AMENITIES", id: "amenities" },
              { label: "LOCATION", id: "location" },
              { label: "FLOOR PLANS", id: "floor-plans" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`font-body text-xs font-semibold tracking-wider transition-all duration-300 relative py-2 ${
                  isScrolled
                    ? activeSection === link.id
                      ? "text-navy-primary"
                      : "text-gray-text hover:text-navy-primary"
                    : activeSection === link.id
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] animate-fade-in ${
                      isScrolled ? "bg-navy-primary" : "bg-gold"
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Call to Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className={`hidden md:block px-5 py-2.5 rounded font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md ${
                isScrolled
                  ? "bg-navy-primary text-white hover:bg-navy-light"
                  : "bg-white text-navy-primary hover:bg-champagne"
              }`}
            >
              BOOK SITE VISIT
            </button>



            {/* Hamburger Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-navy-primary" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-navy-primary" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-navy-dark/95 backdrop-blur-lg z-30 lg:hidden flex flex-col p-8 space-y-6 animate-fade-in">
          {[
            { label: "OVERVIEW", id: "overview" },
            { label: "AMENITIES", id: "amenities" },
            { label: "LOCATION", id: "location" },
            { label: "FLOOR PLANS", id: "floor-plans" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="font-display text-xl font-medium text-white/90 hover:text-gold tracking-wide py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-gold text-navy-primary font-body font-bold text-xs tracking-wider uppercase py-4 rounded transition-all shadow-lg mt-8"
          >
            BOOK SITE VISIT
          </button>
        </div>
      )}
    </>
  );
}
