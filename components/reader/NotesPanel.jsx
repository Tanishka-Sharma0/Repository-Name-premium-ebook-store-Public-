"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyNote, Plus, X, Edit, Trash2 } from "lucide-react";
import useReaderStore from "@/store/readerStore";
import GlassCard from "@/components/effects/GlassCard";

export default function NotesPanel() {
    const [note, setNote] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const textareaRef = useRef(null);

    const { notes, addNote, removeNote, editNote } = useReaderStore();

    useEffect(() => {
        if (isExpanded && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isExpanded]);

    const handleAddNote = () => {
        if (note.trim()) {
            if (editingId !== null) {
                editNote(editingId, note);
                setEditingId(null);
            } else {
                addNote(note);
            }
            setNote("");
            setIsExpanded(false);
        }
    };

    const handleEditNote = (id, content) => {
        setEditingId(id);
        setNote(content);
        setIsExpanded(true);
    };

    const handleCancel = () => {
        setNote("");
        setEditingId(null);
        setIsExpanded(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleAddNote();
        }
        if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <GlassCard className="rounded-3xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <StickyNote size={18} className="text-[var(--accent)]" />
                    <h3 className="font-bold text-lg">Notes</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-foreground/40">
                        {notes.length}
                    </span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors duration-300 flex items-center gap-1"
                >
                    {isExpanded ? (
                        <X size={12} />
                    ) : (
                        <Plus size={12} />
                    )}
                    {isExpanded ? 'Close' : 'Add Note'}
                </motion.button>
            </div>

            {/* Add Note Area */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4"
                    >
                        <div className="relative">
                            <textarea
                                ref={textareaRef}
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Write your note here... (Ctrl+Enter to save)"
                                rows={3}
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-white/10
                                    p-3
                                    bg-background/50
                                    text-foreground
                                    placeholder:text-foreground/30
                                    focus:outline-none
                                    focus:border-[var(--accent)]/50
                                    focus:ring-2
                                    focus:ring-[var(--accent)]/10
                                    transition-all
                                    duration-300
                                    resize-none
                                "
                            />

                            <div className="flex items-center justify-end gap-2 mt-2">
                                {editingId !== null && (
                                    <span className="text-xs text-foreground/30">Editing note</span>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCancel}
                                    className="px-4 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors duration-300 text-sm text-foreground/60"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleAddNote}
                                    disabled={!note.trim()}
                                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all duration-300"
                                >
                                    {editingId !== null ? 'Update' : 'Save'}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Notes List */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                    {notes.length > 0 ? (
                        notes.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className="group p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <p className="text-sm leading-relaxed flex-1">
                                        {item.content || item}
                                    </p>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <button
                                            onClick={() => handleEditNote(item.id || index, item.content || item)}
                                            className="p-1 rounded hover:bg-white/10 transition-colors"
                                            title="Edit"
                                        >
                                            <Edit size={12} className="text-foreground/40 hover:text-foreground/70" />
                                        </button>
                                        <button
                                            onClick={() => removeNote(item.id || index)}
                                            className="p-1 rounded hover:bg-red-500/10 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={12} className="text-foreground/40 hover:text-red-500" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="p-6 text-center">
                            <StickyNote size={32} className="mx-auto text-foreground/20 mb-2" />
                            <p className="text-sm text-foreground/40">No notes yet</p>
                            <p className="text-xs text-foreground/30">Add notes while reading</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </GlassCard>
    );
}