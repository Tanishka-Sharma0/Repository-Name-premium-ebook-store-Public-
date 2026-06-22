"use client";

import { useMemo } from "react";

export default function Particles() {
    const particles =
        useMemo(() => {
            const arr = [];

            for (
                let i = 0;
                i < 300;
                i++
            ) {
                arr.push(
                    (Math.random() - 0.5) * 20
                );
            }

            return new Float32Array(arr);
        }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={
                        particles.length / 3
                    }
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                size={0.05}
                color="#d8e4bc"
            />
        </points>
    );
}