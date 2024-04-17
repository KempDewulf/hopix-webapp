import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/App.vue', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
    darkMode: 'class',
    theme: {
        colors: {
            'header': '#282828',
            'hopix-yellow': '#FFBD4A',
        },
        extend: {},
    },
    plugins: [
        flowbite
    ],

}

