"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Books",
            href: "/books",
        },
        {
            name: "Library",
            href: "/library",
        },
        {
            name: "Checkout",
            href: "/checkout",
        },
    ];

    return (
        <header
            className="
        sticky
        top-0
        z-50
        border-b
        backdrop-blur-xl
        bg-background/80
      "
        >
            <div
                className="
          container-custom
          h-20
          px-4
          flex
          items-center
          justify-between
        "
            >
                <Link
                    href="/"
                    className="
            flex
            items-center
            gap-2
            font-black
            text-xl
          "
                >
                    <BookOpen size={24} />
                    E-Book Store
                </Link>

                {/* Desktop Navigation */}

                <nav
                    className="
            hidden
            md:flex
            items-center
            gap-6
          "
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="
                hover:text-[var(--primary)]
                transition-colors
              "
                        >
                            {link.name}
                        </Link>
                    ))}

                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}

                <button
                    onClick={() =>
                        setOpen(!open)
                    }
                    className="
            md:hidden
          "
                >
                    {open ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}

            {open && (
                <div
                    className="
            md:hidden
            border-t
            px-4
            py-4
            bg-background
          "
                >
                    <nav
                        className="
              flex
              flex-col
              gap-4
            "
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() =>
                                    setOpen(false)
                                }
                            >
                                {link.name}
                            </Link>
                        ))}

                        <ThemeToggle />
                    </nav>
                </div>
            )}
        </header>
    );
}