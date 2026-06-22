import Link from "next/link";
import ShimmerButton from "@/components/magic/ShimmerButton";

export default function CTASection() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div
                    className="
                        rounded-[40px]
                        p-16
                        text-center
                        gradient-primary
                    "
                >
                    <h2 className="text-5xl font-black">
                        Start Learning Today
                    </h2>

                    <p className="mt-5 text-lg opacity-90">
                        Join thousands of students
                        preparing smarter.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 justify-center"> {/* Added flex container */}
                        <ShimmerButton>
                            Start Reading
                        </ShimmerButton>

                        <Link
                            href="/library"
                            className="
                                border
                                rounded-full
                                px-8
                                py-4
                                inline-flex
                                items-center
                                justify-center
                                hover:bg-white/10
                                transition-colors
                            "
                        >
                            Explore Library
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}