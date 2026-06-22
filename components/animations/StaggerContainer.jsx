// components/animations/StaggerContainer.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StaggerContainer({
    children,
    staggerDelay = 0.1,
    delay = 0,
    className = '',
    once = true,
}) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: once,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}