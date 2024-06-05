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
        },
        extend: {},
    },
    plugins: [],
}