// store/filterStore.js
import { create } from 'zustand';

const useFilterStore = create((set) => ({
    category: "All",
    language: "All",
    subject: "All",
    priceRange: 5000,
    sort: "latest",
    view: "grid",

    // Actions
    setCategory: (category) => set({ category }),
    setLanguage: (language) => set({ language }),
    setSubject: (subject) => set({ subject }),
    setPriceRange: (priceRange) => set({ priceRange }),
    setSort: (sort) => set({ sort }),
    setView: (view) => set({ view }),

    resetFilters: () => set({
        category: "All",
        language: "All",
        subject: "All",
        priceRange: 5000,
        sort: "latest",
        view: "grid",
    }),

    // Utility to get active filters count
    getActiveFiltersCount: (state) => {
        let count = 0;
        if (state.category !== "All") count++;
        if (state.language !== "All") count++;
        if (state.subject !== "All") count++;
        if (state.priceRange < 5000) count++;
        return count;
    },
}));

export default useFilterStore;