"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Type, Maximize2, Minimize2, Sun, Moon } from "lucide-react";
import useReaderStore from "@/store/readerStore";

export default function ReaderControls() {
    const { fontSize, setFontSize, theme, setTheme, fontFamily, setFontFamily } = useReaderStore();

    const fontSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    const fontFamilies = [
        { name: "Serif", value: "serif" },
        { name: "Sans", value: "sans-serif" },
        { name: "Mono", value: "monospace" },
    ];

    const handleFontSizeChange = (size) => {
        const currentIndex = fontSizes.indexOf(size);
        setFontSize(size);
    };

    const increaseFontSize = () => {
        const currentIndex = fontSizes.indexOf(fontSize);
        if (currentIndex < fontSizes.length - 1) {
            setFontSize(fontSizes[currentIndex + 1]);
        }
    };

    const decreaseFontSize = () => {
        const currentIndex = fontSizes.indexOf(fontSize);
        if (currentIndex > 0) {
            setFontSize(fontSizes[currentIndex - 1]);
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 border border-white/10 flex flex-wrap items-center gap-4"
        >
            {/* Font Size Controls */}
            <div className="flex items-center gap-3">
                <span className="text-xs text-foreground/40 font-medium">Font</span>
                <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={decreaseFontSize}
                        disabled={fontSize <= fontSizes[0]}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <Minus size={14} className="text-foreground/60" />
                    </motion.button>

                    <span className="text-sm font-mono text-foreground/60 min-w-[32px] text-center">
                        {fontSize}
                    </span>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={increaseFontSize}
                        disabled={fontSize >= fontSizes[fontSizes.length - 1]}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <Plus size={14} className="text-foreground/60" />
                    </motion.button>
                </div>
            </div>

            {/* Font Size Presets */}
            <div className="flex items-center gap-1">
                {[12, 16, 20, 24, 28].map((size) => (
                    <motion.button
                        key={size}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFontSizeChange(size)}
                        className={`
                            text-xs px-2 py-1 rounded-md transition-all duration-200
                            ${fontSize === size
                                ? "bg-[var(--primary)]/20 text-[var(--primary)] font-medium"
                                : "text-foreground/30 hover:text-foreground/60 hover:bg-white/5"
                            }
                        `}
                    >
                        {size}
                    </motion.button>
                ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Font Family */}
            <div className="flex items-center gap-2">
                <Type size={14} className="text-foreground/30" />
                <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm text-foreground/60 cursor-pointer"
                >
                    {fontFamilies.map((font) => (
                        <option key={font.value} value={font.value}>
                            {font.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Theme Toggle */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
                {theme === "light" ? (
                    <Moon size={16} className="text-foreground/60" />
                ) : (
                    <Sun size={16} className="text-foreground/60" />
                )}
            </motion.button>

            {/* Full Screen */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen();
                    } else {
                        document.exitFullscreen();
                    }
                }}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
                {document.fullscreenElement ? (
                    <Minimize2 size={16} className="text-foreground/60" />
                ) : (
                    <Maximize2 size={16} className="text-foreground/60" />
                )}
            </motion.button>
        </motion.div>
    );
}