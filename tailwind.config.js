/** @type {import('tailwindcss').Config} */
/** eslint-env node */
export default {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx,vue}',
        './components/**/*.{ts,tsx,vue}',
        './app/**/*.{ts,tsx,vue}',
        './src/**/*.{ts,tsx,vue}',
    ],
    prefix: "",
    theme: {
        colors: {
            'primaryColor': '#50B748',
            "secondaryColor": "#654321",
            "textColor": "#FFFFFF",
            "textInputColor": "#E6E6E6",
            "textAltColor": "#000000",
            'overlayColor': '#50B748'
        },
        animation: {
            blink: 'blink 1s infinite', // Faster blink
            'loop-scroll': 'loop-scroll 5s linear infinite',
        },
        keyframes: {
            blink: {
                '0%, 50%': {opacity: '1'},
                '51%, 100%': {opacity: '0'},
            },
            'loop-scroll': {
                from: {transform: 'translateX(0)'},
                to: {transform: 'translateX(-100%)'},
            }
        },
        fontFamily: {
            "roboto-slab": ["Roboto Slab", 'sans-serif'],
            "open-sans": ["Open Sans", "sans-serif"]
        },
        extend: {
            maxWidth: {
                '8xl': '94rem',
                '9xl': '106rem'
            }
        }
    },
    plugins: [],
}
