// components/home/TopAuthors.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { topAuthors } from '@/lib/data';

export default function TopAuthors() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="section-title mb-4">Top Authors</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Learn from the best minds in exam preparation
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {topAuthors.map((author, index) => (
                        <motion.div
                            key={author.id}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="glass rounded-3xl p-6 text-center group hover:border-primary/30 border border-transparent transition-all duration-500"
                        >
                            <div className="relative w-28 h-28 mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    fill
                                    className="rounded-full object-cover border-4 border-background"
                                />
                            </div>

                            <h3 className="font-semibold text-xl mb-1">{author.name}</h3>
                            <p className="text-primary text-sm mb-4">{author.expertise}</p>

                            <div className="flex justify-center items-center gap-4 text-sm">
                                <div>
                                    <span className="font-mono text-2xl font-bold text-primary">{author.books}</span>
                                    <p className="text-xs text-muted-foreground">Books</p>
                                </div>
                                <div className="h-8 w-px bg-border" />
                                <div>
                                    <span className="font-mono text-2xl font-bold">★</span>
                                    <span className="ml-1 text-lg">{author.rating}</span>
                                    <p className="text-xs text-muted-foreground">Rating</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}