"use client";

import useCartStore from "@/store/cartStore";

export default function BookDetails({
    book,
}) {
    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    return (
        <div
            className="
    grid
    gap-10
    lg:grid-cols-2
    items-start
  "
        >
            <div>
                <img
                    src={book.image}
                    alt={book.title}
                    className="
    w-full
    max-w-md
    mx-auto
    rounded-3xl
  "
                />
            </div>

            <div>
                <p className="text-sm opacity-60">
                    {book.category}
                </p>

                <h1
                    className="
    text-3xl
    sm:text-4xl
    lg:text-5xl
    font-black
  "
                >
                    {book.title}
                </h1>

                <p className="mt-3 opacity-70">
                    By {book.author}
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <span className="text-3xl font-bold">
                        ₹{book.price}
                    </span>

                    <span className="opacity-50 line-through">
                        ₹
                        {Math.round(
                            book.price +
                            (book.price *
                                book.discount) /
                            100
                        )}
                    </span>
                </div>

                <p className="mt-8 leading-relaxed opacity-80">
                    {book.description}
                </p>

                <button
                    onClick={() => addToCart(book)}
                    className="
            mt-10
            rounded-full
            bg-[var(--primary)]
            px-8
            py-4
            text-black
            font-bold
          "
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}