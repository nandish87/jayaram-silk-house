import React from 'react';
import { Factory, ShieldCheck, Sparkles, Truck, Check, HelpCircle } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function WhyChooseUs() {
  const iconMap = {
    Factory: Factory,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Truck: Truck
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-silk-maroon-dark text-silk-ivory relative overflow-hidden border-y border-silk-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon border border-silk-gold/40 text-silk-gold text-xs font-serif tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-silk-gold" />
            <span>Unmatched Purity & Ethics</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-ivory leading-tight">
            Why Retailers & Connoisseurs Choose <br />
            <span className="text-gold-gradient">Y. Jayaram & Bro's</span>
          </h2>

          <p className="text-xs sm:text-sm text-silk-sand font-sans max-w-2xl mx-auto leading-relaxed">
            Direct weaver manufacturing from Madanapalle gives our partners distinct pricing and quality advantages over typical wholesale trading markets.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandConfig.whyChooseUs.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;

            return (
              <div
                key={pillar.id}
                className="p-6 rounded-3xl bg-silk-maroon/60 border border-silk-gold/30 hover:border-silk-gold transition-all duration-300 hover:shadow-silk-glow flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-silk-maroon-dark border border-silk-gold/40 text-silk-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                    <IconComponent className="w-6 h-6 text-silk-gold" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-silk-ivory group-hover:text-silk-gold-light transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-silk-sand mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-silk-gold/15 flex items-center gap-1.5 text-[11px] text-silk-gold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Manufacturer Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Handloom vs Powerloom Replicas */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-black/40 border border-silk-gold/30 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2">
            <span className="text-xs font-serif text-silk-gold uppercase tracking-widest font-semibold block">
              The Connoisseur's Distinction
            </span>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-silk-ivory">
              Authentic Madanapalle Handloom vs. Machine Powerloom
            </h4>
            <p className="text-xs text-silk-sand leading-relaxed">
              Powerloom fabrics lack the breathable thermal balance, fluid drape, and dense durability of hand-beaten wefts. Our sarees are heirloom investments meant to be treasured through generations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-silk-maroon/70 border border-silk-gold/30">
              <span className="text-silk-gold font-bold block mb-1">Our Handlooms</span>
              <ul className="space-y-1 text-silk-ivory text-[11px]">
                <li>✓ 100% Pure Mulberry Silk</li>
                <li>✓ Hand-interlocked Korvai</li>
                <li>✓ Lasts 50+ Years with Luster</li>
                <li>✓ Certified Silk Mark</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 opacity-75">
              <span className="text-gray-400 font-bold block mb-1">Commercial Powerloom</span>
              <ul className="space-y-1 text-gray-300 text-[11px]">
                <li>✕ Synthetic Polyester Blends</li>
                <li>✕ Stiff Printed/Faux Borders</li>
                <li>✕ Zari tarnishes quickly</li>
                <li>✕ No handloom value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

