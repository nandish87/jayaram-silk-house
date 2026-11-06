import React, { useState } from 'react';
import { Sparkles, Layers, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function WeavingProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = brandConfig.weavingProcess;
  const currentStep = steps[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-silk-cream text-silk-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon/10 text-silk-maroon border border-silk-maroon/20 text-xs font-serif tracking-widest uppercase font-semibold">
            <Activity className="w-3.5 h-3.5 text-silk-maroon" />
            <span>Artisanal Choreography</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-maroon leading-tight">
            The Living Journey of a <br />
            <span className="text-gold-gradient">Pure Handloom Saree</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 font-sans max-w-2xl mx-auto leading-relaxed">
            From raw natural mulberry silk filaments to the grand rhythmic clatter of our Madanapalle pit looms, discover how each heirloom drape comes to life.
          </p>
        </div>

        {/* Process Stepper Navigation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'bg-silk-maroon text-white border-silk-gold shadow-card-lux scale-102'
                  : 'bg-white text-gray-700 border-silk-sand hover:border-silk-gold/60 hover:bg-silk-ivory'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`font-display font-bold text-xl sm:text-2xl ${
                  activeStepIndex === idx ? 'text-silk-gold-light' : 'text-silk-maroon/40'
                }`}>
                  {step.step}
                </span>
                {activeStepIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-silk-gold animate-ping"></span>
                )}
              </div>

              <div className="mt-4">
                <h4 className="font-serif font-bold text-xs sm:text-sm leading-snug">
                  {step.title.split('&')[0]}
                </h4>
                <p className={`text-[11px] mt-1 line-clamp-1 ${
                  activeStepIndex === idx ? 'text-silk-sand' : 'text-gray-500'
                }`}>
                  {step.subTitle}
                </p>
              </div>

              {/* Active Bottom Glow Indicator */}
              {activeStepIndex === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-zari-gradient" />
              )}
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-white border-2 border-silk-gold/30 shadow-card-lux grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-silk-maroon font-serif text-xs font-semibold tracking-widest uppercase">
              <span>Stage {currentStep.step} of 04</span>
              <span>•</span>
              <span className="text-silk-gold-dark">{currentStep.subTitle}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-silk-maroon">
              {currentStep.title}
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {currentStep.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero synthetic nylon or polyester</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Master weaver manual shuttle adjustment</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-silk-gold/30 shadow-md aspect-[16/10]">
              <img
                src={
                  activeStepIndex === 0 ? '/products/gallery-warp.svg' :
                  activeStepIndex === 1 ? '/products/gallery-drape.svg' :
                  activeStepIndex === 2 ? '/products/gallery-loom.svg' :
                  '/products/gallery-pallu.svg'
                }
                alt={currentStep.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-xs font-serif text-white tracking-wide">
                  Traditional Pit Loom Workshop in Madanapalle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

