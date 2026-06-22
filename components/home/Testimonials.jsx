// components/home/Testimonial.jsx
'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';


export default function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title mb-4">Student Reviews</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Real stories from students who cracked their dream exams
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                            className="glass rounded-3xl p-8 h-full flex flex-col group hover:border-primary/30 border border-transparent"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-lg leading-relaxed text-foreground/90 mb-8 flex-1">
                                "{testimonial.review}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-primary/20">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-primary">{testimonial.exam}</p>
                                    <p className="text-xs text-emerald-400 font-medium mt-0.5">
                                        {testimonial.rank}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}