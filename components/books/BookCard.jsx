// components/books/BookCard.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import useCartStore from '@/store/cartStore';
import FadeIn from '@/components/animations/FadeIn';

export default function BookCard({ book }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <FadeIn delay={0.05}>
            <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 glow-card h-full flex flex-col"
            >
                {/* Book Cover */}
                <div className="relative h-72 overflow-hidden">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md">
                        ₹{book.price}
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                            onClick={() => addToCart(book)}
                            className="premium-btn bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-2xl transition-all"
                        >
                            <ShoppingCart size={20} />
                        </button>
                        <button className="premium-btn bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-2xl transition-all">
                            <Eye size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">
                        {book.category}
                    </div>

                    <h3 className="font-semibold text-lg leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {book.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {book.author}
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                        <div className="flex items-center text-yellow-400">
                            ★ {book.rating}
                        </div>
                        <span className="text-xs text-muted-foreground">
                            ({book.reviews} reviews)
                        </span>
                    </div>
                </div>
            </motion.div>
        </FadeIn>
    );
}