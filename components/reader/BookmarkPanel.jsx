"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, BookmarkCheck, X } from "lucide-react";
import useReaderStore from "@/store/readerStore";
import GlassCard from "@/components/effects/GlassCard";

export default function BookmarkPanel() {
    const { bookmarks, addBookmark, removeBookmark, currentPage } = useReaderStore();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddBookmark = () => {
        if (currentPage) {
            addBookmark(currentPage);
            setIsAdding(true);
            setTimeout(() => setIsAdding(false), 1000);
        }
    };

    const handleRemoveBookmark = (page) => {
        removeBookmark(page);
    };

    return (
        <GlassCard className="rounded-3xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Bookmark size={18} className="text-[var(--primary)]" />
                    <h3 className="font-bold text-lg">Bookmarks</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-foreground/40">
                        {bookmarks.length}
                    </span>
                </div>

                {currentPage && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddBookmark}
                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors duration-300 flex items-center gap-1"
                    >
                        {isAdding ? (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                ✓ Added
                            </motion.span>
                        ) : (
                            <>
                                <BookmarkCheck size={12} />
                                Add Current
                            </>
                        )}
                    </motion.button>
                )}
            </div>

            <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                    {bookmarks.length > 0 ? (
                        bookmarks.map((page, index) => (
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10, height: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-xs font-bold text-[var(--primary)]">
                                        {page}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Page {page}</p>
                                        <p className="text-[10px] text-foreground/30">Bookmarked</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRemoveBookmark(page)}
                                    className="p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-500/10 transition-all duration-200"
                                >
                                    <X size={14} className="text-foreground/30 hover:text-red-500 transition-colors" />
                                </button>
                            </motion.div>
                        ))
                    ) : (
                        <div className="p-6 text-center">
                            <Bookmark size={32} className="mx-auto text-foreground/20 mb-2" />
                            <p className="text-sm text-foreground/40">No bookmarks yet</p>
                            <p className="text-xs text-foreground/30">Add bookmarks to track important pages</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </GlassCard>
    );
}