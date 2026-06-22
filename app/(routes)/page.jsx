// app/page.jsx
'use client';

import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import Categories from '@/components/home/Categories';
import BestSellers from '@/components/home/Bestsellers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import PageTransition from '@/components/animations/PageTransition';

export default function Home() {
    return (
        <PageTransition>
            <main className="bg-background overflow-hidden">
                {/* HERO SECTION - Most Important */}
                <Hero />

                {/* STATS BAR */}
                <Stats />

                {/* FEATURED BOOKS */}
                <FeaturedBooks />

                {/* CATEGORIES */}
                <Categories />

                {/* BEST SELLERS */}
                <BestSellers />

                {/* WHY CHOOSE US */}
                <WhyChooseUs />

                {/* STUDENT TESTIMONIALS */}
                <Testimonials />

                {/* FINAL CTA */}
                <CTASection />

                {/* Footer Gap */}
                <div className="h-20" />
            </main>
        </PageTransition>
    );
}