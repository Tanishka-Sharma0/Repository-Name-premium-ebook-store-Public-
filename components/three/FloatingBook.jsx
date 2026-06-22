"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingBook({
    position,
    color,
}) {
    const ref = useRef();

    useFrame((state) => {
        ref.current.rotation.y += 0.005;

        ref.current.position.y =
            position[1] +
            Math.sin(state.clock.elapsedTime) *
            0.2;
    });

    return (
        <mesh
            ref={ref}
            position={position}
        >
            <boxGeometry
                args={[1.8, 2.5, 0.25]}
            />

            <meshStandardMaterial
                color={color}
            />
        </mesh>
    );
}