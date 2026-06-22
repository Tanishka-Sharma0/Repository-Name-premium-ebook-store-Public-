// components/home/Hero.jsx
'use client';

import { motion } from 'framer-motion';
import HeroScene from '@/components/three/HeroScene';
import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import { ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <HeroScene />
            </div>

            {/* Content */}
            <div className="container-custom px-6 relative z-10">
                <div className="max-w-3xl">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-white/5 backdrop-blur-md mb-6">
                            <span className="text-xs tracking-widest text-primary">NEW</span>
                            <span className="text-sm">Summer Exam Batch 2026</span>
                        </div>
                    </FadeIn>

                    <TextReveal>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
                            Master Your<br />
                            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                                Dream Exam
                            </span>
                        </h1>
                    </TextReveal>

                    <FadeIn delay={0.4}>
                        <p className="text-xl text-muted-foreground max-w-lg mb-10">
                            Premium ebooks with modern reader. Join 5000+ students preparing smarter.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => router.push('/books')}
                                className="premium-btn bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 group"
                            >
                                Browse Books
                                <ArrowRight className="group-hover:translate-x-1 transition" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="premium-btn border border-white/30 hover:bg-white/5 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3"
                            >
                                <Play size={22} /> Watch Demo
                            </motion.button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.9}>
                        <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
                            <div>✅ Trusted by AIR 1-100</div>
                            <div>✅ 4.9/5 from 2000+ students</div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm flex flex-col items-center"
            >
                Scroll to explore
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent mt-2" />
            </motion.div>
        </section>
    );
}