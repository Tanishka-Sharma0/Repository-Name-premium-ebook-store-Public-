"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { books } from "@/lib/data";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search books...",
    className = "",
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    // Load recent searches from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("recentSearches");
        if (saved) {
            setRecentSearches(JSON.parse(saved));
        }
    }, []);

    // Save recent searches
    const saveRecentSearch = (query) => {
        if (!query.trim()) return;
        const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
        setRecentSearches(updated);
        localStorage.setItem("recentSearches", JSON.stringify(updated));
    };

    // Filter books based on search value
    const searchQuery = value?.trim() || "";
    const results = searchQuery.length > 0
        ? books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    // Clear search
    const clearSearch = () => {
        onChange({ target: { value: "" } });
        inputRef.current?.focus();
    };

    // Handle search submission
    const handleSearch = (e) => {
        if (e.key === "Enter" && searchQuery.length > 0) {
            saveRecentSearch(searchQuery);
            setIsFocused(false);
            // Navigate to search results page or handle as needed
        }
    };

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
            if (e.key === "Escape") {
                setIsFocused(false);
                inputRef.current?.blur();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div ref={containerRef} className={`relative w-full ${className}`}>
            {/* Keyboard shortcut hint */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 text-xs text-foreground/30 pointer-events-none">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] font-mono">
                    ⌘
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] font-mono">
                    K
                </kbd>
            </div>

            <motion.div
                className={`
                    flex
                    items-center
                    gap-3
                    border
                    rounded-2xl
                    px-4
                    py-2.5
                    bg-background/40
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    relative
                    ${isFocused
                        ? "border-[var(--primary)] shadow-lg shadow-[var(--primary)]/15 ring-2 ring-[var(--primary)]/20"
                        : isHovered
                            ? "border-[var(--primary)]/30 shadow-md shadow-[var(--primary)]/5"
                            : "border-white/10"
                    }
                `}
                animate={{
                    scale: isFocused ? 1.01 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {/* Animated search icon */}
                <motion.div
                    animate={{
                        scale: isFocused ? 1.1 : 1,
                        rotate: isFocused ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Search
                        size={20}
                        className={`transition-colors duration-300 ${isFocused ? "text-[var(--primary)]" : "opacity-50"
                            }`}
                    />
                </motion.div>

                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onKeyDown={handleSearch}
                    placeholder={placeholder}
                    className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-foreground
                        placeholder:text-foreground/40
                        font-medium
                        py-1
                    "
                />

                {value && value.length > 0 && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={clearSearch}
                        className="
                            p-1
                            rounded-full
                            hover:bg-white/10
                            transition-all
                            duration-200
                            group
                        "
                    >
                        <X size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                )}

                {/* Animated glow ring */}
                {isFocused && (
                    <motion.div
                        layoutId="searchGlow"
                        className="absolute -inset-0.5 rounded-2xl blur-xl opacity-30 pointer-events-none"
                        style={{
                            background: "linear-gradient(90deg, var(--primary), var(--accent))",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </motion.div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                        }}
                        className="
                            absolute
                            top-full
                            left-0
                            right-0
                            mt-2
                            max-h-[420px]
                            overflow-y-auto
                            glass
                            rounded-2xl
                            p-2
                            z-50
                            shadow-2xl
                            shadow-[var(--primary)]/5
                            border
                            border-white/10
                            backdrop-blur-xl
                            bg-background/80
                        "
                    >
                        {searchQuery.length > 0 ? (
                            // Search Results
                            results.length > 0 ? (
                                <div className="space-y-1">
                                    {/* Results header */}
                                    <div className="flex items-center justify-between px-3 py-2">
                                        <span className="text-xs font-medium text-foreground/40 uppercase tracking-wider">
                                            {results.length} Results
                                        </span>
                                        <span className="text-xs text-foreground/30">
                                            Press Enter to see all
                                        </span>
                                    </div>

                                    {results.slice(0, 8).map((book, index) => (
                                        <motion.div
                                            key={book.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                        >
                                            <Link
                                                href={`/books/${book.id}`}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                    p-3
                                                    rounded-xl
                                                    hover:bg-white/10
                                                    transition-all
                                                    duration-200
                                                    group
                                                    relative
                                                    overflow-hidden
                                                "
                                                onClick={() => {
                                                    saveRecentSearch(searchQuery);
                                                    onChange({ target: { value: "" } });
                                                    setIsFocused(false);
                                                }}
                                            >
                                                {/* Hover background glow */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                <div className="relative z-10 flex items-center gap-3 w-full">
                                                    <div className="relative">
                                                        <img
                                                            src={book.image}
                                                            alt={book.title}
                                                            className="
                                                                w-12
                                                                h-16
                                                                object-cover
                                                                rounded-lg
                                                                shadow-md
                                                                group-hover:scale-105
                                                                transition-transform
                                                                duration-300
                                                            "
                                                        />
                                                        {/* Gradient overlay on hover */}
                                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-semibold truncate group-hover:text-[var(--primary)] transition-colors duration-300">
                                                            {book.title}
                                                        </p>
                                                        <p className="text-sm text-foreground/60">
                                                            {book.author}
                                                        </p>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                                                {book.category}
                                                            </span>
                                                            <span className="text-xs text-foreground/40">
                                                                ₹{book.price}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <ArrowRight
                                                        size={16}
                                                        className="
                                                            opacity-0 
                                                            group-hover:opacity-100 
                                                            transition-all 
                                                            duration-300 
                                                            text-[var(--primary)]
                                                            group-hover:translate-x-1
                                                        "
                                                    />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}

                                    {results.length > 8 && (
                                        <div className="p-2 text-center">
                                            <button className="text-sm text-[var(--primary)] hover:underline">
                                                View all {results.length} results
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // No results
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="p-8 text-center"
                                >
                                    <div className="text-4xl mb-3">🔍</div>
                                    <p className="font-medium text-foreground/80">No books found</p>
                                    <p className="text-sm text-foreground/40 mt-1">
                                        Try searching with different keywords
                                    </p>
                                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-foreground/30">
                                        <Sparkles size={12} />
                                        <span>Suggestions: fiction, programming, design</span>
                                    </div>
                                </motion.div>
                            )
                        ) : (
                            // Recent searches / Suggestions
                            <div className="p-3">
                                {recentSearches.length > 0 ? (
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-medium text-foreground/40 uppercase tracking-wider">
                                                Recent Searches
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setRecentSearches([]);
                                                    localStorage.removeItem("recentSearches");
                                                }}
                                                className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                        <div className="space-y-1">
                                            {recentSearches.map((search, index) => (
                                                <motion.button
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => {
                                                        onChange({ target: { value: search } });
                                                        inputRef.current?.focus();
                                                    }}
                                                    className="
                                                        w-full
                                                        text-left
                                                        px-3
                                                        py-2
                                                        rounded-lg
                                                        hover:bg-white/10
                                                        transition-colors
                                                        duration-200
                                                        flex
                                                        items-center
                                                        gap-2
                                                        text-sm
                                                        text-foreground/70
                                                    "
                                                >
                                                    <Search size={14} className="text-foreground/30" />
                                                    <span>{search}</span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-6 text-center">
                                        <BookOpen size={32} className="mx-auto text-foreground/20 mb-3" />
                                        <p className="text-sm text-foreground/40">
                                            Start typing to search for books
                                        </p>
                                        <p className="text-xs text-foreground/30 mt-1">
                                            or press ⌘K to focus
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}