export default function PreviewPages({
    pages,
}) {
    return (
        <section className="mt-24">
            <h2 className="text-3xl font-bold">
                Preview Pages
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {pages.map((page, index) => (
                    <img
                        key={index}
                        src={page}
                        alt="preview"
                        className="
              rounded-3xl
              border
            "
                    />
                ))}
            </div>
        </section>
    );
}