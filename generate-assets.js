// Script to generate rich authentic SVG assets for sarees and gallery
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Crimson Bridal Saree
const crimsonBridalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="silkCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A0511" />
      <stop offset="35%" stop-color="#7B0F22" />
      <stop offset="65%" stop-color="#5C0B18" />
      <stop offset="100%" stop-color="#36030B" />
    </linearGradient>
    <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#C29B38" />
      <stop offset="25%" stop-color="#FFE885" />
      <stop offset="50%" stop-color="#E2B744" />
      <stop offset="75%" stop-color="#FFF0A3" />
      <stop offset="100%" stop-color="#9E761E" />
    </linearGradient>
    <linearGradient id="sheenHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="50%" stop-color="white" stop-opacity="0.18" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <pattern id="zariButta" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M30 15 C33 22 42 25 42 30 C42 36 36 42 30 42 C24 42 18 36 18 30 C18 25 27 22 30 15 Z" fill="url(#goldZari)" opacity="0.85"/>
      <circle cx="30" cy="30" r="3" fill="#FFE885" />
    </pattern>
    <pattern id="templeBorder" width="40" height="50" patternUnits="userSpaceOnUse">
      <polygon points="20,5 38,45 2,45" fill="url(#goldZari)" />
      <polygon points="20,15 32,42 8,42" fill="#5C0B18" opacity="0.6"/>
    </pattern>
  </defs>

  <!-- Background Base Silk Body -->
  <rect width="800" height="1000" fill="url(#silkCrimson)" />
  <rect width="800" height="1000" fill="url(#zariButta)" />
  
  <!-- Subtle Fold Ripples / Draped Lighting -->
  <path d="M 0,0 Q 200,300 150,1000 L 0,1000 Z" fill="black" opacity="0.15" />
  <path d="M 250,0 Q 400,450 350,1000 L 280,1000 Q 320,450 180,0 Z" fill="url(#sheenHighlight)" />
  <path d="M 500,0 Q 650,450 600,1000 L 530,1000 Q 580,450 440,0 Z" fill="url(#sheenHighlight)" />

  <!-- Top Contrast Zari Strip -->
  <rect x="0" y="0" width="800" height="40" fill="url(#goldZari)" />
  <rect x="0" y="40" width="800" height="8" fill="#FFE885" opacity="0.5" />

  <!-- Temple Border Bottom Section -->
  <g transform="translate(0, 680)">
    <!-- Temple Peaks -->
    <rect x="0" y="0" width="800" height="50" fill="url(#templeBorder)" />
    <!-- Broad Zari Border Base -->
    <rect x="0" y="50" width="800" height="270" fill="url(#goldZari)" />
    
    <!-- Intricate Floral & Peacock bands in Zari -->
    <rect x="0" y="65" width="800" height="25" fill="#4A0511" opacity="0.75" />
    <path d="M0,77 Q 20,67 40,77 T 80,77 T 120,77 T 160,77 T 200,77 T 240,77 T 280,77 T 320,77 T 360,77 T 400,77 T 440,77 T 480,77 T 520,77 T 560,77 T 600,77 T 640,77 T 680,77 T 720,77 T 760,77 T 800,77" fill="none" stroke="#FFE885" stroke-width="3"/>
    
    <!-- Brocade Medallion Strip -->
    <g fill="#FFE885" opacity="0.9">
      <circle cx="100" cy="180" r="35" fill="none" stroke="#7B0F22" stroke-width="4"/>
      <circle cx="250" cy="180" r="35" fill="none" stroke="#7B0F22" stroke-width="4"/>
      <circle cx="400" cy="180" r="35" fill="none" stroke="#7B0F22" stroke-width="4"/>
      <circle cx="550" cy="180" r="35" fill="none" stroke="#7B0F22" stroke-width="4"/>
      <circle cx="700" cy="180" r="35" fill="none" stroke="#7B0F22" stroke-width="4"/>
    </g>
    <!-- Border Lower Edge -->
    <rect x="0" y="300" width="800" height="20" fill="#36030B" />
  </g>

  <!-- Authenticity Stamp Overlay -->
  <g transform="translate(560, 40)" opacity="0.9">
    <rect x="0" y="0" width="200" height="60" rx="8" fill="#36030B" stroke="#D4AF37" stroke-width="2"/>
    <text x="100" y="25" text-anchor="middle" fill="#FFE885" font-size="12" font-family="serif" letter-spacing="2">PURE HANDLOOM</text>
    <text x="100" y="45" text-anchor="middle" fill="#FDFBF7" font-size="14" font-weight="bold" font-family="sans-serif">SILK MARK</text>
  </g>
