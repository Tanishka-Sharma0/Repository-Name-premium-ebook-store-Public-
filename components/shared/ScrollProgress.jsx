"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollProgress({
    color1 = "var(--primary)",
    color2 = "var(--accent)",
    height = "h-1",
    position = "top", // top, bottom
    showPercentage = false,
    className = "",
}) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        let ticking = false;
        let lastScroll = 0;

        const update = () => {
            const total = document.body.scrollHeight - window.innerHeight;
            const current = window.scrollY;
            const newProgress = Math.min(Math.max((current / total) * 100, 0), 100);

            // Only update if progress changed significantly
            if (Math.abs(newProgress - progress) > 0.1) {
                setProgress(newProgress);
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    update();
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initial update
        update();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", update, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", update);
        };
    }, [progress]);

    // Hide on scroll to bottom
    useEffect(() => {
        const handleVisibility = () => {
            const total = document.body.scrollHeight - window.innerHeight;
            const current = window.scrollY;
            const newProgress = (current / total) * 100;

            if (newProgress > 95) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", handleVisibility);
    }, []);

    const heightClasses = {
        "h-0.5": "h-0.5",
        "h-1": "h-1",
        "h-1.5": "h-1.5",
        "h-2": "h-2",
    };

    const positionClasses = {
        top: "top-0",
        bottom: "bottom-0",
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Main progress bar */}
                    <motion.div
                        ref={progressRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`
                            fixed
                            ${positionClasses[position]}
                            left-0
                            z-[100]
                            ${heightClasses[height] || "h-1"}
                            rounded-r-full
                            transition-all
                            duration-300
                            ${className}
                        `}
                        style={{
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${color1}, ${color2})`,
                            boxShadow: `0 0 20px ${color1}40, 0 0 60px ${color2}20`,
                            cursor: "pointer",
                        }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(90deg, ${color1}40, ${color2}40)`,
                                filter: "blur(8px)",
                                opacity: 0.5,
                            }}
                        />

                        {/* Animated shimmer on hover */}
                        {isHovered && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                }}
                            />
                        )}

                        {/* Progress indicator dot at the end */}
                        <motion.div
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                            style={{
                                background: `linear-gradient(135deg, ${color1}, ${color2})`,
                                boxShadow: `0 0 20px ${color1}80, 0 0 40px ${color2}40`,
                            }}
                            animate={{
                                scale: isHovered ? 1.5 : 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            }}
                        />
                    </motion.div>

                    {/* Percentage tooltip */}
                    {showPercentage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="
                                fixed
                                z-[101]
                                pointer-events-none
                                select-none
                            "
                            style={{
                                [position === "top" ? "top" : "bottom"]: "12px",
                                right: "20px",
                            }}
                        >
                            <div className="
                                glass
                                rounded-full
                                px-3
                                py-1.5
                                text-xs
                                font-mono
                                font-medium
                                border
                                border-white/10
                                backdrop-blur-xl
                                bg-background/50
                                shadow-lg
                            ">
                                <span
                                    className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent"
                                >
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* Back to top button (appears at 100%) */}
                    {progress > 95 && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0, y: 20 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="
                                fixed
                                bottom-24
                                right-6
                                z-[101]
                                glass
                                rounded-full
                                p-3
                                border
                                border-white/10
                                hover:border-[var(--primary)]/30
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:shadow-lg
                                hover:shadow-[var(--primary)]/10
                                group
                            "
                        >
                            <svg
                                className="w-5 h-5 text-foreground/60 group-hover:text-[var(--primary)] transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>

                            {/* Ripple effect on hover */}
                            <div className="
                                absolute
                                inset-0
                                rounded-full
                                border
                                border-[var(--primary)]/20
                                animate-ping
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-500
                            " />
                        </motion.button>
                    )}

                    {/* Progress bar label (on hover) */}
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="
                                fixed
                                z-[101]
                                pointer-events-none
                            "
                            style={{
                                [position === "top" ? "top" : "bottom"]: `calc(100% + 8px)`,
                                left: `calc(${progress}% - 20px)`,
                                transform: "translateX(-50%)",
                            }}
                        >
                            <div className="
                                glass
                                rounded-md
                                px-2
                                py-1
                                text-[10px]
                                font-mono
                                font-medium
                                border
                                border-white/10
                                backdrop-blur-xl
                                bg-background/70
                                shadow-lg
                                whitespace-nowrap
                            ">
                                {Math.round(progress)}%
                            </div>
                        </motion.div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
}