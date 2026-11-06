import React, { useState } from 'react';
import { Camera, Sparkles, ZoomIn, X } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-silk-ivory text-silk-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon/10 text-silk-maroon border border-silk-maroon/20 text-xs font-serif tracking-widest uppercase font-semibold">
            <Camera className="w-3.5 h-3.5 text-silk-maroon" />
            <span>Loom & Drape Archive</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-maroon leading-tight">
            Glimpses of Craftsmanship & <br />
            <span className="text-gold-gradient">Heirloom Elegance</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 font-sans max-w-2xl mx-auto leading-relaxed">
            From the meticulous warp setting on traditional pit looms to the radiant luster of gold zari pallus under natural light.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandConfig.gallery.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-card-lux border border-silk-gold/30 aspect-[4/3] sm:aspect-square cursor-pointer bg-silk-maroon"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-silk-maroon-dark/90 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-silk-ivory">
                <span className="text-[10px] font-serif uppercase tracking-widest text-silk-gold block">
                  {item.tag}
                </span>
                <h4 className="font-serif font-bold text-sm text-silk-ivory mt-0.5">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-silk-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-3 h-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-silk-maroon-dark border-2 border-silk-gold/60 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-silk-ivory"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-silk-gold hover:text-white transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[60vh] object-contain rounded-2xl border border-silk-gold/30 mb-4 bg-black/40"
            />

            <div className="space-y-1">
              <span className="text-xs font-serif text-silk-gold uppercase tracking-widest">
                {selectedImage.tag}
              </span>
              <h3 className="font-display font-bold text-xl text-silk-ivory">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-silk-sand">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