</svg>`;

// 2. Emerald Peacock Saree
const emeraldPeacockSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="silkEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#062417" />
      <stop offset="30%" stop-color="#0E4A2E" />
      <stop offset="70%" stop-color="#0B3823" />
      <stop offset="100%" stop-color="#04160E" />
    </linearGradient>
    <linearGradient id="goldZariEm" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#B88A28" />
      <stop offset="30%" stop-color="#FCE57A" />
      <stop offset="70%" stop-color="#DDA932" />
      <stop offset="100%" stop-color="#916B19" />
    </linearGradient>
    <pattern id="rudrakshaPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="8" fill="url(#goldZariEm)" opacity="0.8"/>
      <circle cx="20" cy="20" r="4" fill="#0E4A2E"/>
    </pattern>
  </defs>

  <rect width="800" height="1000" fill="url(#silkEmerald)" />
  <rect width="800" height="1000" fill="url(#rudrakshaPattern)" />
  
  <!-- Subtle drape light -->
  <path d="M 100,0 Q 250,500 200,1000 L 120,1000 Q 180,500 20,0 Z" fill="white" opacity="0.08" />
  <path d="M 450,0 Q 600,500 550,1000 L 480,1000 Q 520,500 370,0 Z" fill="white" opacity="0.08" />

  <!-- Rich Mustard & Zari Border -->
  <g transform="translate(0, 720)">
    <rect x="0" y="0" width="800" height="280" fill="url(#goldZariEm)" />
    <rect x="0" y="20" width="800" height="40" fill="#916B19" opacity="0.8" />
    <!-- Peacock Stylized Silhouette row -->
    <path d="M 50,45 Q 70,25 90,45 Q 110,65 130,45" fill="none" stroke="#FCE57A" stroke-width="4" />
    <path d="M 210,45 Q 230,25 250,45 Q 270,65 290,45" fill="none" stroke="#FCE57A" stroke-width="4" />
    <path d="M 370,45 Q 390,25 410,45 Q 430,65 450,45" fill="none" stroke="#FCE57A" stroke-width="4" />
    <path d="M 530,45 Q 550,25 570,45 Q 590,65 610,45" fill="none" stroke="#FCE57A" stroke-width="4" />
    <path d="M 690,45 Q 710,25 730,45 Q 750,65 770,45" fill="none" stroke="#FCE57A" stroke-width="4" />

    <rect x="0" y="80" width="800" height="160" fill="#0B3823" opacity="0.9" />
    <!-- Grand Pallu weave pattern -->
    <circle cx="200" cy="160" r="45" fill="none" stroke="url(#goldZariEm)" stroke-width="6"/>
    <circle cx="400" cy="160" r="45" fill="none" stroke="url(#goldZariEm)" stroke-width="6"/>
    <circle cx="600" cy="160" r="45" fill="none" stroke="url(#goldZariEm)" stroke-width="6"/>
    <rect x="0" y="250" width="800" height="30" fill="#04160E" />
  </g>
</svg>`;

