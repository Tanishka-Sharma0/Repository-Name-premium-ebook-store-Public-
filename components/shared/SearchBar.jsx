"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { books } from "@/lib/data";

export default function SearchBar({
    value,
    onChange,
}) {
    const [isFocused, setIsFocused] = useState(false);

    // Filter books based on search value
    const results = value && value.trim().length > 0
        ? books.filter((book) =>
            book.title
                .toLowerCase()
                .includes(value.toLowerCase().trim())
        )
        : [];

    // Clear search
    const clearSearch = () => {
        onChange({ target: { value: "" } });
    };

    return (
        <div className="relative w-full">
            <div
                className="
                    flex
                    items-center
                    gap-3
                    border
                    rounded-2xl
                    px-4
                    py-3
                    bg-background/50
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    focus-within:border-[var(--primary)]
                    focus-within:shadow-lg
                    focus-within:shadow-[var(--primary)]/10
                "
            >
                <Search size={18} className="opacity-50" />

                <input
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    placeholder="Search books..."
                    className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-foreground
                        placeholder:text-foreground/50
                    "
                />

                {value && value.length > 0 && (
                    <button
                        onClick={clearSearch}
                        className="
                            p-1
                            rounded-full
                            hover:bg-white/10
                            transition-colors
                        "
                    >
                        <X size={16} className="opacity-50" />
                    </button>
                )}
            </div>

            {/* Search Results Dropdown */}
            {value && value.trim().length > 0 && isFocused && (
                <div
                    className="
                        absolute
                        top-full
                        left-0
                        right-0
                        mt-2
                        max-h-80
                        overflow-y-auto
                        glass
                        rounded-2xl
                        p-2
                        z-50
                        shadow-2xl
                        border
                        border-white/10
                    "
                >
                    {results.length > 0 ? (
                        <div className="space-y-1">
                            {results.slice(0, 10).map((book) => (
                                <Link
                                    key={book.id}
                                    href={`/books/${book.id}`}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        p-3
                                        rounded-xl
                                        hover:bg-white/10
                                        transition-colors
                                        duration-200
                                    "
                                    onClick={() => {
                                        onChange({ target: { value: "" } });
                                        setIsFocused(false);
                                    }}
                                >
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="
                                            w-12
                                            h-16
                                            object-cover
                                            rounded-lg
                                        "
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold truncate">
                                            {book.title}
                                        </p>
                                        <p className="text-sm opacity-60">
                                            {book.author} • ₹{book.price}
                                        </p>
                                    </div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
                                        {book.category}
                                    </span>
                                </Link>
                            ))}
                            {results.length > 10 && (
                                <div className="p-3 text-center text-sm opacity-60">
                                    +{results.length - 10} more results
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-6 text-center">
                            <p className="text-lg">🔍</p>
                            <p className="mt-2 font-medium">No books found</p>
                            <p className="text-sm opacity-60">
                                Try searching with different keywords
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}