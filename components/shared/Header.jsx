"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    BookOpen,
    Sparkles,
    Home,
    Library,
    ShoppingCart,
    Search,
    User,
    Award
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Books", href: "/books", icon: BookOpen },
        { name: "Library", href: "/library", icon: Library },
        { name: "Checkout", href: "/checkout", icon: ShoppingCart },
    ];

    // Detect scroll for header effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    // Close mobile menu on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: 0.1,
                }}
                className={`
                    sticky
                    top-0
                    z-50
                    transition-all
                    duration-500
                    backdrop-blur-xl
                    ${scrolled
                        ? "bg-background/70 border-b border-white/5 shadow-2xl shadow-[var(--primary)]/5"
                        : "bg-background/40"
                    }
                `}
            >
                {/* Animated gradient border */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)",
                        opacity: scrolled ? 0.5 : 0.2,
                    }}
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 0%"],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Glow background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute -top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
                        style={{ background: "var(--primary)" }}
                    />
                    <div
                        className="absolute -top-20 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
                        style={{ background: "var(--accent)" }}
                    />
                </div>

                <div className="relative container-custom h-20 px-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/"
                            className="
                                flex
                                items-center
                                gap-2.5
                                font-black
                                text-xl
                                group
                                relative
                            "
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative"
                            >
                                <BookOpen
                                    size={28}
                                    className="text-[var(--primary)] drop-shadow-lg drop-shadow-[var(--primary)]/30"
                                />
                                {/* Sparkle behind logo */}
                                <div className="absolute -top-1 -right-1">
                                    <Sparkles size={10} className="text-[var(--accent)] animate-pulse" />
                                </div>
                            </motion.div>

                            <span className="text-foreground font-black text-xl">
                                E-Book Store
                            </span>

                            {/* Premium badge */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    px-1.5
                                    py-0.5
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[var(--primary)]
                                    to-[var(--accent)]
                                    text-white
                                    ml-1
                                    hidden
                                    sm:inline-block
                                "
                            >
                                Pro
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;

                            return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                    className="relative"
                                >
                                    <Link
                                        href={link.href}
                                        className={`
                                            relative
                                            px-4
                                            py-2
                                            rounded-full
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-medium
                                            transition-all
                                            duration-300
                                            group
                                            ${isActive
                                                ? "text-[var(--primary)]"
                                                : "text-foreground/60 hover:text-foreground"
                                            }
                                        `}
                                    >
                                        {/* Active indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="
                                                    absolute
                                                    inset-0
                                                    rounded-full
                                                    bg-[var(--primary)]/10
                                                    border
                                                    border-[var(--primary)]/20
                                                "
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        {/* Hover background */}
                                        <div className="
                                            absolute
                                            inset-0
                                            rounded-full
                                            bg-white/5
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity
                                            duration-300
                                        " />

                                        <Icon
                                            size={16}
                                            className={`
                                                relative
                                                z-10
                                                transition-colors
                                                duration-300
                                                ${isActive ? "text-[var(--primary)]" : "text-foreground/40 group-hover:text-foreground/70"}
                                            `}
                                        />

                                        <span className="relative z-10">
                                            {link.name}
                                        </span>

                                        {/* Glow on hover */}
                                        {isActive && (
                                            <div className="
                                                absolute
                                                inset-0
                                                rounded-full
                                                blur-xl
                                                bg-[var(--primary)]/5
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity
                                                duration-500
                                            " />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}

                        {/* Search toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="
                                p-2
                                rounded-full
                                hover:bg-white/5
                                transition-colors
                                duration-300
                                text-foreground/40
                                hover:text-foreground
                            "
                        >
                            <Search size={20} />
                        </motion.button>

                        {/* Theme Toggle */}
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="
                                p-2
                                rounded-full
                                hover:bg-white/5
                                transition-colors
                                duration-300
                                text-foreground/40
                            "
                        >
                            <Search size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setOpen(!open)}
                            className="
                                relative
                                w-10
                                h-10
                                rounded-full
                                bg-white/5
                                border
                                border-white/10
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                hover:bg-white/10
                                hover:border-[var(--primary)]/30
                            "
                        >
                            <AnimatePresence mode="wait">
                                {open ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={22} className="text-[var(--primary)]" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={22} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Search Bar Expanded */}
                <AnimatePresence>
                    {searchOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/5 px-4 py-4"
                        >
                            <div className="max-w-2xl mx-auto">
                                <SearchBar
                                    value=""
                                    onChange={() => { }}
                                    placeholder="Search for books, authors, or categories..."
                                    className="w-full"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="
                                fixed
                                inset-0
                                bg-black/60
                                backdrop-blur-sm
                                z-40
                                md:hidden
                            "
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="
                                fixed
                                right-0
                                top-0
                                bottom-0
                                w-[300px]
                                max-w-[80vw]
                                bg-background/95
                                backdrop-blur-xl
                                border-l
                                border-white/10
                                z-50
                                md:hidden
                                flex
                                flex-col
                                p-6
                                pt-20
                            "
                        >
                            {/* Close button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setOpen(false)}
                                className="
                                    absolute
                                    top-4
                                    right-4
                                    p-2
                                    rounded-full
                                    bg-white/5
                                    border
                                    border-white/10
                                    hover:bg-white/10
                                    transition-all
                                    duration-300
                                "
                            >
                                <X size={20} />
                            </motion.button>

                            {/* Mobile Brand */}
                            <div className="mb-6 flex items-center gap-2.5">
                                <BookOpen size={24} className="text-[var(--primary)]" />
                                <span className="text-lg font-black text-foreground">
                                    E-Book Store
                                </span>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="flex-1 flex flex-col gap-2">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    const Icon = link.icon;

                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`
                                                    flex
                                                    items-center
                                                    gap-3
                                                    px-4
                                                    py-3
                                                    rounded-xl
                                                    transition-all
                                                    duration-300
                                                    group
                                                    ${isActive
                                                        ? "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                                                        : "hover:bg-white/5 text-foreground/70 hover:text-foreground"
                                                    }
                                                `}
                                            >
                                                <Icon
                                                    size={20}
                                                    className={`
                                                        transition-colors
                                                        duration-300
                                                        ${isActive ? "text-[var(--primary)]" : "text-foreground/40 group-hover:text-foreground/70"}
                                                    `}
                                                />
                                                <span className="font-medium">{link.name}</span>

                                                {isActive && (
                                                    <motion.div
                                                        layoutId="mobileActive"
                                                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* Divider */}
                                <div className="my-4 border-t border-white/5" />

                                {/* Mobile Theme Toggle */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5"
                                >
                                    <span className="text-sm text-foreground/60">Theme</span>
                                    <ThemeToggle />
                                </motion.div>

                                {/* Premium badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="
                                        mt-auto
                                        p-4
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-[var(--primary)]/10
                                        to-[var(--accent)]/10
                                        border
                                        border-[var(--primary)]/10
                                        text-center
                                    "
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Award size={16} className="text-[var(--primary)]" />
                                        <span className="text-sm font-medium bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                                            Premium Experience
                                        </span>
                                    </div>
                                    <p className="text-xs text-foreground/40 mt-1">
                                        Discover thousands of e-books
                                    </p>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}