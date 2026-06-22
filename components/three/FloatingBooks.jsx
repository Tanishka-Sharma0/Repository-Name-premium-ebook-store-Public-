// components/three/FloatingBooks.jsx
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import FloatingBook from './FloatingBook';

export default function FloatingBooks() {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Left Side Books */}
            <FloatingBook
                position={[-5.5, 1.8, -3]}
                rotation={[0.2, 0.6, 0.1]}
                delay={0}
            />
            <FloatingBook
                position={[-4.2, -1.2, -2.5]}
                rotation={[-0.4, 1.1, -0.3]}
                delay={0.7}
            />

            {/* Right Side Books */}
            <FloatingBook
                position={[5.2, 0.8, -3.2]}
                rotation={[0.5, -0.9, 0.2]}
                delay={1.2}
            />
            <FloatingBook
                position={[4.1, -2.1, -1.8]}
                rotation={[-0.3, -1.4, 0.4]}
                delay={0.4}
            />

            {/* Center Books */}
            <FloatingBook
                position={[-1.5, -2.8, 1.5]}
                rotation={[0.6, 0.8, -0.2]}
                delay={1.8}
            />
            <FloatingBook
                position={[2.3, 2.2, -2]}
                rotation={[-0.2, -0.7, 0.5]}
                delay={0.9}
            />
        </group>
    );
}