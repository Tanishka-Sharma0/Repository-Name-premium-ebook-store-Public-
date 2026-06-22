"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import HeroScene from "@/components/three/HeroScene";
import SearchBar from "@/components/shared/SearchBar";

import TextReveal from "@/components/animations/TextReveal";

import Spotlight from "@/components/magic/Spotlight";
import AnimatedGrid from "@/components/magic/AnimatedGrid";
import AuroraBackground from "@/components/magic/AuroraBackground";
import ShimmerButton from "@/components/magic/ShimmerButton";

export default function Hero() {
    return (
        <section
            className="
                relative
                overflow-hidden
                py-16
                md:py-24
                lg:py-32
                min-h-screen
                flex
                items-center
            "
        >
            {/* Background Effects */}
            <Spotlight />
            <AnimatedGrid />
            <AuroraBackground />

            {/* Gradient Overlay for depth and readability */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-transparent
                    to-background
                    pointer-events-none
                    z-5
                "
            />

            <div className="container-custom relative z-10">
                <div
                    className="
                        grid
                        items-center
                        gap-16
                        lg:grid-cols-2
                    "
                >
                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-[var(--primary)]
                                px-4
                                py-2
                                text-sm
                                backdrop-blur-sm
                            "
                        >
                            🚀 India's Premium Exam Preparation E-Book Platform
                        </motion.div>

                        <TextReveal>
                            <h1
                                className="
                                    mt-8
                                    text-4xl
                                    sm:text-5xl
                                    lg:text-7xl
                                    xl:text-8xl
                                    font-black
                                    leading-tight
                                "
                            >
                                Crack Your
                                <span
                                    className="
                                        block
                                        text-gradient
                                    "
                                >
                                    Dream Exam
                                </span>

                                <span
                                    className="
                                        block
                                        text-foreground
                                    "
                                >
                                    With Premium E-Books
                                </span>
                            </h1>
                        </TextReveal>

                        <p
                            className="
                                mt-6
                                max-w-xl
                                text-lg
                                md:text-xl
                                opacity-75
                            "
                        >
                            Access premium study material for
                            UPSC, SSC, MPPSC, Banking, Railway,
                            JEE, NEET, CAT and more.
                            Learn smarter with beautifully designed
                            digital books.
                        </p>

                        <div className="mt-8 max-w-xl">
                            <SearchBar />
                        </div>

                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            <Link href="/books">
                                <ShimmerButton>
                                    Start Reading
                                </ShimmerButton>
                            </Link>

                            <Link
                                href="/library"
                                className="
                                    rounded-full
                                    border
                                    px-8
                                    py-4
                                    font-medium
                                    transition-all
                                    duration-300
                                    hover:bg-white/10
                                "
                            >
                                Explore Library
                            </Link>
                        </div>

                        {/* Stats */}
                        <div
                            className="
                                mt-14
                                grid
                                grid-cols-3
                                gap-8
                                max-w-xl
                            "
                        >
                            <div>
                                <h3
                                    className="
                                        text-3xl
                                        md:text-4xl
                                        font-black
                                    "
                                >
                                    30+
                                </h3>

                                <p className="opacity-60">
                                    Premium Books
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-3xl
                                        md:text-4xl
                                        font-black
                                    "
                                >
                                    5K+
                                </h3>

                                <p className="opacity-60">
                                    Active Readers
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="
                                        text-3xl
                                        md:text-4xl
                                        font-black
                                    "
                                >
                                    4.9★
                                </h3>

                                <p className="opacity-60">
                                    User Rating
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side ThreeJS */}
                    <div
                        className="
                            h-[350px]
                            md:h-[500px]
                            lg:h-[650px]
                            w-full
                        "
                    >
                        <HeroScene />
                    </div>
                </div>
            </div>
        </section>
    );
}