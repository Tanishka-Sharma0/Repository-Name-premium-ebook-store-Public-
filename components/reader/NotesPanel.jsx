"use client";

import { useState } from "react";
import useReaderStore from "@/store/readerStore";
import GlassCard from "@/components/effects/GlassCard"; // Add this import

export default function NotesPanel() {
    const [note, setNote] =
        useState("");

    const addNote =
        useReaderStore(
            (state) => state.addNote
        );

    const notes = useReaderStore(
        (state) => state.notes
    );

    return (
        <GlassCard className="rounded-3xl p-5"> {/* Replace div with GlassCard */}
            <h3 className="font-bold">
                Notes
            </h3>

            <textarea
                value={note}
                onChange={(e) =>
                    setNote(e.target.value)
                }
                className="
                    mt-4
                    w-full
                    rounded-xl
                    border
                    p-3
                    bg-transparent
                    focus:outline-none
                    focus:border-[var(--primary)]
                    transition-colors
                "
            />

            <button
                onClick={() => {
                    addNote(note);
                    setNote("");
                }}
                className="
                    mt-4
                    rounded-xl
                    border
                    px-5
                    py-2
                    hover:bg-white/10
                    transition-colors
                "
            >
                Save
            </button>

            <div className="mt-6 space-y-2">
                {notes.map((item, index) => (
                    <p key={index}>
                        {item}
                    </p>
                ))}
            </div>
        </GlassCard>
    );
}