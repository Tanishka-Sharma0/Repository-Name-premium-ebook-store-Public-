import Link from "next/link";

export default function NotFound() {
    return (
        <section
            className="
        min-h-screen
        flex
        items-center
        justify-center
      "
        >
            <div className="text-center">
                <h1
                    className="
            text-8xl
            font-black
          "
                >
                    404
                </h1>

                <p>
                    Page not found
                </p>

                <Link
                    href="/"
                    className="
            mt-6
            inline-block
          "
                >
                    Back Home
                </Link>
            </div>
        </section>
    );
}