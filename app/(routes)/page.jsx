import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Categories from "@/components/home/Categories";
import Bestsellers from "@/components/home/Bestsellers";
import CTASection from "@/components/home/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import TopAuthors from "@/components/home/TopAuthors";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
    return (
        <>
            <FadeIn>
                <Hero />
            </FadeIn>

            <FadeIn delay={0.1}>
                <Stats />
            </FadeIn>

            <FadeIn delay={0.1}>
                <FeaturedBooks />
            </FadeIn>

            <FadeIn delay={0.2}>
                <Testimonials />
            </FadeIn>

            <FadeIn delay={0.2}>
                <Categories />
            </FadeIn>

            <FadeIn delay={0.3}>
                <Bestsellers />
            </FadeIn>

            <FadeIn delay={0.3}>
                <WhyChooseUs />
            </FadeIn>

            <FadeIn delay={0.3}>
                <TopAuthors />
            </FadeIn>

            <FadeIn delay={0.4}>
                <CTASection />
            </FadeIn>
        </>
    );
}