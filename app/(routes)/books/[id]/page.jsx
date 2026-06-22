import { notFound } from "next/navigation";
import { books } from "@/lib/data";
import BookDetails from "@/components/books/BookDetails";
import PreviewPages from "@/components/books/PreviewPages";
import Reviews from "@/components/books/Reviews";
import RelatedBooks from "@/components/books/RelatedBooks";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const book = books.find(
        (b) => b.id === Number(params.id)
    );

    if (!book) {
        return {
            title: "Book Not Found",
            description: "The requested book could not be found.",
        };
    }

    return {
        title: `${book.title} - PrepBooks`,
        description: book.description,
        openGraph: {
            title: book.title,
            description: book.description,
            images: [book.image],
        },
        twitter: {
            card: "summary_large_image",
            title: book.title,
            description: book.description,
            images: [book.image],
        },
    };
}

export default async function BookPage({ params }) {
    const id = Number(params.id);
    const book = books.find((item) => item.id === id);

    if (!book) {
        notFound();
    }

    return (
        <section className="section-padding">
            <div className="container-custom px-6">
                <BookDetails book={book} />

                {book.previewPages && book.previewPages.length > 0 && (
                    <PreviewPages pages={book.previewPages} />
                )}

                <Reviews bookId={book.id} />

                <RelatedBooks category={book.category} currentId={book.id} />
            </div>
        </section>
    );
}