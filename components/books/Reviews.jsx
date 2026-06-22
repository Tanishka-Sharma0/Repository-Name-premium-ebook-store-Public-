import { reviews } from "@/lib/data";

export default function Reviews({
    bookId,
}) {
    const bookReviews =
        reviews.filter(
            (item) =>
                item.bookId === bookId
        );

    return (
        <section className="mt-24">
            <h2 className="text-3xl font-bold">
                Ratings & Reviews
            </h2>

            <div className="mt-8 space-y-5">
                {bookReviews.map((review) => (
                    <div
                        key={review.id}
                        className="
              glass
              rounded-2xl
              p-5
            "
                    >
                        <h4 className="font-semibold">
                            {review.name}
                        </h4>

                        <p className="mt-2">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}