// 3. Purple Kattam Check Saree
const purpleKattamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="silkPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D0A2E" />
      <stop offset="50%" stop-color="#4C144E" />
      <stop offset="100%" stop-color="#1F0520" />
    </linearGradient>
    <linearGradient id="goldZariPurp" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C29B38" />
      <stop offset="50%" stop-color="#FFE885" />
      <stop offset="100%" stop-color="#9E761E" />
    </linearGradient>
    <pattern id="kattamGrid" width="80" height="80" patternUnits="userSpaceOnUse">
      <rect width="80" height="80" fill="none" stroke="#DDA932" stroke-width="2.5" opacity="0.65" />
      <circle cx="40" cy="40" r="6" fill="#FFE885" opacity="0.8" />
    </pattern>
  </defs>

  <rect width="800" height="1000" fill="url(#silkPurple)" />
  <rect width="800" height="1000" fill="url(#kattamGrid)" />

  <!-- Draped highlights -->
  <path d="M 300,0 Q 420,500 370,1000 L 290,1000 Q 340,500 220,0 Z" fill="white" opacity="0.1" />

  <!-- Ganga Jamuna Contrast Border (Deep Mustard / Pink-Maroon) -->
  <g transform="translate(0, 750)">
    <rect x="0" y="0" width="800" height="250" fill="url(#goldZariPurp)" />
    <rect x="0" y="30" width="800" height="180" fill="#B57B0A" opacity="0.85" />
    <!-- Geometric Chevron Weave -->
    <path d="M 0,120 L 50,80 L 100,120 L 150,80 L 200,120 L 250,80 L 300,120 L 350,80 L 400,120 L 450,80 L 500,120 L 550,80 L 600,120 L 650,80 L 700,120 L 750,80 L 800,120" fill="none" stroke="#FFE885" stroke-width="5" />
    <rect x="0" y="225" width="800" height="25" fill="#1F0520" />
  </g>
</svg>`;

// 4. Mustard Haldi Temple Saree
const mustardTempleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="silkMustard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#805707" />
      <stop offset="40%" stop-color="#C28B15" />
      <stop offset="70%" stop-color="#9C6B0B" />
      <stop offset="100%" stop-color="#6B4702" />
    </linearGradient>
    <linearGradient id="kumkumRed" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#730B1C" />
      <stop offset="50%" stop-color="#9E162D" />
      <stop offset="100%" stop-color="#540513" />
    </linearGradient>
    <pattern id="gopuramPattern" width="50" height="60" patternUnits="userSpaceOnUse">
      <polygon points="25,5 45,55 5,55" fill="url(#kumkumRed)" stroke="#FFE885" stroke-width="1.5" />
    </pattern>
  </defs>

  <rect width="800" height="1000" fill="url(#silkMustard)" />
  
  <!-- Subtle circular zari buttas -->
  <g fill="#FFE885" opacity="0.6">
    <circle cx="150" cy="200" r="10"/>
    <circle cx="350" cy="200" r="10"/>
    <circle cx="550" cy="200" r="10"/>
    <circle cx="250" cy="350" r="10"/>
    <circle cx="450" cy="350" r="10"/>
    <circle cx="650" cy="350" r="10"/>
    <circle cx="150" cy="500" r="10"/>
    <circle cx="350" cy="500" r="10"/>
    <circle cx="550" cy="500" r="10"/>
  </g>

  <!-- Temple Spire Border in Kumkum Red -->
  <g transform="translate(0, 680)">
    <rect x="0" y="0" width="800" height="60" fill="url(#gopuramPattern)" />
    <rect x="0" y="60" width="800" height="260" fill="url(#kumkumRed)" />
    <!-- Rich Annapakshi Zari Panel -->
    <rect x="0" y="90" width="800" height="160" fill="#D4AF37" opacity="0.85" />
    <circle cx="200" cy="170" r="40" fill="#730B1C" />
    <circle cx="400" cy="170" r="40" fill="#730B1C" />
    <circle cx="600" cy="170" r="40" fill="#730B1C" />
  </g>
</svg>`;

