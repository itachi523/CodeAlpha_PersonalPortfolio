import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Wireframe } from '@react-three/drei';

const WireframeSphere = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#020813']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <WireframeSphere />
      </Canvas>
    </div>
  );
};

export default Background3D;
