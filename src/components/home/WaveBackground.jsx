import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.08;
      sphereRef.current.rotation.y = t * 0.12;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.8, 64, 64]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.25}
        speed={1.2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
        wireframe={false}
      />
    </Sphere>
  );
};

const FloatingRing = ({ radius, speed, rotationAxis }) => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ringRef.current) {
      if (rotationAxis === 'x') {
        ringRef.current.rotation.x = t * speed;
        ringRef.current.rotation.z = Math.sin(t * 0.5) * 0.2;
      } else {
        ringRef.current.rotation.y = t * speed;
        ringRef.current.rotation.x = Math.cos(t * 0.5) * 0.2;
      }
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
    </mesh>
  );
};

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-70 z-10"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      
      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        className="opacity-70"
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          color="#ffffff"
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.6}
          color="#60a5fa"
        />
        <pointLight position={[0, 0, 0]} intensity={0.8} color="#3b82f6" />
        
        <AnimatedSphere />
        <FloatingRing radius={2.5} speed={0.1} rotationAxis="x" />
        <FloatingRing radius={3} speed={-0.08} rotationAxis="y" />
      </Canvas>

      {/* Dots Pattern */}
      <div className="absolute inset-0 dots-pattern z-10 pointer-events-none opacity-50"></div>
    </div>
  );
};

export default React.memo(WaveBackground);
