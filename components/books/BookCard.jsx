"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

import useCartStore from "@/store/cartStore";
import GlassCard from "@/components/effects/GlassCard";

export default function BookCard({ book }) {
    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    return (
        <motion.div
            whileHover={{
                y: -12,
                rotateX: 4,
            }}
            transition={{
                duration: 0.25,
            }}
            className="overflow-hidden group"
        >
            <GlassCard className="glass-hover rounded-3xl p-0"> {/* Added glass-hover */}
                <Link href={`/books/${book.id}`}>
                    <div className="aspect-[3/4] overflow-hidden">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-110
                            "
                        />
                    </div>
                </Link>

                <div className="p-5">
                    <p className="text-xs opacity-60">
                        {book.category}
                    </p>

                    <h3 className="mt-2 font-bold line-clamp-2">
                        {book.title}
                    </h3>

                    <p className="mt-1 text-sm opacity-70">
                        {book.author}
                    </p>

                    <div className="mt-3 flex items-center gap-1">
                        <Star
                            size={15}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span>{book.rating}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="font-bold text-lg">
                            ₹{book.price}
                        </span>

                        <button
                            onClick={() => addToCart(book)}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                bg-[var(--primary)]
                                px-4
                                py-2
                                text-black
                                font-semibold
                                hover:bg-[var(--primary-hover)]
                                transition-colors
                            "
                        >
                            <ShoppingCart size={16} />
                            Add
                        </button>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}