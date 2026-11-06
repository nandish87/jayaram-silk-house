import React from 'react';
import brandConfig from '../../brand.config';

export default function WebGLFallback({ activeColorIndex = 0 }) {
  const currentPalette = brandConfig.cloth3D.heroPalette[activeColorIndex] || brandConfig.cloth3D.heroPalette[0];

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-silk-maroon-dark">
      {/* Layered fluid gradient ripples simulating silk drape */}
      <div 
        className="absolute inset-0 opacity-80 transition-colors duration-1000"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${currentPalette.sheen} 0%, ${currentPalette.hex} 55%, #180306 100%)`
        }}
      />

      {/* Animated Sheen Overlay */}
      <div className="absolute inset-0 bg-saree-sheen animate-shimmer opacity-40 mix-blend-overlay pointer-events-none" />

      {/* SVG Draped Silk Curves */}
      <svg className="absolute inset-0 w-full h-full object-cover opacity-35" viewBox="0 0 1440 900" fill="none">
        <path 
          d="M -100,200 C 300,500 600,100 1000,400 C 1300,600 1500,200 1600,300 L 1600,900 L -100,900 Z" 
          fill="url(#fallbackGoldGrad)" 
          opacity="0.3"
        />
        <path 
          d="M -50,350 C 350,650 700,250 1100,550 C 1350,700 1550,400 1650,500 L 1650,900 L -50,900 Z" 
          fill={currentPalette.hex} 
          opacity="0.7"
        />
        <defs>
          <linearGradient id="fallbackGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFE885" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8A5A2B" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Auspicious golden dust dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-silk-gold-light blur-sm animate-pulse-glow" />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-silk-gold blur-sm animate-pulse-glow delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-silk-gold-light blur-xs animate-pulse-glow delay-500" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-md pointer-events-none">
        <div className="inline-block px-4 py-1 rounded-full border border-silk-gold/40 bg-silk-maroon/60 backdrop-blur-sm text-silk-gold-light text-xs font-serif tracking-widest uppercase mb-3">
          Handloom Silk Texture Preview
        </div>
      </div>
    </div>
  );
}

