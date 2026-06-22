// app/books/page.jsx
'use client';

import { useState, useEffect } from 'react';
import BookGrid from '@/components/books/BookGrid';
import Filters from '@/components/books/Filters';
import SortOptions from '@/components/books/SortOptions';
import InfiniteScroll from '@/components/books/InfiniteScroll';
import BookCardSkeleton from '@/components/loaders/BookCardSkeleton';
import FadeIn from '@/components/animations/FadeIn';
import { books } from '@/lib/data';
import useFilterStore from '@/store/filterStore';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function BooksPage() {
    const [displayBooks, setDisplayBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const { category, language, subject, priceRange, sort } = useFilterStore();

    // Filter Logic
    const filteredBooks = books
        .filter((book) => {
            const matchCategory = category === "All" || book.category === category;
            const matchLanguage = language === "All" || book.language === language;
            const matchSubject = subject === "All" || book.subject === subject;
            const matchPrice = book.price <= priceRange;
            return matchCategory && matchLanguage && matchSubject && matchPrice;
        })
        .sort((a, b) => {
            if (sort === 'price-low') return a.price - b.price;
            if (sort === 'price-high') return b.price - a.price;
            if (sort === 'rating') return b.rating - a.rating;
            return 0;
        });

    // Initial Load + Filter Change
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setDisplayBooks(filteredBooks.slice(0, 8));
            setPage(1);
            setHasMore(filteredBooks.length > 8);
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [category, language, subject, priceRange, sort]);

    const fetchMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            const nextPage = page + 1;
            const newBooks = filteredBooks.slice(0, nextPage * 8);
            setDisplayBooks(newBooks);
            setPage(nextPage);
            setHasMore(newBooks.length < filteredBooks.length);
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="lg:w-80 flex-shrink-0">
                            <Filters />
                        </div>

                        {/* Main Books Area */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h1 className="text-4xl font-bold">Explore Books</h1>
                                    <p className="text-muted-foreground mt-1">
                                        {filteredBooks.length} books found
                                    </p>
                                </div>
                                <SortOptions />
                            </div>

                            {/* Loading State - Using Skeleton */}
                            {isLoading && displayBooks.length === 0 ? (
                                <div className="grid book-grid">
                                    {[...Array(8)].map((_, i) => (
                                        <BookCardSkeleton key={i} />
                                    ))}
                                </div>
                            ) : (
                                <InfiniteScroll
                                    books={displayBooks}
                                    fetchMore={fetchMore}
                                    hasMore={hasMore}
                                    isLoading={isLoading}
                                />
                            )}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}