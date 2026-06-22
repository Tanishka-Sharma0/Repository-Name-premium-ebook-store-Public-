// components/books/Reviews.jsx
'use client';

import { Star } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { reviews } from "@/lib/data";


export default function Reviews({ bookId }) {
    return (
        <FadeIn>
            <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8">Student Reviews</h3>

                <StaggerContainer staggerDelay={0.1} className="space-y-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="glass rounded-3xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-medium">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-medium">{review.name}</p>
                                        <p className="text-xs text-muted-foreground">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-foreground/80 leading-relaxed">
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                </StaggerContainer>
            </div>
        </FadeIn>
    );
}