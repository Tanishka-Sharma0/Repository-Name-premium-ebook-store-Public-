"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    BookOpen,
    Library,
    Sparkles,
    User,
    Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DockNav() {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navItems = [
        { icon: Home, label: "Home", href: "/" },
        { icon: Search, label: "Explore", href: "/explore" },
        { icon: BookOpen, label: "Books", href: "/books" },
        { icon: Library, label: "Library", href: "/library" },
        { icon: User, label: "Profile", href: "/profile" },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.2
            }}
            className="
                fixed
                bottom-8
                left-1/2
                -translate-x-1/2
                z-50
                glass
                rounded-full
                px-5
                py-3
                flex
                items-center
                gap-1
                shadow-2xl
                shadow-primary/5
                border
                border-white/10
                backdrop-blur-xl
                bg-background/60
            "
        >
            {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                const isHovered = hoveredIndex === index;

                return (
                    <motion.div
                        key={item.href}
                        className="relative"
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        whileTap={{ scale: 0.85 }}
                    >
                        <Link
                            href={item.href}
                            className="
                                relative
                                flex
                                items-center
                                justify-center
                                rounded-full
                                transition-all
                                duration-300
                                px-3
                                py-2
                                group
                            "
                        >
                            {/* Active indicator glow */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="
                                        absolute
                                        -top-1
                                        left-1/2
                                        -translate-x-1/2
                                        w-1.5
                                        h-1.5
                                        rounded-full
                                        bg-primary
                                        shadow-lg
                                        shadow-primary/50
                                    "
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }}
                                />
                            )}

                            {/* Background glow on hover */}
                            {(isHovered || isActive) && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="
                                        absolute
                                        inset-0
                                        rounded-full
                                        bg-primary/10
                                        blur-xl
                                        -z-10
                                    "
                                />
                            )}

                            {/* Icon container with hover scale */}
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.2 : isActive ? 1.1 : 1,
                                    y: isHovered ? -2 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                                className="relative"
                            >
                                <Icon
                                    size={22}
                                    className={`
                                        transition-all
                                        duration-300
                                        ${isActive
                                            ? "text-primary"
                                            : isHovered
                                                ? "text-primary/80"
                                                : "text-foreground/50"
                                        }
                                        group-hover:text-primary/80
                                    `}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />

                                {/* Label on hover */}
                                {isHovered && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -5, scale: 0.8 }}
                                        animate={{ opacity: 1, y: -8, scale: 1 }}
                                        className="
                                            absolute
                                            -top-8
                                            left-1/2
                                            -translate-x-1/2
                                            text-[10px]
                                            font-medium
                                            whitespace-nowrap
                                            bg-background/90
                                            backdrop-blur-md
                                            px-2.5
                                            py-1
                                            rounded-md
                                            border
                                            border-white/10
                                            shadow-lg
                                            text-foreground/80
                                            pointer-events-none
                                        "
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>
                    </motion.div>
                );
            })}

            {/* Decorative separator */}
            <div className="w-px h-6 bg-white/10 mx-1" />

            {/* Premium sparkle indicator */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="
                    flex
                    items-center
                    justify-center
                    px-2
                    cursor-pointer
                    group
                "
            >
                <Sparkles
                    size={16}
                    className="
                        text-primary/40
                        transition-colors
                        duration-300
                        group-hover:text-primary/80
                    "
                />
            </motion.div>
        </motion.div>
    );
}