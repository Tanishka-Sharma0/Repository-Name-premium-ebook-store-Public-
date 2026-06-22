// components/books/InfiniteScroll.jsx
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Loader } from 'lucide-react';
import BookGrid from './BookGrid';

export default function InfiniteScroll({ books, fetchMore, hasMore, isLoading }) {
    const [displayedBooks, setDisplayedBooks] = useState(books);
    const observer = useRef();
    const lastBookRef = useRef();

    // Load more books when user scrolls to bottom
    const lastBookCallback = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                fetchMore();
            }
        });

        if (node) observer.current.observe(node);
    }, [isLoading, hasMore, fetchMore]);

    // Update displayed books when new books arrive
    useEffect(() => {
        setDisplayedBooks((prev) => [...prev, ...books.slice(prev.length)]);
    }, [books]);

    return (
        <>
            <BookGrid books={displayedBooks} isLoading={isLoading} />

            {/* Loading Indicator */}
            {isLoading && (
                <div className="flex justify-center py-12">
                    <div className="flex items-center gap-3 text-primary">
                        <Loader className="animate-spin" size={24} />
                        <span>Loading more books...</span>
                    </div>
                </div>
            )}

            {/* Sentinel for Infinite Scroll */}
            {hasMore && !isLoading && (
                <div ref={lastBookCallback} className="h-10" />
            )}

            {!hasMore && displayedBooks.length > 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    You've reached the end ✨
                </div>
            )}
        </>
    );
}