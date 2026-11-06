# Y. Jayaram – Pure Hand Loom Silk Sarees & Manufacturers

> **Premium Immersive 3D Single-Page Website** for *Y. Jayaram & Bro's* — Master Handloom Silk Saree Weavers & Direct Wholesale Manufacturers, Madanapalle, Andhra Pradesh.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-R169-000000?logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **3D Living Sarees** | Full-screen cloth simulation using custom GLSL shaders with vertex displacement, anisotropic silk sheen, and interactive mouse/touch parallax ripples |
| **Gold Zari Particles** | Slowly drifting gold particle system (reduced count on mobile) |
| **Silk Hue Morphing** | Hero palette switcher smoothly transitions 3D fabric colors between Royal Crimson, Peacock Emerald, Kanchi Violet, and Haldi Mustard |
| **3D Product Cards** | CSS perspective tilt cards with hover effects; click opens a 3D rotating fabric swatch viewer (OrbitControls) |
| **Product Quick View** | Modal with interactive 3D cylindrical drape, full specs, and WhatsApp inquiry CTA |
| **Wholesale Enquiry Form** | Structured form that generates a pre-filled WhatsApp message |
| **Google Maps Embed** | Embedded iframe with "Get Directions" deep link |
| **Floating WhatsApp** | Persistent pulsing WhatsApp button with pre-filled inquiry message |
| **Sticky Header** | Blur-glass nav with "Call Now" and "Wholesale Quote" CTAs |
| **WebGL Fallback** | Graceful CSS/SVG fallback when WebGL is unavailable or `prefers-reduced-motion` is set |
| **Mobile-First** | Responsive design, lazy-loaded 3D, reduced particle count on mobile |
| **SEO** | Meta tags, Open Graph, LocalBusiness Schema.org JSON-LD |
| **White-Label** | Single `brand.config.js` controls ALL branding, colors, products, and contact info |

---

## 🏗️ Tech Stack

- **React 18** + **Vite 5** — Fast HMR dev server & optimized production builds
- **Three.js** via **React Three Fiber** + **@react-three/drei** — 3D cloth simulation, particle systems, swatch viewer
- **Custom GLSL Shaders** — Vertex displacement waves, anisotropic silk specular, Fresnel sheen, weft weave texture
- **Tailwind CSS 3** — Utility-first styling with custom silk/gold/maroon/emerald design tokens
- **Lucide React** — Clean SVG icons
- **PostCSS + Autoprefixer** — Browser compatibility

---

## 📁 Project Structure

