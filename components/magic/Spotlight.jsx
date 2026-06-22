"use client";

export default function Spotlight() {
    return (
        <div
            className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        blur-3xl
        opacity-20
        pointer-events-none
      "
            style={{
                background:
                    "radial-gradient(circle,var(--primary),transparent 70%)",
            }}
        />
    );
}