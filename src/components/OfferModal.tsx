import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<any, "id" | "submittedAt">) => void;
}

export default function OfferModal({ isOpen, onClose, onAddLead }: OfferModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    countryCode: '+91 (IN)',
    phone: '',
    agree: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onAddLead({
      fullName: formData.firstName,
      email: formData.email,
      phone: `${formData.countryCode.split(' ')[0]} ${formData.phone}`,
      source: 'offer_popup',
      status: 'Pending',
      notes: 'Interested in Flexi Payment Plan'
    });
    
    setLoading(false);
    setSubmitted(true);
    
    // Close automatically after 3 seconds
    setTimeout(() => {
      onClose();
      // Reset form after closing
      setTimeout(() => setSubmitted(false), 300);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[400px] bg-[#EBE3CD] rounded-lg shadow-2xl overflow-hidden animate-fade-in border border-[#D5CBAA]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            {/* Header Content */}
            <div className="p-6 sm:p-8 pb-5 border-b border-[#D5CBAA]">
              <h2 className="font-display text-[26px] font-bold text-navy-primary leading-[1.2] mb-3 pr-6 uppercase">
                Flexi Payment<br />Plan
              </h2>
            </div>

            {/* Form Fields */}
            <div className="p-6 sm:p-8 pt-5 space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold font-body text-navy-primary mb-1.5">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white border border-black rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-navy-primary/20 focus:border-navy-primary font-body text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold font-body text-navy-primary mb-1.5">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-black rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-navy-primary/20 focus:border-navy-primary font-body text-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold font-body text-navy-primary mb-1.5">
                  Mobile Number*
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-[100px] bg-white border border-black rounded-md px-2 py-2.5 text-sm outline-none font-body text-black appearance-none cursor-pointer text-center"
                  >
                    <option value="+91 (IN)">+91 (IN)</option>
                    <option value="+1 (US)">+1 (US)</option>
                    <option value="+44 (UK)">+44 (UK)</option>
                    <option value="+971 (UAE)">+971 (UAE)</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-white border border-black rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#45579C]/20 focus:border-[#45579C] font-body text-black placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 border border-black rounded bg-white checked:bg-navy-primary checked:border-navy-primary focus:ring-0 cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:left-[2px] checked:after:top-[-1px]"
                  />
                </div>
                <label htmlFor="agree" className="text-[10px] text-black font-body leading-tight">
                  I agree to the Terms of Service and Privacy Policy. I agree to receive updates & offers via WhatsApp, SMS, Email & RCS.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-body text-sm font-bold tracking-[0.2em] uppercase py-3.5 mt-2 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center h-[400px] flex flex-col justify-center">
            <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6 shadow-sm">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#45579C] mb-2">Request Received</h3>
            <p className="font-body text-sm text-gray-700">
              Thank you! Our sales team will contact you shortly with details regarding the Flexi Payment plan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
