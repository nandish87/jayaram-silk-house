import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import brandConfig from '../../brand.config';

export default function LivingSareeScene({ activeColorIndex = 0 }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const { viewport } = useThree();

  const currentPalette = brandConfig.cloth3D.heroPalette[activeColorIndex] || brandConfig.cloth3D.heroPalette[0];

  // Target colors for smooth transitions
  const targetColor = useMemo(() => new THREE.Color(currentPalette.hex), [currentPalette.hex]);
  const targetSheen = useMemo(() => new THREE.Color(currentPalette.sheen), [currentPalette.sheen]);
  const targetZari = useMemo(() => new THREE.Color(currentPalette.zari), [currentPalette.zari]);

  // Mouse reaction state
  const mouseSmooth = useRef({ x: 0, y: 0 });

  // Custom Silk Cloth Shader
  const shaderData = useMemo(() => {
    return {
      uniforms: {
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color(currentPalette.hex) },
        uSheenColor: { value: new THREE.Color(currentPalette.sheen) },
        uZariColor: { value: new THREE.Color(currentPalette.zari) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uWaveSpeed: { value: brandConfig.cloth3D.waveSpeed },
        uWindIntensity: { value: brandConfig.cloth3D.windIntensity },
        uLightPos: { value: new THREE.Vector3(3.0, 4.0, 5.0) }
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uWaveSpeed;
        uniform float uWindIntensity;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying float vElevation;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Multiple harmonic sine and cosine waves simulating fluid silk rippling in a breeze
          float t = uTime * uWaveSpeed;
          
          // Primary gentle swell
          float wave1 = sin(pos.x * 0.9 + t * 1.2 + pos.y * 0.7) * 0.45;
          // Secondary ripple
          float wave2 = cos(pos.y * 1.5 - t * 0.9 + pos.x * 0.6) * 0.3;
          // High-frequency subtle silk flutter
          float wave3 = sin(pos.x * 3.2 + pos.y * 2.8 + t * 2.4) * 0.12 * uWindIntensity;
          
          // Mouse interaction ripple
          float distToMouse = distance(vec2(pos.x * 0.25, pos.y * 0.25), uMouse);
          float mouseRipple = sin(distToMouse * 8.0 - t * 3.0) * exp(-distToMouse * 2.5) * 0.3;

          float totalDisplacement = wave1 + wave2 + wave3 + mouseRipple;
          pos.z += totalDisplacement;
          vElevation = totalDisplacement;

          // Analytical normal estimation for realistic silk sheen reflections
          vec3 displacedNormal = normal;
          displacedNormal.x -= cos(pos.x * 0.9 + t * 1.2) * 0.2;
          displacedNormal.y -= cos(pos.y * 1.5 - t * 0.9) * 0.2;
          displacedNormal = normalize(displacedNormal);
          vNormal = normalMatrix * displacedNormal;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uBaseColor;
        uniform vec3 uSheenColor;
        uniform vec3 uZariColor;
        uniform vec3 uLightPos;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying float vElevation;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          vec3 lightDir = normalize(uLightPos);

          // Diffuse shading
          float NdotL = max(dot(normal, lightDir), 0.0);
          float diffuse = 0.4 + 0.6 * NdotL;

          // Anisotropic silk specular reflection (sheen across warp & weft)
          vec3 halfVector = normalize(lightDir + viewDir);
          float NdotH = max(dot(normal, halfVector), 0.0);
          float specular = pow(NdotH, 24.0) * 0.7;

          // Fresnel grazing effect (pure silk two-tone color shift)
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

          // Temple / Zari Border along right side of drape (Pallu & Border)
          float borderZone = smoothstep(0.72, 0.74, vUv.x);
          float borderZariStripe = sin(vUv.y * 70.0) * 0.5 + 0.5;
          
          // Base silk color gradient
          vec3 silkColor = mix(uBaseColor, uSheenColor, fresnel * 0.85);

          // Weft weave micro-texture
          float weavePattern = sin(vUv.x * 350.0) * cos(vUv.y * 350.0) * 0.04;
          silkColor += weavePattern;

          // Incorporate authentic gold Zari pallu border
          vec3 zariAccent = uZariColor * (diffuse + specular * 1.8);
          vec3 finalColor = mix(silkColor * diffuse + vec3(specular * 0.8), zariAccent, borderZone * 0.85);

          // Auspicious warm ambient glow
          finalColor += uZariColor * 0.06;

          gl_FragColor = vec4(finalColor, 0.97);
        }
      `
    };
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    // Time increment
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    // Smooth mouse coordinates lerp
    mouseSmooth.current.x = THREE.MathUtils.lerp(mouseSmooth.current.x, state.pointer.x, 0.05);
    mouseSmooth.current.y = THREE.MathUtils.lerp(mouseSmooth.current.y, state.pointer.y, 0.05);
    materialRef.current.uniforms.uMouse.value.set(mouseSmooth.current.x, mouseSmooth.current.y);

    // Smooth color morphing to target palette
    materialRef.current.uniforms.uBaseColor.value.lerp(targetColor, 0.06);
    materialRef.current.uniforms.uSheenColor.value.lerp(targetSheen, 0.06);
    materialRef.current.uniforms.uZariColor.value.lerp(targetZari, 0.06);

    // Subtle gentle floating movement of the entire drape
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.04 - 0.12;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.25) * 0.05 - 0.1;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[0.6, -0.1, -0.4]} 
      rotation={[-0.2, -0.1, -0.1]}
      scale={[viewport.width > 7 ? 8.5 : 5.8, viewport.height > 6 ? 6.2 : 5.2, 1]}
    >
      {/* Dense subdivision for silky smooth cloth ripples */}
      <planeGeometry args={[1.5, 1.2, 80, 70]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={shaderData.vertexShader}
        fragmentShader={shaderData.fragmentShader}
        uniforms={shaderData.uniforms}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  );
}

