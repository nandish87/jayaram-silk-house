import React from 'react';
import { Award, Sparkles, Compass, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-silk-ivory text-silk-charcoal relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none text-[220px] font-display text-silk-maroon font-bold leading-none">
        卐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Weaving Card & Heritage Stamp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-card-lux border-2 border-silk-gold/40 group">
              <img
                src="/products/saree-navy-gold-silver-butta.jpg"
                alt="Madanapalle Pit Loom Weaving"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-silk-maroon-dark/90 via-silk-maroon-dark/30 to-transparent flex flex-col justify-end p-6 text-silk-ivory">
                <span className="text-xs font-serif text-silk-gold tracking-widest uppercase">
                  Neerugattuvaripalle Weaving Cluster
                </span>
                <h4 className="font-display font-bold text-xl text-silk-ivory">
                  Traditional Pit Looms of Madanapalle
                </h4>
                <p className="text-xs text-silk-sand mt-1">
                  Where each saree takes 4 to 7 days of manual warp-and-weft coordination.
                </p>
              </div>
            </div>

            {/* Authenticity Certificate Box */}
            <div className="p-5 rounded-2xl bg-white border border-silk-gold/30 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-silk-maroon text-silk-gold flex items-center justify-center shrink-0 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-silk-maroon text-sm block">100% Handloom Silk Mark Standard</span>
                <span className="text-gray-600 block mt-0.5">
                  Guaranteed genuine natural mulberry silk with zero synthetic polyester blend.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Master Weavers Legacy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon/10 text-silk-maroon border border-silk-maroon/20 text-xs font-serif tracking-widest uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-silk-maroon" />
                <span>Generations of Handloom Heritage</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-maroon leading-tight">
                Crafting The Soul of Madanapalle’s <br />
                <span className="text-gold-gradient">Pure Silk Legacy</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              Nestled in the historic silk weaving heartland of <strong>Madanapalle, Chittoor District (Andhra Pradesh)</strong>, <strong>{brandConfig.identity.legalName}</strong> represents an unbroken lineage of master weavers. Under the stewardship of <strong>{brandConfig.identity.proprietor}</strong>, we preserve the revered techniques of pit loom hand-weaving.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              In an era flooded by machine-made powerloom polyester replicas, our family stands steadfast for the authenticity of <strong>pure mulberry silk</strong>, hand-interlocked <em>Korvai</em> borders, authentic <em>Gopuram</em> temple motifs, and radiant gold and silver zari brocades.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-silk-cream border border-silk-sand">
                <div className="flex items-center gap-2 text-silk-maroon font-serif font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Direct Weaver to Buyer</span>
                </div>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  Eliminating commercial intermediaries, retail middlemen markups, and commission agents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-silk-cream border border-silk-sand">
                <div className="flex items-center gap-2 text-silk-maroon font-serif font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Uncompromised Zari Quality</span>
                </div>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  Heavy tested zari threads that do not blacken or fray, maintaining brilliant luster for decades.
                </p>
              </div>
            </div>

            {/* Quote Stamp */}
            <div className="pt-2 border-l-4 border-silk-gold pl-4 italic text-xs text-gray-600">
              "A pure handloom silk saree is not merely fabric; it is prayer, patient breath, and cultural heritage woven one shuttle at a time."
              <span className="block not-italic font-serif font-semibold text-silk-maroon mt-1">
                — Y. Jayaram & Bro's
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

