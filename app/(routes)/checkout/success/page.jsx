"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    BookOpen,
    ArrowRight,
    Sparkles,
    Award,
    Clock,
    Share2,
    Download,
    Heart,
    Twitter,
    Facebook,
    Linkedin,
    Mail
} from "lucide-react";
import GlassCard from "@/components/effects/GlassCard";

export default function SuccessPage() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        // Show confetti after page load
        setTimeout(() => setShowConfetti(true), 500);

        // Countdown timer for auto-redirect
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const shareLinks = [
        { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]", href: "https://twitter.com" },
        { icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2]", href: "https://facebook.com" },
        { icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]", href: "https://linkedin.com" },
        { icon: Mail, label: "Email", color: "hover:text-[#EA4335]", href: "mailto:" },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ background: "var(--primary)" }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ background: "var(--accent)" }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* Confetti particles */}
            <AnimatePresence>
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: -20,
                                    rotate: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    y: window.innerHeight + 20,
                                    rotate: Math.random() * 720 - 360,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    delay: Math.random() * 0.5,
                                    ease: "easeIn",
                                }}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    background: [
                                        "var(--primary)",
                                        "var(--accent)",
                                        "#f472b6",
                                        "#fbbf24",
                                        "#34d399",
                                        "#60a5fa",
                                    ][i % 6],
                                    width: 4 + Math.random() * 6,
                                    height: 4 + Math.random() * 6,
                                    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.8,
                }}
                className="w-full max-w-3xl"
            >
                <GlassCard className="rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* Success icon with pulse */}
                    <motion.div
                        className="flex justify-center mb-6"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                style={{ background: "var(--primary)", opacity: 0.3 }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 0.1, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-2xl shadow-[var(--primary)]/30">
                                <CheckCircle size={48} className="text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-center"
                    >
                        Purchase Successful! 🎉
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-foreground/60 mt-3 text-sm md:text-base"
                    >
                        Your books are now available in your library.
                        <br />
                        Happy reading! 📚
                    </motion.p>

                    {/* Order Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                    >
                        {[
                            { icon: Clock, label: "Order Time", value: "Just now" },
                            { icon: BookOpen, label: "Books", value: "3 items" },
                            { icon: Award, label: "Status", value: "Confirmed" },
                            { icon: Sparkles, label: "Points", value: "+150" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 rounded-xl bg-white/5 border border-white/5 text-center"
                            >
                                <item.icon size={20} className="mx-auto text-[var(--primary)]" />
                                <p className="text-xs text-foreground/40 mt-1">{item.label}</p>
                                <p className="text-sm font-semibold mt-0.5">{item.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 mt-8"
                    >
                        <Link
                            href="/library"
                            className="
                                flex-1
                                py-4
                                rounded-2xl
                                bg-gradient-to-r
                                from-[var(--primary)]
                                to-[var(--accent)]
                                text-white
                                font-bold
                                flex
                                items-center
                                justify-center
                                gap-2
                                shadow-lg
                                shadow-[var(--primary)]/20
                                hover:shadow-xl
                                hover:shadow-[var(--primary)]/30
                                transition-all
                                duration-300
                                group
                            "
                        >
                            <BookOpen size={20} />
                            <span>Go to Library</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/books"
                            className="
                                flex-1
                                py-4
                                rounded-2xl
                                border
                                border-white/10
                                hover:border-[var(--primary)]/30
                                hover:bg-[var(--primary)]/5
                                transition-all
                                duration-300
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-foreground/70
                                hover:text-foreground
                            "
                        >
                            <Download size={20} />
                            <span>Browse More Books</span>
                        </Link>
                    </motion.div>

                    {/* Share Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 pt-6 border-t border-white/5"
                    >
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-sm text-foreground/40">
                                <Heart size={16} className="text-red-400" />
                                <span>Share your achievement</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {shareLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`
                                                p-2
                                                rounded-full
                                                bg-white/5
                                                border
                                                border-white/5
                                                text-foreground/40
                                                transition-all
                                                duration-300
                                                ${link.color}
                                            `}
                                        >
                                            <Icon size={16} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Auto-redirect countdown */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 text-center text-xs text-foreground/30"
                    >
                        <span>Redirecting to library in {countdown}s</span>
                        <div className="w-32 h-1 bg-white/5 rounded-full mx-auto mt-2 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                        style={{ background: "var(--primary)", opacity: 0.05 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl"
                        style={{ background: "var(--accent)", opacity: 0.05 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </GlassCard>
            </motion.div>
        </section>
    );
}