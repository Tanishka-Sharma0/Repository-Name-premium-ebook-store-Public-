// app/books/[id]/page.jsx
import { notFound } from 'next/navigation';
import { books } from '@/lib/data';
import BookDetails from '@/components/books/BookDetails';
import PreviewPages from '@/components/books/PreviewPages';
import Reviews from '@/components/books/Reviews';
import RelatedBooks from '@/components/books/RelatedBooks';
import FadeIn from '@/components/animations/FadeIn';

export async function generateMetadata({ params }) {
    const book = books.find((b) => b.id === Number(params.id));

    if (!book) {
        return { title: "Book Not Found" };
    }

    return {
        title: `${book.title} - E-Book Store`,
        description: book.description,
        openGraph: {
            images: [{ url: book.image }],
        },
    };
}

export default function BookPage({ params }) {
    const id = Number(params.id);
    const book = books.find((item) => item.id === id);

    if (!book) {
        notFound();
    }

    // Sample preview pages (you can expand this)
    const previewPages = [
        book.image,
        "/images/books/preview1.jpg",
        "/images/books/preview2.jpg",
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom px-6">
                <FadeIn>
                    <BookDetails book={book} />
                </FadeIn>

                <FadeIn delay={0.3}>
                    <PreviewPages pages={previewPages} />
                </FadeIn>

                <FadeIn delay={0.5}>
                    <Reviews bookId={book.id} />
                </FadeIn>

                <FadeIn delay={0.7}>
                    <RelatedBooks category={book.category} currentId={book.id} />
                </FadeIn>
            </div>
        </div>
    );
}