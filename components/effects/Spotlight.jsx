// components/effects/Spotlight.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function Spotlight() {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!spotlightRef.current) return;

            const { clientX, clientY } = e;
            const rect = spotlightRef.current.getBoundingClientRect();

            const x = clientX - rect.left;
            const y = clientY - rect.top;

            spotlightRef.current.style.background = `
        radial-gradient(
          circle 350px at ${x}px ${y}px,
          rgba(34, 211, 238, 0.15),
          transparent 70%
        )
      `;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={spotlightRef}
            className="fixed inset-0 pointer-events-none z-10 transition-all duration-200"
            style={{
                background: 'radial-gradient(circle 350px at 50% 50%, rgba(34, 211, 238, 0.08), transparent 70%)',
            }}
        />
    );
}