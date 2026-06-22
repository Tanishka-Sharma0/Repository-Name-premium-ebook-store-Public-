"use client";

export default function AnimatedGrid() {
    return (
        <div
            className="
        absolute
        inset-0
        opacity-10
        pointer-events-none
      "
            style={{
                backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg,var(--border) 1px, transparent 1px)
        `,
                backgroundSize: "40px 40px",
            }}
        />
    );
}