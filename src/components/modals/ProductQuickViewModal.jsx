import React, { useEffect, lazy, Suspense } from 'react';
import { X, MessageCircle, Phone, Check, ShieldCheck, Sparkles, Scale, Maximize2 } from 'lucide-react';

// Lazy-load 3D swatch viewer (brings in Three.js only when modal opens)
const FabricSwatchViewer = lazy(() => import('../3d/FabricSwatchViewer'));
import brandConfig from '../../brand.config';

export default function ProductQuickViewModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  const inquiryUrl = `https://wa.me/${brandConfig.contact.whatsapp.number}?text=${encodeURIComponent(
    brandConfig.contact.whatsapp.quickInquiryMessage(product.name)
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-silk-maroon-dark border-2 border-silk-gold/50 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-silk-gold/30 bg-silk-maroon/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-silk-gold animate-pulse"></span>
            <span className="font-serif text-xs text-silk-gold uppercase tracking-widest font-semibold">
              3D Fabric Inspection & Quick View
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-black/40 text-silk-gold hover:text-white hover:bg-silk-maroon transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-silk-ivory">
          {/* Left Column: 3D Swatch & Image Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              <Suspense fallback={
                <div className="w-full h-72 sm:h-80 rounded-2xl bg-silk-maroon-dark/80 border border-silk-gold/30 flex items-center justify-center">
                  <div className="animate-pulse text-silk-gold font-serif text-xs tracking-widest">Loading 3D Swatch...</div>
                </div>
              }>
                <FabricSwatchViewer product={product} />
              </Suspense>
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-silk-maroon/90 border border-silk-gold/50 text-[10px] font-serif text-silk-gold-light uppercase tracking-wider">
                {product.badge || 'Handloom Special'}
              </div>
            </div>

            {/* Static Image / 2D Card preview */}
            <div className="p-3 rounded-2xl bg-black/30 border border-silk-gold/20 flex items-center gap-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-16 h-16 object-cover rounded-xl border border-silk-gold/30"
              />
              <div className="text-xs">
                <span className="text-silk-gold font-serif block">Catalog Code: {product.code}</span>
                <span className="text-[11px] text-silk-sand block mt-0.5">{product.color}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Saree Details & Wholesale Inquiry */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div>
                <span className="text-xs font-serif text-silk-gold tracking-widest uppercase">
                  {product.category.replace('-', ' ')}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-silk-ivory mt-1 leading-snug">
                  {product.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-silk-sand leading-relaxed">
                {product.description}
              </p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-2.5 rounded-xl bg-silk-maroon/50 border border-silk-gold/20">
                  <span className="text-[11px] text-silk-gold block">Silk Quality</span>
                  <span className="font-medium text-silk-ivory mt-0.5 block">{product.fabric}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-silk-maroon/50 border border-silk-gold/20">
                  <span className="text-[11px] text-silk-gold block">Zari Brocade</span>
                  <span className="font-medium text-silk-ivory mt-0.5 block">{product.zari}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-silk-maroon/50 border border-silk-gold/20">
                  <span className="text-[11px] text-silk-gold block">Weave Style</span>
                  <span className="font-medium text-silk-ivory mt-0.5 block">{product.weave}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-silk-maroon/50 border border-silk-gold/20">
                  <span className="text-[11px] text-silk-gold block">Border & Pallu</span>
                  <span className="font-medium text-silk-ivory mt-0.5 block">{product.border}</span>
                </div>
              </div>

              {/* Key Trust Highlights */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-silk-gold-light">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-silk-gold" />
                  <span>100% Pure Handloom Silk</span>
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-silk-gold" />
                  <span>{product.length}</span>
                </span>
              </div>
            </div>

            {/* Price & Order Action Area */}
            <div className="pt-4 border-t border-silk-gold/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-silk-sand uppercase tracking-wider block">Wholesale Pricing</span>
                  <span className="font-serif font-bold text-lg text-gold-gradient">
                    {product.wholesalePrice}
                  </span>
                  <span className="text-[11px] text-silk-sand/80 block mt-0.5">
                    Direct from Madanapalle Weaving Unit
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-silk-gold uppercase tracking-wider block">Order Type</span>
                  <span className="font-medium text-xs text-silk-ivory">Wholesale / Retail Inquiry</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href={`tel:${brandConfig.contact.primaryPhone}`}
                  className="py-3 px-4 rounded-xl border border-silk-gold bg-silk-maroon hover:bg-silk-gold hover:text-silk-maroon text-silk-gold-light font-serif font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-silk-gold" />
                  <span>Call Manufacturer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

