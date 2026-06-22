import { categories } from "@/lib/data";

export default function Categories() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-4xl font-bold">
                    Popular Categories
                </h2>

                <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="
                glass
                rounded-3xl
                p-8
                text-center
                hover:scale-105
                transition-all
              "
                        >
                            <h3 className="font-semibold">
                                {category}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}