```
jayaram silk house/
├── index.html                      # HTML entry with SEO meta, JSON-LD, Google Fonts
├── brand.config.js                 # ROOT re-export (points to src/brand.config.js)
├── vite.config.js                  # Vite config with code-splitting
├── tailwind.config.js              # Custom design tokens (silk-maroon, gold, emerald)
├── postcss.config.js
├── package.json
├── generate-assets.js              # Script to regenerate placeholder SVG assets
│
├── public/
│   ├── favicon.svg                 # Auspicious Ganesha-inspired brand favicon
│   └── products/
│       ├── catalog.json            # JSON product catalog (for external tools/APIs)
│       ├── saree-crimson-bridal.svg
│       ├── saree-emerald-peacock.svg
│       ├── saree-purple-kattam.svg
│       ├── saree-mustard-temple.svg
│       ├── saree-royal-blue.svg
│       ├── saree-bulk-bundle.svg
│       ├── gallery-loom.svg
│       ├── gallery-pallu.svg
│       ├── gallery-warp.svg
│       └── gallery-drape.svg
│
└── src/
    ├── main.jsx                    # React DOM mount
    ├── App.jsx                     # Root component orchestrating all sections
    ├── index.css                   # Tailwind directives, custom utilities, scrollbar
    ├── brand.config.js             # ★ THE WHITE-LABEL CONFIG FILE ★
    │
    ├── components/
    │   ├── 3d/
    │   │   ├── CanvasContainer.jsx     # R3F Canvas with WebGL detection & fallback
    │   │   ├── LivingSareeScene.jsx    # GLSL cloth shader with wave displacement
    │   │   ├── ZariParticles.jsx       # Gold zari floating particles
    │   │   ├── FabricSwatchViewer.jsx  # 3D rotating cylindrical drape swatch
    │   │   ├── SareeCard3D.jsx         # Perspective-tilt product card
    │   │   └── WebGLFallback.jsx       # CSS/SVG fallback for no-WebGL
    │   │
    │   ├── layout/
    │   │   ├── Header.jsx              # Sticky nav, mobile drawer, CTAs
    │   │   ├── Footer.jsx              # Full footer with 4 columns
    │   │   └── FloatingWhatsApp.jsx    # Persistent WhatsApp FAB
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx                # 3D hero with palette switcher
    │   │   ├── About.jsx               # Heritage story & certifications
    │   │   ├── Collections.jsx         # Filterable product grid
    │   │   ├── WeavingProcess.jsx      # 4-step interactive stepper
    │   │   ├── WhyChooseUs.jsx         # Trust pillars + handloom vs powerloom
    │   │   ├── Gallery.jsx             # Image grid with lightbox
    │   │   ├── WholesaleEnquiry.jsx    # Enquiry form → WhatsApp
    │   │   └── Contact.jsx             # Address, phones, Google Maps embed
    │   │
    │   └── modals/
    │       └── ProductQuickViewModal.jsx  # 3D swatch + full specs modal
    │
    └── (dist/)                     # Production build output
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server (hot reload)
npm run dev
# → Opens http://localhost:3000

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🏷️ White-Label Rebranding Guide

> **All branding lives in ONE file:** [`src/brand.config.js`](src/brand.config.js)

To rebrand the entire site for a different silk house, edit **only** this file. No code changes needed anywhere else.

### What You Can Change

| Config Section | What It Controls |
|---|---|
| `identity.*` | Business name, proprietor, tagline, established year, origin city |
| `contact.phones` | All phone numbers shown site-wide |
| `contact.whatsapp` | WhatsApp number & pre-filled messages |
| `contact.address` | Full postal address |
| `contact.map` | Google Maps embed URL, share link, coordinates |
| `contact.businessHours` | Displayed operating hours |
| `theme.*` | Color palette (maroon, gold, emerald, cream, etc.) |
| `cloth3D.heroPalette` | 3D silk shader colors (base color, zari, sheen) |
| `cloth3D.particleCount` | Zari particle density (desktop/mobile) |
| `cloth3D.waveSpeed` | Silk cloth ripple animation speed |
| `collections` | Category filter tabs |
| `products` | Full product catalog with colors, descriptions, images |
| `weavingProcess` | 4-step process stepper content |
| `whyChooseUs` | Trust pillar cards |
| `gallery` | Gallery images and captions |
| `seo.*` | Title, meta description, keywords, OG image, canonical URL |

### Replacing Product Images

1. Place your real product photos in `public/products/`
2. Update the `image` field in each product entry in `brand.config.js`
3. Update `catalog.json` if you use it for external integrations

```js
// Example: change a product image
{
  id: "ys-01",
  // ...
  image: "/products/my-real-bridal-saree.jpg",  // ← your photo
  // ...
}
```

### Changing 3D Fabric Colors

The hero 3D cloth shader reads colors from `cloth3D.heroPalette`:

```js
cloth3D: {
  heroPalette: [
    { name: "Royal Crimson & Gold", hex: "#630B1C", zari: "#F3DA7C", sheen: "#9A1B34" },
    // Add/change entries — the hero palette switcher auto-generates buttons
  ],
  particleCount: { desktop: 280, mobile: 100 },
  waveSpeed: 0.85,        // Higher = faster ripples
  windIntensity: 0.45,    // Higher = more dramatic flutter
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your Git repo at https://vercel.com/new
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Manual / Any Static Host

```bash
npm run build
# Upload the contents of dist/ to your hosting provider
```

### Environment Notes

- The site is a **fully static SPA** — no server-side code needed
- Works on any static file host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3+CloudFront, etc.)
- For custom domains, add a `CNAME` or configure DNS per your host's docs

---

## 📱 Responsive & Performance

- **Mobile-first** Tailwind breakpoints
- **Lazy-loaded 3D**: WebGL canvas uses `<Suspense>` with CSS fallback
- **Reduced particles** on mobile (100 vs 280 on desktop)
- **`prefers-reduced-motion`**: Disables all animations and falls back to static CSS layout
- **Code-split** vendor chunks (React, Three.js, icons) for parallel loading
- **DPR capping**: Canvas uses `[1, 1.5]` DPR on mobile vs `[1, 2]` on desktop
- **Antialias disabled** on mobile for GPU performance

---

## 📋 SEO Checklist

- [x] `<title>` and `<meta name="description">` from `brand.config.js`
- [x] Open Graph tags (og:title, og:description, og:image)
- [x] Twitter Card meta tags
- [x] `<link rel="canonical">` tag
- [x] **Schema.org LocalBusiness JSON-LD** with address, geo coordinates, business hours
- [x] Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] `alt` text on all images
- [x] `aria-label` on interactive elements
- [x] Fast static build with code splitting

---

## 🛠️ Development Notes

### Regenerating Placeholder SVGs

If you need to regenerate the placeholder product/gallery SVGs:

```bash
node generate-assets.js
```

### Custom GLSL Shader

The silk cloth simulation in [`LivingSareeScene.jsx`](src/components/3d/LivingSareeScene.jsx) uses:

- **Vertex shader**: Multi-harmonic sine/cosine wave displacement + mouse-reactive ripple
- **Fragment shader**: Anisotropic specular highlights, Fresnel two-tone silk color shift, micro weft-weave texture pattern, and zari border zone

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and place it in `App.jsx`
3. Add a nav link in `Header.jsx`'s `navLinks` array

---

## 📄 License

Private / Proprietary — Y. Jayaram & Bro's, Madanapalle, Andhra Pradesh.

---

<p align="center">
  <em>Handcrafted with ❤️ in Madanapalle, Andhra Pradesh</em><br>
  <strong>卐 श्री गणेशाय नमः 卐</strong>
</p>

