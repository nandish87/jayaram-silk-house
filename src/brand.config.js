/**
 * ============================================================================
 * BRAND CONFIGURATION FILE (brand.config.js)
 * ============================================================================
 * Cleaned authentic business information for Y. Jayaram & Bro's, Madanapalle.
 * All fake/fabricated details (fake email, fake year, fake retail MRPs) removed.
 * Real sarees from the Madanapalle looms cataloged with real photos.
 * ============================================================================
 */

export const brandConfig = {
  // Brand Identity (100% Authentic)
  identity: {
    brandName: "Y. Jayaram",
    legalName: "Y. Jayaram – Pure Hand Loom Silk Sarees & Manufacturers",
    proprietor: "Prop: Y. Jayaram & Bro's",
    tagline: "Authentic Handloom Pure Silk Sarees & Direct Wholesale Manufacturers",
    subTagline: "Generations of Master Weavers in Madanapalle crafting pure mulberry silk & authentic zari drapes.",
    originCity: "Madanapalle, Andhra Pradesh",
    auspiciousSymbol: "卐 శ్రీ గణేశాయ నమః 卐",
  },

  // Contact Information (Verified from Owner)
  contact: {
    phones: [
      { display: "+91 96400 08902", clean: "9640008902", label: "Primary / Wholesale Desk" },
      { display: "+91 96660 72696", clean: "9666072696", label: "Orders & Inquiries" }
    ],
    primaryPhone: "9640008902",
    whatsapp: {
      number: "919640008902",
      prefilledMessage: "Namaskaram Y. Jayaram & Bro's, I am interested in wholesale pure handloom silk sarees from your Madanapalle looms. Please share your catalog and wholesale price list.",
      quickInquiryMessage: (productName) => 
        `Namaskaram! I would like to inquire about the wholesale pricing and availability for "${productName}" from Y. Jayaram Silk Sarees, Madanapalle.`
    },
    address: {
      line1: "III-81-F4, Vivekananda School Road",
      line2: "Mayabazaar, Neerugattuvaripalle",
      city: "Madanapalle",
      district: "Chittoor Dist.",
      state: "Andhra Pradesh",
      pincode: "517 325",
      full: "III-81-F4, Vivekananda School Road, Mayabazaar, Neerugattuvaripalle, Madanapalle – 517 325, Chittoor Dist., Andhra Pradesh, India",
    },
    map: {
      shareUrl: "https://share.google/sLg4ZicFABklLAXw",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.852467215392!2d78.49500000000002!3d13.551000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb29c0c17c2443d%3A0xe7c569f7e713600f!2sNeerugattuvaripalle%2C%20Madanapalle%2C%20Andhra%20Pradesh%20517325!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      coordinates: {
        latitude: 13.5540,
        longitude: 78.5028
      }
    },
    businessHours: "Monday to Sunday: 9:00 AM – 9:00 PM IST (Open for wholesale buyers & showroom visitors)"
  },

  // Developer & Sponsor Attribution (Monolith)
  credits: {
    developerName: "Monolith",
    developerTagline: "One System. Every Reply. | Autonomous AI Infrastructure",
    developerUrl: "https://getmonolith.in/",
    attributionText: "Website designed & powered by Monolith — Autonomous AI Infrastructure"
  },

  // Color Palette
  theme: {
    maroon: "#4A0E17",
    maroonDark: "#2E050B",
    maroonLight: "#6B1724",
    gold: "#D4AF37",
    goldLight: "#F5E6BE",
    goldDark: "#A67C1E",
    emerald: "#0B3B24",
    emeraldLight: "#145A38",
    cream: "#FDFBF7",
    ivory: "#F7F2E7",
    charcoal: "#1A1817"
  },

  // 3D "Living Sarees" Cloth Shader & Canvas Settings
  cloth3D: {
    heroPalette: [
      { name: "Royal Crimson & Gold", hex: "#630B1C", zari: "#F3DA7C", sheen: "#9A1B34" },
      { name: "Peacock Emerald & Copper", hex: "#0E3B29", zari: "#E2BA65", sheen: "#1A5E43" },
      { name: "Deep Kanchi Violet", hex: "#3A0E47", zari: "#FFDF79", sheen: "#5C1770" },
      { name: "Auspicious Mustard Haldi", hex: "#9E6D08", zari: "#FFF0A3", sheen: "#C98C0B" }
    ],
    particleCount: {
      desktop: 280,
      mobile: 100
    },
    waveSpeed: 0.85,
    windIntensity: 0.45,
    sheenIntensity: 1.6
  },

  // Product Collections
  collections: [
    { id: "all", name: "All Handloom Weaves" },
    { id: "bridal-pattu", name: "Bridal Pattu & Wedding" },
    { id: "pure-silk", name: "Pure Mulberry Silk" },
    { id: "temple-border", name: "Temple Border & Korvai" },
    { id: "checks-kattam", name: "Traditional Checks & Buttas" }
  ],

  // Real Saree Products (Cropped from genuine loom inventory in /sareess)
  products: [
    {
      id: "yj-real-01",
      code: "YJ-01",
      name: "Bridal Fuchsia Pink & Royal Violet Korvai Silk",
      category: "bridal-pattu",
      weave: "Traditional Korvai Interlocking Handloom Weave",
      zari: "Pure Gold Finish Floral Zari Pallu",
      fabric: "100% Pure Mulberry Silk",
      color: "Fuchsia Pink & Royal Violet",
      accentColor: "#891336",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Grand Korvai Floral Zari Border",
      pallu: "Rich Brocade Zari Jaal Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Bridal Masterpiece",
      image: "/products/saree-purple-fuchsia-bridal.jpg",
      description: "Authentic Madanapalle handloom bridal silk saree woven with contrasting royal violet body and dense gold zari jaal on vivid fuchsia pink."
    },
    {
      id: "yj-real-02",
      code: "YJ-02",
      name: "Royal Sapphire Blue with Emerald Peacock Border",
      category: "temple-border",
      weave: "Double-warp Handloom Jacquard Silk",
      zari: "Fine Tested Gold Zari with Peacock Motifs",
      fabric: "100% Pure Mulberry Silk",
      color: "Royal Sapphire Blue & Emerald Green",
      accentColor: "#3F298D",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Double Peacock Contrast Zari Border",
      pallu: "Solid Heritage Zari Pallu",
      wholesalePrice: "Wholesale Rate on WhatsApp",
      badge: "Best Seller",
      image: "/products/saree-royal-blue-emerald.jpg",
      description: "A signature classic featuring radiant royal blue pure silk complemented by an emerald green contrast border with magnificent Mayil (peacock) zari motifs."
    },
    {
      id: "yj-real-03",
      code: "YJ-03",
      name: "Emerald Green & Maroon Zari Border Pure Silk",
      category: "pure-silk",
      weave: "Traditional Madanapalle Handloom Weave",
      zari: "Authentic Gold Zari Brocade",
      fabric: "100% Pure Mulberry Silk",
      color: "Emerald Green & Maroon",
      accentColor: "#153220",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Rich Zari Border with Floral Creepers",
      pallu: "Full Brocade Heavy Zari Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Heritage Pure Silk",
      image: "/products/saree-emerald-maroon-zari.jpg",
      description: "Timeless South Indian wedding color combination. Deep emerald green silk body paired with a grand maroon pallu embellished with shimmering gold zari."
    },
    {
      id: "yj-real-04",
      code: "YJ-04",
      name: "Auspicious Haldi Yellow & Rani Pink Temple Silk",
      category: "bridal-pattu",
      weave: "Handloom Pit Loom Weave",
      zari: "Heavy Gold Zari Border & Mandala Butta",
      fabric: "100% Pure Mulberry Silk",
      color: "Haldi Yellow & Rani Pink",
      accentColor: "#D38C3A",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Rani Pink Temple Border with Zari Creepers",
      pallu: "Rich Brocade Zari Weave",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Muhurtham Special",
      image: "/products/saree-haldi-yellow-pink.jpg",
      description: "Woven for festive celebrations and wedding muhurthams. Vibrant yellow silk body framed by contrasting rani pink zari borders and detailed temple motifs."
    },
    {
      id: "yj-real-05",
      code: "YJ-05",
      name: "Bottle Emerald Green & Magenta Paisley Mango Zari",
      category: "temple-border",
      weave: "Interlocked Handloom Weave",
      zari: "Embossed Paisley Mango Gold Zari",
      fabric: "100% Pure Mulberry Silk",
      color: "Emerald Green & Magenta",
      accentColor: "#10644A",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Broad Paisley Mango Zari Border",
      pallu: "Traditional Zari Pallu",
      wholesalePrice: "Wholesale Rate on WhatsApp",
      badge: "Festive Weave",
      image: "/products/saree-bottle-green-magenta.jpg",
      description: "Lustrous bottle green pure silk accented with grand paisley mango motifs and an eye-catching magenta pink contrast border."
    },
    {
      id: "yj-real-06",
      code: "YJ-06",
      name: "Vermilion Coral Silk with Gold Zari Floral Bouquet",
      category: "bridal-pattu",
      weave: "Handloom Satin Silk with Fine Zari Pinstripes",
      zari: "Hand-threaded Gold Zari Bouquet",
      fabric: "100% Pure Mulberry Silk",
      color: "Vermilion Coral Orange & Gold",
      accentColor: "#D42D1A",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Running Zari Stripes with Floral Motif",
      pallu: "Solid Zari Motif Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Unique Artistry",
      image: "/products/saree-vermilion-coral-gold.jpg",
      description: "Bright festive coral-orange pure silk featuring intricate golden floral bouquet embroidery and vertical fine zari pinstripes."
    },
    {
      id: "yj-real-07",
      code: "YJ-07",
      name: "Sky Blue & Sapphire Mandapam Silk",
      category: "pure-silk",
      weave: "Fine Jacquard Handloom Silk",
      zari: "Authentic Gold Zari Mandala Centerpiece",
      fabric: "100% Pure Mulberry Silk",
      color: "Sky Blue & Royal Blue",
      accentColor: "#1499E8",
      zariColor: "#C5C070",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Contrast Royal Blue Border",
      pallu: "Intricate Mandapam Temple Medallion",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Exclusive Hue",
      image: "/products/saree-sky-blue-cyan.jpg",
      description: "Dual-tone sky blue and royal blue silk woven with a stunning central zari mandapam medallion, ideal for contemporary and traditional functions."
    },
    {
      id: "yj-real-08",
      code: "YJ-08",
      name: "Midnight Navy Blue Ganga-Jamuna Zari Butta Silk",
      category: "checks-kattam",
      weave: "Grid Handloom Weave with Dual Zari Buttas",
      zari: "Gold and Silver Tested Zari Buttas",
      fabric: "100% Pure Mulberry Silk",
      color: "Midnight Navy & Dual Zari",
      accentColor: "#25224D",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Heavy Striped Zari Pallu with Temple Bands",
      pallu: "Rich Heritage Striped Pallu",
      wholesalePrice: "Wholesale Rate on WhatsApp",
      badge: "Artisanal Weave",
      image: "/products/saree-navy-gold-silver-butta.jpg",
      description: "Exquisite midnight navy silk adorned with alternating gold and silver diamond buttas and a lavish multi-banded zari pallu."
    },
    {
      id: "yj-real-09",
      code: "YJ-09",
      name: "Silver Ivory with Royal Purple Temple Border",
      category: "temple-border",
      weave: "Handloom Korvai Weave",
      zari: "Tested Gold Zari with Temple Spire Accents",
      fabric: "100% Pure Mulberry Silk",
      color: "Silver Ivory & Royal Purple",
      accentColor: "#602C74",
      zariColor: "#DFD4C0",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Deep Purple Temple Gopuram Border",
      pallu: "Heavy Zari Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Temple Classic",
      image: "/products/saree-silver-grey-purple.jpg",
      description: "Understated elegance with a glowing silver-ivory body and contrasting deep purple border with classic gopuram temple motifs."
    },
    {
      id: "yj-real-10",
      code: "YJ-10",
      name: "Royal Wine Purple Pure Silk with Traditional Pallu",
      category: "bridal-pattu",
      weave: "Fine Madanapalle Pit Loom Weave",
      zari: "Traditional Gold Zari Brocade",
      fabric: "100% Pure Mulberry Silk",
      color: "Royal Wine Purple & Gold",
      accentColor: "#603495",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Rich Floral Zari Border",
      pallu: "Full Gold Brocade Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Regal Drape",
      image: "/products/saree-wine-purple-gold.jpg",
      description: "Grand royal wine purple pure silk with shimmering floral zari pallu, designed for traditional ceremonies and receptions."
    },
    {
      id: "yj-real-11",
      code: "YJ-11",
      name: "Moss Green Heavy Brocade Gold Zari Silk",
      category: "pure-silk",
      weave: "Dense Handloom Jacquard Brocade",
      zari: "Full Surface Fine Gold Zari Weave",
      fabric: "100% Pure Mulberry Silk",
      color: "Moss Green & Antique Gold",
      accentColor: "#494D2C",
      zariColor: "#A29863",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Intricate Geometric Zari Borders",
      pallu: "Heavy Brocade Zari Weave",
      wholesalePrice: "Wholesale Rate on WhatsApp",
      badge: "Heavy Brocade",
      image: "/products/saree-moss-green-gold.jpg",
      description: "A rich moss green silk saree woven with full-body gold zari brocade for unparalleled richness and sheen."
    },
    {
      id: "yj-real-12",
      code: "YJ-12",
      name: "Lilac Lavender Pure Silk with Silver & Gold Zari",
      category: "pure-silk",
      weave: "Fine Handloom Silk with Dual Zari",
      zari: "Silver and Gold Zari Medallion Border",
      fabric: "100% Pure Mulberry Silk",
      color: "Lilac Lavender & Silver/Gold",
      accentColor: "#817E9D",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters (With Blouse)",
      border: "Dual-tone Zari Border with Floral Buttas",
      pallu: "Striped Tissue Zari Pallu",
      wholesalePrice: "Direct Weaver Price on Inquiry",
      badge: "Modern Pastel",
      image: "/products/saree-lilac-lavender-zari.jpg",
      description: "Contemporary pastel lilac lavender pure silk with subtle circular buttas and a lustrous dual-tone silver and gold border."
    }
  ],

  // 4-Step Handloom Weaving Process (Authentic Craft)
  weavingProcess: [
    {
      step: "01",
      title: "Pure Silk Yarn Selection",
      subTitle: "Pure Mulberry Silk",
      description: "We use only quality-tested natural mulberry silk filaments, degummed and prepared to achieve superior softness and dye absorption."
    },
    {
      step: "02",
      title: "Artisanal Dyeing & Warping",
      subTitle: "Vibrant Traditional Hues",
      description: "Dyed by hand using established processes to create iconic shades—crimson, peacock blue, haldi yellow, and deep purple."
    },
    {
      step: "03",
      title: "Pit Loom Setup & Zari Threading",
      subTitle: "Madanapalle Pit Loom Craft",
      description: "Thousands of warp threads are meticulously aligned on traditional pit looms. Jacquard mechanisms guide the shuttles carrying gold and silver zari."
    },
    {
      step: "04",
      title: "Manual Weaving & Inspection",
      subTitle: "Days of Rhythmic Craftsmanship",
      description: "Master weavers coordinate shuttles and pedals with precision. Each completed saree is closely inspected for weave uniformity and clean finish."
    }
  ],

  // Why Choose Us Pillars (Authentic Manufacturer Advantages)
  whyChooseUs: [
    {
      id: "direct-manufacturer",
      title: "Direct Weaver Pricing",
      description: "Cut out middlemen and distributor markups. Buy directly from our family looms in Madanapalle at genuine manufacturer rates.",
      icon: "Factory"
    },
    {
      id: "purity",
      title: "100% Pure Mulberry Silk",
      description: "We use genuine tested mulberry silk yarns and high-grade zari threads that retain their luster over time.",
      icon: "ShieldCheck"
    },
    {
      id: "variety",
      title: "Exclusive Handloom Weaves",
      description: "From traditional Korvai borders and temple designs to modern wedding palettes, our looms cater to diverse customer preferences.",
      icon: "Sparkles"
    },
    {
      id: "wholesale-supply",
      title: "Pan-India Safe Dispatch",
      description: "Reliable parcel delivery across Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, and all Indian states with video-call selection support.",
      icon: "Truck"
    }
  ],

  // Gallery Archive (Featuring Real Sarees from Inventory)
  gallery: [
    {
      title: "Traditional Fuchsia & Violet Korvai Weave",
      tag: "Bridal Pattu",
      image: "/products/saree-purple-fuchsia-bridal.jpg",
      caption: "Intricate floral jaal gold zari pallu on fuchsia pink pure silk."
    },
    {
      title: "Royal Sapphire Blue with Peacock Border",
      tag: "Contrast Border",
      image: "/products/saree-royal-blue-emerald.jpg",
      caption: "Lustrous sapphire blue pure silk with emerald peacock zari motifs."
    },
    {
      title: "Midnight Navy with Dual Gold & Silver Buttas",
      tag: "Artisanal Weave",
      image: "/products/saree-navy-gold-silver-butta.jpg",
      caption: "Hand-beaten weft with alternating gold and silver diamond buttas."
    },
    {
      title: "Auspicious Haldi Yellow & Rani Pink Temple Drape",
      tag: "Muhurtham Special",
      image: "/products/saree-haldi-yellow-pink.jpg",
      caption: "Classic wedding muhurtham color palette with pure gold zari finish."
    }
  ],

  // SEO & Social Meta
  seo: {
    title: "Y. Jayaram – Pure Hand Loom Silk Sarees & Manufacturers | Madanapalle",
    metaDescription: "Y. Jayaram & Bro's are master handloom silk saree weavers and direct wholesale manufacturers in Madanapalle, Andhra Pradesh. Pure mulberry silk, bridal pattu, and temple border sarees at direct loom rates.",
    keywords: [
      "Y. Jayaram Silk Sarees",
      "Pure Handloom Silk Sarees Madanapalle",
      "Silk Saree Manufacturers Madanapalle",
      "Y Jayaram Bros Madanapalle",
      "Wholesale Pattu Sarees Andhra Pradesh",
      "Handloom Silk Saree Weavers Chittoor",
      "Neerugattuvaripalle silk saree weavers"
    ],
    canonicalUrl: "https://jayaram-silk-house.pages.dev/",
    ogImage: "/products/saree-purple-fuchsia-bridal.jpg",
    locale: "en_IN",
    geo: {
      region: "IN-AP",
      placename: "Madanapalle",
      position: "13.5540;78.5028"
    }
  }
};

export default brandConfig;
