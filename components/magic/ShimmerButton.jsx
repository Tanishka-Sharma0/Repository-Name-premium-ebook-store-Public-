"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ShimmerButton({
    children,
    className = "",
    variant = "primary", // primary, secondary, outline, ghost, gradient
    size = "default", // default, sm, lg, icon
    isLoading = false,
    disabled = false,
    onClick,
    iconLeft,
    iconRight,
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-8 py-3.5 text-base",
        lg: "px-10 py-4.5 text-lg",
        icon: "p-3",
    };

    const variantClasses = {
        primary: `
            bg-primary 
            text-primary-foreground 
            hover:shadow-lg 
            hover:shadow-primary/25
            dark:shadow-primary/15
        `,
        secondary: `
            bg-secondary 
            text-foreground 
            hover:shadow-lg 
            hover:shadow-secondary/25
            border 
            border-white/10
        `,
        outline: `
            bg-transparent 
            text-foreground 
            border-2 
            border-primary/50 
            hover:border-primary 
            hover:bg-primary/5
            hover:shadow-lg 
            hover:shadow-primary/10
        `,
        ghost: `
            bg-transparent 
            text-foreground 
            hover:bg-primary/10 
            hover:text-primary
        `,
        gradient: `
            bg-gradient-to-r 
            from-primary 
            via-accent 
            to-primary 
            bg-[length:200%_100%]
            text-primary-foreground
            animate-gradient
            hover:shadow-lg 
            hover:shadow-primary/25
        `,
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`
                shimmer-btn
                relative
                overflow-hidden
                rounded-full
                font-medium
                transition-all
                duration-300
                ease-out
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                ${className}
            `}
            {...props}
        >
            {/* Shimmer effect */}
            <motion.div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                "
                initial={{ x: "-100%" }}
                animate={{
                    x: isHovered ? "200%" : "-100%",
                    opacity: isHovered ? 1 : 0.3,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                style={{
                    background: `
                        linear-gradient(
                            100deg,
                            transparent 0%,
                            rgba(255, 255, 255, 0.3) 30%,
                            rgba(255, 255, 255, 0.5) 50%,
                            rgba(255, 255, 255, 0.3) 70%,
                            transparent 100%
                        )
                    `,
                    filter: "blur(1px)",
                }}
            />

            {/* Animated gradient overlay for gradient variant */}
            {variant === "gradient" && (
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                        animate-shimmer
                        pointer-events-none
                    "
                    style={{
                        backgroundSize: "200% 100%",
                    }}
                />
            )}

            {/* Glow ring on hover */}
            {isHovered && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.3 }}
                    className="
                        absolute
                        inset-0
                        rounded-full
                        bg-primary
                        blur-2xl
                        pointer-events-none
                    "
                />
            )}

            {/* Ripple effect on click */}
            <RippleEffect key={isLoading} />

            {/* Loading spinner */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-full">
                    <div className="
                        w-5 
                        h-5 
                        border-2 
                        border-current 
                        border-t-transparent 
                        rounded-full 
                        animate-spin
                    " />
                </div>
            )}

            {/* Button content */}
            <span className={`
                relative 
                z-10 
                flex 
                items-center 
                gap-2.5
                ${isLoading ? "opacity-0" : "opacity-100"}
                transition-opacity
                duration-300
            `}>
                {iconLeft && (
                    <span className="relative z-10">
                        {iconLeft}
                    </span>
                )}

                <span className="relative z-10">
                    {children}
                </span>

                {iconRight && (
                    <motion.span
                        className="relative z-10"
                        animate={{
                            x: isHovered ? 4 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                        }}
                    >
                        {iconRight}
                    </motion.span>
                )}
            </span>

            {/* Subtle border glow */}
            <div className="
                absolute
                inset-0
                rounded-full
                border
                border-white/10
                pointer-events-none
            " />
        </motion.button>
    );
}

// Ripple Effect Component
function RippleEffect() {
    const [ripples, setRipples] = useState([]);

    const addRipple = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size: 0,
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    return (
        <div
            className="absolute inset-0 overflow-hidden rounded-full"
            onClick={addRipple}
        >
            {ripples.map((ripple) => (
                <motion.div
                    key={ripple.id}
                    className="absolute rounded-full bg-white/20"
                    initial={{
                        width: 0,
                        height: 0,
                        x: ripple.x,
                        y: ripple.y,
                        opacity: 0.6,
                    }}
                    animate={{
                        width: 200,
                        height: 200,
                        x: ripple.x - 100,
                        y: ripple.y - 100,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}