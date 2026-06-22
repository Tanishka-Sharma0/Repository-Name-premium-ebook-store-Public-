"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    BookOpen,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Heart,
    Sparkles,
    ArrowUpRight,
    Library,
    Home,
    Award,
    Zap
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
    const pathname = usePathname();
    const [year, setYear] = useState(new Date().getFullYear());
    const [isHovered, setIsHovered] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const navLinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/books", label: "Books", icon: BookOpen },
        { href: "/library", label: "Library", icon: Library },
        { href: "/about", label: "About", icon: Award },
    ];

    const socialLinks = [
        { href: "https://github.com", icon: Github, label: "GitHub" },
        { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
        { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
        { href: "mailto:hello@ebookstore.com", icon: Mail, label: "Email" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <footer className="relative mt-32 overflow-hidden">
            {/* Animated gradient border */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)",
                    opacity: 0.3,
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--primary)" }}
                />
                <div
                    className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--accent)" }}
                />
            </div>

            <div className="relative container-custom py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <BookOpen className="text-primary" size={28} />
                            </motion.div>
                            <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                E-Book Store
                            </h3>
                        </div>

                        <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
                            Learn smarter with our curated collection of premium e-books and resources.
                        </p>

                        <motion.div
                            className="mt-4 flex items-center gap-1.5 text-xs text-foreground/40"
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Sparkles size={12} className="text-primary" />
                            <span>Made with</span>
                            <Heart size={12} className="text-red-400 animate-pulse" />
                            <span>• {year}</span>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                text-foreground/60
                                                hover:text-foreground
                                                transition-all
                                                duration-300
                                            "
                                            onMouseEnter={() => setIsHovered(link.href)}
                                            onMouseLeave={() => setIsHovered(null)}
                                        >
                                            <motion.span
                                                animate={{
                                                    x: isHovered === link.href ? 3 : 0,
                                                    color: isActive ? "var(--primary)" : "currentColor",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Icon size={14} />
                                            </motion.span>
                                            <motion.span
                                                animate={{
                                                    x: isHovered === link.href ? 5 : 0,
                                                    color: isActive ? "var(--primary)" : "currentColor",
                                                }}
                                                transition={{ duration: 0.2 }}
                                                className={isActive ? "text-primary" : ""}
                                            >
                                                {link.label}
                                            </motion.span>
                                            {isHovered === link.href && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -5 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="text-primary/50"
                                                >
                                                    <ArrowUpRight size={12} />
                                                </motion.span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                text-foreground/60
                                                hover:text-foreground
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            <motion.span
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: [0, 10, -10, 0],
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Icon size={14} />
                                            </motion.span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Newsletter / CTA */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-4">
                            Stay Updated
                        </h4>
                        <div className="space-y-3">
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                Get the latest books and updates delivered to your inbox.
                            </p>

                            <motion.div
                                className="relative group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full
                                        px-4
                                        py-2.5
                                        pr-12
                                        rounded-full
                                        bg-background/50
                                        border
                                        border-white/10
                                        text-sm
                                        text-foreground
                                        placeholder:text-foreground/30
                                        focus:outline-none
                                        focus:border-primary/50
                                        transition-all
                                        duration-300
                                        backdrop-blur-sm
                                    "
                                />
                                <motion.button
                                    className="
                                        absolute
                                        right-1
                                        top-1/2
                                        -translate-y-1/2
                                        p-1.5
                                        rounded-full
                                        bg-gradient-to-r
                                        from-primary
                                        to-accent
                                        text-primary-foreground
                                        transition-all
                                        duration-300
                                        hover:shadow-lg
                                        hover:shadow-primary/25
                                    "
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Zap size={14} />
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="
                        mt-12
                        pt-6
                        border-t
                        border-white/5
                        flex
                        flex-col
                        sm:flex-row
                        justify-between
                        items-center
                        gap-4
                    "
                >
                    <p className="text-xs text-foreground/30">
                        © {year} E-Book Store. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-xs text-foreground/30">
                        <Link
                            href="/privacy"
                            className="hover:text-foreground/60 transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <span className="w-px h-3 bg-white/10" />
                        <Link
                            href="/terms"
                            className="hover:text-foreground/60 transition-colors duration-300"
                        >
                            Terms
                        </Link>
                        <span className="w-px h-3 bg-white/10" />
                        <Link
                            href="/cookies"
                            className="hover:text-foreground/60 transition-colors duration-300"
                        >
                            Cookies
                        </Link>
                    </div>

                    {/* Animated decorative dots */}
                    <div className="flex items-center gap-1.5">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                    background: i === 0 ? "var(--primary)" : i === 1 ? "var(--accent)" : "var(--foreground)",
                                    opacity: 0.2,
                                }}
                                animate={{
                                    opacity: [0.2, 0.5, 0.2],
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}