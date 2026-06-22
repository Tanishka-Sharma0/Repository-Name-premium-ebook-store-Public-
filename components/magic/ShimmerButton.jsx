"use client";

export default function ShimmerButton({
    children,
    className = "",
}) {
    return (
        <button
            className={`
                shimmer-btn
                relative
                overflow-hidden
                rounded-full
                px-8
                py-4
                font-semibold
                bg-[var(--primary)]
                text-black
                ${className}
            `}
        >
            <span className="relative z-10">
                {children}
            </span>

            <div
                className="
                    absolute
                    inset-0
                    animate-pulse
                    opacity-30
                    bg-white
                "
            />
        </button>
    );
}