"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    Download,
    Heart,
    Share2,
    Eye,
    Sparkles,
    Clock,
    ChevronRight,
    Check,
    Search,
    Filter,
    X
} from "lucide-react";
import useLibraryStore from "@/store/libraryStore";
import GlassCard from "@/components/effects/GlassCard";

export default function LibraryGrid({ search: externalSearch = "" }) {
    const books = useLibraryStore((state) => state.books);
    const updateProgress = useLibraryStore((state) => state.updateProgress);
    const removeBook = useLibraryStore((state) => state.removeBook);
    const toggleWishlist = useLibraryStore((state) => state.toggleWishlist);

    const [viewMode, setViewMode] = useState("grid");
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState(externalSearch);
    const [selectedBook, setSelectedBook] = useState(null);

    // Sync with external search prop
    useEffect(() => {
        setSearchTerm(externalSearch);
    }, [externalSearch]);

    // Filter books
    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.category?.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesFilter = true;
        if (filter === "reading") matchesFilter = book.status === "reading";
        else if (filter === "completed") matchesFilter = book.status === "completed";
        else if (filter === "wishlist") matchesFilter = book.status === "wishlist";

        return matchesSearch && matchesFilter;
    });

    const filters = [
        { id: "all", label: "All Books", icon: BookOpen },
        { id: "reading", label: "Reading", icon: Eye },
        { id: "completed", label: "Completed", icon: Check },
        { id: "wishlist", label: "Wishlist", icon: Heart },
    ];

    // Get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-500/20 text-green-500 border-green-500/20';
            case 'reading': return 'bg-blue-500/20 text-blue-500 border-blue-500/20';
            case 'wishlist': return 'bg-purple-500/20 text-purple-500 border-purple-500/20';
            default: return 'bg-white/5 text-foreground/40 border-white/5';
        }
    };

    // Get status emoji
    const getStatusEmoji = (status) => {
        switch (status) {
            case 'completed': return '✅';
            case 'reading': return '📖';
            case 'wishlist': return '❤️';
            default: return '';
        }
    };

    if (books.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center"
            >
                <div className="w-24 h-24 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <BookOpen size={40} className="text-foreground/20" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your library is empty</h3>
                <p className="text-foreground/40 text-sm mb-4 max-w-md mx-auto">
                    Start exploring and add books to your collection
                </p>
                <Link
                    href="/books"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                >
                    <Sparkles size={18} />
                    Browse Books
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header with filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[var(--primary)]/10">
                        <BookOpen size={20} className="text-[var(--primary)]" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">My Library</h2>
                        <p className="text-sm text-foreground/40">
                            {filteredBooks.length} of {books.length} books
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title, author, category..."
                        className="
                            w-full
                            px-4 py-2.5
                            rounded-xl
                            bg-background/50
                            border border-white/10
                            focus:border-[var(--primary)]/30
                            focus:ring-2
                            focus:ring-[var(--primary)]/10
                            focus:outline-none
                            transition-all
                            duration-300
                            placeholder:text-foreground/30
                            pl-10
                            pr-10
                        "
                    />
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />

                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2">
                {filters.map((f) => {
                    const Icon = f.icon;
                    const isActive = filter === f.id;
                    const count = f.id === "all"
                        ? books.length
                        : books.filter(b => b.status === f.id).length;

                    return (
                        <motion.button
                            key={f.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(f.id)}
                            className={`
                                flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${isActive
                                    ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg shadow-[var(--primary)]/20"
                                    : "bg-white/5 border border-white/5 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 text-foreground/60"
                                }
                            `}
                        >
                            <Icon size={14} />
                            <span>{f.label}</span>
                            <span className={`
                                text-[10px] px-1.5 py-0.5 rounded-full
                                ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-foreground/30"}
                            `}>
                                {count}
                            </span>
                        </motion.button>
                    );
                })}

                {/* View toggle */}
                <div className="ml-auto flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`
                            p-2 rounded-full transition-all duration-300
                            ${viewMode === "grid" ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "text-foreground/30 hover:text-foreground/60"}
                        `}
                        title="Grid View"
                    >
                        <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1.5 h-1.5 rounded bg-current" />
                            <div className="w-1.5 h-1.5 rounded bg-current" />
                            <div className="w-1.5 h-1.5 rounded bg-current" />
                            <div className="w-1.5 h-1.5 rounded bg-current" />
                        </div>
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`
                            p-2 rounded-full transition-all duration-300
                            ${viewMode === "list" ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "text-foreground/30 hover:text-foreground/60"}
                        `}
                        title="List View"
                    >
                        <div className="flex flex-col gap-0.5">
                            <div className="w-3 h-0.5 rounded bg-current" />
                            <div className="w-3 h-0.5 rounded bg-current" />
                            <div className="w-3 h-0.5 rounded bg-current" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Books Grid/List */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={viewMode + filter + searchTerm}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`
                        grid gap-6
                        ${viewMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            : "grid-cols-1"
                        }
                    `}
                >
                    {filteredBooks.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ y: -4 }}
                        >
                            {viewMode === "grid" ? (
                                // Grid View
                                <GlassCard className="rounded-3xl overflow-hidden p-0 border border-white/5 hover:border-[var(--primary)]/20 transition-all duration-300 group">
                                    {/* Book Cover */}
                                    <div className="relative h-64 overflow-hidden">
                                        {book.image ? (
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `
                                                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
                                                            <svg class="w-12 h-12 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                                            </svg>
                                                        </div>
                                                    `;
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
                                                <BookOpen size={48} className="text-foreground/20" />
                                            </div>
                                        )}

                                        {/* Status badge */}
                                        {book.status && (
                                            <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-sm text-xs font-medium border ${getStatusColor(book.status)}`}>
                                                {getStatusEmoji(book.status)} {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                                            </div>
                                        )}

                                        {/* Progress badge */}
                                        {book.progress > 0 && book.progress < 100 && (
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <div className="h-1.5 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                                        style={{ width: `${book.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                            <Link
                                                href={`/reading/${book.id}`}
                                                className="px-4 py-2 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform flex items-center gap-1"
                                            >
                                                <Eye size={16} />
                                                {book.progress > 0 ? "Continue" : "Read"}
                                            </Link>
                                            <button
                                                onClick={() => toggleWishlist(book.id)}
                                                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/30 transition-all flex items-center gap-1"
                                            >
                                                <Heart size={16} className={book.status === 'wishlist' ? 'fill-red-500 text-red-500' : ''} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Book Info */}
                                    <div className="p-5">
                                        <h3 className="font-bold text-base truncate group-hover:text-[var(--primary)] transition-colors duration-300">
                                            {book.title}
                                        </h3>
                                        <p className="text-sm text-foreground/40 truncate">
                                            {book.author || 'Unknown Author'}
                                        </p>

                                        {/* Category tag */}
                                        {book.category && (
                                            <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-foreground/30">
                                                {book.category}
                                            </span>
                                        )}

                                        {book.progress > 0 && book.progress < 100 && (
                                            <div className="mt-3">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="text-foreground/40">Progress</span>
                                                    <span className="text-[var(--primary)]">{book.progress}%</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-4 flex gap-2">
                                            <Link
                                                href={`/reading/${book.id}`}
                                                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-center text-sm font-medium hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                                            >
                                                {book.progress > 0 ? "Continue" : "Read"}
                                            </Link>
                                            <button
                                                onClick={() => removeBook(book.id)}
                                                className="p-2 rounded-xl border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 group"
                                                title="Remove from library"
                                            >
                                                <X size={16} className="text-foreground/40 group-hover:text-red-500 transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </GlassCard>
                            ) : (
                                // List View
                                <GlassCard className="rounded-3xl p-4 border border-white/5 hover:border-[var(--primary)]/20 transition-all duration-300 group">
                                    <div className="flex items-center gap-4">
                                        {/* Thumbnail */}
                                        <div className="w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white/5">
                                            {book.image ? (
                                                <img
                                                    src={book.image}
                                                    alt={book.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `
                                                            <div class="w-full h-full flex items-center justify-center">
                                                                <svg class="w-6 h-6 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                                                </svg>
                                                            </div>
                                                        `;
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <BookOpen size={24} className="text-foreground/20" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-bold truncate group-hover:text-[var(--primary)] transition-colors duration-300">
                                                        {book.title}
                                                    </h3>
                                                    <p className="text-sm text-foreground/40 truncate">
                                                        {book.author || 'Unknown Author'}
                                                    </p>
                                                    {book.category && (
                                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-foreground/30">
                                                            {book.category}
                                                        </span>
                                                    )}
                                                </div>
                                                {book.status && (
                                                    <span className={`text-xs px-2.5 py-1 rounded-full border ${getStatusColor(book.status)}`}>
                                                        {getStatusEmoji(book.status)} {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                                                    </span>
                                                )}
                                            </div>

                                            {book.progress > 0 && book.progress < 100 && (
                                                <div className="mt-2 max-w-xs">
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span className="text-foreground/40">Progress</span>
                                                        <span className="text-[var(--primary)]">{book.progress}%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${book.progress}%` }}
                                                            transition={{ duration: 1, ease: "easeOut" }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/reading/${book.id}`}
                                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-medium hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                                            >
                                                {book.progress > 0 ? "Continue" : "Read"}
                                            </Link>
                                            <button
                                                onClick={() => removeBook(book.id)}
                                                className="p-2 rounded-xl border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
                                                title="Remove from library"
                                            >
                                                <X size={16} className="text-foreground/40 hover:text-red-500 transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </GlassCard>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Empty state for filtered results */}
            {filteredBooks.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-16 text-center"
                >
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                        <Search size={32} className="text-foreground/20" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No books found</h3>
                    <p className="text-foreground/40 text-sm">
                        {searchTerm ? `No results for "${searchTerm}"` : 'Try adjusting your filter'}
                    </p>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 text-sm text-[var(--primary)] hover:underline"
                        >
                            Clear search
                        </button>
                    )}
                </motion.div>
            )}
        </div>
    );
}