import { books } from "@/lib/data";
import BookCard from "@/components/books/BookCard";

export default function Bestsellers() {
    const bestsellers = books.filter(
        (book) => book.bestseller
    );

    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-4xl font-bold">
                    Best Sellers
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {bestsellers.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}