"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Spotlight({
    className = "",
    intensity = 1,
    animated = true,
    color1 = "var(--primary)",
    color2 = "var(--accent)",
    size = "lg", // sm, md, lg, xl
}) {
    const spotlightRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    const sizeClasses = {
        sm: "w-[300px] h-[300px]",
        md: "w-[500px] h-[500px]",
        lg: "w-[700px] h-[700px]",
        xl: "w-[900px] h-[900px]",
    };

    useEffect(() => {
        if (!animated) return;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollY / maxScroll;
            setMousePosition((prev) => ({
                ...prev,
                y: prev.y + progress * 0.1,
            }));
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animated]);

    return (
        <>
            {/* Main Spotlight */}
            <motion.div
                ref={spotlightRef}
                className={`
                    absolute
                    top-0
                    pointer-events-none
                    rounded-full
                    blur-3xl
                    ${sizeClasses[size]}
                    ${className}
                `}
                style={{
                    background: `
                        radial-gradient(
                            circle at center,
                            ${color1} 0%,
                            ${color2} 40%,
                            transparent 70%
                        )
                    `,
                    opacity: 0.15 * intensity,
                    left: animated ? `${mousePosition.x}%` : "50%",
                    top: animated ? `${mousePosition.y}%` : "0%",
                    transform: animated ? "translate(-50%, -50%)" : "translate(-50%, 0%)",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    willChange: "transform, left, top",
                }}
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary smaller spotlight */}
            <motion.div
                className={`
                    absolute
                    pointer-events-none
                    rounded-full
                    blur-3xl
                    ${sizeClasses[size === "xl" ? "lg" : size === "lg" ? "md" : "sm"]}
                `}
                style={{
                    background: `
                        radial-gradient(
                            circle at center,
                            ${color2} 0%,
                            transparent 70%
                        )
                    `,
                    opacity: 0.08 * intensity,
                    left: animated ? `${100 - mousePosition.x}%` : "30%",
                    top: animated ? `${100 - mousePosition.y}%` : "30%",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
            />

            {/* Third accent spotlight */}
            <motion.div
                className={`
                    absolute
                    pointer-events-none
                    rounded-full
                    blur-2xl
                    ${sizeClasses["sm"]}
                `}
                style={{
                    background: `
                        radial-gradient(
                            circle at center,
                            ${color1} 0%,
                            transparent 70%
                        )
                    `,
                    opacity: 0.06 * intensity,
                    left: animated ? `${(mousePosition.x + 50) % 100}%` : "70%",
                    top: animated ? `${(mousePosition.y + 50) % 100}%` : "60%",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
            />

            {/* Particle sparks effect */}
            {animated && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-primary"
                            style={{
                                width: 2 + Math.random() * 3,
                                height: 2 + Math.random() * 3,
                                opacity: 0.3,
                            }}
                            animate={{
                                x: [
                                    mousePosition.x * window.innerWidth / 100 + (Math.random() - 0.5) * 200,
                                    mousePosition.x * window.innerWidth / 100 + (Math.random() - 0.5) * 200,
                                ],
                                y: [
                                    mousePosition.y * window.innerHeight / 100 + (Math.random() - 0.5) * 200,
                                    mousePosition.y * window.innerHeight / 100 + (Math.random() - 0.5) * 200,
                                ],
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Gradient overlay for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            ellipse at center,
                            transparent 0%,
                            rgba(0, 0, 0, 0.1) 100%
                        )
                    `,
                }}
            />
        </>
    );
}