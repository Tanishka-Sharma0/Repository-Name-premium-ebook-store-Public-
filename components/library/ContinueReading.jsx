"use client";

import useLibraryStore from "@/store/libraryStore";
import GlassCard from "@/components/effects/GlassCard";

export default function ContinueReading() {
    const continueReading =
        useLibraryStore(
            (state) =>
                state.continueReading
        );

    return (
        <section>
            <h2 className="text-3xl font-bold">
                Continue Reading
            </h2>

            <div
                className="
                    mt-6
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
            >
                {continueReading.map((book) => (
                    <GlassCard
                        key={book.id}
                        className="rounded-3xl p-5"
                    >
                        <h3 className="font-bold">
                            {book.title}
                        </h3>

                        <div className="mt-4">
                            <div className="h-2 bg-white/10 rounded-full">
                                <div
                                    className="
                                        h-2
                                        rounded-full
                                        bg-[var(--primary)]
                                    "
                                    style={{
                                        width: `${book.progress}%`,
                                    }}
                                />
                            </div>
                        </div>

                        <p className="mt-3 text-sm">
                            {book.progress}% Completed
                        </p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}