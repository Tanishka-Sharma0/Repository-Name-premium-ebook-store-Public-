// components/three/Particles.jsx
'use client';

import { Points, PointMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Particles() {
    const pointsRef = useRef();

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 25;
        positions[i + 1] = (Math.random() - 0.5) * 25;
        positions[i + 2] = (Math.random() - 0.5) * 25;
    }

    return (
        <Points ref={pointsRef} positions={positions}>
            <PointMaterial
                size={0.035}
                color="#67e8f9"
                transparent
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}