/** @type {import('tailwindcss').Config} */
/** eslint-env node */
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";
export default {
    darkMode: "selector",
    safelist: ["dark"],
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
        fontFamily: {
            "roboto-slab": ["Roboto Slab", 'sans-serif'],
            "open-sans": ["Open Sans", "sans-serif"]
        },
        extend: {
            maxWidth: {
                '8xl': '94rem',
                '9xl': '106rem'
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        }
    },
    plugins: [animate, setupInspiraUI],
}
