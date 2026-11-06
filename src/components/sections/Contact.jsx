import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Navigation, Compass, Building } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-silk-cream text-silk-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon/10 text-silk-maroon border border-silk-maroon/20 text-xs font-serif tracking-widest uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5 text-silk-maroon" />
            <span>Visit Looms & Showroom</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-maroon leading-tight">
            Connect With Our <br />
            <span className="text-gold-gradient">Madanapalle Weaving Unit</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 font-sans max-w-2xl mx-auto leading-relaxed">
            Buyers, showroom representatives, and connoisseurs are warmly invited to visit our pit looms and wholesale showroom in Neerugattuvaripalle, Madanapalle.
          </p>
        </div>

        {/* Contact Cards & Map Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-silk-gold/30 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-silk-maroon font-serif font-bold text-base">
                <Building className="w-5 h-5 text-silk-gold-dark" />
                <span>Manufacturing & Postal Address</span>
              </div>

              <div className="text-xs text-gray-700 leading-relaxed font-sans space-y-1">
                <p className="font-semibold text-gray-900">{brandConfig.identity.legalName}</p>
                <p className="text-silk-gold-dark font-serif font-medium">{brandConfig.identity.proprietor}</p>
                <p>{brandConfig.contact.address.line1}</p>
                <p>{brandConfig.contact.address.line2}</p>
                <p>{brandConfig.contact.address.city} – {brandConfig.contact.address.pincode}</p>
                <p>{brandConfig.contact.address.district}, {brandConfig.contact.address.state}, India</p>
              </div>

              <div className="pt-2">
                <a
                  href={brandConfig.contact.map.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-silk-maroon text-silk-gold-light hover:bg-silk-gold hover:text-silk-maroon text-xs font-semibold transition-all duration-300 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone Assistance Card */}
            <div className="p-6 rounded-3xl bg-white border border-silk-gold/30 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-silk-maroon font-serif font-bold text-base">
                <Phone className="w-5 h-5 text-silk-gold-dark" />
                <span>Direct Weaver Helplines</span>
              </div>

              <div className="space-y-2.5">
                {brandConfig.contact.phones.map((phone) => (
                  <div key={phone.clean} className="flex items-center justify-between p-2.5 rounded-xl bg-silk-cream border border-silk-sand">
                    <div>
                      <span className="text-[11px] text-gray-500 block">{phone.label}</span>
                      <a href={`tel:${phone.clean}`} className="font-bold text-silk-maroon text-sm hover:underline">
                        {phone.display}
                      </a>
                    </div>
                    <a
                      href={`tel:${phone.clean}`}
                      className="p-2 rounded-lg bg-silk-maroon text-silk-gold hover:scale-105 transition-transform"
                      aria-label={`Call ${phone.display}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-5 rounded-2xl bg-silk-maroon-dark text-silk-ivory border border-silk-gold/30 flex items-center gap-3">
              <Clock className="w-6 h-6 text-silk-gold shrink-0" />
              <div className="text-xs">
                <span className="font-serif font-bold text-silk-gold block">Wholesale Loom & Showroom Timings:</span>
                <span className="text-silk-sand block mt-0.5">{brandConfig.contact.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Map Controls */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[450px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border-2 border-silk-gold/40 shadow-card-lux bg-gray-100 flex flex-col">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="Y. Jayaram Silk Sarees Madanapalle Location"
                src={brandConfig.contact.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full flex-grow"
              ></iframe>

              {/* Map Footer Overlay with Quick Action Pill */}
              <div className="p-4 bg-silk-maroon-dark text-silk-ivory border-t border-silk-gold/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-silk-gold shrink-0" />
                  <span className="text-silk-sand">Neerugattuvaripalle, Madanapalle (Silk Weavers Cluster)</span>
                </div>

                <a
                  href={brandConfig.contact.map.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-zari-gradient text-silk-maroon-dark font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm hover:brightness-110 transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

