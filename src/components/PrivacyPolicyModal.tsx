import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-dark/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-navy-primary/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-navy-primary/5 bg-marble shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-primary font-bold">Privacy Policy</h2>
            <p className="font-body text-xs text-charcoal/60 mt-1 uppercase tracking-widest">Symphony Heights Collective</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-navy-primary/5 text-navy-primary/60 hover:text-navy-primary transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-charcoal/80 leading-relaxed space-y-8 custom-scrollbar">
          
          <div className="space-y-4">
            <p>
              This website is operated by Symphony Heights Collective, the authorised marketing channel for Symphony Heights, a boutique community of premium 3 BHK residences in North Bangalore. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">1. Information We Collect</h3>
            <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>City / Location (if provided)</li>
              <li>Any message or query you submit</li>
            </ul>
            <p>We may also automatically collect non-personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">2. How We Use Your Information</h3>
            <p>Your personal information is used solely for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your enquiry about Symphony Heights</li>
              <li>Sharing digital brochures, floor plans, and project details</li>
              <li>Connecting you with the authorised Symphony Heights sales team</li>
              <li>Sending relevant updates about the project, pricing, and launch events</li>
              <li>Personalising your experience on this website</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">3. Data Sharing</h3>
            <p>We may share your information with Disha Properties and their authorised sales representatives for the sole purpose of fulfilling your enquiry and following up on your interest in this project.</p>
            <p>We do not sell, rent, or trade your personal data to any third parties for marketing purposes unrelated to Symphony Heights or Disha Properties projects.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">4. Cookies & Tracking Technologies</h3>
            <p>This website uses cookies and tracking technologies — including Meta Pixel, Google Analytics, and Google Ads — for the purpose of:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Measuring advertising performance across platforms</li>
              <li>Understanding visitor behaviour and engagement on the website</li>
              <li>Optimising our marketing campaigns</li>
              <li>Providing relevant remarketing to interested audiences</li>
            </ul>
            <p>You may disable cookies through your browser settings; however, some features of this website may not function optimally as a result.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">5. Data Retention</h3>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required under applicable Indian law. Once the data is no longer needed, it is securely deleted or anonymised.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">6. Data Security</h3>
            <p>We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">7. Your Rights</h3>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of any inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent to marketing communications at any time</li>
              <li>Opt out of remarketing or targeted advertising</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided below.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">8. Children's Privacy</h3>
            <p>This website is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a child has submitted personal information via this website, please contact us immediately so we may take appropriate action.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">9. Changes to This Policy</h3>
            <p>We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or applicable law. Updated versions will be posted on this page with a revised effective date. We encourage you to review this policy periodically.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-navy-primary">10. Contact Us</h3>
            <p>For any privacy-related queries, please reach out to the Symphony Heights sales team:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Project:</strong> Symphony Heights</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Email:</strong> info@symphonyheights.com</li>
              <li><strong>Location:</strong> Hennur Outer Ring Road Corner, North Bangalore</li>
              <li><strong>RERA Reg. No.:</strong> PRM/KA/RERA/1251/446/PR/250925/008120</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-6 border-t border-navy-primary/5 bg-marble shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-navy-primary text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-navy-dark transition-colors shadow-sm"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
