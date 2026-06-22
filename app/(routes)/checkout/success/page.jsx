import Link from "next/link";

export default function SuccessPage() {
    return (
        <section className="section-padding">
            <div className="container-custom text-center">
                <h1 className="text-6xl font-black">
                    🎉
                </h1>

                <h2 className="text-4xl font-bold mt-6">
                    Purchase Successful
                </h2>

                <p className="mt-4 opacity-70">
                    Your books are now available
                    in Library.
                </p>

                <Link
                    href="/library"
                    className="
            inline-flex
            mt-8
            px-8
            py-4
            rounded-full
            bg-[var(--primary)]
            text-black
          "
                >
                    Open Library
                </Link>
            </div>
        </section>
    );
}