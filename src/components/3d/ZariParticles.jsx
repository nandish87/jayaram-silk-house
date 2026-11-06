import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ZariParticles({ count = 200, isMobile = false }) {
  const meshRef = useRef();
  const actualCount = isMobile ? Math.min(count, 80) : count;

  const [positions, speeds, scales] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    const spd = new Float32Array(actualCount * 3);
    const scl = new Float32Array(actualCount);

    for (let i = 0; i < actualCount; i++) {
      // Spread across viewport
      pos[i * 3 + 0] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 + 1;

      // Gentle drift speeds
      spd[i * 3 + 0] = (Math.random() - 0.5) * 0.005;
      spd[i * 3 + 1] = 0.002 + Math.random() * 0.006; // upward drift
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.004;

      // Particle size variation (fine zari flakes)
      scl[i] = 0.02 + Math.random() * 0.04;
    }

    return [pos, spd, scl];
  }, [actualCount]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    const array = posAttr.array;

    for (let i = 0; i < actualCount; i++) {
      const idx = i * 3;
      array[idx + 0] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.003;
      array[idx + 1] += speeds[idx + 1];
      array[idx + 2] += Math.cos(state.clock.elapsedTime * 0.4 + i) * 0.002;

      // Reset when floating out of bounds
      if (array[idx + 1] > 6) {
        array[idx + 1] = -5.5;
        array[idx + 0] = (Math.random() - 0.5) * 14;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color={new THREE.Color('#FFE27A')}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

