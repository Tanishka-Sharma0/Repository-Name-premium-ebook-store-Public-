import BookCardSkeleton from "@/components/loaders/BookCardSkeleton";

export default function Loading() {
    return (
        <div
            className="
                container-custom
                py-20
                px-6
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
            "
        >
            {Array.from({ length: 8 }).map((_, i) => (
                <BookCardSkeleton key={i} />
            ))}
        </div>
    );
}