// 5. Royal Blue Plain Silk
const royalBlueSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="silkBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081838" />
      <stop offset="35%" stop-color="#14346B" />
      <stop offset="70%" stop-color="#0D234A" />
      <stop offset="100%" stop-color="#050F24" />
    </linearGradient>
    <linearGradient id="goldZariBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C29B38" />
      <stop offset="50%" stop-color="#FFE885" />
      <stop offset="100%" stop-color="#9E761E" />
    </linearGradient>
  </defs>

  <rect width="800" height="1000" fill="url(#silkBlue)" />

  <!-- Draped silk gloss reflection -->
  <path d="M 200,0 Q 350,500 300,1000 L 220,1000 Q 280,500 120,0 Z" fill="white" opacity="0.14" />
  <path d="M 520,0 Q 670,500 620,1000 L 540,1000 Q 600,500 440,0 Z" fill="white" opacity="0.12" />

  <!-- Broad 10-inch Gold Zari Vine Border -->
  <g transform="translate(0, 680)">
    <rect x="0" y="0" width="800" height="320" fill="url(#goldZariBlue)" />
    <rect x="0" y="40" width="800" height="230" fill="#081838" opacity="0.85" />
    <!-- Floral vines -->
    <path d="M0,150 C 100,80 150,220 250,150 C 350,80 400,220 500,150 C 600,80 650,220 750,150" fill="none" stroke="url(#goldZariBlue)" stroke-width="6" />
    <circle cx="120" cy="115" r="22" fill="url(#goldZariBlue)"/>
    <circle cx="370" cy="115" r="22" fill="url(#goldZariBlue)"/>
    <circle cx="620" cy="115" r="22" fill="url(#goldZariBlue)"/>
  </g>
</svg>`;

// 6. Wholesale Bulk Pack Bundle
const bulkBundleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#241416" />
      <stop offset="100%" stop-color="#120809" />
    </linearGradient>
    <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#C29B38" />
      <stop offset="50%" stop-color="#FFE885" />
      <stop offset="100%" stop-color="#9E761E" />
    </linearGradient>
  </defs>

  <rect width="800" height="1000" fill="url(#bgGrad)" />

  <!-- Stacked Saree Layers in Vibrant Handloom Colors -->
  <g transform="translate(100, 150)">
    <!-- Saree 1 Crimson -->
    <rect x="20" y="550" width="560" height="85" rx="12" fill="#7B0F22" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="550" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Saree 2 Emerald -->
    <rect x="20" y="470" width="560" height="85" rx="12" fill="#0E4A2E" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="470" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Saree 3 Royal Blue -->
    <rect x="20" y="390" width="560" height="85" rx="12" fill="#14346B" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="390" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Saree 4 Mustard -->
    <rect x="20" y="310" width="560" height="85" rx="12" fill="#C28B15" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="310" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Saree 5 Purple Kattam -->
    <rect x="20" y="230" width="560" height="85" rx="12" fill="#4C144E" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="230" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Saree 6 Rani Pink -->
    <rect x="20" y="150" width="560" height="85" rx="12" fill="#99154C" stroke="#FFE885" stroke-width="2"/>
    <rect x="420" y="150" width="160" height="85" rx="4" fill="url(#goldRibbon)" opacity="0.9"/>

    <!-- Silk Manufacturer Ribbon Wrapping -->
    <rect x="260" y="120" width="60" height="530" fill="url(#goldRibbon)" />
  </g>

  <!-- Wholesale Bundle Tag -->
  <g transform="translate(400, 800)">
    <circle cx="0" cy="0" r="85" fill="#4A0511" stroke="#FFE885" stroke-width="4" />
    <text x="0" y="-20" text-anchor="middle" fill="#FFE885" font-size="16" font-family="sans-serif" font-weight="bold">WHOLESALE</text>
    <text x="0" y="10" text-anchor="middle" fill="#FDFBF7" font-size="28" font-family="serif" font-weight="bold">10 LOT</text>
    <text x="0" y="35" text-anchor="middle" fill="#FFE885" font-size="13" font-family="sans-serif">DIRECT WEAVER</text>
  </g>
</svg>`;

