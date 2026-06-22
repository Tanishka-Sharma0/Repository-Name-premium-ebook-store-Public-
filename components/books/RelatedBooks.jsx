import { books } from "@/lib/data";
import BookCard from "./BookCard";

export default function RelatedBooks({
    category,
    currentId,
}) {
    const related = books
        .filter(
            (book) =>
                book.category === category &&
                book.id !== currentId
        )
        .slice(0, 4);

    return (
        <section className="mt-24">
            <h2 className="text-3xl font-bold">
                Related Books
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {related.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                ))}
            </div>
        </section>
    );
}