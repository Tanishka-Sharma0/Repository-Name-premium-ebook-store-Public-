// components/animations/FadeIn.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.8,
    direction = 'up',
    className = '',
    once = true,
}) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: once,
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.23, 1, 0.32, 1], // Premium smooth easing
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}