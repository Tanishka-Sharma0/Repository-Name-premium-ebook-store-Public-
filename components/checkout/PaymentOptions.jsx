"use client";

import { useState } from "react";
import { toast } from "sonner";
import GlassCard from "@/components/effects/GlassCard";

export default function PaymentOptions() {
    const [method, setMethod] =
        useState("upi");

    const handlePayment = () => {
        toast.success(
            "Purchase Successful 🎉"
        );
    };

    return (
        <GlassCard className="rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
                Payment Options
            </h2>

            <div className="mt-6 space-y-4">
                <label className="flex gap-3">
                    <input
                        type="radio"
                        checked={method === "upi"}
                        onChange={() =>
                            setMethod("upi")
                        }
                    />
                    UPI
                </label>

                <label className="flex gap-3">
                    <input
                        type="radio"
                        checked={method === "card"}
                        onChange={() =>
                            setMethod("card")
                        }
                    />
                    Debit/Credit Card
                </label>

                <label className="flex gap-3">
                    <input
                        type="radio"
                        checked={
                            method === "netbanking"
                        }
                        onChange={() =>
                            setMethod(
                                "netbanking"
                            )
                        }
                    />
                    Net Banking
                </label>
            </div>

            <button
                onClick={handlePayment}
                className="
                    mt-8
                    w-full
                    rounded-full
                    bg-[var(--primary)]
                    py-4
                    font-bold
                    text-black
                    hover:bg-[var(--primary-hover)]
                    transition-colors
                "
            >
                Complete Purchase
            </button>
        </GlassCard>
    );
}