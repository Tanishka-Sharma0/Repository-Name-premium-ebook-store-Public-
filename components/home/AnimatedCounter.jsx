// components/home/AnimatedCounter.jsx
'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import FadeIn from '@/components/animations/FadeIn';

export default function AnimatedCounter({ end, suffix = "", label, icon }) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <FadeIn>
            <div ref={ref} className="text-center group">
                <div className="text-6xl mb-4 transition-transform group-hover:scale-110 duration-500">
                    {icon}
                </div>

                <div className="text-5xl font-bold text-primary mb-2 font-mono">
                    {inView && (
                        <CountUp
                            end={end}
                            duration={2.5}
                            separator=","
                            suffix={suffix}
                        />
                    )}
                </div>

                <p className="text-muted-foreground text-lg">{label}</p>
            </div>
        </FadeIn>
    );
}