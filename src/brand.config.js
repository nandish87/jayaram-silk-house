/**
 * ============================================================================
 * BRAND CONFIGURATION FILE (brand.config.js)
 * ============================================================================
 * WHITE-LABEL CORE:
 * Edit any field in this single configuration file to completely rebrand the site:
 * - Business name, proprietor & tagline
 * - Phone numbers, WhatsApp & direct contact links
 * - Physical address, Google Maps link & coordinates
 * - Auspicious motifs & branding
 * - Color theme & 3D fabric shader aesthetics
 * - Product collections, catalogue items & weaving process
 * - SEO meta tags & LocalBusiness Schema.org JSON-LD
 * ============================================================================
 */

export const brandConfig = {
  // Brand Identity
  identity: {
    brandName: "Y. Jayaram",
    legalName: "Y. Jayaram – Pure Hand Loom Silk Sarees & Manufacturers",
    proprietor: "Prop: Y. Jayaram & Bro's",
    tagline: "Authentic Handloom Silk Sarees & Direct Wholesale Manufacturers",
    subTagline: "Generations of Master Weavers in Madanapalle crafting pure mulberry silk & authentic zari drapes.",
    establishedYear: "1988",
    originCity: "Madanapalle, Andhra Pradesh",
    auspiciousSymbol: "卐 श्री गणेशाय नमः 卐",
    silkMarkCertified: true,
    pureHandloomCertified: true,
  },

  // Contact Information
  contact: {
    phones: [
      { display: "+91 96400 08902", clean: "9640008902", label: "Primary / Wholesale Desk" },
      { display: "+91 96660 72696", clean: "9666072696", label: "Sales & Orders" }
    ],
    primaryPhone: "9640008902",
    whatsapp: {
      number: "919640008902",
      prefilledMessage: "Namaste Y. Jayaram & Bro's, I am interested in wholesale pure handloom silk sarees from your Madanapalle looms. Please share your catalog and wholesale price list.",
      quickInquiryMessage: (productName) => 
        `Namaste! I would like to inquire about the wholesale pricing and availability for "${productName}" from Y. Jayaram Silk Sarees, Madanapalle.`
    },
    email: "yjayaramsilks@gmail.com",
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
    businessHours: "Monday to Sunday: 9:00 AM – 9:00 PM IST (Open all 7 days for wholesale buyers & showroom visitors)"
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
    { id: "all", name: "All Masterpieces", count: "40+ Designs" },
    { id: "pure-silk", name: "Pure Handloom Silk", count: "Heritage Weaves" },
    { id: "bridal-pattu", name: "Bridal Pattu & Muhurtham", count: "Grand Zari Pallu" },
    { id: "checks-kattam", name: "Checks & Kattam", count: "Traditional Madanapalle" },
    { id: "temple-border", name: "Temple Border (Korvai)", count: "Classic Contrast" },
    { id: "wholesale-bulk", name: "Wholesale Bundles", count: "Direct Weaver Lots" }
  ],

  // Featured Saree Catalog
  products: [
    {
      id: "ys-01",
      code: "YJ-PATTU-01",
      name: "Bridal Crimson Korvai Pure Pattu Saree",
      category: "bridal-pattu",
      weave: "Traditional Korvai Interlocking Handloom Weave",
      zari: "Authentic Gold Zari Brocade",
      fabric: "100% Pure Mulberry Silk (Silk Mark Certified)",
      color: "Deep Crimson Maroon & Royal Gold",
      accentColor: "#6B101E",
      zariColor: "#D4AF37",
      length: "6.3 Meters (Including Blouse Piece)",
      weight: "approx. 850 grams (Heavy Wedding Loom)",
      border: "Grand 9-inch Temple Zari Border with Mayil (Peacock) Motifs",
      pallu: "Intricate Rich Zari Floral Jaal Pallu",
      wholesalePrice: "Direct Weaver Quote on Inquiry",
      retailMrpValue: "₹18,500 - ₹24,000 (Market)",
      minOrderQty: "1 Piece for Sample / 5+ for Wholesale",
      badge: "Bestseller Bridal",
      image: "/products/saree-crimson-bridal.svg",
      description: "Our signature bridal masterpiece woven on traditional pit looms in Madanapalle. Featuring rich Korvai temple borders, dense pure gold zari pallu, and lustrous mulberry silk that drapes with regal grace."
    },
    {
      id: "ys-02",
      code: "YJ-EMERALD-02",
      name: "Mayilkan Emerald Pure Silk Saree",
      category: "pure-silk",
      weave: "Double-warp Handloom Jacquard Silk",
      zari: "Half-Fine Tested Silver-Gold Zari",
      fabric: "Certified Pure Handloom Mulberry Silk",
      color: "Deep Forest Emerald & Mustard Zari Border",
      accentColor: "#0D3A24",
      zariColor: "#E5C158",
      length: "6.2 Meters with running contrast blouse",
      weight: "approx. 720 grams",
      border: "Dual-tone Contrast Zari Border with Rudraksha Motifs",
      pallu: "Solid Zari Geometric Heritage Pallu",
      wholesalePrice: "Wholesale Bulk Rate on WhatsApp",
      retailMrpValue: "₹14,500 - ₹18,000 (Market)",
      minOrderQty: "5 Pieces for Retailers",
      badge: "Heritage Weave",
      image: "/products/saree-emerald-peacock.svg",
      description: "A timeless classic favored by discerning connoisseurs. Woven with double-twisted pure silk threads ensuring unmatched sheen, durability, and a smooth fluid fall."
    },
    {
      id: "ys-03",
      code: "YJ-KATTAM-03",
      name: "Traditional Madanapalle Kattam Check Silk",
      category: "checks-kattam",
      weave: "Authentic Grid Kattam (Check) Hand Weave",
      zari: "Zari Butta within each Check Grid",
      fabric: "Pure Desi Silk Warp & Weft",
      color: "Royal Purple & Golden Yellow Checks",
      accentColor: "#4B1248",
      zariColor: "#F5C842",
      length: "6.2 Meters with Contrast Blouse",
      weight: "approx. 680 grams",
      border: "Ganga-Jamuna Contrast Border with Zari Lines",
      pallu: "Traditional Striped Zari Pallu with Tassels",
      wholesalePrice: "Special Weaver Price for Boutiques",
      retailMrpValue: "₹12,000 - ₹15,500 (Market)",
      minOrderQty: "3 Pieces",
      badge: "Madanapalle Special",
      image: "/products/saree-purple-kattam.svg",
      description: "The pride of Madanapalle weaving clusters. Distinctive box checks housing micro floral buttas, framed by an artisanal contrast border created through manual shuttle adjustments."
    },
    {
      id: "ys-04",
      code: "YJ-TEMPLE-04",
      name: "Kanchi Temple Border Mustard Haldi Silk",
      category: "temple-border",
      weave: "Interlocked Temple (Gopuram) Border Weave",
      zari: "Heavy Zari Border & Pallu",
      fabric: "Pure 4-ply Madanapalle Silk",
      color: "Auspicious Haldi Yellow & Kumkum Red Border",
      accentColor: "#B57B0A",
      zariColor: "#FFDE59",
      length: "6.3 Meters",
      weight: "approx. 780 grams",
      border: "Triangular Gopuram Temple Border in Deep Crimson",
      pallu: "Rich Brocade Zari Weave with Annapakshi Birds",
      wholesalePrice: "Manufacturer Direct Rates",
      retailMrpValue: "₹16,000 - ₹21,000 (Market)",
      minOrderQty: "5 Pieces / Assorted",
      badge: "Pooja & Muhurtham",
      image: "/products/saree-mustard-temple.svg",
      description: "Woven for festive celebrations and wedding muhurthams. The vibrant auspicious yellow silk is complemented by contrasting kumkum borders with sacred temple spire designs."
    },
    {
      id: "ys-05",
      code: "YJ-PLAIN-05",
      name: "Regal Royal Blue Plain Silk with Broad Zari Border",
      category: "pure-silk",
      weave: "Fine Satin-weave Body with Heavy Loom Border",
      zari: "Pure Gold Finish Floral Zari",
      fabric: "Superfine Mulberry Silk",
      color: "Royal Sapphire Blue & Gold",
      accentColor: "#102347",
      zariColor: "#E2B842",
      length: "6.2 Meters with Designer Blouse",
      weight: "approx. 650 grams",
      border: "10-inch Broad Floral Vine (Kodi Visiri) Zari Border",
      pallu: "Grand Brocade Tissue Pallu",
      wholesalePrice: "Wholesale Inquiries Welcome",
      retailMrpValue: "₹13,500 - ₹17,000 (Market)",
      minOrderQty: "4 Pieces",
      badge: "Modern Classic",
      image: "/products/saree-royal-blue.svg",
      description: "Understated luxury at its finest. A solid luminous sapphire blue silk body provides an arresting backdrop to the lavish golden border, perfect for evening receptions."
    },
    {
      id: "ys-06",
      code: "YJ-BULK-06",
      name: "Retailer Wholesale Bulk Assortment Bundle (10 Sarees)",
      category: "wholesale-bulk",
      weave: "Mixed Master Handloom Assortment",
      zari: "Tested Gold Zari & Threadwork",
      fabric: "100% Guaranteed Pure Silk",
      color: "10 Distinct Fast-Moving Festival Colors",
      accentColor: "#581420",
      zariColor: "#D4AF37",
      length: "Standard 6.2 - 6.3 Meters with Blouse",
      weight: "approx. 7.5 kg total pack",
      border: "Assorted Temple, Floral & Contrast Borders",
      pallu: "Traditional Heavy Zari Pallu on each saree",
      wholesalePrice: "Direct Master Weaver Price Per Lot",
      retailMrpValue: "High Profit Margin for Retail Showrooms",
      minOrderQty: "1 Bundle (10 Sarees)",
      badge: "Wholesale Pack",
      image: "/products/saree-bulk-bundle.svg",
      description: "Specially curated for saree showrooms, boutique owners, and cloth merchants across India. Pre-sorted assortment of best-selling wedding & festive handloom pure silk sarees at unbeatable direct-from-loom rates."
    }
  ],

  // 4-Step Handloom Weaving Process
  weavingProcess: [
    {
      step: "01",
      title: "Pure Silk Yarn Selection & Degumming",
      subTitle: "Pure Mulberry Cocoons",
      description: "We source grade-A raw mulberry silk filaments. The raw silk is naturally cleansed, boiled, and conditioned to achieve signature softness and pristine dye-absorption."
    },
    {
      step: "02",
      title: "Artisanal Vat Dyeing & Warping",
      subTitle: "Vibrant, Fast Festival Hues",
      description: "Dyed by hand using time-tested recipes to create iconic South Indian shades—kumkum crimson, peacock emerald, auspicious haldi, and royal twilight violets."
    },
    {
      step: "03",
      title: "Loom Setup & Jacquard Zari Threading",
      subTitle: "Madanapalle Pit Loom Craft",
      description: "Thousands of warp threads are meticulously aligned by hand over 2–3 days. Intricate wooden punch-cards guide the shuttles carrying pure gold and silver zari threads."
    },
    {
      step: "04",
      title: "Manual Weaving & Silk Mark Quality Inspection",
      subTitle: "4 to 7 Days of Rhythm",
      description: "Our master weavers coordinate pedals and shuttles with rhythmic precision. Each completed saree undergoes stringent examination for thread tension, border sharpness, and finish."
    }
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      id: "direct-manufacturer",
      title: "Direct Weaver Pricing",
      description: "Cut out middlemen, agents, and multi-tier distributor markups. Buy directly from our family looms in Madanapalle at genuine wholesale rates.",
      icon: "Factory"
    },
    {
      id: "purity",
      title: "100% Pure Silk Guaranteed",
      description: "We use only tested mulberry silk yarns and high-grade zari. Authentic handloom quality that retains luster for generations.",
      icon: "ShieldCheck"
    },
    {
      id: "variety",
      title: "Over 200+ Running Designs",
      description: "From classic Kanchi Korvai borders and Madanapalle kattam checks to modern pastel wedding palettes, our loom capacity fulfills varied tastes.",
      icon: "Sparkles"
    },
    {
      id: "wholesale-supply",
      title: "Pan-India Bulk Dispatch",
      description: "Safe, insured parcel delivery across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, Maharashtra, and all Indian states with video-call selection.",
      icon: "Truck"
    }
  ],

  // Gallery Showcase Items
  gallery: [
    {
      title: "Traditional Madanapalle Pit Loom in Action",
      tag: "Craftsmanship",
      image: "/products/gallery-loom.svg",
      caption: "Our master weavers weaving intricate Korvai zari borders on traditional pit looms."
    },
    {
      title: "Pure Gold Zari Pallu Detail",
      tag: "Zari Artistry",
      image: "/products/gallery-pallu.svg",
      caption: "Exquisite gold zari threads woven into peacocks and blossoming lotus vines."
    },
    {
      title: "Vibrant Warp Threads on Loom",
      tag: "Preparation",
      image: "/products/gallery-warp.svg",
      caption: "Over 5,000 fine pure silk threads stretched in high tension for flawless weaving."
    },
    {
      title: "Bridal Drapes in Natural Sunlight",
      tag: "Rich Sheen",
      image: "/products/gallery-drape.svg",
      caption: "The living shimmer of pure mulberry silk shifting under changing light."
    }
  ],

  // SEO & Social Meta
  seo: {
    title: "Y. Jayaram – Pure Hand Loom Silk Sarees & Manufacturers | Madanapalle",
    metaDescription: "Y. Jayaram & Bro's are master handloom silk saree weavers and direct wholesale manufacturers in Madanapalle, Andhra Pradesh. Pure silk, bridal pattu, kattam checks & temple borders at direct weaver prices.",
    keywords: [
      "Y. Jayaram Silk Sarees",
      "Pure Handloom Silk Sarees Madanapalle",
      "Silk Saree Manufacturers Madanapalle",
      "Y Jayaram Bros Madanapalle",
      "Wholesale Pattu Sarees Andhra Pradesh",
      "Handloom Silk Saree Weavers Chittoor",
      "Kanchi border silk sarees wholesale",
      "Pure mulberry silk sarees direct from manufacturer",
      "Neerugattuvaripalle silk saree weavers"
    ],
    canonicalUrl: "https://yjayaramsilks.com/",
    ogImage: "/products/saree-crimson-bridal.svg",
    locale: "en_IN",
    geo: {
      region: "IN-AP",
      placename: "Madanapalle",
      position: "13.5540;78.5028"
    }
  }
};

export default brandConfig;

