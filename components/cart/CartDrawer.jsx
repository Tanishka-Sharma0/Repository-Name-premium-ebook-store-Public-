"use client";

import { X, Plus, Minus } from "lucide-react";
import useCartStore from "@/store/cartStore";
import Image from "next/image";

export default function CartDrawer() {
    const {
        items,
        isOpen,
        closeCart,
        totalPrice,
        removeFromCart,
        updateQuantity,
    } = useCartStore();

    // Safe total price calculation
    const getTotalPrice = () => {
        if (typeof totalPrice === 'function') {
            return totalPrice();
        }
        return totalPrice || 0;
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        bg-black/50
                        backdrop-blur-sm
                        z-50
                    "
                    onClick={closeCart}
                />
            )}

            {/* Drawer */}
            <aside
                className={`
                    fixed
                    top-0
                    right-0
                    h-screen
                    w-[400px]
                    max-w-full
                    bg-background
                    z-50
                    border-l
                    border-white/10
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-in-out
                    flex
                    flex-col
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="p-6 flex justify-between items-center border-b border-white/10">
                    <h2 className="font-black text-xl">
                        Your Cart
                    </h2>
                    <button
                        onClick={closeCart}
                        className="
                            p-2
                            rounded-full
                            hover:bg-white/10
                            transition-colors
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items && items.length > 0 ? (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    flex
                                    gap-4
                                    p-3
                                    rounded-xl
                                    bg-white/5
                                    border
                                    border-white/5
                                "
                            >
                                {/* Book Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                        w-20
                                        h-28
                                        object-cover
                                        rounded-lg
                                    "
                                />

                                {/* Book Details */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-sm opacity-60">
                                        {item.author}
                                    </p>
                                    <p className="text-sm font-bold mt-1">
                                        ₹{item.price}
                                    </p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => {
                                                const qty = (item.quantity || 1) - 1;
                                                if (qty === 0) {
                                                    removeFromCart(item.id);
                                                } else {
                                                    updateQuantity(item.id, qty);
                                                }
                                            }}
                                            className="
                                                p-1
                                                rounded-full
                                                border
                                                border-white/20
                                                hover:bg-white/10
                                                transition-colors
                                            "
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-8 text-center">
                                            {item.quantity || 1}
                                        </span>
                                        <button
                                            onClick={() => {
                                                const qty = (item.quantity || 1) + 1;
                                                updateQuantity(item.id, qty);
                                            }}
                                            className="
                                                p-1
                                                rounded-full
                                                border
                                                border-white/20
                                                hover:bg-white/10
                                                transition-colors
                                            "
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="
                                        p-2
                                        rounded-full
                                        hover:bg-red-500/20
                                        transition-colors
                                        text-red-400
                                    "
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-4xl mb-4">🛒</p>
                            <p className="font-medium">Your cart is empty</p>
                            <p className="text-sm opacity-60 mt-2">
                                Start adding books to your cart
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer with Total */}
                {items && items.length > 0 && (
                    <div className="p-6 border-t border-white/10 bg-background/50 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">Total</span>
                            <span className="text-2xl font-black">
                                ₹{getTotalPrice().toFixed(2)}
                            </span>
                        </div>
                        <button
                            className="
                                w-full
                                rounded-full
                                bg-[var(--primary)]
                                py-4
                                text-black
                                font-bold
                                hover:bg-[var(--primary-hover)]
                                transition-colors
                            "
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
}