"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
    return (
        <motion.div
            animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
            }}
            className="
        absolute
        left-1/2
        top-0
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        blur-[120px]
        pointer-events-none
      "
            style={{
                background:
                    "radial-gradient(circle, rgba(85,107,47,.35), transparent 70%)",
            }}
        />
    );
}