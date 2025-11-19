
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, Stars, Environment, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

const SocialNode = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2;
    }
  });

  return (
    <Sphere ref={ref} args={[0.5, 16, 16]} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.8}
      />
    </Sphere>
  );
};

const NetworkLines = ({ count = 20 }: { count?: number }) => {
    const lines = useMemo(() => {
        const points = [];
        for(let i=0; i<count; i++) {
            const start = [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ] as [number, number, number];
            const end = [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ] as [number, number, number];
            points.push({start, end});
        }
        return points;
    }, [count]);

    return (
        <group>
            {lines.map((line, i) => (
                <Line 
                    key={i} 
                    points={[line.start, line.end]} 
                    color="#C5A059" 
                    opacity={0.2} 
                    transparent 
                    lineWidth={1} 
                />
            ))}
        </group>
    )
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <NetworkLines count={30} />
          {/* Central Cluster representing Market */}
          <SocialNode position={[0, 0, 0]} color="#C5A059" scale={1.5} />
          
          {/* Satellite Nodes representing Consumers */}
          <SocialNode position={[-3, 1, -1]} color="#1a1a1a" scale={0.6} />
          <SocialNode position={[3, -1, -2]} color="#1a1a1a" scale={0.6} />
          <SocialNode position={[1, 2.5, -1]} color="#1a1a1a" scale={0.4} />
          <SocialNode position={[-1, -2, 1]} color="#1a1a1a" scale={0.5} />
        </Float>

        <Environment preset="city" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

const NetworkParticles = () => {
  const count = 100;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const points = useMemo(() => {
      return new Array(count).fill(0).map(() => {
         const x = (Math.random() - 0.5) * 10;
         const y = (Math.random() - 0.5) * 10;
         const z = (Math.random() - 0.5) * 10;
         return { pos: new THREE.Vector3(x,y,z), factor: Math.random() };
      })
  }, []);

  const particlesRef = useRef<any>();

  useFrame((state) => {
      if(particlesRef.current) {
        const t = state.clock.getElapsedTime();
        points.forEach((point, i) => {
            let { pos, factor } = point;
            // Gentle floating motion
            dummy.position.copy(pos);
            dummy.position.y += Math.sin(t * factor + i) * 0.02;
            dummy.rotation.x = t * 0.1 * factor;
            dummy.scale.setScalar(1);
            dummy.updateMatrix();
            particlesRef.current.setMatrixAt(i, dummy.matrix);
        });
        particlesRef.current.instanceMatrix.needsUpdate = true;
        particlesRef.current.rotation.y = t * 0.05;
      }
  })

  return (
    <Instances ref={particlesRef} range={count}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
    </Instances>
  )
}

export const QuantumComputerScene: React.FC = () => {
  // Re-purposed to represent the "Social Network" structure
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#C5A059" />
        <Environment preset="city" />
        
        <NetworkParticles />

        {/* Connection Lines abstract */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Line points={[[-4, -2, 0], [4, 2, 0]]} color="#C5A059" opacity={0.2} transparent lineWidth={1} />
            <Line points={[[-2, 4, 0], [2, -4, 0]]} color="#C5A059" opacity={0.2} transparent lineWidth={1} />
            <Line points={[[0, -4, 0], [0, 4, 0]]} color="#C5A059" opacity={0.2} transparent lineWidth={1} />
        </Float>
      </Canvas>
    </div>
  );
}
