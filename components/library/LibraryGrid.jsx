"use client";

import Link from "next/link";
import useLibraryStore from "@/store/libraryStore";
import GlassCard from "@/components/effects/GlassCard"; // Add this import

export default function LibraryGrid() {
    const books = useLibraryStore(
        (state) => state.books
    );

    return (
        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
            "
        >
            {books.map((book) => (
                <GlassCard
                    key={book.id}
                    className="rounded-3xl overflow-hidden p-0"
                >
                    <img
                        src={book.image}
                        alt={book.title}
                        className="
                            h-60
                            w-full
                            object-cover
                        "
                    />

                    <div className="p-5">
                        <h3 className="font-bold">
                            {book.title}
                        </h3>

                        <div className="mt-5 flex gap-3">
                            <Link
                                href={`/reading/${book.id}`}
                                className="
                                    rounded-full
                                    bg-[var(--primary)]
                                    px-5
                                    py-2
                                    text-black
                                    hover:bg-[var(--primary-hover)]
                                    transition-colors
                                "
                            >
                                Read
                            </Link>

                            <button
                                className="
                                    rounded-full
                                    border
                                    px-5
                                    py-2
                                    hover:bg-white/10
                                    transition-colors
                                "
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}