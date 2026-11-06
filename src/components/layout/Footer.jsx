import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Award, CheckCircle2, ArrowUp, ExternalLink } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-silk-maroon-dark text-silk-ivory border-t-2 border-silk-gold/40 relative overflow-hidden">
      {/* Subtle auspicious background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-silk-gold/5 blur-3xl pointer-events-none" />

      {/* Auspicious blessing banner */}
      <div className="border-b border-silk-gold/20 py-4 text-center bg-black/30">
        <p className="text-silk-gold font-serif text-sm tracking-widest">
          {brandConfig.identity.auspiciousSymbol}
        </p>
        <p className="text-xs text-silk-gold-light/80 font-sans tracking-wide mt-1">
          Preserving the Timeless Heritage of Handloom Silk Weaving in Madanapalle
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-silk-maroon border-2 border-silk-gold/60 p-1 flex items-center justify-center shadow-silk-glow">
                <img src="/favicon.svg" alt="Y. Jayaram Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-gold-gradient tracking-wide">
                  {brandConfig.identity.brandName}
                </h3>
                <p className="text-xs font-serif text-silk-gold-light/90">
                  {brandConfig.identity.proprietor}
                </p>
              </div>
            </div>

            <p className="text-xs text-silk-sand leading-relaxed">
              Master handloom silk weavers and direct wholesale manufacturers based in Neerugattuvaripalle, Madanapalle. Supplying authentic bridal pattu and festival sarees to retail showrooms across India.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-silk-gold-light">
                <CheckCircle2 className="w-4 h-4 text-silk-gold" />
                <span>100% Tested Pure Mulberry Silk</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-silk-gold-light">
                <CheckCircle2 className="w-4 h-4 text-silk-gold" />
                <span>Direct-From-Loom Manufacturer Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-silk-gold-light">
                <CheckCircle2 className="w-4 h-4 text-silk-gold" />
                <span>Pan-India Safe Parcel Dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-silk-gold tracking-wider border-b border-silk-gold/20 pb-2">
              Our Weaves
            </h4>
            <ul className="space-y-2 text-xs text-silk-sand">
              {brandConfig.collections.filter(c => c.id !== 'all').map((col) => (
                <li key={col.id}>
                  <a 
                    href="#collections" 
                    className="hover:text-silk-gold transition-colors flex items-center justify-between py-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{col.name}</span>
                    <span className="text-[10px] text-silk-gold/60">{col.count}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#wholesale" 
                  className="inline-block text-silk-gold font-semibold underline underline-offset-4 hover:text-silk-gold-light"
                >
                  Download Wholesale Price Catalog &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Visit Looms */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-silk-gold tracking-wider border-b border-silk-gold/20 pb-2">
              Manufacturing & Showroom
            </h4>
            
            <div className="text-xs text-silk-sand space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-silk-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {brandConfig.contact.address.full}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                {brandConfig.contact.phones.map((phone) => (
                  <div key={phone.clean} className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-silk-gold shrink-0" />
                    <a href={`tel:${phone.clean}`} className="hover:text-silk-gold transition-colors font-medium">
                      {phone.display} <span className="text-[10px] text-silk-gold/60">({phone.label})</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={brandConfig.contact.map.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-silk-gold/40 bg-silk-maroon hover:bg-silk-gold hover:text-silk-maroon text-silk-gold-light text-xs transition-all duration-300"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Wholesale Inquiry */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-silk-gold tracking-wider border-b border-silk-gold/20 pb-2">
              Wholesale Desk
            </h4>
            
            <p className="text-xs text-silk-sand leading-relaxed">
              Showroom owners and boutique buyers can schedule video call viewings to inspect live saree drapes directly on the loom.
            </p>

            <a
              href={`https://wa.me/${brandConfig.contact.whatsapp.number}?text=${encodeURIComponent(brandConfig.contact.whatsapp.prefilledMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Inquiry</span>
            </a>

            <div className="p-3 rounded-xl bg-black/40 border border-silk-gold/20 text-[11px] text-silk-gold-light/90">
              <span className="font-bold text-silk-gold block mb-1">Visiting Hours:</span>
              <span>{brandConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Monolith Watermark Attribution */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-black/50 border border-silk-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-silk-maroon border border-silk-gold/40 flex items-center justify-center shrink-0">
              <span className="font-serif font-bold text-silk-gold text-sm">M</span>
            </div>
            <div>
              <p className="text-xs text-silk-ivory font-serif font-medium">
                Engineered for Free by{' '}
                <a
                  href="https://getmonolith.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-silk-gold hover:text-white underline underline-offset-4 decoration-silk-gold/50"
                >
                  Monolith
                </a>
                {' '}— Supporting Traditional Indian Handloom Weavers
              </p>
              <p className="text-[11px] text-silk-sand/70 font-sans mt-0.5">
                One System. Every Reply. | Autonomous AI Infrastructure
              </p>
            </div>
          </div>

          <a
            href="https://getmonolith.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-silk-gold/40 hover:border-silk-gold bg-silk-maroon/60 text-silk-gold-light hover:text-white text-xs font-serif flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Visit getmonolith.in</span>
            <ExternalLink className="w-3 h-3 text-silk-gold" />
          </a>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-8 pt-6 border-t border-silk-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-silk-sand gap-4">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {brandConfig.identity.legalName}. All Rights Reserved.</p>
            <p className="text-[11px] text-silk-gold/60 mt-0.5">
              Handcrafted in Madanapalle, Andhra Pradesh, India.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-silk-gold/30 hover:border-silk-gold text-silk-gold-light hover:text-silk-gold text-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

