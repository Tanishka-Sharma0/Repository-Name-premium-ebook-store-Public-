// components/books/BookGrid.jsx
'use client';

import BookCard from './BookCard';
import StaggerContainer from '@/components/animations/StaggerContainer';

export default function BookGrid({ books, isLoading }) {
    if (isLoading) {
        return (
            <div className="grid book-grid">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-96 bg-card/50 rounded-3xl animate-pulse" />
                ))}
            </div>
        );
    }

    return (
        <StaggerContainer staggerDelay={0.08} className="grid book-grid">
            {books.map((book, index) => (
                <BookCard key={book.id || index} book={book} />
            ))}
        </StaggerContainer>
    );
}