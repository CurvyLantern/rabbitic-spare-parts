const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            flex: Array.from({ length: 12 }, (_, idx) => idx + 1).reduce(
                (acc, item) => {
                    acc[item] = item;
                    return acc;
                },
                {}
            ),
            aspectRatio: {
                portrait: "9/12",
                slidercard: "10/11",
            },
            width: Array.from({ length: 10 }, (_, index) => {
                return index + 1;
            }).reduce((config, item, index, arr) => {
                config[`${item}/${arr.length}`] = `${
                    100 * (item / arr.length)
                }%`;
                return config;
            }, {}),
            height: {
                128: 128 * 4,
                156: 156 * 4,
                200: 200 * 4,
                220: 220 * 4,
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    // DEFAULT: "hsl(var(--primary))",
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground:
                        "hsl(var(--primary-foreground) / <alpha-value>)",
                    light: "hsl(var(--primary-light) / <alpha-value>)",
                    dark: "hsl(var(--primary-dark) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground:
                        "hsl(var(--secondary-foreground) / <alpha-value>)",
                    light: "hsl(var(--secondary-light) / <alpha-value>)",
                    dark: "hsl(var(--secondary-dark) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                },
                border: "hsl(var(--border) / <alpha-value>)",
                success: "hsl(var(--success) / <alpha-value>)",
                error: "hsl(var(--error) / <alpha-value>)",
                warning: "hsl(var(--warning) / <alpha-value>)",

                destructive: {
                    DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
                    foreground:
                        "hsl(var(--destructive-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                },

                popover: {
                    DEFAULT: "hsl(var(--popover) / <alpha-value>)",
                    foreground:
                        "hsl(var(--popover-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "hsl(var(--card) / <alpha-value>)",
                    foreground: "hsl(var(--card-foreground) / <alpha-value>)",
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
                primary: ["var(--font-primary)"],
                secondary: ["var(--font-secondary)"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
