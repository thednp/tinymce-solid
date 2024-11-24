const plugin = require("tailwindcss/plugin");
// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-kb-theme="dark"]'],
  content: ["src/**/*.{ts,tsx}", "demo/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Hubot Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--kb-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--kb-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--kb-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--kb-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
    fontVariationSettings: {
      stretch: [75, 90, 125],
      weight: [200, 300, 400, 500, 600, 700, 800, 900],
      italic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function fontVariations({ addComponents, matchUtilities, theme }) {
      const fontVariationProps = Object.entries(theme("fontVariationSettings"))
        .map(([key, values]) => {
          /**
           * Generate the value for a CSS property based on the given key and value.
           *
           * @param {string} key - The key of the CSS property.
           * @param {string|number} value - The value of the CSS property.
           * @return {string} - The generated value for the CSS property.
           */
          const cssPropValue = (key, value) =>
            key === "stretch"
              ? `${value}%` // .font-stretch
              : key === "italic"
                ? `oblique ${value}deg` // .font-oblique
                : value; // font-weight
          return values.map(value => [
            `.font-${key}-${value}`,
            { [`font-${key.replace(/italic/g, "style")}`]: cssPropValue(key, value) },
          ]);
        })
        .flat();

      // console.log(Object.fromEntries(fontVariationProps));
      addComponents(Object.fromEntries(fontVariationProps));

      matchUtilities(
        {
          "font-weight": value => ({
            "font-weight": value,
          }),
          "font-stretch": value => ({
            "font-stretch": `${value}%`,
          }),
          "font-italic": value => ({
            "font-style": `oblique ${value}deg`,
          }),
        },
        { values: Object.fromEntries(fontVariationProps) },
      );
    }),
  ],
};
