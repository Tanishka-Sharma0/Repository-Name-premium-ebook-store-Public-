// components/books/SortOptions.jsx
'use client';

import useFilterStore from '@/store/filterStore';
import { ArrowUpDown } from 'lucide-react';

export default function SortOptions() {
    const { sort, setSort } = useFilterStore();

    const options = [
        { value: 'latest', label: 'Latest' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'rating', label: 'Highest Rated' },
        { value: 'popular', label: 'Most Popular' },
    ];

    return (
        <div className="flex items-center gap-3">
            <ArrowUpDown size={18} className="text-muted-foreground" />
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-secondary border border-border rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-primary cursor-pointer"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}