"use client";

import Filters from "@/components/books/Filters";
import SortOptions from "@/components/books/SortOptions";
import BookGrid from "@/components/books/BookGrid";
import InfiniteScroll from "@/components/books/InfiniteScroll";

import useInfiniteBooks from "@/hooks/useInfiniteBooks";

export default function BooksPage() {
    const {
        books,
        hasMore,
        loadMore,
    } = useInfiniteBooks();

    return (
        <section className="section-padding">
            <div
                className="
    grid
    gap-8
    lg:grid-cols-[280px_1fr]
  "
            >
                <div className="mb-12">
                    <h1
                        className="
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-black
  "
                    >
                        Explore Books
                    </h1>

                    <p className="mt-4 opacity-70">
                        Discover exam preparation
                        resources.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                    <Filters />

                    <div>
                        <div className="mb-8 flex justify-end">
                            <SortOptions />
                        </div>

                        <BookGrid books={books} />

                        <InfiniteScroll
                            hasMore={hasMore}
                            loadMore={loadMore}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}