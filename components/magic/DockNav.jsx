"use client";

import Link from "next/link";
import {
    Home,
    BookOpen,
    Library,
} from "lucide-react";

export default function DockNav() {
    return (
        <div
            className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-50
        glass
        rounded-full
        px-6
        py-3
        flex
        gap-6
      "
        >
            <Link href="/">
                <Home />
            </Link>

            <Link href="/books">
                <BookOpen />
            </Link>

            <Link href="/library">
                <Library />
            </Link>
        </div>
    );
}