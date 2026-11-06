import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function MonolithWatermark() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="Website developer watermark"
      className="fixed bottom-6 left-6 z-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href="https://getmonolith.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-silk-maroon-dark/90 hover:bg-black/95 text-silk-sand hover:text-white border border-silk-gold/30 hover:border-silk-gold shadow-2xl backdrop-blur-md transition-all duration-300 text-[11px] font-sans"
        title="Monolith — One System. Every Reply. | Autonomous AI Infrastructure"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silk-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-silk-gold"></span>
        </span>
        <span className="font-serif tracking-wider font-semibold text-silk-gold-light group-hover:text-silk-gold">
          Monolith
        </span>
        <span className="hidden sm:inline text-[10px] text-gray-400 group-hover:text-gray-300 border-l border-silk-gold/20 pl-2">
          One System. Every Reply.
        </span>
        <ExternalLink className="w-3 h-3 text-silk-gold/70 group-hover:text-silk-gold group-hover:translate-x-0.5 transition-transform" />
      </a>
    </aside>
  );
}
