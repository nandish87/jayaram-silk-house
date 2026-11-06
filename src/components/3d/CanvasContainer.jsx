import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import LivingSareeScene from './LivingSareeScene';
import ZariParticles from './ZariParticles';
import WebGLFallback from './WebGLFallback';
import brandConfig from '../../brand.config';

// WebGL support detector
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function CanvasContainer({ activeColorIndex = 0 }) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Check WebGL support
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
    }

    // 2. Check Reduced Motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // 3. Responsive Screen Check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return <WebGLFallback activeColorIndex={activeColorIndex} />;
  }

  const particleCount = isMobile 
    ? brandConfig.cloth3D.particleCount.mobile 
    : brandConfig.cloth3D.particleCount.desktop;

  return (
    <div className="relative w-full h-full overflow-hidden bg-silk-maroon-dark select-none">
      <Suspense fallback={<WebGLFallback activeColorIndex={activeColorIndex} />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: isMobile ? 55 : 45 }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          gl={{
            powerPreference: 'high-performance',
            antialias: !isMobile,
            alpha: true
          }}
          className="w-full h-full"
        >
          {/* Subtle directional and warm ambient temple lighting */}
          <ambientLight intensity={0.8} color="#FFF5E0" />
          <directionalLight position={[4, 5, 4]} intensity={1.5} color="#FFE6A3" />
          <pointLight position={[-4, -3, 2]} intensity={0.9} color="#D4AF37" />

          {/* Living Silk Saree Draped Plane with Physics Ripple */}
          <LivingSareeScene activeColorIndex={activeColorIndex} />

          {/* Golden Zari Floating Dust Particles */}
          <ZariParticles count={particleCount} isMobile={isMobile} />
        </Canvas>
      </Suspense>
    </div>
  );
}

