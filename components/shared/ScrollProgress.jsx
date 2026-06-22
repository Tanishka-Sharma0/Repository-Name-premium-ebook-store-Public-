"use client";

import {
    useEffect,
    useState,
} from "react";

export default function ScrollProgress() {
    const [progress, setProgress] =
        useState(0);

    useEffect(() => {
        const update = () => {
            const total =
                document.body.scrollHeight -
                window.innerHeight;

            const current =
                window.scrollY;

            setProgress(
                (current / total) * 100
            );
        };

        window.addEventListener(
            "scroll",
            update
        );

        return () =>
            window.removeEventListener(
                "scroll",
                update
            );
    }, []);

    return (
        <div
            className="
        fixed
        top-0
        left-0
        h-1
        z-[100]
      "
            style={{
                width: `${progress}%`,
                background:
                    "var(--primary)",
            }}
        />
    );
}