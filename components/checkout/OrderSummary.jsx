"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    Sparkles,
    ArrowRight,
    BookOpen,
    IndianRupee,
    Package
} from "lucide-react";
import useCartStore from "@/store/cartStore";
import GlassCard from "@/components/effects/GlassCard";
import CouponSection from "@/components/checkout/CouponSection";

export default function OrderSummary() {
    const { items, removeItem, updateQuantity, clearCart } = useCartStore();
    const [isExpanded, setIsExpanded] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [discount, setDiscount] = useState(0);

    // Calculate totals
    const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    const shipping = subtotal > 500 ? 0 : 49;
    const tax = subtotal * 0.05; // 5% tax
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal + shipping + tax - discountAmount;

    // Format price
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    // Empty state
    if (items.length === 0) {
        return (
            <GlassCard className="rounded-3xl p-8 text-center border border-white/10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                        <ShoppingBag size={32} className="text-foreground/30" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-foreground/40 text-sm mb-4">
                        Start adding some amazing books to your collection!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            px-6
                            py-3
                            rounded-full
                            bg-gradient-to-r
                            from-[var(--primary)]
                            to-[var(--accent)]
                            text-white
                            font-semibold
                            inline-flex
                            items-center
                            gap-2
                        "
                    >
                        <BookOpen size={18} />
                        Browse Books
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </GlassCard>
        );
    }

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
                            <ShoppingBag size={20} className="text-[var(--primary)]" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Order Summary</h2>
                            <p className="text-xs text-foreground/40">
                                {items.length} {items.length === 1 ? 'item' : 'items'} in cart
                            </p>
                        </div>
                    </div>

                    {/* Clear cart */}
                    {items.length > 0 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={clearCart}
                            className="
                                p-2
                                rounded-full
                                hover:bg-red-500/10
                                transition-colors
                                duration-300
                                text-foreground/40
                                hover:text-red-500
                            "
                        >
                            <Trash2 size={18} />
                        </motion.button>
                    )}
                </div>

                {/* Cart items */}
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                    <AnimatePresence mode="popLayout">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20, height: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    p-3
                                    rounded-xl
                                    hover:bg-white/5
                                    transition-all
                                    duration-300
                                    border
                                    border-transparent
                                    hover:border-white/5
                                "
                            >
                                {/* Book thumbnail */}
                                <div className="relative w-14 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/5">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BookOpen size={24} className="text-foreground/20" />
                                        </div>
                                    )}
                                    {/* Quantity badge */}
                                    {(item.quantity || 1) > 1 && (
                                        <div className="
                                            absolute
                                            -top-1
                                            -right-1
                                            w-5
                                            h-5
                                            rounded-full
                                            bg-[var(--primary)]
                                            text-white
                                            text-[10px]
                                            font-bold
                                            flex
                                            items-center
                                            justify-center
                                            shadow-lg
                                        ">
                                            {item.quantity || 1}
                                        </div>
                                    )}
                                </div>

                                {/* Book info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm truncate">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-foreground/40 truncate">
                                        {item.author || 'Unknown Author'}
                                    </p>
                                    <p className="text-sm font-medium text-[var(--primary)] mt-0.5">
                                        {formatPrice(item.price * (item.quantity || 1))}
                                    </p>
                                </div>

                                {/* Quantity controls */}
                                <div className="flex items-center gap-1">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="
                                            p-1
                                            rounded-full
                                            hover:bg-white/10
                                            transition-colors
                                            duration-300
                                            text-foreground/40
                                            hover:text-foreground
                                        "
                                    >
                                        <Minus size={14} />
                                    </motion.button>

                                    <span className="w-6 text-center text-sm font-medium">
                                        {item.quantity || 1}
                                    </span>

                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="
                                            p-1
                                            rounded-full
                                            hover:bg-white/10
                                            transition-colors
                                            duration-300
                                            text-foreground/40
                                            hover:text-foreground
                                        "
                                    >
                                        <Plus size={14} />
                                    </motion.button>
                                </div>

                                {/* Remove button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => removeItem(item.id)}
                                    className="
                                        p-1.5
                                        rounded-full
                                        opacity-0
                                        group-hover:opacity-100
                                        hover:bg-red-500/10
                                        transition-all
                                        duration-300
                                        text-foreground/30
                                        hover:text-red-500
                                    "
                                >
                                    <Trash2 size={14} />
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Coupon Section */}
                <div className="mt-6">
                    <CouponSection />
                </div>

                {/* Price breakdown */}
                <motion.div
                    className="mt-6 space-y-2 pt-4 border-t border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Shipping</span>
                        <span className={shipping === 0 ? "text-green-500" : ""}>
                            {shipping === 0 ? "Free" : formatPrice(shipping)}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Tax (5%)</span>
                        <span>{formatPrice(tax)}</span>
                    </div>

                    {discount > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="flex justify-between text-sm text-[var(--primary)]"
                        >
                            <span>Discount ({discount}%)</span>
                            <span>-{formatPrice(discountAmount)}</span>
                        </motion.div>
                    )}
                </motion.div>

                {/* Total */}
                <motion.div
                    className="mt-4 pt-4 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-lg font-bold">Total</span>
                            {discount > 0 && (
                                <span className="ml-2 text-xs text-green-500">
                                    You saved {formatPrice(discountAmount)}
                                </span>
                            )}
                        </div>
                        <motion.span
                            className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent"
                            key={total}
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            {formatPrice(total)}
                        </motion.span>
                    </div>

                    {/* Free shipping progress */}
                    {subtotal < 500 && subtotal > 0 && (
                        <div className="mt-3">
                            <div className="flex justify-between text-xs text-foreground/40 mb-1">
                                <span>Add {formatPrice(500 - subtotal)} more for free shipping</span>
                                <span>{Math.round((subtotal / 500) * 100)}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Checkout button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                        group
                    "
                >
                    <span>Proceed to Checkout</span>
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
                </motion.button>

                {/* Secure checkout note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-foreground/30">
                    <Package size={14} />
                    <span>Secure checkout • Encrypted payment</span>
                </div>
            </GlassCard>
        </motion.div>
    );
}