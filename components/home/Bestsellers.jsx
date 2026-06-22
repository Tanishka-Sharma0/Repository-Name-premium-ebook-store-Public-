// components/home/BestSellers.jsx
'use client';

import BookCard from '@/components/books/BookCard';
import StaggerContainer from '@/components/animations/StaggerContainer';
import FadeIn from '@/components/animations/FadeIn';
import { books } from '@/lib/data';

export default function BestSellers() {
    // Top 6 best sellers (you can sort by rating or sales in real app)
    const bestSellers = [...books]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    return (
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="section-title mb-4">Best Sellers</h2>
                        <p className="text-muted-foreground text-lg">Most loved by aspirants this month</p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid book-grid">
                    {bestSellers.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}