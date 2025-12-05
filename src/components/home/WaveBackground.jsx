import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.6, 64, 64]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.5}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
};

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#a855f7"
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={1.2}
          color="#d946ef"
        />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#c084fc" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default React.memo(WaveBackground);