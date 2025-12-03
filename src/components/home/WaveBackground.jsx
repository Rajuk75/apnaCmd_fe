import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      {/* Glossy Rim Orb - Matches the reference image */}
      <Sphere ref={sphereRef} args={[2.8, 64, 64]}>
        <MeshTransmissionMaterial
          backside={true}
          samples={16}
          resolution={512}
          transmission={1}
          roughness={0.0}
          thickness={3.0} // Thick glass for strong rim effect
          ior={1.5}
          chromaticAberration={1.0} // Prism effect at edges
          anisotropy={0.5}
          distortion={0.2} // Subtle distortion
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#d8b4fe" // Light Purple/Pink
          background={new THREE.Color('#000000')}
        />
      </Sphere>
      
      {/* Inner Glow Light */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#a855f7" distance={5} />
    </group>
  );
};

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fbbf24" /> {/* Yellow light */}
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ec4899" /> {/* Pink light */}
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default WaveBackground;
