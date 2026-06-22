// components/effects/CursorGlow.jsx
'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[role="button"]')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Main Glow */}
            <div
                className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-75"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-8 h-8 rounded-full border border-primary/40 ${isPointer ? 'scale-150' : 'scale-100'}`}
                    style={{
                        boxShadow: '0 0 40px 15px rgba(34, 211, 238, 0.25)',
                    }}
                />
            </div>

            {/* Secondary Soft Glow */}
            <div
                className="fixed pointer-events-none z-40 mix-blend-screen opacity-40"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            </div>
        </>
    );
}