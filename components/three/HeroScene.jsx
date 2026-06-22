// components/three/HeroScene.jsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingBooks from './FloatingBooks';
import Particles from './Particles';
import MouseParallax from './MouseParallax';

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 4, 12], fov: 48 }}
            style={{ background: 'transparent' }}
            className="absolute inset-0"
            gl={{ alpha: true, antialias: true }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.35} />
                <pointLight position={[8, 10, 12]} intensity={1.4} color="#67e8f9" />
                <pointLight position={[-10, -8, -10]} intensity={0.7} color="#c4b5fd" />

                <MouseParallax>
                    <FloatingBooks />
                </MouseParallax>

                <Particles />

                <Stars
                    radius={280}
                    depth={55}
                    count={700}
                    factor={3.5}
                    saturation={0}
                    fade
                    speed={0.5}
                />

                <Environment preset="night" />
            </Suspense>
        </Canvas>
    );
}