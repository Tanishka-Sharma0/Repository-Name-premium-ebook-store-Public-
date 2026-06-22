"use client";

import { useState } from "react";

export default function CouponSection() {
    const [coupon, setCoupon] =
        useState("");

    return (
        <div className="glass rounded-3xl p-6">
            <h3 className="font-bold">
                Coupon
            </h3>

            <div className="flex gap-3 mt-4">
                <input
                    value={coupon}
                    onChange={(e) =>
                        setCoupon(
                            e.target.value
                        )
                    }
                    placeholder="PREP20"
                    className="border p-3 rounded-xl flex-1 bg-transparent"
                />

                <button className="px-5 rounded-xl border">
                    Apply
                </button>
            </div>
        </div>
    );
}