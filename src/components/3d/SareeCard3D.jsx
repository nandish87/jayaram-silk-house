import React, { useState, useRef } from 'react';
import { Eye, MessageCircle, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function SareeCard3D({ product, onQuickView }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const inquiryUrl = `https://wa.me/${brandConfig.contact.whatsapp.number}?text=${encodeURIComponent(
    brandConfig.contact.whatsapp.quickInquiryMessage(product.name)
  )}`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative bg-silk-maroon-dark/95 border border-silk-gold/30 rounded-3xl overflow-hidden shadow-card-lux hover:shadow-silk-glow flex flex-col justify-between"
    >
      {/* Top Image & Badge Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />

        {/* Shimmer light bar across card */}
        <div className="absolute inset-0 bg-saree-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full bg-silk-maroon/90 border border-silk-gold/60 text-[10px] font-serif tracking-widest uppercase text-silk-gold-light shadow-md">
            {product.badge}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-sans text-silk-sand">
            {product.code}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => onQuickView(product)}
            className="px-4 py-2.5 rounded-full bg-silk-gold hover:bg-silk-gold-light text-silk-maroon-dark font-serif font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>Inspect Saree</span>
          </button>
        </div>
      </div>

      {/* Saree Details Section */}
      <div className="p-5 flex flex-col justify-between flex-grow space-y-4 text-silk-ivory">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-silk-gold">
            <span className="font-serif uppercase tracking-wider">{product.category.replace('-', ' ')}</span>
            <span>Handloom Silk</span>
          </div>

          <h3 className="font-display font-semibold text-lg text-silk-ivory group-hover:text-gold-gradient transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-silk-sand/80 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Bottom Pricing & CTAs */}
        <div className="pt-3 border-t border-silk-gold/20 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-silk-sand/70 uppercase tracking-wider block">Wholesale Rate</span>
              <span className="font-serif font-bold text-sm text-silk-gold-light">
                Direct Weaver Quote
              </span>
            </div>
            <span className="text-[11px] text-silk-gold-light/90 border border-silk-gold/30 px-2 py-0.5 rounded bg-silk-maroon/50">
              Madanapalle Weave
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="py-2 px-3 rounded-xl border border-silk-gold/40 hover:border-silk-gold text-silk-gold-light text-xs font-serif tracking-wider uppercase flex items-center justify-center gap-1 transition-colors"
            >
              <span>Inspect</span>
              <Sparkles className="w-3 h-3 text-silk-gold" />
            </button>

            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-1 shadow-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

