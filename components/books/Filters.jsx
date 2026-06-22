// components/books/Filters.jsx
'use client';

import useFilterStore from '@/store/filterStore';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Filters() {
    const {
        category, language, subject, priceRange, sort,
        setCategory, setLanguage, setSubject, setPriceRange, setSort, resetFilters
    } = useFilterStore();

    const categories = ["All", "UPSC", "SSC", "JEE", "NEET", "Banking", "CAT"];
    const languages = ["All", "English", "Hindi"];
    const subjects = ["All", "Polity", "History", "Physics", "Chemistry", "Maths", "Biology"];

    return (
        <div className="glass rounded-3xl p-6 sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                    <SlidersHorizontal size={20} /> Filters
                </h3>
                <button
                    onClick={resetFilters}
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                    <X size={16} /> Reset
                </button>
            </div>

            {/* Category */}
            <div className="mb-6">
                <label className="text-sm text-muted-foreground block mb-3">Exam Category</label>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCategory(cat)}
                            className={`px-5 py-2 rounded-2xl text-sm transition-all ${category === cat
                                ? 'bg-primary text-black font-medium'
                                : 'bg-secondary hover:bg-secondary/80'}`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <label className="text-sm text-muted-foreground block mb-3">
                    Max Price: <span className="font-mono text-primary">₹{priceRange}</span>
                </label>
                <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-primary"
                />
            </div>

            {/* Language & Subject */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="text-sm text-muted-foreground block mb-3">Language</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    >
                        {languages.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                </div>

                <div>
                    <label className="text-sm text-muted-foreground block mb-3">Subject</label>
                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    >
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            {/* Sort */}
            <div className="mt-6">
                <label className="text-sm text-muted-foreground block mb-3">Sort By</label>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full bg-secondary border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
                >
                    <option value="latest">Latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                </select>
            </div>
        </div>
    );
}