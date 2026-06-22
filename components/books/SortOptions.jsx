"use client";

import useFilterStore from "@/store/filterStore";

export default function SortOptions() {
    const {
        sort,
        setSort,

        view,
        setView,
    } = useFilterStore();

    return (
        <div className="flex gap-4">
            <select
                value={sort}
                onChange={(e) =>
                    setSort(e.target.value)
                }
                className="border rounded-xl px-4 py-3"
            >
                <option value="latest">
                    Latest
                </option>

                <option value="price-low">
                    Price Low
                </option>

                <option value="price-high">
                    Price High
                </option>

                <option value="rating">
                    Top Rated
                </option>
            </select>

            <button
                onClick={() =>
                    setView("grid")
                }
                className="border px-4 rounded-xl"
            >
                Grid
            </button>

            <button
                onClick={() =>
                    setView("list")
                }
                className="border px-4 rounded-xl"
            >
                List
            </button>
        </div>
    );
}