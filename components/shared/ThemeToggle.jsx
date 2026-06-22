"use client";

import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything on server to avoid hydration mismatch
    if (!mounted) {
        return (
            <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />
        );
    }

    // Use resolvedTheme for accurate detection
    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <motion.button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="
                relative
                h-11
                w-11
                rounded-full
                border
                border-white/10
                bg-background/40
                backdrop-blur-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                hover:border-primary/30
                hover:shadow-lg
                hover:shadow-primary/10
                focus:outline-none
                focus:ring-2
                focus:ring-primary/50
                group
            "
            whileTap={{ scale: 0.85 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
            }}
        >
            {/* Background glow */}
            <motion.div
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-primary/5
                    blur-xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                "
            />

            {/* Rotating ring effect */}
            <motion.div
                className="
                    absolute
                    -inset-0.5
                    rounded-full
                    border
                    border-primary/20
                    opacity-0
                    group-hover:opacity-100
                "
                animate={{
                    rotate: isHovered ? 360 : 0,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Icon container with flip animation */}
            <div className="relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? "dark" : "light"}
                        initial={{
                            y: -20,
                            opacity: 0,
                            rotate: -180,
                            scale: 0.5,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                        }}
                        exit={{
                            y: 20,
                            opacity: 0,
                            rotate: 180,
                            scale: 0.5,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                            duration: 0.3,
                        }}
                        className="flex items-center justify-center"
                    >
                        {isDark ? (
                            <Sun
                                size={20}
                                className="
                                    text-yellow-400
                                    drop-shadow-lg
                                    drop-shadow-yellow-400/50
                                "
                            />
                        ) : (
                            <Moon
                                size={20}
                                className="
                                    text-indigo-400
                                    drop-shadow-lg
                                    drop-shadow-indigo-400/50
                                "
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Sparkle particles on hover */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: 2 + Math.random() * 3,
                                height: 2 + Math.random() * 3,
                                background: isDark ? "var(--primary)" : "var(--accent)",
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                                x: [
                                    0,
                                    (Math.random() - 0.5) * 80,
                                    (Math.random() - 0.5) * 80,
                                    0,
                                ],
                                y: [
                                    0,
                                    (Math.random() - 0.5) * 80,
                                    (Math.random() - 0.5) * 80,
                                    0,
                                ],
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1, 0.5, 0],
                            }}
                            transition={{
                                duration: 1 + Math.random() * 0.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.8 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? -32 : -5,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="
                    absolute
                    -top-8
                    left-1/2
                    -translate-x-1/2
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    whitespace-nowrap
                    bg-background/90
                    backdrop-blur-md
                    rounded-md
                    border
                    border-white/10
                    shadow-lg
                    text-foreground/80
                    pointer-events-none
                    z-20
                "
            >
                {isDark ? "Switch to Light" : "Switch to Dark"}
            </motion.div>
        </motion.button>
    );
}