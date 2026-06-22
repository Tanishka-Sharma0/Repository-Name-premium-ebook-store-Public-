import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="
        border-t
        mt-20
      "
        >
            <div
                className="
          container-custom
          py-10
        "
            >
                <div
                    className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-6
          "
                >
                    <div>
                        <h3 className="font-black">
                            E-Book Store
                        </h3>

                        <p className="mt-2 text-sm opacity-70">
                            Learn Smarter.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="/">
                            Home
                        </Link>

                        <Link href="/books">
                            Books
                        </Link>

                        <Link href="/library">
                            Library
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}