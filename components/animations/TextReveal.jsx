// components/animations/TextReveal.jsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal({
    children,
    delay = 0,
    duration = 0.8,
    className = '',
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.23, 1, 0.32, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Bonus: Character by Character Reveal
export function TextRevealByChar({ text, className = "", delay = 0 }) {
    return (
        <div className={className}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: delay + index * 0.03,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}