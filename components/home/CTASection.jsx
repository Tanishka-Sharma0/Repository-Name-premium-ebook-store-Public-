// components/home/CTASection.jsx
'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CTASection() {
    const router = useRouter();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />

            <div className="container-custom px-6 relative">
                <FadeIn>
                    <div className="glass rounded-[3rem] p-16 md:p-20 text-center max-w-4xl mx-auto border border-primary/20">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Start Learning <span className="text-primary">Today</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Join thousands of students preparing smarter with premium ebooks and modern reading experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push('/books')}
                                className="premium-btn bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 group"
                            >
                                Start Reading Now
                                <ArrowRight className="group-hover:translate-x-1 transition" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push('/library')}
                                className="premium-btn border border-white/30 hover:bg-white/5 px-10 py-4 rounded-2xl text-lg font-semibold"
                            >
                                Explore Library
                            </motion.button>
                        </div>

                        <p className="text-xs text-muted-foreground mt-8">
                            30-day money back guarantee • Cancel anytime
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}