"use client";

import { books } from "@/lib/data";

import ReaderControls from "@/components/reader/ReaderControls";
import BookmarkPanel from "@/components/reader/BookmarkPanel";
import NotesPanel from "@/components/reader/NotesPanel";

import useReaderStore from "@/store/readerStore";

export default function ReadingPage({
    params,
}) {
    const book = books.find(
        (item) =>
            item.id === Number(params.id)
    );

    const fontSize =
        useReaderStore(
            (state) => state.fontSize
        );

    if (!book)
        return <div>Book not found</div>;

    return (
        <section className="section-padding">
            <div className="container-custom px-6">
                <div className="mb-10">
                    <h1 className="text-4xl font-black">
                        {book.title}
                    </h1>
                </div>

                <ReaderControls />

                <div className="grid gap-8 lg:grid-cols-[1fr_320px] mt-10">
                    <article
                        style={{
                            fontSize:
                                `${fontSize}px`,
                        }}
                        className="
              glass
              rounded-3xl
              p-10
              leading-loose
            "
                    >
                        <h2>
                            Chapter 1
                        </h2>

                        <p>
                            This is a placeholder
                            reading content.
                        </p>

                        <p>
                            Replace with actual
                            ebook content.
                        </p>
                    </article>

                    <div className="space-y-6">
                        <BookmarkPanel />

                        <NotesPanel />
                    </div>
                </div>
            </div>
        </section>
    );
}