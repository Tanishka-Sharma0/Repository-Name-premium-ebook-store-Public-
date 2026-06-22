"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedGrid() {
    const canvasRef = useRef(null);
    const [isDark, setIsDark] = useState(false);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Detect theme
        const checkTheme = () => {
            const isDarkMode = document.documentElement.classList.contains("dark") ||
                (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
            setIsDark(isDarkMode);
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(() => checkTheme());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        // Mouse tracking
        const handleMouseMove = (e) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect) {
                mouseRef.current = {
                    x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
                    y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
                };
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Setup canvas
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = 0;
        let height = 0;
        let time = 0;
        let dots = [];

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width;
                canvas.height = rect.height;
                width = canvas.width;
                height = canvas.height;
                initDots();
            }
        };

        const initDots = () => {
            const spacing = 50;
            const cols = Math.floor(width / spacing);
            const rows = Math.floor(height / spacing);
            dots = [];
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    dots.push({
                        x: j * spacing + (width - cols * spacing) / 2,
                        y: i * spacing + (height - rows * spacing) / 2,
                        baseX: j * spacing + (width - cols * spacing) / 2,
                        baseY: i * spacing + (height - rows * spacing) / 2,
                        offset: Math.random() * Math.PI * 2,
                    });
                }
            }
        };

        const draw = () => {
            if (!ctx) return;

            time += 0.006;

            ctx.clearRect(0, 0, width, height);

            // Get theme colors
            const computedStyle = getComputedStyle(document.documentElement);
            const primaryColor = computedStyle.getPropertyValue("--primary").trim() || "#22d3ee";
            const accentColor = computedStyle.getPropertyValue("--accent").trim() || "#a78bfa";
            const isDarkMode = document.documentElement.classList.contains("dark") ||
                window.matchMedia?.("(prefers-color-scheme: dark)").matches;

            // Parse color to rgb
            const parseColor = (color) => {
                const temp = document.createElement("div");
                temp.style.color = color;
                document.body.appendChild(temp);
                const computed = getComputedStyle(temp).color;
                document.body.removeChild(temp);
                const match = computed.match(/\d+/g);
                return match ? match.map(Number) : [34, 211, 238];
            };

            const primary = parseColor(primaryColor);
            const accent = parseColor(accentColor);

            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;

            // Draw lines between nearby dots
            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];

                // Animate dot positions with wave
                const waveX = Math.sin(time * 0.5 + dot.offset) * 8;
                const waveY = Math.cos(time * 0.7 + dot.offset * 1.3) * 8;

                // Mouse interaction
                const dx = mouseX * width * 0.15;
                const dy = mouseY * height * 0.15;
                const distFromCenter = Math.sqrt(
                    Math.pow((dot.x - width / 2) / width, 2) +
                    Math.pow((dot.y - height / 2) / height, 2)
                );
                const mouseInfluence = Math.max(0, 1 - distFromCenter * 1.5);

                const finalX = dot.baseX + waveX + dx * mouseInfluence * 0.3;
                const finalY = dot.baseY + waveY + dy * mouseInfluence * 0.3;

                // Update dot position for connections
                dot.x = finalX;
                dot.y = finalY;

                // Draw connections
                const connectionDistance = 120;
                for (let j = i + 1; j < dots.length; j++) {
                    const other = dots[j];
                    const dx = dot.x - other.x;
                    const dy = dot.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = Math.pow(1 - dist / connectionDistance, 1.5) * 0.5;
                        const gradient = ctx.createLinearGradient(dot.x, dot.y, other.x, other.y);

                        // Blend between primary and accent
                        const mix = Math.sin(time * 0.3 + dist * 0.01) * 0.5 + 0.5;
                        const r = primary[0] * (1 - mix) + accent[0] * mix;
                        const g = primary[1] * (1 - mix) + accent[1] * mix;
                        const b = primary[2] * (1 - mix) + accent[2] * mix;

                        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
                        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);

                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    }
                }
            }

            // Draw dots
            dots.forEach((dot) => {
                const distFromCenter = Math.sqrt(
                    Math.pow((dot.x - width / 2) / width, 2) +
                    Math.pow((dot.y - height / 2) / height, 2)
                );
                const size = 2.5 + (1 - distFromCenter) * 2;

                const gradient = ctx.createRadialGradient(
                    dot.x - size * 0.3, dot.y - size * 0.3, 0,
                    dot.x, dot.y, size * 1.5
                );

                const primaryColorRgb = parseColor(primaryColor);
                const accentColorRgb = parseColor(accentColor);
                const mix = Math.sin(time * 0.5 + dot.offset) * 0.5 + 0.5;
                const r = primaryColorRgb[0] * (1 - mix) + accentColorRgb[0] * mix;
                const g = primaryColorRgb[1] * (1 - mix) + accentColorRgb[1] * mix;
                const b = primaryColorRgb[2] * (1 - mix) + accentColorRgb[2] * mix;

                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.9)`);
                gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.4)`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Glow dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    background: "transparent",
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 30% 50%, rgba(34, 211, 238, 0.03), transparent 60%), radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.03), transparent 60%)"
                }}
            />
        </div>
    );
}