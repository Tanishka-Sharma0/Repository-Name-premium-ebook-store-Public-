"use client";

import { useState } from "react";
import { books } from "@/lib/data";

export default function useInfiniteBooks() {
    const [visible, setVisible] = useState(8);

    const loadMore = () => {
        setVisible((prev) => prev + 8);
    };

    return {
        books: books.slice(0, visible),
        hasMore: visible < books.length,
        loadMore,
    };
}