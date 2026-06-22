"use client";

export default function InfiniteScroll({
    hasMore,
    loadMore,
}) {
    if (!hasMore) return null;

    return (
        <div className="flex justify-center mt-12">
            <button
                onClick={loadMore}
                className="
          rounded-full
          bg-[var(--primary)]
          px-8
          py-4
          font-semibold
          text-black
        "
            >
                Load More Books
            </button>
        </div>
    );
}