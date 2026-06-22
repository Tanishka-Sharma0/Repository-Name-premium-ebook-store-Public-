"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import GlassCard from "@/components/effects/GlassCard";
import {
    CreditCard,
    Smartphone,
    Building2,
    Wallet,
    Banknote,
    Shield,
    Check,
    Sparkles,
    ArrowRight,
    Lock,
    Fingerprint,
    Coins,
    Loader2
} from "lucide-react";

export default function PaymentOptions() {
    const [method, setMethod] = useState("upi");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [upiId, setUpiId] = useState("");
    const [bank, setBank] = useState("");

    const paymentMethods = [
        {
            id: "upi",
            label: "UPI",
            icon: Smartphone,
            description: "Google Pay, PhonePe, Paytm",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            id: "card",
            label: "Card",
            icon: CreditCard,
            description: "Debit / Credit Card",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
        },
        {
            id: "netbanking",
            label: "Net Banking",
            icon: Building2,
            description: "All major banks",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
        },
        {
            id: "wallet",
            label: "Wallet",
            icon: Wallet,
            description: "Paytm, Amazon Pay",
            color: "from-orange-500 to-yellow-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
        },
    ];

    const banks = [
        "State Bank of India",
        "HDFC Bank",
        "ICICI Bank",
        "Axis Bank",
        "Kotak Mahindra Bank",
        "Yes Bank",
        "IDFC First Bank",
        "Other",
    ];

    const handlePayment = async () => {
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsProcessing(false);
        setIsComplete(true);

        toast.success("Payment Successful! 🎉", {
            description: "Your order has been confirmed.",
            duration: 5000,
            icon: "✅",
        });

        // Reset after animation
        setTimeout(() => {
            setIsComplete(false);
        }, 3000);
    };

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const formatExpiry = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };

    const getMethodIcon = (id) => {
        const method = paymentMethods.find(m => m.id === id);
        return method ? method.icon : CreditCard;
    };

    const getMethodColor = (id) => {
        const method = paymentMethods.find(m => m.id === id);
        return method ? method.color : "from-gray-500 to-gray-600";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <GlassCard className="rounded-3xl p-6 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[var(--primary)]/10">
                            <Wallet size={20} className="text-[var(--primary)]" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Payment Options</h2>
                            <p className="text-xs text-foreground/40">
                                Secure & encrypted payment
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-foreground/30">
                        <Lock size={12} />
                        <span>SSL Secure</span>
                    </div>
                </div>

                {/* Payment Methods Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((pm) => {
                        const Icon = pm.icon;
                        const isSelected = method === pm.id;

                        return (
                            <motion.button
                                key={pm.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setMethod(pm.id)}
                                className={`
                                    relative
                                    p-4
                                    rounded-xl
                                    border-2
                                    transition-all
                                    duration-300
                                    flex
                                    flex-col
                                    items-center
                                    gap-2
                                    text-center
                                    ${isSelected
                                        ? `${pm.bgColor} ${pm.borderColor} border-opacity-100`
                                        : "border-white/5 hover:border-white/20 bg-white/5"
                                    }
                                `}
                            >
                                <motion.div
                                    animate={{
                                        scale: isSelected ? 1.1 : 1,
                                        rotate: isSelected ? [0, 10, -10, 0] : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon
                                        size={24}
                                        className={isSelected ? "text-[var(--primary)]" : "text-foreground/40"}
                                    />
                                </motion.div>

                                <span className={`text-sm font-medium ${isSelected ? "text-[var(--primary)]" : "text-foreground/60"}`}>
                                    {pm.label}
                                </span>

                                <span className="text-[10px] text-foreground/30 leading-tight">
                                    {pm.description}
                                </span>

                                {isSelected && (
                                    <motion.div
                                        layoutId="selectedPayment"
                                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--primary)] flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                    >
                                        <Check size={12} className="text-white" />
                                    </motion.div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Payment Form */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={method}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 space-y-4"
                    >
                        {/* UPI */}
                        {method === "upi" && (
                            <div className="space-y-3">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        placeholder="Enter UPI ID (e.g., name@upi)"
                                        className="
                                            w-full
                                            p-3.5
                                            rounded-xl
                                            bg-background/50
                                            border
                                            border-white/10
                                            focus:border-[var(--primary)]/30
                                            focus:outline-none
                                            transition-all
                                            duration-300
                                            placeholder:text-foreground/30
                                            pl-11
                                        "
                                    />
                                    <Smartphone
                                        size={18}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/30"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {["example@paytm", "user@upi", "name@phonepe"].map((id) => (
                                        <button
                                            key={id}
                                            onClick={() => setUpiId(id)}
                                            className="
                                                text-[10px]
                                                px-2.5
                                                py-1
                                                rounded-full
                                                border
                                                border-white/10
                                                hover:border-[var(--primary)]/30
                                                hover:bg-[var(--primary)]/5
                                                transition-all
                                                duration-300
                                                text-foreground/40
                                            "
                                        >
                                            {id}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Card */}
                        {method === "card" && (
                            <div className="space-y-3">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                        placeholder="Card Number"
                                        maxLength="19"
                                        className="
                                            w-full
                                            p-3.5
                                            rounded-xl
                                            bg-background/50
                                            border
                                            border-white/10
                                            focus:border-[var(--primary)]/30
                                            focus:outline-none
                                            transition-all
                                            duration-300
                                            placeholder:text-foreground/30
                                            pl-11
                                            font-mono
                                        "
                                    />
                                    <CreditCard
                                        size={18}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/30"
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={cardExpiry}
                                            onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                                            placeholder="MM/YY"
                                            maxLength="5"
                                            className="
                                                w-full
                                                p-3.5
                                                rounded-xl
                                                bg-background/50
                                                border
                                                border-white/10
                                                focus:border-[var(--primary)]/30
                                                focus:outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-foreground/30
                                                text-center
                                                font-mono
                                            "
                                        />
                                    </div>
                                    <div className="flex-1 relative">
                                        <input
                                            type="password"
                                            value={cardCvv}
                                            onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, ''))}
                                            placeholder="CVV"
                                            maxLength="4"
                                            className="
                                                w-full
                                                p-3.5
                                                rounded-xl
                                                bg-background/50
                                                border
                                                border-white/10
                                                focus:border-[var(--primary)]/30
                                                focus:outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-foreground/30
                                                text-center
                                                font-mono
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Net Banking */}
                        {method === "netbanking" && (
                            <div className="relative">
                                <select
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                    className="
                                        w-full
                                        p-3.5
                                        rounded-xl
                                        bg-background/50
                                        border
                                        border-white/10
                                        focus:border-[var(--primary)]/30
                                        focus:outline-none
                                        transition-all
                                        duration-300
                                        appearance-none
                                        cursor-pointer
                                        pl-11
                                    "
                                >
                                    <option value="">Select your bank</option>
                                    {banks.map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                                <Building2
                                    size={18}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none"
                                />
                            </div>
                        )}

                        {/* Wallet */}
                        {method === "wallet" && (
                            <div className="space-y-3">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter wallet ID"
                                        className="
                                            w-full
                                            p-3.5
                                            rounded-xl
                                            bg-background/50
                                            border
                                            border-white/10
                                            focus:border-[var(--primary)]/30
                                            focus:outline-none
                                            transition-all
                                            duration-300
                                            placeholder:text-foreground/30
                                            pl-11
                                        "
                                    />
                                    <Wallet
                                        size={18}
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/30"
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-foreground/40">
                                    <Coins size={14} />
                                    <span>Available balance: ₹1,500</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Payment Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    disabled={isProcessing || isComplete}
                    className="
                        w-full
                        mt-6
                        py-4
                        rounded-2xl
                        bg-gradient-to-r
                        from-[var(--primary)]
                        to-[var(--accent)]
                        text-white
                        font-bold
                        text-lg
                        flex
                        items-center
                        justify-center
                        gap-3
                        shadow-lg
                        shadow-[var(--primary)]/20
                        hover:shadow-xl
                        hover:shadow-[var(--primary)]/30
                        transition-all
                        duration-300
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        relative
                        overflow-hidden
                    "
                >
                    {isProcessing ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>Processing...</span>
                        </>
                    ) : isComplete ? (
                        <>
                            <Check size={20} />
                            <span>Payment Successful!</span>
                        </>
                    ) : (
                        <>
                            <span>Complete Purchase</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>
                            <Sparkles size={16} className="opacity-70" />
                        </>
                    )}
                </motion.button>

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-foreground/30">
                        <Lock size={12} />
                        <span>256-bit encryption</span>
                    </div>
                    <div className="w-px h-3 bg-white/5" />
                    <div className="flex items-center gap-1.5 text-[10px] text-foreground/30">
                        <Fingerprint size={12} />
                        <span>3D Secure</span>
                    </div>
                    <div className="w-px h-3 bg-white/5" />
                    <div className="flex items-center gap-1.5 text-[10px] text-foreground/30">
                        <Shield size={12} />
                        <span>Verified</span>
                    </div>
                </div>

                {/* Animated background effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                >
                    <div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                        style={{ background: "var(--primary)", opacity: 0.1 }}
                    />
                    <div
                        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl"
                        style={{ background: "var(--accent)", opacity: 0.1 }}
                    />
                </motion.div>
            </GlassCard>
        </motion.div>
    );
}