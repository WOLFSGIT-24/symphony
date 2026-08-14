import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntimateScale from "./components/IntimateScale";

import Amenities from "./components/Amenities";
import Location from "./components/Location";
import FloorPlans from "./components/FloorPlans";
import MasterPlan from "./components/MasterPlan";
import BrochureForm from "./components/BrochureForm";
import BookingModal from "./components/BookingModal";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TermsModal from "./components/TermsModal";
import OfferModal from "./components/OfferModal";
import DownloadModal from "./components/DownloadModal";
import { LeadSubmission } from "./types";

const LOCAL_STORAGE_KEY = "symphony_heights_leads";

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [preselectedUnit, setPreselectedUnit] = useState<string | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [floorPlansUnlocked, setFloorPlansUnlocked] = useState(() => {
    try {
      return localStorage.getItem("floor_plans_unlocked") === "true";
    } catch {
      return false;
    }
  });

  // Trigger offer modal after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOfferOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Read initial cache
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        // Initialize with realistic seed leads
        const initialSeeds = generateMockLeads();
        setLeads(initialSeeds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeeds));
      }
    } catch (e) {
      console.error("Error reading localized storage cache", e);
    }
  }, []);

  const saveLeadsToCache = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLeads));
    } catch (e) {
      console.error("Error saving lead entries to localized storage", e);
    }
  };

  const handleAddLead = (rawLead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => {
    const newLead: LeadSubmission = {
      ...rawLead,
      id: "LD-" + Math.floor(1000 + Math.random() * 9000),
      submittedAt: new Date().toISOString(),
      status: "Pending",
    };
    const updated = [newLead, ...leads];
    saveLeadsToCache(updated);
    try {
      localStorage.setItem("floor_plans_unlocked", "true");
    } catch (e) {
      console.error(e);
    }
    setFloorPlansUnlocked(true);
  };

  const handleRequestDownload = () => {
    setOfferOpen(true);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    saveLeadsToCache(updated);
  };

  const handleClearLeads = () => {
    saveLeadsToCache([]);
  };

  const handleAddMockLeads = () => {
    const extraSeeds = generateMockLeads();
    saveLeadsToCache([...extraSeeds, ...leads]);
  };

  const handleSelectUnitType = (unitType: string) => {
    setPreselectedUnit(unitType);
    setOfferOpen(true);
  };

  const handleHeroEnquiry = () => {
    setOfferOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-marble text-charcoal pb-20 md:pb-0 overflow-x-hidden w-full">
      {/* Upper Navigation Header */}
      <Header
        onOpenBooking={() => {
          setPreselectedUnit(null);
          setOfferOpen(true);
        }}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
        isAdminActive={adminOpen}
      />

      {/* Hero Entrance Banner */}
      <Hero onOpenEnquiry={handleHeroEnquiry} onRequestDownload={handleRequestDownload} />



      {/* Property Privacy and Scale Section */}
      <IntimateScale onRequestDownload={handleRequestDownload} />

      {/* Architectural Master Plan */}
      <MasterPlan onSelectUnit={handleSelectUnitType} />

      {/* Stacked Amenities Presentation */}
      <Amenities />

      {/* Interactive Floor Drafting Plans */}
      <FloorPlans 
        onSelectUnit={handleSelectUnitType} 
        isUnlocked={floorPlansUnlocked}
        onUnlockRequest={() => setOfferOpen(true)}
      />

      {/* Gallery Section */}
      <Gallery />

      {/* Location Connectivity Grid */}
      <Location onOpenEnquiry={handleHeroEnquiry} />

      {/* Brochure / Intake Form Section */}
      <BrochureForm 
        onAddLead={handleAddLead} 
        preselectedUnit={preselectedUnit} 
      />

      {/* Booking Site Walkthrough Modal Dialog */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setPreselectedUnit(null);
        }}
        onAddLead={handleAddLead}
        initialUnitType={preselectedUnit}
      />

      {/* Download Brochure Modal Dialog */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onAddLead={handleAddLead}
      />

      {/* Lead CRM Dashboard Overlay */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateStatus}
        onClearLeads={handleClearLeads}
        onAddMockLeads={handleAddMockLeads}
      />

      {/* Fixed Mobile Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
        <a 
          href="tel:08047359991" 
          className="flex-1 flex items-center justify-center gap-2 bg-navy-primary text-white font-body text-[13px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors hover:bg-navy-dark border-r border-white/20"
        >
          <Phone className="h-4 w-4 fill-white" />
          Call Now
        </a>
        <button 
          onClick={() => {
            setPreselectedUnit(null);
            setOfferOpen(true);
          }}
          className="flex-1 flex items-center justify-center bg-navy-primary text-white font-body text-[13px] font-extrabold uppercase tracking-[0.15em] py-4 transition-colors hover:bg-navy-dark"
        >
          Enquire Now
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919035679657"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all z-40 flex items-center justify-center animate-fade-in"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer Credentials Branding */}
      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)} 
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Legal Modals */}
      <PrivacyPolicyModal 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
      />
      <TermsModal 
        isOpen={termsOpen} 
        onClose={() => setTermsOpen(false)} 
      />
      <OfferModal
        isOpen={offerOpen}
        onClose={() => setOfferOpen(false)}
        onAddLead={handleAddLead}
      />
    </div>
  );
}

function generateMockLeads(): LeadSubmission[] {
  return [
    {
      id: "LD-5812",
      fullName: "Anand Swaminathan",
      email: "anand.swamy@gmail.com",
      phone: "+91 94451 28941",
      submittedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
      source: "site_visit_form",
      preferredDate: new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0],
      preferredTime: "12:00",
      status: "Scheduled",
      notes: "Unit Choice: Luxury 3 BHK. Customer Note: Requesting high-floor East facing options.",
    },
    {
      id: "LD-2903",
      fullName: "Pooja Malhotra",
      email: "pooja_malhotra88@yahoo.com",
      phone: "+91 88265 19032",
      submittedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
      source: "brochure_form",
      status: "Contacted",
      notes: "Selected Unit preference: Premium 2 BHK",
    },
    {
      id: "LD-1102",
      fullName: "Dr. Sandeep Vardhan",
      email: "sandeep.v@stjohns.edu.in",
      phone: "+91 99160 30214",
      submittedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
      source: "site_visit_form",
      preferredDate: new Date(Date.now() + 1 * 86400000).toISOString().split("T")[0],
      preferredTime: "10:00",
      status: "Pending",
      notes: "Unit Choice: Both Layouts. Doctor wants to check the hospital proximity details.",
    },
  ];
}
