"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
    end,
    suffix = "",
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 1500;

        const increment = end / 50;

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(
                    Math.floor(start)
                );
            }
        }, duration / 50);

        return () =>
            clearInterval(timer);
    }, [end]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}