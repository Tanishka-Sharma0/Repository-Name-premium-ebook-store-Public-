export default function BookCardSkeleton() {
    return (
        <div
            className="
        animate-pulse
        rounded-3xl
        border
        p-5
      "
        >
            <div
                className="
          h-56
          bg-muted
          rounded-xl
        "
            />

            <div
                className="
          h-4
          bg-muted
          mt-4
          rounded
        "
            />

            <div
                className="
          h-4
          bg-muted
          mt-2
          rounded
        "
            />
        </div>
    );
}