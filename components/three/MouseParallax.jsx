// components/three/MouseParallax.jsx
'use client';

import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function MouseParallax({ children }) {
    const groupRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!groupRef.current) return;

            const x = (event.clientX / window.innerWidth - 0.5) * 2;
            const y = (event.clientY / window.innerHeight - 0.5) * 2;

            groupRef.current.rotation.y = x * 0.15;
            groupRef.current.rotation.x = -y * 0.12;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <group ref={groupRef}>{children}</group>;
}