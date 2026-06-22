"use client";

import {
    useFrame,
    useThree,
} from "@react-three/fiber";

export default function MouseParallax() {
    const { camera, mouse } =
        useThree();

    useFrame(() => {
        camera.position.x =
            mouse.x * 0.8;

        camera.position.y =
            mouse.y * 0.4;

        camera.lookAt(0, 0, 0);
    });

    return null;
}