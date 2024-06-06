module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient": "linear-gradient(to right, #165DAB, #22A4BC)",
            },
        },
    },
    plugins: [],
};
