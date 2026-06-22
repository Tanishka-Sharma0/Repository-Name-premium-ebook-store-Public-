// app/loading.jsx
'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center">
                {/* Animated Book Logo */}
                <motion.div
                    animate={{
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-7xl mb-8"
                >
                    📖
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-semibold mb-2 text-primary"
                >
                    Loading Premium Content...
                </motion.h2>

                <p className="text-muted-foreground text-sm">Preparing your reading experience</p>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-secondary rounded-full mt-10 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
}