import { books } from "@/lib/data";
import BookCard from "@/components/books/BookCard";

export default function FeaturedBooks() {
    const featuredBooks = books.filter(
        (book) => book.featured
    );

    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="text-4xl font-bold">
                    Featured Books
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {featuredBooks.map((book) => (
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