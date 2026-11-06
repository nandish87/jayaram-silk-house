import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DrapedSwatchMesh({ accentColor = "#6B101E", zariColor = "#D4AF37" }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      // Gentle breathing wave
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Curved Cylindrical Draped Silk Swatch */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.25, 2.6, 64, 32, true]} />
        <meshPhysicalMaterial
          color={accentColor}
          roughness={0.25}
          metalness={0.15}
          clearcoat={0.7}
          clearcoatRoughness={0.2}
          sheen={1.8}
          sheenRoughness={0.3}
          sheenColor={new THREE.Color(zariColor)}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Top Zari Accent Ring */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[1.205, 1.205, 0.25, 64, 1, true]} />
        <meshStandardMaterial
          color={zariColor}
          metalness={0.85}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bottom Heavy Temple Zari Border Ring */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[1.245, 1.255, 0.65, 64, 1, true]} />
        <meshStandardMaterial
          color={zariColor}
          metalness={0.9}
          roughness={0.18}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Auspicious Inner Core Glow */}
      <pointLight color="#FFE58F" intensity={1.2} distance={3} />
    </group>
  );
}

export default function FabricSwatchViewer({ product }) {
  const accentColor = product?.accentColor || "#6B101E";
  const zariColor = product?.zariColor || "#D4AF37";

  return (
    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-silk-maroon-dark via-[#1a0408] to-silk-maroon-dark border border-silk-gold/30">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        gl={{ powerPreference: 'high-performance', antialias: true }}
      >
        <ambientLight intensity={0.7} color="#FFF8E7" />
        <directionalLight position={[3, 4, 3]} intensity={2.0} color="#FFF1C2" />
        <pointLight position={[-3, -2, -2]} intensity={0.8} color="#D4AF37" />

        <DrapedSwatchMesh accentColor={accentColor} zariColor={zariColor} />

        <OrbitControls
          enableZoom={true}
          maxDistance={5}
          minDistance={2}
          autoRotate={false}
          enablePan={false}
        />
      </Canvas>

      {/* Interactive Controls Overlay Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-silk-gold/40 text-[11px] text-silk-gold-light tracking-wide pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
        <span>✦ Drag to rotate fabric 360° | Scroll to inspect weave</span>
      </div>
    </div>
  );
}

