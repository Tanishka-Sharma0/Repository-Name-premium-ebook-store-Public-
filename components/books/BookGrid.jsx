"use client";

import BookCard from "./BookCard";
import useFilterStore from "@/store/filterStore";
import StaggerContainer from "@/components/animations/StaggerContainer"; // Add this import

export default function BookGrid({ books }) {
    const {
        category,
        sort,
        view,
        language,
        subject,
        priceRange,
    } = useFilterStore();

    let filtered = [...books];

    // Category Filter
    if (category !== "All") {
        filtered = filtered.filter(
            (book) => book.category === category
        );
    }

    // Language Filter
    if (language !== "All") {
        filtered = filtered.filter(
            (book) => book.language === language
        );
    }

    // Subject Filter
    if (subject !== "All") {
        filtered = filtered.filter(
            (book) => book.subject === subject
        );
    }

    // Price Filter
    filtered = filtered.filter(
        (book) => book.price <= priceRange
    );

    // Sorting
    if (sort === "price-low") {
        filtered.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === "price-high") {
        filtered.sort(
            (a, b) => b.price - a.price
        );
    }

    if (sort === "rating") {
        filtered.sort(
            (a, b) => b.rating - a.rating
        );
    }

    return (
        <StaggerContainer> {/* Wrap with StaggerContainer */}
            <div
                className={
                    view === "grid"
                        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "space-y-6"
                }
            >
                {filtered.length > 0 ? (
                    filtered.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <h3 className="text-2xl font-bold">
                            No Books Found
                        </h3>

                        <p className="mt-2 opacity-70">
                            Try changing filters.
                        </p>
                    </div>
                )}
            </div>
        </StaggerContainer>
    );
}