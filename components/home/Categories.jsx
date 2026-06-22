// components/home/Categories.jsx
'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { useRouter } from 'next/navigation';
import useFilterStore from '@/store/filterStore';
import { categories } from "@/lib/data";


export default function Categories() {
    const router = useRouter();
    const setCategory = useFilterStore((state) => state.setCategory);

    const handleCategoryClick = (category) => {
        setCategory(category);
        router.push('/books');
    };

    return (
        <section className="py-20">
            <div className="container-custom px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="section-title mb-4">Popular Categories</h2>
                        <p className="text-muted-foreground">Choose your exam preparation path</p>
                    </div>
                </FadeIn>

                <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08, y: -8 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCategoryClick(cat.name)}
                            className="glass rounded-3xl p-8 text-center cursor-pointer group transition-all hover:border-primary/40"
                        >
                            <div className={`text-5xl mb-6 transition-transform group-hover:scale-125 duration-500`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-1">{cat.name}</h3>
                            <p className="text-sm text-muted-foreground">Exam Prep</p>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}