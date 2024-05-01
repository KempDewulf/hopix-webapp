import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/App.vue', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js','node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'primary': 'DM Sans, sans-serif',
        },
        colors: {
            'header': '#282828',
            'hopix-yellow': '#FFBD4A',
            'hopix-gray': '#4F4F4F',
        },
        screens: {
            'sm': '640px',
            'md': '900px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [
        flowbite
    ],

}

