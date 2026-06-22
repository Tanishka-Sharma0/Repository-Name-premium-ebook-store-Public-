"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = 0;
        let height = 0;
        let time = 0;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width;
                canvas.height = rect.height;
                width = canvas.width;
                height = canvas.height;
            }
        };

        // Parse CSS color to RGB
        const getColorRGB = (colorVar) => {
            const temp = document.createElement("div");
            temp.style.color = `var(${colorVar})`;
            document.body.appendChild(temp);
            const computed = getComputedStyle(temp).color;
            document.body.removeChild(temp);
            const match = computed.match(/\d+/g);
            return match ? match.map(Number) : [34, 211, 238];
        };

        const drawAurora = () => {
            if (!ctx) return;

            time += 0.002;
            ctx.clearRect(0, 0, width, height);

            // Get theme colors
            const primary = getColorRGB("--primary");
            const accent = getColorRGB("--accent");

            // Parse secondary colors for depth
            const primaryLight = primary.map(c => Math.min(255, c + 80));
            const accentLight = accent.map(c => Math.min(255, c + 80));

            // Draw multiple aurora layers
            const layers = [
                { yOffset: 0.2, speed: 0.5, amplitude: 80, width: 1.5, color: primary, opacity: 0.25 },
                { yOffset: 0.4, speed: 0.7, amplitude: 100, width: 2, color: accent, opacity: 0.2 },
                { yOffset: 0.6, speed: 0.3, amplitude: 60, width: 1, color: primaryLight, opacity: 0.15 },
                { yOffset: 0.8, speed: 0.9, amplitude: 120, width: 3, color: accentLight, opacity: 0.1 },
            ];

            layers.forEach((layer) => {
                const points = 200;
                const step = width / points;

                ctx.beginPath();

                for (let i = 0; i <= points; i++) {
                    const x = i * step;
                    const y = height * layer.yOffset +
                        Math.sin(x * 0.008 + time * layer.speed) * layer.amplitude +
                        Math.sin(x * 0.005 + time * layer.speed * 0.7 + 1.5) * layer.amplitude * 0.5 +
                        Math.sin(x * 0.012 + time * layer.speed * 1.3 + 3.2) * layer.amplitude * 0.3;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                // Create gradient stroke
                const gradient = ctx.createLinearGradient(0, 0, width, 0);
                const [r, g, b] = layer.color;
                const opacity = layer.opacity;

                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
                gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(${r + 30}, ${g + 20}, ${b + 40}, ${opacity * 0.8})`);
                gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${opacity})`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = layer.width;
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`;
                ctx.shadowBlur = 60;
                ctx.stroke();

                // Add glow beneath
                ctx.shadowBlur = 120;
                ctx.globalAlpha = 0.3;
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.2})`;
                ctx.lineWidth = layer.width * 3;
                ctx.stroke();
                ctx.globalAlpha = 1;
            });

            // Draw floating particles
            const particleCount = 80;
            for (let i = 0; i < particleCount; i++) {
                const x = (Math.sin(i * 1.7 + time * 0.2) * 0.5 + 0.5) * width;
                const y = (Math.sin(i * 2.3 + time * 0.15 + 1.2) * 0.5 + 0.5) * height;
                const size = 1 + Math.sin(i + time * 0.5) * 0.5 + 0.5;

                const color = i % 2 === 0 ? primary : accent;
                const [r, g, b] = color;
                const alpha = 0.1 + Math.sin(time * 0.3 + i) * 0.05 + 0.05;

                ctx.beginPath();
                ctx.arc(x, y, size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`;
                ctx.shadowBlur = 15;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(drawAurora);
        };

        resize();
        drawAurora();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    background: "transparent",
                }}
            />

            {/* Soft gradient overlay for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 30% 20%, rgba(34, 211, 238, 0.05), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(167, 139, 250, 0.05), transparent 50%)"
                }}
            />
        </div>
    );
}