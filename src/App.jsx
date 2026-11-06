import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import MonolithWatermark from './components/layout/MonolithWatermark';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Collections from './components/sections/Collections';
import WeavingProcess from './components/sections/WeavingProcess';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import WholesaleEnquiry from './components/sections/WholesaleEnquiry';
import Contact from './components/sections/Contact';
import ProductQuickViewModal from './components/modals/ProductQuickViewModal';
import brandConfig from './brand.config';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Set document title and meta from brand.config.js dynamically
  useEffect(() => {
    document.title = brandConfig.seo.title;
  }, []);

  return (
    <div className="min-h-screen bg-silk-cream text-silk-charcoal flex flex-col font-sans selection:bg-silk-gold/30 selection:text-silk-maroon">
      {/* Sticky Header with Navigation & Quick Calls */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section with 3D Living Saree Cloth Canvas */}
        <Hero onExploreClick={() => {
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Heritage & Handloom Lineage Story */}
        <About />

        {/* Collections with 3D Tilt Cards & Filter Tabs */}
        <Collections onQuickView={(product) => setSelectedProduct(product)} />

        {/* 4-Step Handloom Weaving Process Animation */}
        <WeavingProcess />

        {/* Why Choose Us & Manufacturer Purity Comparison */}
        <WhyChooseUs />

        {/* Gallery Archive & High-Res Loom Glimpses */}
        <Gallery />

        {/* Wholesale Quotation Form */}
        <WholesaleEnquiry />

        {/* Location & Embedded Google Map */}
        <Contact />
      </main>

      {/* Footer with Business Info & Auspicious Blessing */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Monolith Pro-Bono Watermark Badge */}
      <MonolithWatermark />

      {/* 3D Fabric Swatch Quick View Modal */}
      {selectedProduct && (
        <ProductQuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