// Gallery SVGs
const galleryLoomSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#241712" />
  <!-- Loom frame illustration -->
  <rect x="80" y="80" width="640" height="440" fill="none" stroke="#D4AF37" stroke-width="8" rx="8" />
  <line x1="160" y1="80" x2="160" y2="520" stroke="#8A5A2B" stroke-width="12" />
  <line x1="640" y1="80" x2="640" y2="520" stroke="#8A5A2B" stroke-width="12" />
  <!-- Warp lines -->
  <g stroke="#C28B15" stroke-width="1.5" opacity="0.7">
    ${Array.from({length: 40}, (_, i) => `<line x1="${200 + i*10}" y1="120" x2="${200 + i*10}" y2="480" />`).join('\n')}
  </g>
  <!-- Saree weaving edge -->
  <rect x="180" y="320" width="440" height="160" fill="#6B101E" opacity="0.9" />
  <rect x="180" y="440" width="440" height="40" fill="#D4AF37" />
  <text x="400" y="565" text-anchor="middle" fill="#F5E6BE" font-family="serif" font-size="18" letter-spacing="1">Madanapalle Traditional Handloom Pit Loom</text>
</svg>`;

const galleryPalluSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#4A0511" />
  <rect x="50" y="50" width="700" height="500" fill="#D4AF37" />
  <rect x="80" y="80" width="640" height="440" fill="#5C0B18" />
  <g fill="#FFE885" opacity="0.9">
    <circle cx="200" cy="300" r="80" stroke="#D4AF37" stroke-width="8" fill="none"/>
    <circle cx="400" cy="300" r="100" stroke="#D4AF37" stroke-width="10" fill="none"/>
    <circle cx="600" cy="300" r="80" stroke="#D4AF37" stroke-width="8" fill="none"/>
    <path d="M 360,300 Q 400,240 440,300 Q 400,360 360,300 Z" fill="#FFE885"/>
  </g>
  <text x="400" y="565" text-anchor="middle" fill="#F5E6BE" font-family="serif" font-size="18" letter-spacing="1">Pure Gold Zari Master Weave Pallu</text>
</svg>`;

const galleryWarpSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#12261E" />
  <g stroke="#E5C158" stroke-width="1.2" opacity="0.8">
    ${Array.from({length: 60}, (_, i) => `<line x1="${50 + i*12}" y1="50" x2="${100 + i*11}" y2="520" />`).join('\n')}
  </g>
  <text x="400" y="565" text-anchor="middle" fill="#F5E6BE" font-family="serif" font-size="18" letter-spacing="1">Stretched Mulberry Silk Warp Yarn Tensioning</text>
</svg>`;

const galleryDrapeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="drapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A0511" />
      <stop offset="50%" stop-color="#B51B38" />
      <stop offset="100%" stop-color="#240207" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="#1A1817" />
  <path d="M 150,50 Q 300,300 200,550 Q 450,580 650,550 Q 550,300 700,50 Z" fill="url(#drapeGrad)" />
  <path d="M 300,50 Q 450,300 380,550" stroke="#FFE885" stroke-width="4" fill="none" opacity="0.8"/>
  <path d="M 450,50 Q 600,300 520,550" stroke="#FFE885" stroke-width="4" fill="none" opacity="0.8"/>
  <text x="400" y="575" text-anchor="middle" fill="#F5E6BE" font-family="serif" font-size="18" letter-spacing="1">Bridal Saree Grace & Sheen in Natural Daylight</text>
</svg>`;

fs.writeFileSync(path.join(outDir, 'saree-crimson-bridal.svg'), crimsonBridalSvg);
fs.writeFileSync(path.join(outDir, 'saree-emerald-peacock.svg'), emeraldPeacockSvg);
fs.writeFileSync(path.join(outDir, 'saree-purple-kattam.svg'), purpleKattamSvg);
fs.writeFileSync(path.join(outDir, 'saree-mustard-temple.svg'), mustardTempleSvg);
fs.writeFileSync(path.join(outDir, 'saree-royal-blue.svg'), royalBlueSvg);
fs.writeFileSync(path.join(outDir, 'saree-bulk-bundle.svg'), bulkBundleSvg);

fs.writeFileSync(path.join(outDir, 'gallery-loom.svg'), galleryLoomSvg);
fs.writeFileSync(path.join(outDir, 'gallery-pallu.svg'), galleryPalluSvg);
fs.writeFileSync(path.join(outDir, 'gallery-warp.svg'), galleryWarpSvg);
fs.writeFileSync(path.join(outDir, 'gallery-drape.svg'), galleryDrapeSvg);

console.log('Successfully generated all product and gallery SVGs');

