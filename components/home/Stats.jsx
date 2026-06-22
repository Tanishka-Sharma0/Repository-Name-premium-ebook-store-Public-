"use client";

import {
    BookOpen,
    Users,
    Star,
    BookOpen as BookIcon,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
    {
        icon: BookOpen,
        end: 30,
        suffix: "+",
        label: "Books",
    },
    {
        icon: Users, // Add icon here
        end: 5000,
        suffix: "+",
        label: "Students",
    },
    {
        icon: Star, // Add icon here
        end: 4,
        suffix: ".9",
        label: "Rating",
    },
];

export default function Stats() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-6">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="glass rounded-3xl p-8 text-center"
                            >
                                <Icon
                                    size={40}
                                    className="mx-auto mb-4"
                                />

                                <h3 className="text-4xl font-black">
                                    <AnimatedCounter
                                        end={item.end}
                                        suffix={item.suffix}
                                    />
                                </h3>

                                <p>{item.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}