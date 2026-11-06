import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsapp.number}?text=${encodeURIComponent(brandConfig.contact.whatsapp.prefilledMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-silk-maroon-dark/95 border border-silk-gold/40 text-silk-gold-light text-xs shadow-2xl backdrop-blur-md animate-fadeIn">
          <span>Chat with Weavers on WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-silk-gold/70 hover:text-white ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Y. Jayaram Silk Sarees on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-emerald-300"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

