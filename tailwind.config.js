/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#FFFAE6",
            secondary: "#FF9F66",
            tertiary: "#FF5F00",
            quaternary: "#002379",
            white: "#ffffff",
            black: "#000000",
            gray: "#cdc9c9",
            successText: "#166025",
            successBg: "#7edc8c",
            errorText: "#721c24",
            errorBg: "#f8d7da",
            warningText: "#664d03",
            warningBg: "#fff3cd",
            infoText: "#0c5460",
            infoBg: "#d1ecf1",
        },
        extend: {
            animation: {
                slideDown: "slideDown 0.5s ease-in-out",
                slideUp: "slideUp 0.5s ease-in-out"
            },
            keyframes: {
                slideDown: {
                    "0%": { opacity: 0, marginTop: "-100px" },
                    "100%": { opacity: 1, marginTop: "0" }
                },
                slideUp: {
                    "0%": { opacity: 1, marginTop: "0" },
                    "100%": { opacity: 0, marginTop: "-100px" }
                }
            }
        }
    },
    plugins: [],
}