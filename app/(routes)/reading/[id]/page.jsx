// app/reader-test/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    ArrowLeft,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Bookmark,
    StickyNote,
    Settings,
    Eye,
    Clock,
    Library
} from "lucide-react";

// Import all components and data
import ReaderControls from "@/components/reader/ReaderControls";
import BookmarkPanel from "@/components/reader/BookmarkPanel";
import NotesPanel from "@/components/reader/NotesPanel";
import useReaderStore from "@/store/readerStore";
import { books, userProgress, readingStats } from "@/lib/data";

export default function ReaderTestPage() {
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [testMode, setTestMode] = useState("reading"); // reading, bookmarks, notes, controls

    const { fontSize, setCurrentPage, currentPage } = useReaderStore();

    // Test books for reading (books with progress > 0)
    const testBooks = books.filter(b => b.progress > 0 && b.progress < 100);

    // Select first test book
    useEffect(() => {
        if (testBooks.length > 0 && !selectedBook) {
            setSelectedBook(testBooks[0]);
            setCurrentPage(1);
        }
    }, [testBooks, selectedBook]);

    // Initialize reader store with test data
    useEffect(() => {
        // Set current page for testing
        setCurrentPage(userProgress.currentPage || 1);
    }, []);

    if (!selectedBook) {
        return (
            <section className="min-h-screen py-12 px-4 flex items-center justify-center">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                            <BookOpen size={40} className="text-foreground/20" />
                        </div>
                        <h2 className="text-3xl font-bold mb-3">📚 Reader Test Page</h2>
                        <p className="text-foreground/40 mb-6 max-w-md mx-auto">
                            Select a book to test Bookmark, Notes, and Reader Controls
                        </p>

                        {/* Test Mode Selection */}
                        <div className="flex flex-wrap gap-3 justify-center mb-8">
                            <button
                                onClick={() => setTestMode("reading")}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${testMode === "reading"
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-white/5 border border-white/10 hover:border-[var(--primary)]/30"
                                    }`}
                            >
                                <Eye size={14} className="inline mr-1" />
                                Reading Mode
                            </button>
                            <button
                                onClick={() => setTestMode("bookmarks")}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${testMode === "bookmarks"
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-white/5 border border-white/10 hover:border-[var(--primary)]/30"
                                    }`}
                            >
                                <Bookmark size={14} className="inline mr-1" />
                                Test Bookmarks
                            </button>
                            <button
                                onClick={() => setTestMode("notes")}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${testMode === "notes"
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-white/5 border border-white/10 hover:border-[var(--primary)]/30"
                                    }`}
                            >
                                <StickyNote size={14} className="inline mr-1" />
                                Test Notes
                            </button>
                            <button
                                onClick={() => setTestMode("controls")}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${testMode === "controls"
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-white/5 border border-white/10 hover:border-[var(--primary)]/30"
                                    }`}
                            >
                                <Settings size={14} className="inline mr-1" />
                                Test Controls
                            </button>
                        </div>

                        {/* Book Selection */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {testBooks.map(book => (
                                <button
                                    key={book.id}
                                    onClick={() => {
                                        setSelectedBook(book);
                                        setCurrentPage(1);
                                        setCurrentChapter(0);
                                    }}
                                    className="group px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all duration-300 text-left"
                                >
                                    <div className="font-medium group-hover:text-[var(--primary)] transition-colors">
                                        {book.title}
                                    </div>
                                    <div className="text-xs text-foreground/40 mt-0.5">
                                        {book.author} • {book.progress}% done
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const totalChapters = selectedBook.chapters?.length || 1;
    const currentChapterData = selectedBook.chapters?.[currentChapter] || {
        title: "Chapter 1",
        content: "Content not available. This is a test page for the reader components."
    };

    return (
        <section className="min-h-screen py-6 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "var(--primary)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: "var(--accent)" }} />
            </div>

            <div className="container-custom max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSelectedBook(null)}
                            className="p-2 rounded-full hover:bg-white/5 transition-colors"
                        >
                            <ArrowLeft size={20} className="text-foreground/40" />
                        </button>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold">{selectedBook.title}</h1>
                            <p className="text-sm text-foreground/40">{selectedBook.author}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center gap-1">
                            <Sparkles size={12} />
                            Test Mode
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-foreground/40">
                            Page {currentPage}
                        </span>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-6 p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
                        <Clock size={14} />
                        <span>Progress: {selectedBook.progress}%</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
                        <BookOpen size={14} />
                        <span>Chapter {currentChapter + 1}/{totalChapters}</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
                        <Library size={14} />
                        <span>{testBooks.length} books reading</span>
                    </div>
                </div>

                {/* Reader Controls */}
                <ReaderControls />

                {/* Main Grid */}
                <div className="grid gap-6 lg:grid-cols-[1fr_320px] mt-6">
                    {/* Reading Area */}
                    <motion.div
                        key={currentChapter}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-3xl p-6 md:p-10 leading-loose"
                        style={{ fontSize: `${fontSize}px` }}
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            {currentChapterData.title}
                        </h2>
                        <p className="opacity-90">
                            {currentChapterData.content}
                        </p>

                        {/* Page Navigation */}
                        <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
                            <button
                                onClick={() => {
                                    setCurrentChapter(Math.max(0, currentChapter - 1));
                                    setCurrentPage(Math.max(1, currentPage - 1));
                                }}
                                disabled={currentChapter === 0}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={18} />
                                <span className="text-sm">Prev</span>
                            </button>

                            <span className="text-sm text-foreground/40">
                                {currentChapter + 1} / {totalChapters}
                            </span>

                            <button
                                onClick={() => {
                                    setCurrentChapter(Math.min(totalChapters - 1, currentChapter + 1));
                                    setCurrentPage(currentPage + 1);
                                }}
                                disabled={currentChapter === totalChapters - 1}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <span className="text-sm">Next</span>
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Test Controls - Quick Actions */}
                        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-xs text-foreground/30 mb-2">🧪 Quick Test Actions</p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => {
                                        setCurrentPage(1);
                                        setCurrentChapter(0);
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors"
                                >
                                    Reset to Page 1
                                </button>
                                <button
                                    onClick={() => {
                                        const randomPage = Math.floor(Math.random() * 20) + 1;
                                        setCurrentPage(randomPage);
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
                                >
                                    Random Page
                                </button>
                                <button
                                    onClick={() => {
                                        const randomChapter = Math.floor(Math.random() * totalChapters);
                                        setCurrentChapter(randomChapter);
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                                >
                                    Random Chapter
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Test Mode Indicator */}
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                            <p className="text-xs text-foreground/30">
                                Testing: <span className="text-[var(--primary)] font-medium">
                                    {testMode === "bookmarks" ? "Bookmarks" :
                                        testMode === "notes" ? "Notes" :
                                            testMode === "controls" ? "Controls" : "Reading"}
                                </span>
                            </p>
                        </div>

                        <BookmarkPanel />
                        <NotesPanel />

                        {/* Test Info */}
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xs font-semibold text-foreground/40 mb-2">📋 Test Data</h4>
                            <div className="space-y-1 text-xs text-foreground/30">
                                <p>Current Page: <span className="text-foreground/60">{currentPage}</span></p>
                                <p>Font Size: <span className="text-foreground/60">{fontSize}px</span></p>
                                <p>Bookmarks: <span className="text-foreground/60">{userProgress.bookmarks.length}</span></p>
                                <p>Notes: <span className="text-foreground/60">{userProgress.notes.length}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}