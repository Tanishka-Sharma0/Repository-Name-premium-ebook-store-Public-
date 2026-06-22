// components/home/FeaturedBooks.jsx
'use client';

import BookCard from '@/components/books/BookCard';
import StaggerContainer from '@/components/animations/StaggerContainer';
import FadeIn from '@/components/animations/FadeIn';
import { books } from '@/lib/data';

export default function FeaturedBooks() {
    const featured = books.slice(0, 4);

    return (
        <section className="py-20">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="section-title">Featured Books</h2>
                            <p className="text-muted-foreground mt-2">Handpicked for serious aspirants</p>
                        </div>
                        <a href="/books" className="text-primary hover:underline flex items-center gap-2 text-sm">
                            View All →
                        </a>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid book-grid">
                    {featured.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}