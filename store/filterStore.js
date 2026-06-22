import { create } from "zustand";

const useFilterStore = create((set) => ({
    category: "All",
    language: "All",
    subject: "All",

    priceRange: 5000,

    sort: "latest",

    view: "grid",

    setCategory: (category) =>
        set({ category }),

    setLanguage: (language) =>
        set({ language }),

    setSubject: (subject) =>
        set({ subject }),

    setPriceRange: (priceRange) =>
        set({ priceRange }),

    setSort: (sort) =>
        set({ sort }),

    setView: (view) =>
        set({ view }),

    resetFilters: () =>
        set({
            category: "All",
            language: "All",
            subject: "All",
            priceRange: 5000,
            sort: "latest",
            view: "grid",
        }),
}));

export default useFilterStore;