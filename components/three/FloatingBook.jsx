// components/three/FloatingBook.jsx
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

export default function FloatingBook({ position, rotation, delay = 0 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.6;
            meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation}>
            <boxGeometry args={[2.2, 3.1, 0.4]} />
            <MeshDistortMaterial
                color="#1e2937"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={0.8}
            />
        </mesh>
    );
}