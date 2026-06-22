// components/animations/PageTransition.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 800);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.23, 1, 0.32, 1]
                    }
                }}
                exit={{
                    opacity: 0,
                    y: -30,
                    scale: 0.98,
                    transition: {
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1]
                    }
                }}
                className="min-h-screen"
            >
                {children}
            </motion.div>

            {/* Optional Loading Overlay during transition */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 pointer-events-none"
                    />
                )}
            </AnimatePresence>
        </AnimatePresence>
    );
}