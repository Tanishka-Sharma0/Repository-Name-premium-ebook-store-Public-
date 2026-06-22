"use client";

import {
    categories,
    languages,
    subjects,
} from "@/lib/data";

import useFilterStore from "@/store/filterStore";

export default function Filters() {
    const {
        category,
        language,
        subject,
        priceRange,

        setCategory,
        setLanguage,
        setSubject,
        setPriceRange,
    } = useFilterStore();

    return (
        <div className="glass rounded-3xl p-6">
            <h3 className="font-bold text-xl mb-6">
                Filters
            </h3>

            <div className="space-y-8">
                <div>
                    <label>Category</label>

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full mt-2 p-3 rounded-xl bg-transparent border"
                    >
                        <option>All</option>

                        {categories.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Language</label>

                    <select
                        value={language}
                        onChange={(e) =>
                            setLanguage(e.target.value)
                        }
                        className="w-full mt-2 p-3 rounded-xl bg-transparent border"
                    >
                        <option>All</option>

                        {languages.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Subject</label>

                    <select
                        value={subject}
                        onChange={(e) =>
                            setSubject(e.target.value)
                        }
                        className="w-full mt-2 p-3 rounded-xl bg-transparent border"
                    >
                        <option>All</option>

                        {subjects.map((item) => (
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>
                        Max Price ₹{priceRange}
                    </label>

                    <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={priceRange}
                        onChange={(e) =>
                            setPriceRange(
                                Number(e.target.value)
                            )
                        }
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}