"use client";

import { motion } from "framer-motion";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentOptions from "@/components/checkout/PaymentOptions";
import { ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
    return (
        <section className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--primary)" }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
                    style={{ background: "var(--accent)" }}
                />
            </div>

            <div className="container-custom max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10"
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/cart"
                                className="p-2 rounded-full hover:bg-white/5 transition-colors duration-300"
                            >
                                <ArrowLeft size={20} className="text-foreground/40" />
                            </Link>
                            <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Checkout
                            </h1>
                        </div>
                        <p className="text-sm text-foreground/40 mt-1 ml-12">
                            Complete your purchase securely
                        </p>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                        <ShoppingBag size={16} className="text-[var(--primary)]" />
                        <span className="text-sm font-medium">Secure Checkout</span>
                        <Sparkles size={14} className="text-[var(--accent)]" />
                    </div>
                </motion.div>

                {/* Main Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid gap-6 lg:gap-8 lg:grid-cols-2"
                >
                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <OrderSummary />
                    </motion.div>

                    {/* Payment Options */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="order-1 lg:order-2"
                    >
                        <PaymentOptions />
                    </motion.div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-6 border-t border-white/5"
                >
                    {[
                        { label: "🔒 256-bit Encryption", desc: "Secure transaction" },
                        { label: "🛡️ Buyer Protection", desc: "100% money-back" },
                        { label: "⚡ Instant Delivery", desc: "Access immediately" },
                        { label: "📱 24/7 Support", desc: "We're here to help" },
                    ].map((badge, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="text-center"
                        >
                            <div className="text-sm font-medium">{badge.label}</div>
                            <div className="text-xs text-foreground/30">{badge.desc}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}