"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Check, X, Tag, Percent } from "lucide-react";

export default function CouponSection() {
    const [coupon, setCoupon] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [isApplying, setIsApplying] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [discount, setDiscount] = useState(0);
    const inputRef = useRef(null);

    // Available coupons
    const validCoupons = {
        "PREP20": { discount: 20, label: "20% OFF" },
        "WELCOME10": { discount: 10, label: "10% OFF" },
        "FLASH30": { discount: 30, label: "30% OFF" },
        "SAVE15": { discount: 15, label: "15% OFF" },
        "FREEBOOK": { discount: 100, label: "FREE BOOK" },
    };

    // Auto-detect coupon on input
    useEffect(() => {
        const timer = setTimeout(() => {
            if (coupon.trim()) {
                validateCoupon(coupon.trim());
            } else {
                setIsValid(null);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [coupon]);

    const validateCoupon = (code) => {
        const upperCode = code.toUpperCase();
        if (validCoupons[upperCode]) {
            setIsValid(true);
            return true;
        } else {
            setIsValid(false);
            return false;
        }
    };

    const handleApply = () => {
        const code = coupon.trim().toUpperCase();
        if (!code) {
            setIsValid(false);
            return;
        }

        if (validateCoupon(code)) {
            setIsApplying(true);
            setTimeout(() => {
                setAppliedCoupon(code);
                setDiscount(validCoupons[code].discount);
                setIsApplying(false);
                setCoupon("");
                setIsValid(null);

                // Trigger success animation
                if (inputRef.current) {
                    inputRef.current.blur();
                }
            }, 800);
        } else {
            // Shake animation for invalid
            setIsValid(false);
            setTimeout(() => setIsValid(null), 2000);
        }
    };

    const handleRemoveCoupon = () => {
        setAppliedCoupon(null);
        setDiscount(0);
        setIsValid(null);
        setCoupon("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleApply();
        }
        if (e.key === "Escape") {
            setCoupon("");
            setIsValid(null);
            if (inputRef.current) {
                inputRef.current.blur();
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6 border border-white/10 backdrop-blur-xl bg-background/40"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Gift size={24} className="text-[var(--primary)]" />
                    </motion.div>
                    <h3 className="font-bold text-lg">Coupon Code</h3>
                </div>

                {/* Available coupon indicator */}
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-foreground/40 bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
                >
                    {Object.keys(validCoupons).length} Available
                </motion.span>
            </div>

            {/* Applied coupon display */}
            <AnimatePresence>
                {appliedCoupon && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20 relative overflow-hidden"
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5"
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 rounded-full bg-[var(--primary)]/20">
                                    <Tag size={16} className="text-[var(--primary)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">
                                        {appliedCoupon}
                                    </p>
                                    <p className="text-xs text-foreground/60">
                                        {validCoupons[appliedCoupon].label} applied
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-sm font-bold text-[var(--primary)]"
                                >
                                    -{discount}%
                                </motion.span>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleRemoveCoupon}
                                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <X size={16} className="text-foreground/40" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Input and Apply button */}
            <div className="relative">
                <div className="flex gap-3">
                    <div className="relative flex-1">
                        <input
                            ref={inputRef}
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter coupon code"
                            disabled={!!appliedCoupon}
                            className={`
                                w-full
                                p-3.5
                                rounded-xl
                                bg-background/50
                                border
                                transition-all
                                duration-300
                                placeholder:text-foreground/30
                                focus:outline-none
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                ${isValid === true
                                    ? "border-green-500/50 bg-green-500/5"
                                    : isValid === false
                                        ? "border-red-500/50 bg-red-500/5"
                                        : "border-white/10 focus:border-[var(--primary)]/30"
                                }
                            `}
                        />

                        {/* Validation icons */}
                        <AnimatePresence>
                            {isValid === true && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <Check size={18} className="text-green-500" />
                                </motion.div>
                            )}
                            {isValid === false && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <X size={18} className="text-red-500" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Character limit */}
                        {coupon && !appliedCoupon && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -bottom-5 left-0 text-[10px] text-foreground/30"
                            >
                                {coupon.length}/20
                            </motion.div>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleApply}
                        disabled={isApplying || !coupon || !!appliedCoupon}
                        className={`
                            px-6
                            py-3.5
                            rounded-xl
                            font-semibold
                            transition-all
                            duration-300
                            relative
                            overflow-hidden
                            ${isApplying
                                ? "bg-foreground/10 text-foreground/50"
                                : "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white hover:shadow-lg hover:shadow-[var(--primary)]/25"
                            }
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            min-w-[100px]
                            flex
                            items-center
                            justify-center
                            gap-2
                        `}
                    >
                        {isApplying ? (
                            <>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                                </motion.div>
                                <span>Applying</span>
                            </>
                        ) : (
                            <>
                                <Sparkles size={16} />
                                <span>Apply</span>
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Coupon suggestions */}
                {!appliedCoupon && !coupon && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 mt-3"
                    >
                        {Object.keys(validCoupons).slice(0, 3).map((code) => (
                            <motion.button
                                key={code}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCoupon(code)}
                                className="
                                    text-[10px]
                                    px-2.5
                                    py-1.5
                                    rounded-full
                                    border
                                    border-white/10
                                    hover:border-[var(--primary)]/30
                                    hover:bg-[var(--primary)]/5
                                    transition-all
                                    duration-300
                                    text-foreground/40
                                    hover:text-foreground/70
                                    font-mono
                                    uppercase
                                "
                            >
                                {code}
                            </motion.button>
                        ))}
                        <span className="text-[10px] text-foreground/30 flex items-center">
                            Try one!
                        </span>
                    </motion.div>
                )}
            </div>

            {/* Discount summary */}
            {appliedCoupon && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-white/5"
                >
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">Discount Applied</span>
                        <span className="font-bold text-[var(--primary)]">
                            -{discount}% OFF
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-foreground/40 mt-1">
                        <span>You saved {discount}% on this purchase</span>
                        <Percent size={12} />
                    </div>
                </motion.div>
            )}

            {/* Invalid coupon shake animation */}
            <AnimatePresence>
                {isValid === false && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }
                        }}
                        exit={{ opacity: 0 }}
                        className="mt-2 text-sm text-red-500 flex items-center gap-2"
                    >
                        <X size={14} />
                        <span>Invalid coupon code. Please try again.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success message */}
            <AnimatePresence>
                {isValid === true && !appliedCoupon && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-2 text-sm text-green-500 flex items-center gap-2"
                    >
                        <Check size={14} />
                        <span>Valid coupon! Click Apply to use it.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}