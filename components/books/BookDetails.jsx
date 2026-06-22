// components/books/BookDetails.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, BookOpen } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import useCartStore from '@/store/cartStore';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';

export default function BookDetails({ book }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Visual Section */}
            <FadeIn>
                <div className="relative">
                    <div className="sticky top-8">
                        <div className="glass rounded-3xl overflow-hidden aspect-[4/3] relative group">
                            <Image
                                src={book.image}
                                alt={book.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>

                        {/* 3D Floating Book Preview */}
                        <div className="mt-8 h-80 bg-card/50 rounded-3xl overflow-hidden border border-border">
                            <Canvas camera={{ position: [0, 0, 5] }}>
                                <ambientLight intensity={0.6} />
                                <pointLight position={[10, 10, 10]} />
                                <Book3DModel image={book.image} />
                                <Environment preset="city" />
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                            </Canvas>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Right - Details */}
            <div className="space-y-8">
                <FadeIn delay={0.2}>
                    <div>
                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full mb-4">
                            {book.category}
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-3">{book.title}</h1>
                        <p className="text-2xl text-muted-foreground">by {book.author}</p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 text-3xl">
                            ★ <span className="text-primary font-semibold">{book.rating}</span>
                        </div>
                        <p className="text-muted-foreground">({book.reviews} student reviews)</p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="text-5xl font-bold text-primary">₹{book.price}</div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        {book.description}
                    </p>
                </FadeIn>

                <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(book)}
                        className="premium-btn flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg"
                    >
                        <ShoppingCart size={24} />
                        Add to Cart
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="premium-btn flex-1 border border-border hover:bg-white/5 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg"
                    >
                        <Heart size={24} />
                        Wishlist
                    </motion.button>
                </StaggerContainer>

                <FadeIn delay={0.6}>
                    <div className="pt-8 border-t border-border grid grid-cols-3 gap-6 text-center">
                        <div>
                            <BookOpen className="mx-auto mb-2 text-primary" />
                            <p className="text-sm text-muted-foreground">Preview</p>
                            <p className="font-medium">50+ Pages</p>
                        </div>
                        <div>
                            <div className="text-2xl mb-1">📖</div>
                            <p className="text-sm text-muted-foreground">Language</p>
                            <p className="font-medium">{book.language}</p>
                        </div>
                        <div>
                            <div className="text-2xl mb-1">📚</div>
                            <p className="text-sm text-muted-foreground">Subject</p>
                            <p className="font-medium">{book.subject}</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

// 3D Book Model Component
function Book3DModel({ image }) {
    return (
        <mesh>
            <boxGeometry args={[2.5, 3.5, 0.3]} />
            <meshStandardMaterial
                color="#111827"
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
}