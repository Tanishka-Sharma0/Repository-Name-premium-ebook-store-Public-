import { create } from "zustand";

const useReaderStore = create((set) => ({
    fontSize: 18,

    bookmarks: [],

    notes: [],

    setFontSize: (size) =>
        set({ fontSize: size }),

    addBookmark: (page) =>
        set((state) => ({
            bookmarks: [
                ...state.bookmarks,
                page,
            ],
        })),

    addNote: (note) =>
        set((state) => ({
            notes: [
                ...state.notes,
                note,
            ],
        })),
}));

export default useReaderStore;