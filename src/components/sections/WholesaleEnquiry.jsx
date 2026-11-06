import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Sparkles, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function WholesaleEnquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    cityState: '',
    sareeType: 'Bridal Pattu & Pure Silk',
    estimatedQuantity: '10 - 25 Sarees (Boutique Tier)',
    businessName: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const sareeOptions = [
    'Bridal Pattu & Pure Silk',
    'Traditional Checks & Kattam Silk',
    'Temple Border (Korvai) Silk',
    'Plain Silk with Broad Zari Border',
    'Assorted Wholesale 10-Saree Bundles',
    'Custom Bulk Loom Weaving'
  ];

  const quantityOptions = [
    '1 - 5 Sarees (Sample / Trial Lot)',
    '10 - 25 Sarees (Boutique Tier)',
    '25 - 50 Sarees (Wedding / Retail Stock)',
    '50 - 100+ Sarees (Wholesale Merchant Lot)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate WhatsApp URL with pre-filled structured message
    const message = `*Namaskaram Y. Jayaram & Bro's (Madanapalle Silk Weavers)*
I would like to place a wholesale inquiry for Pure Handloom Silk Sarees:

• *Name / Business:* ${formData.fullName} ${formData.businessName ? `(${formData.businessName})` : ''}
• *Phone/WhatsApp:* ${formData.phone}
• *Location:* ${formData.cityState}
• *Saree Category:* ${formData.sareeType}
• *Estimated Quantity:* ${formData.estimatedQuantity}
• *Requirement Notes:* ${formData.notes || 'Please share catalog and wholesale price list.'}

Please connect with wholesale quotation and video call appointment.`;

    const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="wholesale" className="py-20 lg:py-28 bg-silk-maroon text-silk-ivory relative overflow-hidden">
      {/* Background Silk Texture */}
      <div className="absolute inset-0 bg-silk-mesh opacity-95 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Wholesale Partner Advantages */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-silk-maroon-dark border border-silk-gold/40 text-silk-gold text-xs font-serif tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-silk-gold" />
              <span>Direct Manufacturer Desk</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-silk-ivory leading-tight">
              Direct Wholesale <br />
              <span className="text-gold-gradient">Weaver Quotations</span>
            </h2>

            <p className="text-xs sm:text-sm text-silk-sand leading-relaxed font-sans">
              We partner with retail saree showrooms, textile merchants, boutique curators, and wedding planners across India. Get genuine factory-direct loom rates with no distributor commissions.
            </p>

            {/* Wholesale Features List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-silk-maroon-dark/60 border border-silk-gold/20">
                <CheckCircle2 className="w-5 h-5 text-silk-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-silk-ivory block font-serif">Video Call Saree Selection</strong>
                  <span className="text-silk-sand">Inspect live saree drapes and pallu work directly on the loom before dispatch.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-silk-maroon-dark/60 border border-silk-gold/20">
                <CheckCircle2 className="w-5 h-5 text-silk-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-silk-ivory block font-serif">Flexible Minimum Order Quantity</strong>
                  <span className="text-silk-sand">Sample orders starting from just 1–3 sarees for quality evaluation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-silk-maroon-dark/60 border border-silk-gold/20">
                <CheckCircle2 className="w-5 h-5 text-silk-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-silk-ivory block font-serif">Insured Safe Logistics</strong>
                  <span className="text-silk-sand">Fast courier and parcel service dispatched to all Indian cities and international hubs.</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="pt-2 flex items-center gap-3 text-xs text-silk-gold-light">
              <Phone className="w-4 h-4 text-silk-gold" />
              <span>Urgent bulk requirement? Call directly at <strong>+91 {brandConfig.contact.primaryPhone}</strong></span>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-silk-maroon-dark/95 border-2 border-silk-gold/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-silk-gold/20">
                <div>
                  <h3 className="font-serif font-bold text-xl text-silk-ivory">
                    Wholesale Inquiry & Price Request
                  </h3>
                  <p className="text-xs text-silk-sand mt-0.5">
                    Connects directly to our Madanapalle wholesale team
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-silk-maroon border border-silk-gold/40 flex items-center justify-center text-silk-gold">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {submitted && (
                <div className="my-4 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your inquiry was forwarded to WhatsApp. We will reply promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-silk-gold/30 text-silk-ivory text-xs placeholder:text-gray-500 focus:outline-none focus:border-silk-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-silk-gold/30 text-silk-ivory text-xs placeholder:text-gray-500 focus:outline-none focus:border-silk-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      City & State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore, Karnataka"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-silk-gold/30 text-silk-ivory text-xs placeholder:text-gray-500 focus:outline-none focus:border-silk-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      Business / Store Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sri Lakshmi Silks (Optional)"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-silk-gold/30 text-silk-ivory text-xs placeholder:text-gray-500 focus:outline-none focus:border-silk-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      Saree Category Preference
                    </label>
                    <select
                      value={formData.sareeType}
                      onChange={(e) => setFormData({ ...formData, sareeType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-silk-gold/30 text-silk-ivory text-xs focus:outline-none focus:border-silk-gold"
                    >
                      {sareeOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-silk-maroon-dark text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                      Estimated Quantity
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-silk-gold/30 text-silk-ivory text-xs focus:outline-none focus:border-silk-gold"
                    >
                      {quantityOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-silk-maroon-dark text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif text-silk-gold mb-1.5 uppercase tracking-wider">
                    Specific Requirements or Color Preferences
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mention any specific border preferences (e.g. 9-inch Korvai, Ganga Jamuna, peacock pallu), target price range, or preferred dispatch timeline."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-silk-gold/30 text-silk-ivory text-xs placeholder:text-gray-500 focus:outline-none focus:border-silk-gold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-zari-gradient hover:brightness-110 text-silk-maroon-dark font-serif font-bold text-xs uppercase tracking-wider shadow-silk-glow flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-silk-maroon-dark" />
                  <span>Send Wholesale Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

