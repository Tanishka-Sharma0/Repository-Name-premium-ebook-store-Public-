import { create } from "zustand";
import { userProgress } from "@/lib/data";

const useReaderStore = create((set) => ({
    fontSize: 18,
    currentPage: 1,

    // Initialize with data from lib/data.js
    bookmarks: userProgress.bookmarks || [5, 12, 18, 25, 37, 54],

    notes: userProgress.notes || [
        {
            id: 1,
            content: "Important - Fundamental Rights are crucial for UPSC",
            timestamp: "2 days ago"
        },
        {
            id: 2,
            content: "Remember Article 32 - Right to Constitutional Remedies",
            timestamp: "1 day ago"
        },
        {
            id: 3,
            content: "Compare with US Constitution for better understanding",
            timestamp: "3 hours ago"
        }
    ],

    setFontSize: (size) =>
        set({ fontSize: size }),

    setCurrentPage: (page) =>
        set({ currentPage: page }),

    addBookmark: (page) =>
        set((state) => ({
            bookmarks: state.bookmarks.includes(page)
                ? state.bookmarks
                : [...state.bookmarks, page],
        })),

    removeBookmark: (page) =>
        set((state) => ({
            bookmarks: state.bookmarks.filter((p) => p !== page),
        })),

    addNote: (note) =>
        set((state) => ({
            notes: [
                ...state.notes,
                {
                    id: Date.now(),
                    content: note,
                    timestamp: new Date().toLocaleString()
                },
            ],
        })),

    removeNote: (id) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
        })),

    editNote: (id, content) =>
        set((state) => ({
            notes: state.notes.map((note) =>
                note.id === id ? { ...note, content, timestamp: new Date().toLocaleString() } : note
            ),
        })),
}));

export default useReaderStore;
