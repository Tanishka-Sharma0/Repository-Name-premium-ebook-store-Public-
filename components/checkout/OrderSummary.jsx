"use client";

import useCartStore from "@/store/cartStore";
import GlassCard from "@/components/effects/GlassCard"; // Add this import

export default function OrderSummary() {
    const items = useCartStore(
        (state) => state.items
    );

    const total = items.reduce(
        (acc, item) => acc + item.price,
        0
    );

    return (
        <GlassCard className="rounded-3xl p-6"> {/* Replace div with GlassCard */}
            <h2 className="text-2xl font-bold">
                Order Summary
            </h2>

            <div className="mt-6 space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between"
                    >
                        <span>{item.title}</span>

                        <span>₹{item.price}</span>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t pt-5">
                <div className="flex justify-between font-bold">
                    <span>Total</span>

                    <span>₹{total}</span>
                </div>
            </div>
        </GlassCard>
    );
}