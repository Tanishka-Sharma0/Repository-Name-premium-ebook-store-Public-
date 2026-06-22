"use client";

import FloatingBook from "./FloatingBook";

export default function FloatingBooks() {
    return (
        <>
            <FloatingBook
                position={[-3, 1, 0]}
                color="#556b2f"
            />

            <FloatingBook
                position={[0, 0, 0]}
                color="#002366"
            />

            <FloatingBook
                position={[3, 1, -1]}
                color="#ffa07a"
            />
        </>
    );
}