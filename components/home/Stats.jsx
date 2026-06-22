// components/home/Stats.jsx
'use client';

import AnimatedCounter from './AnimatedCounter';
import StaggerContainer from '@/components/animations/StaggerContainer';
import FadeIn from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';

export default function Stats() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="container-custom px-6 relative">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title mb-4">Our Impact</h2>
                        <p className="text-muted-foreground text-lg max-w-md mx-auto">
                            Trusted by thousands of serious aspirants
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {/* Stat 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">📚</div>
                        <AnimatedCounter
                            end={350}
                            suffix="+"
                            label="Premium Titles"
                            icon="📖"
                        />
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">👥</div>
                        <AnimatedCounter
                            end={12500}
                            suffix="+"
                            label="Active Readers"
                            icon="🎓"
                        />
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">⭐</div>
                        <AnimatedCounter
                            end={4.9}
                            suffix=""
                            label="Avg. Rating"
                            icon="🌟"
                        />
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">🏆</div>
                        <AnimatedCounter
                            end={87}
                            suffix="%"
                            label="Success Rate"
                            icon="🏅"
                        />
                    </motion.div>

                    {/* Stat 5 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">✍️</div>
                        <AnimatedCounter
                            end={142}
                            suffix="+"
                            label="Expert Authors"
                            icon="🧠"
                        />
                    </motion.div>

                    {/* Stat 6 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="glass rounded-3xl p-8 text-center group relative overflow-hidden"
                    >
                        <div className="absolute -right-6 -top-6 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity">🕒</div>
                        <AnimatedCounter
                            end={24}
                            suffix="/7"
                            label="Support"
                            icon="⚡"
                        />
                    </motion.div>

                </StaggerContainer>
            </div>
        </section>
    );
}