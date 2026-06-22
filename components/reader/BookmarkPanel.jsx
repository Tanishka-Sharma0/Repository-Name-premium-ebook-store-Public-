"use client";

import useReaderStore from "@/store/readerStore";
import GlassCard from "@/components/effects/GlassCard"; // Add this import

export default function BookmarkPanel() {
    const bookmarks =
        useReaderStore(
            (state) => state.bookmarks
        );

    return (
        <GlassCard className="rounded-3xl p-5"> {/* Replace div with GlassCard */}
            <h3 className="font-bold">
                Bookmarks
            </h3>

            <div className="mt-4 space-y-3">
                {bookmarks.map(
                    (bookmark, index) => (
                        <p key={index}>
                            Page {bookmark}
                        </p>
                    )
                )}
            </div>
        </GlassCard>
    );
}