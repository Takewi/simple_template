const colors = require("tailwindcss/colors");
module.exports = {
    theme: {
        colors: { ...colors },
        extend: {},
    },
    plugins: [],
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
