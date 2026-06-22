import { create } from "zustand";

const useLibraryStore = create((set) => ({
    books: [],

    continueReading: [],

    addBook: (book) =>
        set((state) => ({
            books: [...state.books, book],
        })),

    addContinueReading: (book) =>
        set((state) => ({
            continueReading: [...state.continueReading, book],
        })),

    updateProgress: (id, progress) =>
        set((state) => ({
            continueReading:
                state.continueReading.map((book) =>
                    book.id === id
                        ? {
                            ...book,
                            progress,
                        }
                        : book
                ),
        })),
}));

export default useLibraryStore;