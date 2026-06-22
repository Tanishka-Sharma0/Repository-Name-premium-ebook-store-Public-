"use client";

export default function Error({
    error,
    reset,
}) {
    return (
        <div
            className="
        min-h-screen
        flex
        items-center
        justify-center
      "
        >
            <div className="text-center">
                <h2>
                    Something went wrong
                </h2>

                <button
                    onClick={() =>
                        reset()
                    }
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}