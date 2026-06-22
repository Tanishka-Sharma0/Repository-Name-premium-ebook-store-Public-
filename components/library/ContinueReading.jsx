"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight, Sparkles } from "lucide-react";
import useLibraryStore from "@/store/libraryStore";
import GlassCard from "@/components/effects/GlassCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { books as allBooks } from "@/lib/data";

export default function ContinueReading() {
    const [books, setBooks] = useState([]);
    const libraryBooks = useLibraryStore((state) => state.books);
    const updateProgress = useLibraryStore((state) => state.updateProgress);

    useEffect(() => {
        // Get books that are currently being read (progress > 0 and < 100)
        const readingBooks = libraryBooks.filter(
            book => book.progress > 0 && book.progress < 100
        );
        setBooks(readingBooks);
    }, [libraryBooks]);

    if (books.length === 0) {
        return (
            <section className="py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Continue Reading</h2>
                </div>
                <GlassCard className="rounded-3xl p-12 text-center border border-white/5">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                            <BookOpen size={32} className="text-foreground/30" />
                        </div>
                        <h3 className="text-lg font-semibold">No books in progress</h3>
                        <p className="text-sm text-foreground/40 max-w-md">
                            Start reading a book from your library to track your progress
                        </p>
                        <Link
                            href="/library"
                            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                        >
                            Browse Library
                        </Link>
                    </div>
                </GlassCard>
            </section>
        );
    }

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-6"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[var(--primary)]/10">
                        <BookOpen size={20} className="text-[var(--primary)]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Continue Reading</h2>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                        {books.length} {books.length === 1 ? 'book' : 'books'}
                    </span>
                </div>
                <Link
                    href="/library"
                    className="text-sm text-foreground/40 hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-1"
                >
                    View All
                    <ChevronRight size={16} />
                </Link>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book, index) => (
                    <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -4 }}
                    >
                        <GlassCard className="rounded-3xl p-5 border border-white/5 hover:border-[var(--primary)]/20 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                                {/* Book thumbnail */}
                                <div className="relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/5">
                                    {book.image ? (
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BookOpen size={24} className="text-foreground/20" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm truncate group-hover:text-[var(--primary)] transition-colors duration-300">
                                        {book.title}
                                    </h3>
                                    <p className="text-xs text-foreground/40 truncate">
                                        {book.author || 'Unknown Author'}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Clock size={12} className="text-foreground/30" />
                                        <span className="text-xs text-foreground/30">
                                            {book.lastRead || 'Just started'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="flex justify-between text-xs mb-1.5">
                                    <span className="text-foreground/40">Progress</span>
                                    <span className="font-medium text-[var(--primary)]">{book.progress}%</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${book.progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* Continue Button */}
                            <Link
                                href={`/reading/${book.id}`}
                                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/10 text-center text-sm font-medium text-[var(--primary)] hover:from-[var(--primary)] hover:to-[var(--accent)] hover:text-white transition-all duration-300 group flex items-center justify-center gap-2"
                            >
                                <span>Continue Reading</span>
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}