"use client";

import Marquee from "react-fast-marquee";

import {
    testimonials,
} from "@/lib/data";

export default function Testimonials() {
    return (
        <section className="section-padding">
            <h2 className="text-center text-5xl font-black">
                Student Reviews
            </h2>

            <Marquee
                pauseOnHover
                speed={40}
                className="mt-12"
            >
                {testimonials.map(
                    (item) => (
                        <div
                            key={item.id}
                            className="
                glass
                rounded-3xl
                p-6
                mx-4
                w-[320px]
              "
                        >
                            <p>
                                {item.review}
                            </p>

                            <h4 className="mt-4 font-bold">
                                {item.name}
                            </h4>
                        </div>
                    )
                )}
            </Marquee>
        </section>
    );
}