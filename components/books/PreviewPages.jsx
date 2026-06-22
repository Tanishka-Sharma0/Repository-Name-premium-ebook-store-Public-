// components/books/PreviewPages.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

export default function PreviewPages({ pages }) {
    if (!pages || pages.length === 0) return null;

    return (
        <FadeIn>
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8">Preview Pages</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="glass rounded-3xl overflow-hidden border border-border/50 group"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={page}
                                    alt={`Preview Page ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                                    Page {index + 1}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}