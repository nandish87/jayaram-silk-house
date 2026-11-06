import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import brandConfig from '../../brand.config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Living 3D", href: "#hero" },
    { label: "Heritage", href: "#about" },
    { label: "Collections", href: "#collections" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Wholesale", href: "#wholesale" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Auspicious Top Announcement Bar */}
      <div className="bg-silk-maroon-dark border-b border-silk-gold/20 text-silk-gold-light py-1.5 px-4 text-xs font-serif tracking-wider text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-silk-gold font-serif">
            <span>{brandConfig.identity.auspiciousSymbol}</span>
          </span>
          <span className="mx-auto sm:mx-0 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Wholesale Silk Saree Weavers & Manufacturers | Madanapalle, A.P.</span>
          </span>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a 
              href={`tel:${brandConfig.contact.primaryPhone}`} 
              className="hover:text-silk-gold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-silk-gold" />
              <span>+91 {brandConfig.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-silk-maroon/95 backdrop-blur-md shadow-2xl py-3 border-b border-silk-gold/30' 
            : 'bg-silk-maroon/85 backdrop-blur-sm py-4 border-b border-silk-gold/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Titles */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-silk-maroon-dark border-2 border-silk-gold/60 p-1 flex items-center justify-center shadow-silk-glow group-hover:scale-105 transition-transform">
                <img src="/favicon.svg" alt="Y. Jayaram Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-lg sm:text-xl tracking-wide text-gold-gradient">
                    {brandConfig.identity.brandName}
                  </span>
                  <span className="hidden lg:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-silk-gold/20 text-silk-gold-light border border-silk-gold/30">
                    Handloom
                  </span>
                </div>
                <span className="text-[11px] font-sans text-silk-gold-light/90 tracking-wider">
                  {brandConfig.identity.proprietor}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-silk-ivory hover:text-silk-gold transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-silk-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Quick Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="px-3.5 py-2 rounded-full border border-silk-gold/50 bg-silk-maroon-dark/60 hover:bg-silk-gold hover:text-silk-maroon text-silk-gold-light text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-silk-glow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href="#wholesale"
                className="px-4 py-2 rounded-full bg-zari-gradient text-silk-maroon-dark font-serif font-bold text-xs tracking-wider uppercase hover:brightness-110 transition-all duration-300 shadow-silk-glow flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-silk-maroon-dark" />
                <span>Wholesale Quote</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-silk-maroon-dark/80 text-silk-gold border border-silk-gold/30 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-silk-maroon-dark border-b border-silk-gold/30 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-silk-gold/20">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-silk-ivory hover:text-silk-gold hover:bg-silk-maroon/60 rounded-md text-sm font-medium transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="w-full py-3 rounded-lg border border-silk-gold text-silk-gold-light font-semibold text-center text-sm flex items-center justify-center gap-2 bg-silk-maroon"
              >
                <Phone className="w-4 h-4 text-silk-gold" />
                <span>Call +91 {brandConfig.contact.primaryPhone}</span>
              </a>

              <a
                href="#wholesale"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-zari-gradient text-silk-maroon-dark font-serif font-bold text-center text-sm uppercase tracking-wider shadow-silk-glow"
              >
                Wholesale Inquiry Form
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

