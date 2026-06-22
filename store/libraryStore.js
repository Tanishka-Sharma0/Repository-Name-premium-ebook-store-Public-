// store/libraryStore.js
import { create } from 'zustand';

const useLibraryStore = create((set, get) => ({
    books: [],           // Purchased books
    continueReading: [], // Currently reading books with progress

    // Add a book to library (after purchase)
    addBook: (book) => set((state) => ({
        books: [...state.books, { ...book, purchasedAt: new Date().toISOString() }],
    })),

    // Add to Continue Reading
    addContinueReading: (book) => set((state) => {
        const exists = state.continueReading.find(b => b.id === book.id);
        if (exists) return state;

        return {
            continueReading: [
                ...state.continueReading,
                { ...book, progress: 0, lastRead: new Date().toISOString() }
            ]
        };
    }),

    // Update reading progress
    updateProgress: (id, progress) => set((state) => ({
        continueReading: state.continueReading.map((book) =>
            book.id === id
                ? { ...book, progress: Math.min(100, Math.max(0, progress)), lastRead: new Date().toISOString() }
                : book
        )
    })),

    // Remove from Continue Reading
    removeFromContinueReading: (id) => set((state) => ({
        continueReading: state.continueReading.filter((book) => book.id !== id)
    })),

    // Get currently reading books (sorted by last read)
    getCurrentlyReading: () => {
        const state = get();
        return [...state.continueReading].sort((a, b) =>
            new Date(b.lastRead) - new Date(a.lastRead)
        );
    },

    // Clear entire library (for testing)
    clearLibrary: () => set({ books: [], continueReading: [] }),
}));

export default useLibraryStore;