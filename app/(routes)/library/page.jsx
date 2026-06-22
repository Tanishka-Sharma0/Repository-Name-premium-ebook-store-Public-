"use client";

import { useState } from "react";

import ContinueReading from "@/components/library/ContinueReading";
import LibraryGrid from "@/components/library/LibraryGrid";

export default function LibraryPage() {
    const [search, setSearch] = useState("");

    return (
        <section className="section-padding">
            <div className="container-custom px-6">
                <h1 className="text-5xl font-black">
                    My Library
                </h1>

                {/* Search */}

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search in library..."
                    className="
                        w-full
                        mt-10
                        mb-10
                        rounded-xl
                        border
                        border-white/10
                        bg-transparent
                        p-4
                        outline-none
                    "
                />

                <div className="mt-16">
                    <ContinueReading />
                </div>

                <div className="mt-20">
                    <h2 className="mb-8 text-3xl font-bold">
                        Purchased Books
                    </h2>

                    <LibraryGrid
                        search={search}
                    />
                </div>
            </div>
        </section>
    );
}