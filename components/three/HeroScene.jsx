"use client";

import { Canvas } from "@react-three/fiber";

import FloatingBooks from "./FloatingBooks";
import Particles from "./Particles";
import MouseParallax from "./MouseParallax";

export default function HeroScene() {
    return (
        <div
            className="
        absolute
        inset-0
        -z-10
      "
        >
            <Canvas>
                <ambientLight
                    intensity={1}
                />

                <directionalLight
                    position={[5, 5, 5]}
                />

                <MouseParallax />

                <Particles />

                <FloatingBooks />
            </Canvas>
        </div>
    );
}