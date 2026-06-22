// components/books/RelatedBooks.jsx
'use client';

import BookCard from './BookCard';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { books } from '@/lib/data';

export default function RelatedBooks({ category, currentId }) {
    // Filter related books (same category, exclude current book)
    const relatedBooks = books
        .filter((book) =>
            book.category === category &&
            book.id !== currentId
        )
        .slice(0, 4); // Show max 4 related books

    if (relatedBooks.length === 0) return null;

    return (
        <FadeIn>
            <div className="mt-20">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-semibold">More in {category}</h3>
                    <p className="text-sm text-muted-foreground">Students also bought these</p>
                </div>

                <StaggerContainer staggerDelay={0.1} className="grid book-grid">
                    {relatedBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </StaggerContainer>
            </div>
        </FadeIn>
    );
}