/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],

    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./hooks/**/*.{js,jsx,ts,tsx}",
        "./store/**/*.{js,jsx,ts,tsx}",
        "./lib/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",

                card: "var(--card)",
                border: "var(--border)",
            },

            maxWidth: {
                container: "1400px",
            },

            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },

            keyframes: {
                float: {
                    "0%,100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                },

                spotlight: {
                    "0%": {
                        opacity: ".4",
                    },

                    "50%": {
                        opacity: ".9",
                    },

                    "100%": {
                        opacity: ".4",
                    },
                },

                marquee: {
                    from: {
                        transform: "translateX(0)",
                    },

                    to: {
                        transform: "translateX(-50%)",
                    },
                },

                shine: {
                    from: {
                        backgroundPosition: "200% center",
                    },

                    to: {
                        backgroundPosition: "-200% center",
                    },
                },

                blob: {
                    "0%": {
                        transform: "translate(0px,0px) scale(1)",
                    },

                    "33%": {
                        transform: "translate(30px,-50px) scale(1.1)",
                    },

                    "66%": {
                        transform: "translate(-20px,20px) scale(.9)",
                    },

                    "100%": {
                        transform: "translate(0px,0px) scale(1)",
                    },
                },
            },

            animation: {
                float: "float 6s ease-in-out infinite",

                spotlight:
                    "spotlight 8s ease-in-out infinite",

                marquee:
                    "marquee 25s linear infinite",

                shine:
                    "shine 6s linear infinite",

                blob:
                    "blob 12s ease-in-out infinite",
            },

            boxShadow: {
                glow:
                    "0 0 50px rgba(85,107,47,.35)",

                card:
                    "0 10px 40px rgba(0,0,0,.08)",

                darkcard:
                    "0 10px 40px rgba(0,0,0,.4)",
            },
        },
    },

    plugins: [require("tailwindcss-animate")],
};