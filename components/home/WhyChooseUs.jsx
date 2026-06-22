// components/home/WhyChooseUs.jsx
'use client';

import { BookOpen, Bookmark, Moon, Zap, Award, Users } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';

const features = [
    {
        icon: <Moon className="w-8 h-8" />,
        title: "Dark Mode Reader",
        desc: "Eye-friendly reading experience for late night study sessions"
    },
    {
        icon: <Bookmark className="w-8 h-8" />,
        title: "Smart Bookmarks",
        desc: "Never lose your progress. Resume exactly where you left"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Instant Access",
        desc: "Download or read online instantly after purchase"
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Exam Focused",
        desc: "Content curated by toppers and subject experts"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Community",
        desc: "Join discussions with fellow aspirants"
    },
    {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Preview Before Buy",
        desc: "Read sample chapters before purchasing"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-card/30">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title mb-4">Why Choose Us</h2>
                        <p className="text-muted-foreground text-lg">Built by aspirants, for aspirants</p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.05}>
                            <div className="glass p-8 rounded-3xl h-full group hover:border-primary/30 transition-all">
                                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}