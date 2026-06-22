"use client";

export default function AuroraBackground() {
    return (
        <>
            <div
                className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          blur-3xl
          opacity-20
        "
                style={{
                    background:
                        "var(--primary)",
                }}
            />

            <div
                className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          blur-3xl
          opacity-20
        "
                style={{
                    background:
                        "var(--accent)",
                }}
            />
        </>
    );
}