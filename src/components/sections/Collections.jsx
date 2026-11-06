import React, { useState } from 'react';
import { Sparkles, Layers, Filter } from 'lucide-react';
import SareeCard3D from '../3d/SareeCard3D';
import brandConfig from '../../brand.config';

export default function Collections({ onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? brandConfig.products
    : brandConfig.products.filter(p => p.category === selectedCategory);

  return (
    <section id="collections" className="py-20 lg:py-28 bg-silk-maroon text-silk-ivory relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-silk-mesh opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-silk-maroon-dark border border-silk-gold/40 text-silk-gold-light text-xs font-serif tracking-widest uppercase shadow-silk-glow">
            <Sparkles className="w-3.5 h-3.5 text-silk-gold" />
            <span>Madanapalle Master Creations</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-ivory leading-tight">
            Handloom Pure Silk <br />
            <span className="text-gold-gradient">Collections & Wholesale Catalog</span>
          </h2>

          <p className="text-xs sm:text-sm text-silk-sand font-sans max-w-2xl mx-auto leading-relaxed">
            Every piece is hand-woven with pure mulberry silk yarns and rich gold zari. Click on any saree to launch the interactive <strong>3D Fabric Swatch Inspector</strong>.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {brandConfig.collections.map((col) => (
            <button
              key={col.id}
              onClick={() => setSelectedCategory(col.id)}
              className={`px-4 py-2 rounded-full text-xs font-serif tracking-wider uppercase transition-all duration-300 border ${
                selectedCategory === col.id
                  ? 'bg-zari-gradient text-silk-maroon-dark font-bold shadow-silk-glow border-silk-gold scale-105'
                  : 'bg-silk-maroon-dark/60 text-silk-sand hover:text-silk-gold hover:border-silk-gold/50 border-silk-gold/20'
              }`}
            >
              <span>{col.name}</span>
            </button>
          ))}
        </div>

        {/* Products 3D Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <SareeCard3D
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Wholesale Bottom Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-silk-maroon-dark via-[#1e0307] to-silk-maroon-dark border-2 border-silk-gold/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-serif text-silk-gold uppercase tracking-widest block font-semibold">
              Looking for Custom Bulk Weaving or Specific Color Lots?
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-silk-ivory">
              Direct Pit Loom Manufacturing for Saree Boutiques & Showrooms
            </h3>
            <p className="text-xs text-silk-sand">
              We weave custom border widths, specialized wedding muhurtham colors, and uniform group sets.
            </p>
          </div>

          <a
            href="#wholesale"
            className="px-6 py-3.5 rounded-full bg-zari-gradient text-silk-maroon-dark font-serif font-bold text-xs uppercase tracking-wider shadow-silk-glow hover:scale-105 transition-all duration-300 shrink-0"
          >
            Request Wholesale Quotation
          </a>
        </div>
      </div>
    </section>
  );
}

