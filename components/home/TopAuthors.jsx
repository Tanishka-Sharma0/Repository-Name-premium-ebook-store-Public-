import { authors } from "@/lib/data";

export default function TopAuthors() {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-5xl font-black">
                    Top Authors
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {authors.map((author) => (
                        <div
                            key={author.id}
                            className="glass rounded-3xl p-6"
                        >
                            <h3 className="font-bold">
                                {author.name}
                            </h3>

                            <p>
                                {author.books} Books
                            </p>

                            <p>
                                ⭐ {author.rating}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}