/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	prefix: 'tw-',
	darkMode: ['class', '[class="dark"]'],
    theme: {},
    variants: {},
    plugins: [require("@tailwindcss/forms")]
};
