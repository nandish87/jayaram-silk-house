import React, { useState, lazy, Suspense } from 'react';
import { Sparkles, ArrowRight, Phone, ShieldCheck, ChevronDown } from 'lucide-react';

// Lazy-load the heavy 3D Canvas so Three.js doesn't block initial paint
const CanvasContainer = lazy(() => import('../3d/CanvasContainer'));
import brandConfig from '../../brand.config';

export default function Hero({ onExploreClick }) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const palettes = brandConfig.cloth3D.heroPalette;

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Living Saree Background Canvas (lazy-loaded) */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="w-full h-full bg-silk-maroon-dark flex items-center justify-center">
            <div className="animate-pulse text-silk-gold font-serif text-sm tracking-widest">Loading 3D Silk Experience...</div>
          </div>
        }>
          <CanvasContainer activeColorIndex={activeColorIndex} />
        </Suspense>
      </div>

      {/* Subtle Vignette & Gradient Overlays for Readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-silk-maroon-dark via-transparent to-silk-maroon-dark/60 opacity-80" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-silk-maroon-dark/85 via-silk-maroon-dark/30 to-transparent" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-silk-ivory">
        <div className="max-w-3xl space-y-6">
          {/* Auspicious Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-silk-maroon-dark/80 border border-silk-gold/50 shadow-silk-glow backdrop-blur-md animate-fadeIn">
            <span className="text-silk-gold text-sm font-serif">卐</span>
            <span className="text-xs font-serif tracking-widest text-silk-gold-light uppercase font-semibold">
              {brandConfig.identity.auspiciousSymbol}
            </span>
            <span className="text-silk-gold text-sm font-serif">卐</span>
          </div>

          {/* Master Heading */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-serif tracking-[0.25em] text-silk-gold uppercase font-semibold">
              Master Weavers of Madanapalle • Established {brandConfig.identity.establishedYear}
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-silk-ivory">
              Pure Hand Loom <br />
              <span className="text-gold-gradient drop-shadow-sm">Silk Sarees</span> & <br className="hidden sm:inline" />
              Wholesale Manufacturers
            </h1>
          </div>

          {/* Subtitle & Proprietor info */}
          <p className="text-sm sm:text-base text-silk-sand font-sans leading-relaxed max-w-2xl">
            <strong className="text-silk-gold font-serif text-base">{brandConfig.identity.proprietor}</strong>. Direct from our traditional handloom pit looms in Neerugattuvaripalle, Madanapalle. Woven with pure mulberry silk filaments and authentic zari brocades for wedding muhurthams, boutique curators, and wholesale merchants.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#collections"
              onClick={onExploreClick}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-zari-gradient text-silk-maroon-dark font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-silk-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Masterpieces</span>
              <ArrowRight className="w-4 h-4 text-silk-maroon-dark" />
            </a>

            <a
              href="#wholesale"
              className="px-6 sm:px-8 py-3.5 rounded-full border border-silk-gold/60 bg-silk-maroon/70 hover:bg-silk-gold hover:text-silk-maroon text-silk-gold-light font-serif font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
              <span>Wholesale Bulk Pricing</span>
            </a>
          </div>

          {/* Interactive Silk Morphing Palette Switcher */}
          <div className="pt-6 border-t border-silk-gold/20 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-silk-gold animate-pulse" />
              <span className="text-xs font-serif text-silk-gold-light uppercase tracking-wider">
                Shift Living Silk Hue:
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {palettes.map((palette, idx) => (
                <button
                  key={palette.name}
                  onClick={() => setActiveColorIndex(idx)}
                  className={`group relative px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 border ${
                    activeColorIndex === idx 
                      ? 'border-silk-gold bg-silk-maroon shadow-silk-glow scale-105 text-white' 
                      : 'border-white/20 bg-black/40 text-silk-sand hover:border-silk-gold/60'
                  }`}
                  aria-label={`Select ${palette.name} silk shader`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full border border-white/40 shadow-sm"
                    style={{ backgroundColor: palette.hex }}
                  />
                  <span className="text-[11px] hidden sm:inline">{palette.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Weaving Heritage Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-silk-gold/25 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient block">100%</span>
            <span className="text-xs text-silk-sand block">Pure Handloom Mulberry Silk</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient block">35+ Yrs</span>
            <span className="text-xs text-silk-sand block">Master Weavers Lineage</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient block">Direct</span>
            <span className="text-xs text-silk-sand block">Loom Manufacturer Rates</span>
          </div>
          <div className="space-y-1">
            <span className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient block">Pan-India</span>
            <span className="text-xs text-silk-sand block">Wholesale Safe Dispatch</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-silk-gold hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to Heritage section"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}

