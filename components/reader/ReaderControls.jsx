"use client";

import useReaderStore from "@/store/readerStore";

export default function ReaderControls() {
    const {
        fontSize,
        setFontSize,
    } = useReaderStore();

    return (
        <div className="glass rounded-2xl p-4 flex gap-4">
            <button
                onClick={() =>
                    setFontSize(fontSize - 2)
                }
            >
                A-
            </button>

            <span>{fontSize}px</span>

            <button
                onClick={() =>
                    setFontSize(fontSize + 2)
                }
            >
                A+
            </button>
        </div>
    );
}